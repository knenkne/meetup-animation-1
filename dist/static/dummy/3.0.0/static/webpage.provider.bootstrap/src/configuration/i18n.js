import xhr from '../utils/xhr'

const getByNamespace = (allLocales, namespace) =>
    Object.keys(allLocales).reduce((acc, key) => {
        if (key.startsWith(`${namespace}:`)) {
            acc[key.replace(`${namespace}:`, '')] = allLocales[key]
        }
        return acc
    }, {})

export const i18n = {
    namespace: {},
    init: async (lang, cmsLocales) => {
        /* eslint-disable-next-line no-undef, comment: сборочная переменная для пути бутстрапа */
        const url = `${__webpack_public_path__}locales/${lang}.json`

        const locales = await xhr(url, void 0, {
            method: 'GET',
            withCredentials: false,
            withContentType: false
        })

        Object.assign(i18n.namespace, locales, getByNamespace(cmsLocales, 'webpage.provider.bootstrap'))
    },
    t: (key) => {
        if (i18n.namespace[key]) {
            return i18n.namespace[key]
        }

        if (process.env.NODE_ENV !== 'production') {
            return key
        }

        return ''
    }
}
