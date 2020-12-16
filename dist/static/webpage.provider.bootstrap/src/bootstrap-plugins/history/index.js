// @flow

import { createBrowserHistory } from 'history'

import { getCommonConfigValue } from '../../configuration/config'
import { setHistory } from '../../configuration/history'
import { Bootstrap } from '../../bootstrap'

// Когда-то давным-давно сайт СБОЛ был с /sbtsbol/private
const redirect = (history) => {
    if (
        !getCommonConfigValue('base.client.url') &&
        window.location.pathname.startsWith('/sbtsbol/private')
    ) {
        const { pathname, search, hash } = history.location
        history.replace(
            `${pathname}${search}${hash}`.replace('/sbtsbol/private', '')
        )
    }
}

export const historyPlugin = (bootstrap: Bootstrap) => {
    bootstrap.history = createBrowserHistory({
        basename: getCommonConfigValue('base.client.url')
    })

    setHistory(bootstrap.history)
    redirect(bootstrap.history)

    bootstrap.history.listen(() => {
        redirect(bootstrap.history)
    })
}
