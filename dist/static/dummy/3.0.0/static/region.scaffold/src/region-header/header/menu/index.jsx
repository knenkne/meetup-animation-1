import React from 'react'
import cx from 'classnames'
import { Icon } from '@sbol/lib.ui/core/icon'
import i18next from 'i18next'
import {
    getHistory,
    Link,
    getConfigValue,
    getAllOptions,
    getNavigationValue,
    getBroker
} from '@sbol/lib.app'

import { plUrl } from '../../utils'
import { checkFeature } from '../../../utils/check-feature'

const baseClientUrl = getConfigValue('base.client.url', '')

// Нет элемента навигации, но элемент интерфейса должен остаться и вести на 404, как визуально, так и адресно
const getHardCodeNavigationValue = (id) => {
    if (!getNavigationValue(id)) {
        if (plUrl) {
            return `${plUrl}${baseClientUrl}/404`
        }

        return '/404'
    }

    return Link.createUrl(id)
}

const getShortNavigationValue = (id) => {
    if (!getNavigationValue(id)) {
        return void ''
    }
    const href = getNavigationValue(id).replace(baseClientUrl, '')
    if (plUrl) {
        return href.replace(plUrl, '')
    }

    return href
}

const PAYMENTS_DASHBOARD = 'payments.dashboard'
const INDEX = 'index'
const OPERATIONS = 'operations'
const CATALOG = 'catalog'
const LINK = 'scaffold__region-header-link'
const LINKACTIVE = 'scaffold__region-header-link-active'

const shortIndex = getShortNavigationValue(INDEX)
const shortPayments = getShortNavigationValue(PAYMENTS_DASHBOARD)
const shortOperations = getShortNavigationValue(OPERATIONS)
const shortCatalog = getShortNavigationValue(CATALOG)

const getActive = () => {
    const currentPathname = getHistory().location.pathname.replace(baseClientUrl, '')

    if (currentPathname === shortIndex) {
        return INDEX
    } else if (currentPathname.startsWith(shortPayments)) {
        return PAYMENTS_DASHBOARD
    } else if (currentPathname === shortOperations) {
        return OPERATIONS
    } else if (currentPathname === shortCatalog) {
        return CATALOG
    }

    return void ''
}

const navIconTheme = { self: 'scaffold__region-header-icon' }

export class Menu extends React.Component {
    componentDidMount () {
        getHistory().listen(() => {
            if (!this.unmount) {
                this.forceUpdate()
            }
        })
    }

    componentWillUnmount () {
        this.unmount = true
    }

    handleChatClick = (event) => getBroker().publish('REGION.CHAT:V1:CHAT.OPEN', event)

    // eslint-disable-next-line complexity, comment: TODO: упростить компонент
    render () {
        const showChatMenuButton =
            Boolean(getAllOptions('chat')) &&
            checkFeature('ShowMenuChatButton', 'region.scaffold')

        const active = getActive()

        return (
            <nav className="scaffold__region-header-menu">
                <Link
                    href={getHardCodeNavigationValue(INDEX)}
                    className={cx(LINK, active === INDEX && LINKACTIVE)}
                >
                    <Icon name="icon:core/menu/main" size="self" theme={navIconTheme} />
                    {i18next.t('region.scaffold:menu.index')}
                </Link>


                <Link
                    href={getHardCodeNavigationValue(PAYMENTS_DASHBOARD)}
                    className={cx(LINK, active === PAYMENTS_DASHBOARD && LINKACTIVE)}
                >
                    <Icon name="icon:core/menu/payments" size="self" theme={navIconTheme} />
                    {i18next.t('region.scaffold:menu.payments')}
                </Link>

                {showChatMenuButton && <button
                    onClick={this.handleChatClick}
                    className={cx(LINK, 'scaffold__region-header-chat')}
                >
                    <Icon name="icon:core/menu/chat" size="self" theme={navIconTheme} />
                    {i18next.t('region.scaffold:menu.chat')}
                </button>}


                <Link
                    href={getHardCodeNavigationValue(OPERATIONS)}
                    className={cx(LINK, active === OPERATIONS && LINKACTIVE)}
                >
                    <Icon name="icon:core/menu/operations" size="self" theme={navIconTheme} />
                    {i18next.t('region.scaffold:menu.history')}
                </Link>

                <Link
                    href={getHardCodeNavigationValue(CATALOG)}
                    className={cx(LINK, active === CATALOG && LINKACTIVE)}
                >
                    <Icon name="icon:core/menu/catalog" size="self" theme={navIconTheme} />
                    {i18next.t('region.scaffold:menu.catalog')}
                </Link>
            </nav>
        )
    }
}
