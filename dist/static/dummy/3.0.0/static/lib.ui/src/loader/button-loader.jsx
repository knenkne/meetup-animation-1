import React from 'react'
import PropTypes from 'prop-types'

import { Loader } from './loader'
import defaultTheme from './button-loader.css'
import { getLoaderColorScheme } from './utils'

/**
 * Лоадер для активных элементов ввода
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const ButtonLoader = ({ theme, colorScheme }) => (
    <div className={theme.loaderContainer}>
        <Loader colorScheme={getLoaderColorScheme(colorScheme)} />
    </div>
)

ButtonLoader.propTypes = {
    colorScheme: PropTypes.oneOf([
        'base',
        'secondary',
        'link',
        'purple',
        'blue',
        'green',
        'skyblue',
        'black',
        'gold',
        'aqua',
        'dark',
        'light'
    ]),
    theme: PropTypes.object
}

ButtonLoader.defaultProps = {
    theme: defaultTheme,
    colorScheme: 'base'
}

ButtonLoader.theme = defaultTheme
ButtonLoader.displayName = 'Loader.Button'
