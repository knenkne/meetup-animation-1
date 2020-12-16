// @flow

// { name: string, app: TCurrentApp }

// eslint-disable-next-line no-undef, comment: for flowjs
export type TApp = {
    name: string,
    version?: string,
    vendorVersion?: string
}

export type TAppData = TApp & {
    region: HTMLElement | null
}

// eslint-disable-next-line no-undef, comment: for flowjs
type TCurrentApp = $Shape<{
    appData: TAppData,
    unmount: TAppData => void,
    mount: Function,
    component: Function
}>

type currentAppName = string

// eslint-disable-next-line no-undef, comment: for flowjs
export type TCurrentShapeApp = $Shape<{
    name: currentAppName,
    app: TCurrentApp
}>

interface IApp {
    get(string): TApp | void;
}

/**
 * @typedef {Object.<String, TypeShapeApps>} TypeApps
 *
 * @typedef {Object} TypeShapeApps
 * @property {String} name - name module
 * @property {String} version - version module
 */
export default class Apps extends Map<string, TApp> implements IApp {
    currentApp: TCurrentApp = {}
    currentAppName: currentAppName = ''
    /**
     * Creates an instance of Apps.
     * @param {TypeApps} apps - map modules
     * @memberof Apps
     * @return {Map} - Apps
     */
    constructor (apps: {}) {
        super()
        this.merge(apps)
    }

    /**
     * Merge new apps
     * @param {TypeApps} apps - map modules
     * @memberof Apps
     * @return {void}
     */
    merge (apps: { [key: string]: TApp } = {}): void {
        // eslint-disable-next-line no-extra-parens, comment: для flow приходится делать грязный хак https://github.com/facebook/flow/issues/2221
        (Object.entries(
            apps
        ): any).forEach(([path, options]: [string, TApp]) =>
            this.set(path, options)
        )
    }

    setCurrentApp (appName: string, app?: TCurrentApp = {}): void {
        this.currentAppName = appName
        this.currentApp = app
        this.listeners.forEach((listener) => listener(app))
    }

    getCurrentApp (): TCurrentShapeApp {
        return { name: this.currentAppName, app: this.currentApp }
    }

    isCurrentApp (appName: currentAppName) {
        return this.currentAppName === appName
    }

    findApp (pathname: string): TApp {
        function startsWithPath (path, subPath) {
            if (!subPath) {
                return true
            }

            const pathItems = String(path).split('/')
            const subPathItems = String(subPath).split('/')

            return subPathItems.reduce(
                (memo, appItem, index) => memo && pathItems[index] === appItem,
                true
            )
        }

        const currentPath: any = [...this.keys()].reduce((memo, appRoute) => {
            const correctedAppRoute = appRoute.replace(/^\/?/, '/')
            const correctedMemo = memo ? memo.replace(/^\/?/, '/') : memo
            return startsWithPath(pathname, correctedAppRoute) &&
                startsWithPath(correctedAppRoute, correctedMemo)
                ? appRoute
                : memo
        }, void 0)

        return (
            this.get(currentPath) ||
            this.get('/') || {
                name: '',
                version: '',
                vendorVersion: ''
            }
        )
    }

    getNames (): Array<string> {
        return [...this.values()].map(({ name }) => name)
    }

    listeners = []

    listen (listener) {
        this.listeners.push(listener)

        listener(this.currentApp)

        return () => {
            const index = this.listeners.indexOf(listener)

            if (index !== -1) {
                this.listeners.splice(index, 1)
            }
        }
    }
}
