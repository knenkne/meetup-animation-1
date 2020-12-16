import axios from 'axios'
import i18nextOriginal from 'i18next'
import XHR from 'i18next-xhr-backend'

import { getConfigValue, getMessages } from '../config'
import projectName from '../application/project-name'

import { groupMessagesByNamespace } from './group-messages-by-namespace'

const i18nextAxios = axios.create()
const COMMON_NS = 'common'
const resUrl = getConfigValue('res.url')
const commonVersion = getConfigValue('common.version')

const createLoadPath = (name, version, libs) => (lng, ns) => {
    if (ns[0] === name) {
        return `${resUrl}/{{ns}}/${version}/locales/{{lng}}.json`
    }

    if (ns[0] === COMMON_NS) {
        return `${resUrl}/{{ns}}/${commonVersion}/locales/{{lng}}.json`
    }

    return `${resUrl}/{{ns}}/${libs[ns[0]]}/locales/{{lng}}.json`
}

const getNamespaceFromUrl = (url) => url.replace(`${resUrl}/`, '').split('/')[0]

export const isAnyData = (i18next) => Object.keys(i18next?.store?.data || {}).length

export const i18nInit = (name, version, libs, locales, lang, i18next, localLocales) => {
    // lib.app знает, что сам он без локалей
    if (locales && Array.isArray(locales)) {
        locales = locales.filter((locale) => locale !== 'lib.app')
    }

    const cmsLocales = groupMessagesByNamespace(name, getMessages())
    const loadPath = createLoadPath(name, version, libs)
    const ajax = (url, opts, callback) => i18nextAxios(url)
        .then((response) => {
            const enrichedLocales = {
                ...response.data,
                ...cmsLocales[getNamespaceFromUrl(url)]
            }
            callback(JSON.stringify(enrichedLocales), response)
        })

    const initConfig = {
        lng: lang,
        fallbackLng: 'ru',
        keySeparator: '/',
        ns: [name, ...locales],
        defaultNS: name,
        backend: {
            loadPath,
            ajax
        }
    }

    if (localLocales) {
        const enrichedLocales = {
            ...localLocales[lang],
            ...cmsLocales[name]
        }

        initConfig.resources = {
            [lang]: {
                ...cmsLocales,
                [name]: enrichedLocales
            }
        }

        if (isAnyData(i18next)) {
            i18next.addResourceBundle(lang, name, enrichedLocales, true, true)
            return i18next
        }
    }

    return new Promise((resolve, reject) => {
        const callback = (err) => {
            if (err) {
                return reject(err)
            }
            return resolve()
        }

        return i18next
            .use(XHR)
            .init(initConfig, callback)
    })
}

export const i18nextInit = ({
    i18next = i18nextOriginal,
    name,
    libs,
    locales,
    version,
    resources
}) => {
    projectName.set(name)

    return i18nInit(
        name,
        version,
        libs,
        locales,
        getConfigValue('lang'),
        i18next,
        resources
    )
}
