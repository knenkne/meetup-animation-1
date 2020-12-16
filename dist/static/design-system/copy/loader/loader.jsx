import React, { useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import defaultTheme from './loader.css'
import pulseTheme from './loader-themes/pulse-loader.css'
import jumpTheme from './loader-themes/jump-loader.css'
import swapTheme from './loader-themes/swap-loader.css'

const THEMES = [pulseTheme, jumpTheme, swapTheme]

const DEFAULT_DELAY = 300
const DEFAULT_CHANGE_INTERVAL = 25600

/**
 * Лоадер для страницы
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Loader = ({ size, mode, colorScheme }) => {
    const [showed, setShowed] = useState(false)
    const [theme, setTheme] = useState(THEMES[0])
    const pointClassName = useMemo(() => theme[size] || theme.sm, [theme])

    useEffect(() => {
        const timeoutId = setTimeout(() => setShowed(true), DEFAULT_DELAY)

        return () => clearTimeout(timeoutId)
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentThemeIndex = THEMES.indexOf(theme)
            const newTheme = THEMES[currentThemeIndex + 1] || THEMES[0]

            setTheme(newTheme)
        }, DEFAULT_CHANGE_INTERVAL)

        return () => clearInterval(intervalId)
    }, [showed, theme])

    if (!showed) {
        return null
    }

    return (
        <div
            className={classnames(
                defaultTheme.loader,
                defaultTheme[size],
                defaultTheme[colorScheme],
                mode === 'fill' && defaultTheme.fill
            )}
        >
            <span className={classnames(defaultTheme.loaderPoint, pointClassName)} />
            <span className={classnames(defaultTheme.loaderPoint, pointClassName)} />
            <span className={classnames(defaultTheme.loaderPoint, pointClassName)} />
        </div>
    )
}

Loader.propTypes = {
    /**
     * Размер отображаемого лоадера
     */
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    /**
     * Позиционирование по центру контейнера
     */
    mode: PropTypes.oneOf(['fill', void 0]),
    /**
     * Светлый или темный цвет лоадера
     */
    colorScheme: PropTypes.oneOf(['dark', 'light'])
}

Loader.defaultProps = {
    size: 'sm',
    mode: void 0,
    colorScheme: 'dark'
}

Loader.displayName = 'Loader'
Loader.theme = defaultTheme
export default Loader
