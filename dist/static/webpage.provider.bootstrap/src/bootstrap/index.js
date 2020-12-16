// @flow

/* eslint-disable no-console, comment: console используется для ошибок */

import 'systemjs/dist/s'
import 'systemjs/dist/extras/amd'
import 'systemjs/dist/extras/named-register'
import { createBrowserHistory } from 'history'

import Apps from './apps'
import type { TApp, TCurrentShapeApp, TAppData } from './apps'
import Region from './regions'

declare var System: {
    import(string): Promise<any>
}

const systemJSImport = async (requestUrl: string) => {
    const { default: component, mount, unmount } = await System.import(
        requestUrl
    )
    return { component, mount, unmount }
}

const getPathToModule = (name: string, version: string = '') =>
    `${name}/${version}/index.js`

type TAsyncParallelHook = {
    promise(): Promise<Array<any>>,
    tapPromise(name: string, callback: Function): void
}
function AsyncParallelHookCreator (): TAsyncParallelHook {
    const callbacks = []
    return {
        promise: (...args) =>
            Promise.all(callbacks.map((callback) => callback(...args))),
        tapPromise: (name, callback) => {
            callbacks.push(callback)
        }
    }
}

type TRegion = {
    name: string,
    region: string
}

type THooks = {
    start: TAsyncParallelHook,
    beforeLoadingRegion: TAsyncParallelHook & {
        promise(requestUrl: string, regionData: TRegion): Promise<any>
    },
    afterLoadingRegion: TAsyncParallelHook & {
        promise(requestUrl: string, regionData: TRegion): Promise<any>
    },

    router: {
        promise(TApp): Promise<any>,
        tapPromise(name: string, callback: (app: TApp) => {}): void
    },
    unmountApp: TAsyncParallelHook & {
        promise(currentApp: TCurrentShapeApp): Promise<any>
    },
    beforeLoadingApp: {
        promise(requestUrl: string, appData: TAppData): Promise<any>,
        tapPromise(
            name: string,
            callback: (requestUrl: string, appData: TAppData) => {}
        ): void
    },
    afterLoadingApp: TAsyncParallelHook & {
        promise(requestUrl: string, appData: TAppData): Promise<any>
    },
    executeApp: TAsyncParallelHook & {
        promise(appData: TAppData): Promise<any>
    },
    mountApp: TAsyncParallelHook & {
        promise(appData: TAppData): Promise<any>
    },
    appStartLoadingData: {
        promise(longRequest: boolean | void): Promise<any>,
        tapPromise(
            name: string,
            callback: (longRequest: boolean | void) => {}
        ): void
    },
    appFinishLoadingData: TAsyncParallelHook,
    afterMountApp: TAsyncParallelHook & {
        promise(appData: TAppData): Promise<any>
    },

    errorApp: {
        promise(
            error: {} | string,
            app: TApp | TCurrentShapeApp | void
        ): Promise<any>,
        tapPromise(
            name: string,
            callback: (
                error: {} | string,
                app: TApp | TCurrentShapeApp | void
            ) => {}
        ): void
    },
    errorRegion: TAsyncParallelHook & {
        promise(error: {}, regionData: TRegion): Promise<any>
    },
    error: TAsyncParallelHook & {
        promise(error: {}): Promise<any>
    }
}

export class Bootstrap {
    hooks: THooks = {
        start: new AsyncParallelHookCreator(),
        beforeLoadingRegion: new AsyncParallelHookCreator(),
        afterLoadingRegion: new AsyncParallelHookCreator(),

        router: new AsyncParallelHookCreator(),
        unmountApp: new AsyncParallelHookCreator(),
        beforeLoadingApp: new AsyncParallelHookCreator(),
        afterLoadingApp: new AsyncParallelHookCreator(),
        executeApp: new AsyncParallelHookCreator(),
        mountApp: new AsyncParallelHookCreator(),
        appStartLoadingData: new AsyncParallelHookCreator(),
        appFinishLoadingData: new AsyncParallelHookCreator(),
        afterMountApp: new AsyncParallelHookCreator(),

        errorApp: new AsyncParallelHookCreator(),
        errorRegion: new AsyncParallelHookCreator(),
        error: new AsyncParallelHookCreator()
    }

    currentApp: string

    apps: Apps
    regions: Region

    // Дефолтный идентификатор для маунта приложний
    defaultRegionForMountApp: string = 'main'

    // Создаем инстанс браузер хистори
    history = createBrowserHistory()

    // Создаем инстанс SystemJS хистори
    system = new System.constructor()

    constructor ({ apps, regions }: { apps: {}, regions: {} }) {
        this.apps = new Apps(apps)
        this.regions = new Region(regions)
    }

    async start () {
        // Старт bootstrap
        try {
            await this.hooks.start.promise()
            // Запускаем загрузку регионов (сквозных модулей)
            this.renderRegions()

            // Запускаем жизненный цикл bootstrap по прикладным приложениям
            this.renderApps()

            if (this.apps.size) {
                // Запуск отслеживания истории
                this.history.listen(this.renderApps.bind(this))
            }

            let prevPathname = window.location.pathname
            this.history.listen((location) => {
                if (location.pathname !== prevPathname) {
                    window.scroll({ top: 0, left: 0, behavior: 'auto' })
                    prevPathname = location.pathname
                }
            })
        } catch (error) {
            console.error(error)
            this.hooks.error.promise(error)
        }
    }

    async renderApps () {
        let app
        try {
            await this.hooks.router.promise(
                this.apps.findApp(this.history.location.pathname)
            )
            // Ищем приложение, удовлетворяющее данному роуту
            app = this.apps.findApp(this.history.location.pathname)

            if (app && this.apps.isCurrentApp(app.name)) {
                // Если это тоже самое приложение, то прерываем работу bootstrap
                return null
            }

            const appData: TAppData = {
                name: app.name,
                version: app.version,
                vendorVersion: app.vendorVersion,
                region: document.getElementById(this.defaultRegionForMountApp)
            }

            return await this.renderApp(
                getPathToModule(app.name, app.version),
                appData
            )
        } catch (error) {
            console.error(error)
            return this.hooks.errorApp.promise(error, app)
        }
    }

    async unmount () {
        let lastApp
        try {
            lastApp = this.apps.getCurrentApp()

            if (lastApp.name && (lastApp.app || {}).unmount) {
                await this.hooks.unmountApp.promise(lastApp)

                // Вызываем unmount у предыдущего модуля
                return lastApp.app.unmount(lastApp.app.appData)
            }
            return null
        } catch (error) {
            console.error(error)
            return this.hooks.errorApp.promise(error, lastApp)
        }
    }

    use = (fn: (instance: Bootstrap) => {}) => fn(this)

    async renderApp (
        requestUrl: string,
        { name, region, version, vendorVersion }: TAppData = {}
    ) {
        // Прихраниваем текущий путь до модуля, для определения нужно ли его маунтить после загрузки
        // Это позволит замаунтить последний загруженный модуль, который ожидает клиент

        this.currentApp = name

        try {
            await this.hooks.beforeLoadingApp.promise(requestUrl, {
                name,
                version,
                region,
                vendorVersion
            })

            const { component, mount, unmount } = await systemJSImport(
                requestUrl
            )

            await this.hooks.afterLoadingApp.promise(requestUrl, {
                name,
                version,
                region,
                vendorVersion
            })

            if (this.currentApp === name) {
                await this.hooks.executeApp.promise({
                    name,
                    region,
                    version,
                    vendorVersion
                })

                const executeComponent = await component({
                    name,
                    region,
                    history: this.history
                })
                await this.unmount()

                await this.hooks.mountApp.promise({
                    name,
                    region,
                    version,
                    vendorVersion
                })

                await mount(executeComponent, {
                    name,
                    region,
                    history: this.history
                })

                await this.hooks.afterMountApp.promise({
                    name,
                    region,
                    version,
                    vendorVersion
                })

                // Записываем только прикладные приложения
                this.apps.setCurrentApp(name, {
                    component: executeComponent,
                    mount,
                    unmount,
                    appData: { name, version, region, vendorVersion }
                })
            }
        } catch (error) {
            console.error(error)
            await this.hooks.errorApp.promise(requestUrl, {
                name,
                region
            })
        }
    }

    async renderRegions () {
        // eslint-disable-next-line no-restricted-syntax, comment: почему запрещен ForOfStatement?!! TODO: eslint
        for (const [region, { name }] of this.regions.entries()) {
            const throughApp = this.regions.get(region)
            this.renderRegion(
                getPathToModule(throughApp.name, throughApp.version),
                { name, region }
            )
        }
    }

    async renderRegion (requestUrl: string, { name, region }: TRegion) {
        try {
            await this.hooks.beforeLoadingRegion.promise(requestUrl, {
                name,
                region
            })
            const { component, mount, unmount } = await systemJSImport(
                requestUrl
            )
            const regionElement = document.getElementById(region)
            await this.hooks.afterLoadingRegion.promise(requestUrl, {
                name,
                region
            })

            mount(
                component({
                    name,
                    region: regionElement,
                    history: this.history
                }),
                {
                    name,
                    region: regionElement,
                    history: this.history
                }
            )
        } catch (error) {
            await this.hooks.errorRegion.promise(error, {
                name,
                region
            })
            console.error(error)
        }
    }
}
