import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { isIE } from '../utils'

import defaultTheme from './icon-loader.css'

/**
 * Лоадер для иконок и мелких элементов
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const IconLoader = ({ size, colorScheme }) => {
    if (isIE) {
        return (
            <div
                className={classnames(
                    defaultTheme.ieIconLoader,
                    defaultTheme[size],
                    defaultTheme[colorScheme]
                )}
            >
                <div className={defaultTheme.ieCycle}>
                    <div className={defaultTheme.ieBorder} />
                    <div className={defaultTheme.ieLoader} />
                    <div className={defaultTheme.ieLoader} />
                    <div className={defaultTheme.ieLoader} />
                </div>
            </div>
        )
    }
    return (
        <div
            className={classnames(
                defaultTheme.iconLoader,
                defaultTheme[size],
                defaultTheme[colorScheme]
            )}
        >
            <svg
                className={defaultTheme.cycle}
                viewBox="0 0 50 50"
            >
                <circle className={defaultTheme.border} cx="25" cy="25" r="20" fill="none" />
                <circle className={defaultTheme.loader} cx="25" cy="25" r="20" fill="none" />
            </svg>
        </div>
    )
}

IconLoader.propTypes = {
    /**
     * Размер отображаемого лоадера
     */
    size: PropTypes.oneOf(['sm', 'lg']),
    /**
     * Светлый или темный цвет лоадера
     */
    colorScheme: PropTypes.oneOf(['dark', 'light'])
}

IconLoader.defaultProps = {
    size: 'lg',
    colorScheme: 'dark'
}

IconLoader.displayName = 'Loader.Icon'
IconLoader.theme = defaultTheme
export default IconLoader
