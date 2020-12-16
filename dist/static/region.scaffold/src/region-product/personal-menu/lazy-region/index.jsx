import React from 'react'
import PropTypes from 'prop-types'

import { LoaderDots } from '../loader'

/*
 * Lazy Skeleton render
 * После маунта компонента
 * продолжаем показывать скелетон
 * до загрузки результата запроса
 * @param children - component
 * @param loadOn - redux or state var
 * @param html - html string with skeleton
 * @param rest - other params
 * @returns {*}
 * @constructor
 */
export const LazyRegion = ({ children, isLoading, html, component: Component, showContentWhileLoading, ...rest }) => {
    /**
     * todo: animate loading content
     */
    if (isLoading) {

        if (html) {
            // eslint-disable-next-line react/no-danger, comment: Вставляем html скелетона "как есть"
            return <div {...rest} dangerouslySetInnerHTML={{ __html: html }} />
        }

        if (Component) {
            return (
                <React.Fragment>
                    {showContentWhileLoading && children}
                    <Component {...rest} />
                </React.Fragment>
            )
        }
    }
    return children
}

LazyRegion.displayName = 'LazyRegion'

LazyRegion.defaultProps = {
    html: '',
    component: LoaderDots,
    showContentWhileLoading: false,
    isLoading: false
}

LazyRegion.propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool,
    showContentWhileLoading: PropTypes.bool,
    component: PropTypes.func,
    html: PropTypes.string
}
