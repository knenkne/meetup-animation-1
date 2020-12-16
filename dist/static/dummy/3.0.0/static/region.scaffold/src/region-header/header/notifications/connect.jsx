import React, { useState, useEffect } from 'react'
import { getFeature, axiosConfig, getHistory, log, getNavigationValue } from '@sbol/lib.app'
import { getApps } from '@sbol/webpage.provider.bootstrap'
import axios from 'axios'

const eribAxios = axios.create()
axiosConfig.useMultipleInterceptors(eribAxios, [
    ...axiosConfig.rq.mapiInterceptors,
    ...axiosConfig.rs.mapiInterceptors
])

const NORMAL_IMPORTANCE = {
    hi: 'error',
    medium: 'info',
    low: 'success',

    // legacy
    HIGH: 'error',
    MEDIUM: 'info',
    LOW: 'success'
}

const parseMessages = (messages) => {
    // eslint-disable-next-line no-param-reassign, comment: Тут может прийти null
    messages = messages || []

    if (!Array.isArray(messages)) {
        // eslint-disable-next-line no-param-reassign, comment: Отключаем логирование
        messages = [messages]
    }

    return messages.map(({ messageText, importance }) => ({
        messageText,
        importance: NORMAL_IMPORTANCE[importance] || 'info'
    }))
}

const getMessages = async (pageKey) => {
    const axiosResponse = await eribAxios({
        method: 'post',
        url: '/private/messages/list.do',
        params: {
            // <rest>?pageKeys[]=pl-main-page&pageKeys[]=main
            pageKeys: [pageKey]
        }
    })

    if (axiosResponse.data.response?.status?.errors?.error) {
        throw new Error(axiosResponse.data.response?.status?.errors?.error[0].text)
    }

    return parseMessages(axiosResponse.data.response?.Messages?.Message)
}

const isCurrentRoute = (routesOption) => {
    if (!routesOption) {
        return true
    }

    const currentPath = getHistory().location.pathname

    const routes = routesOption.split(';')
    return Boolean(routes.find((route) => {
        const navLink = getNavigationValue(route)

        log.debug(`Роут "${route}" со ссылкой "${navLink}" сопоставляется с "${currentPath}"`)

        if (!navLink) {
            return false
        }

        return new RegExp(navLink.replace(/{{.+?}}/g, '.+?')).test(currentPath)
    }))
}

const routeListener = (routesOption, setNotifications, messages) => getHistory().listen(() => {
    if (isCurrentRoute(routesOption)) {
        setNotifications(messages)
    } else {
        setNotifications([])
    }
})

export const connect = (Component) => () => {
    const [notifications, setNotifications] = useState([])

    if (getApps) {
        const apps = getApps()

        let routeUnlisten

        useEffect(() => apps.listen(async (app) => {
            if (routeUnlisten) {
                routeUnlisten()
            }

            const feature = getFeature('ShowPageMessage', app?.appData?.name)

            if (feature && app?.appData?.name) {
                const {
                    options: {
                        pageKey,
                        route: routesOption
                    } = {}
                } = feature

                try {
                    if (pageKey) {
                        log.debug(`Загружаю messages для модуля "${app?.appData?.name}". Контейнер: "${pageKey}"`)
                        const messages = await getMessages(pageKey)

                        routeUnlisten = routeListener(
                            routesOption,
                            setNotifications,
                            messages
                        )

                        if (isCurrentRoute(routesOption)) {
                            log.debug(`Первичная загрузка по совпадению роута для модуля "${app?.appData?.name}". Контейнер: "${pageKey}"`)
                            return setNotifications(messages)
                        }
                    }
                } catch (error) {
                    log.error(error)
                }
            }

            return setNotifications([])
        }), [])
    }

    return <Component notifications={notifications} />
}
