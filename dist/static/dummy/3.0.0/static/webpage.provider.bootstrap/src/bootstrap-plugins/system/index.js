// @flow

import { Bootstrap } from '../../bootstrap'
import log from '../../bootstrap-logger'
import { getCommonConfigValue, getLauncherConfigValue } from '../../configuration/config'
import { VIRTUAL_MODULE_NAME } from '../virtual-module'

import buildId from './build-id'
import matchVersion from './match-version'
import vendorsFix from './vendors-fix'
import findModule from './find-module'

const configurationSystem = (instanceSystem) => {
    const {
        prototype: systemPrototype,
        prototype: { resolve, instantiate, getRegister }
    } = instanceSystem.constructor

    window.bootstrap.appsDependencies = {}

    // Приложение найдено, добавляем hash имени приложения
    // (это позволит разграничить скоупы вендоров,
    // использовать i18next, axios с глобальными инстансами)
    systemPrototype.resolve = function importMapResolve (dirtyId, parentUrl) {
        const currentApp = findModule(parentUrl)
        // TODO: первый блин комом (выпуск микровендоров), главный шейм Ильи, выпилить ASAP
        const id = vendorsFix(dirtyId, parentUrl)

        log.info(`System resolve: ${id}, ${parentUrl}, ${currentApp}`)

        if (id === VIRTUAL_MODULE_NAME) {
            return resolve.call(this, id, parentUrl)
        }

        // Переопределение версии lib.analytics на глобальную
        if (
            id.startsWith('lib.analytics/') &&
            (getLauncherConfigValue('analytics.version') || getCommonConfigValue('analytics.version'))
        ) {
            const modifiedId = id.replace(
                /lib\.analytics\/[^/]+\//,
                `lib.analytics/${getLauncherConfigValue('analytics.version') || getCommonConfigValue('analytics.version')}/`
            )

            return resolve.call(this, buildId(modifiedId), parentUrl)
        }

        if (currentApp) {
            if (!window.bootstrap.appsDependencies) {
                window.bootstrap.appsDependencies = {}
            }
            // и заменяем приложение на новую ссылку
            // (это позволит сквозить желаемые вендоры,
            // поделиться их глобальными инстансами с либами)
            const importMap = window.bootstrap.appsDependencies[currentApp]

            if (importMap && matchVersion(id, importMap)) {
                return resolve.call(
                    this,
                    buildId(matchVersion(id, importMap), currentApp),
                    parentUrl
                )
            }
        }

        return resolve.call(this, buildId(id, currentApp), parentUrl)
    }

    // Добавление префикса стат.ресурсов к модулю
    systemPrototype.instantiate = function prefixedInstantiate (url, parentUrl) {
        return instantiate.call(
            this,
            url.replace(
                window.location.origin,
                getCommonConfigValue('res.url')
            ),
            parentUrl
        )
    }

    // Измененный named-exports
    systemPrototype.getRegister = function modifyGetRegister () {
        const register = getRegister.call(this)

        // otherwise it was provided by a custom instantiator
        // -> extend the registration with named exports support
        const registerDeclare = register[1]

        register[1] = function ownRegister (_export, _context) {
            // hook the _export function to note the default export
            let defaultExport
            const declaration = registerDeclare.call(
                this,
                (name, value) => {
                    if (name === 'default') {
                        defaultExport = value
                    }
                    _export(name, value)
                },
                _context
            )

            // hook the execute function
            const { execute } = declaration

            if (execute) {
                declaration.execute = function newExecute () {
                    execute.call(this)
                    // do a bulk export of the default export object
                    // to export all its names as named exports
                    if (typeof defaultExport === 'object') {
                        _export(defaultExport)
                    }
                }
            }
            return declaration
        }
        return register
    }
}

export const systemPlugin = ({ system }: Bootstrap) => {
    configurationSystem(system)
}
