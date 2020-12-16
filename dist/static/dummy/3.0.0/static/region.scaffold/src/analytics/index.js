/* eslint-disable @sbol/common/no-cyrillic-outside-cms, comment: аналитика не требует транслитерации */

import { analytics } from '@sbol/lib.analytics'

const sections = {
    cards: 'Карты',
    accounts: 'Вклады',
    targets: 'Цели',
    loans: 'Кредиты',
    insurance: 'Страхование',
    investments: 'Инвестиции',
    trustManagement: 'Доверительное управление',
    imaccounts: 'Металлические счета',

    // Их еще или уже нет, но для подстраховки они уже размечены
    brokerage: 'Брокерское обслуживание',
    depo: 'Счета депо',
    certificates: 'Сертификаты'
}

export const APP = 'region.scaffold'
export const PRODUCT_SUB_REGION = 'Меню продуктов'

export const themeChangeAnalyticsDictionary = {
    LIGHT_THEME_CLICK: 'Светлая тема_Клик',
    DARK_THEME_CLICK: 'Темная тема_Клик'
}

export const onNewProductClick = (type) => {
    analytics.event({
        application: APP,
        action: PRODUCT_SUB_REGION,
        label: `${sections[type]}_Иконка плюса_Клик`
    })
}

export const onToggleSection = (type, isOpen) => {
    const hasMetrics = type === sections.investments || type === sections.trustManagement || type === sections.insurance

    if (hasMetrics) {
        const state = isOpen ? 'Раскрытие' : 'Закрытие'

        analytics.event({
            application: APP,
            action: PRODUCT_SUB_REGION,
            label: `${sections[type]}/${state}_Клик`
        })
    }
}

export const onDeclineThisPerfectDesign = () => {
    analytics.event({
        application: APP,
        action: PRODUCT_SUB_REGION,
        label: 'Вернуться в старый дизайн_Клик'
    })
}

export const onProductLoadingError = (type) => {
    analytics.event({
        application: APP,
        action: PRODUCT_SUB_REGION,
        label: `${sections[type]}/Продукты не загрузились`
    })
}

export const onProductNonBlockingError = (type) => {
    analytics.event({
        application: APP,
        action: PRODUCT_SUB_REGION,
        label: `${sections[type]}/Неблокирующая ошибка`
    })
}

export const onProductBusinessError = (type) => {
    analytics.event({
        application: APP,
        action: PRODUCT_SUB_REGION,
        label: `${sections[type]}/Бизнес ошибка`
    })
}

export const onChangeThemeAnalytics = (label) => {
    analytics.event({
        application: 'region.scaffold',
        action: PRODUCT_SUB_REGION,
        label
    })
}
