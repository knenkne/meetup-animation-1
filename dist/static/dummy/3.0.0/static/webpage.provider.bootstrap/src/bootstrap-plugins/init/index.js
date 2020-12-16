// @flow

import { setInitOptions, getInitOptions } from '../../configuration/init'
import {
    setCommonConfig,
    getCommonConfigValue
} from '../../configuration/config'
import xhr from '../../utils/xhr'
import { Bootstrap } from '../../bootstrap'

const HTTP_CODE_UNAUTHORIZED = 401
const HTTP_CODE_FORBIDDEN = 403

const AUTH_CODES = [HTTP_CODE_UNAUTHORIZED, HTTP_CODE_FORBIDDEN]

const getInitializedApps = (app, regions, initial) => {
    const initializedApps = []
    if (app) {
        initializedApps.push(app.name)
    }
    if (initial) {
        regions.forEach((regionId) => {
            initializedApps.push(regionId)
        })
    }

    return initializedApps
}

const init = async (ids) => {
    const initUrl = `${getCommonConfigValue('api.url')}/init`

    const request = {
        // Старое API
        id: ids[0]
        // Новое API
        // TODO: перейти, когда мидл будет готов
        // ids
    }

    const response = await xhr(initUrl, request, { requestedWith: true })

    // Обновляем свойства из api/init
    ids.forEach((id) => {
        // Утиная типизация нового api/init
        if (response.modules && response.settings) {
            setCommonConfig(response.settings)
            setInitOptions(id, response.modules[id])
        } else {
            // Работает сейчас таким образом
            setCommonConfig(response.settings)
            setInitOptions(id, { messages: response.messages }, true)
        }
    })

    return response
}

export const initAPIPlugin = (config: { apiInitDisabled: boolean, isErib: boolean, entryLoginUrl: string } = {}) => (
    bootstrap: Bootstrap
) => {
    // Выключаем вызов запроса на api/init
    if (config.apiInitDisabled || config.isErib) {
        return null
    }

    // Флаг для определения первого запроса
    let isInitial = true
    return bootstrap.hooks.router.tapPromise('initAPIPlugin', async (app) => {
        isInitial = false

        const initializedApps = getInitializedApps(
            app,
            bootstrap.regions.getNames(),
            isInitial
        )


        const isInitOptions = initializedApps.reduce((memo, value) => {
            if (memo) {
                return memo
            }

            return !getInitOptions(value).requested
        }, false)


        // Если у одного из приложенией, нет настроек, то делаем запрос
        if (isInitOptions) {
            try {
                await init(initializedApps)
                // TODO: игнорируем обновление версий, поскольку инфа о лаунчере приходит сразу
                // const response = await init(initializedApps)
                // Обновляем приложения из Launcher
                // bootstrap.apps.merge(response.apps)
            } catch (error) {
                console.error(error, 'Service api/init not available')

                if (AUTH_CODES.includes(error.status)) {
                    console.error('No available session')

                    window.location = config.entryLoginUrl || 'https://online.sberbank.ru'
                }
            }
        }
        return Promise.resolve()
    })
}
