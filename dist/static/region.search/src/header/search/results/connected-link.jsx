import React, { useCallback } from 'react'
import { Link } from '@sbol/lib.app'
import PropTypes from 'prop-types'
import _ from 'lodash'

import resultsStyles from './styles.css'
import CloseSuggestContext from './close-suggests-context'

/**
 * Ссылка бесшовного перехода. Используется, на момент написания данного комментария, для кнопок "Показать все" ведущих
 * в историю операций и поставщиков услуг.
 * @param {String} href - ссылка
 * @param {Children} children - дочерние элементы, переданные извне (title ссылки/кнопки)
 * @param {Function} handleMetric - отправка метрики
 * @param {Function} handleClose - закрытие попопа поисковой выдачи
 * @return {React.Component} - компонент
 * @constructor
 */
export const ConnectedLink = ({
    href,
    children,
    handleMetric = _.identity,
    handleClose = _.identity
}) => {
    const handleClick = useCallback((e) => {
        e.preventDefault()
        handleMetric()
        handleClose()
    }, [handleMetric, handleClose])

    return (
        <Link
            size="sm"
            className={resultsStyles.link}
            theme={{ link: resultsStyles.link }}
            onClick={handleClick}
            href={href}
        >
            {children}
        </Link>
    )
}

ConnectedLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node,
    handleMetric: PropTypes.func,
    handleClose: PropTypes.func
}

/**
 * Обёртка для ссылки, нужно, чтобы сделать компонент ConnectedLink тестируемым и стандартным (без контекста)
 * @param {Object} props - любые пропсы
 * @return {*} ConnectedLink c переданными в него значениями из контекста
 * @constructor
 */
export const ConnectedLinkWrapper = (props) => (
    <CloseSuggestContext.Consumer>
        {(onCloseSearchResult) => (
            <ConnectedLink
                {...props}
                handleClose={onCloseSearchResult}
            />
        )}
    </CloseSuggestContext.Consumer>
)
