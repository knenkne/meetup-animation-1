import React from 'react'
import PropTypes from 'prop-types'

import { Cell } from './cell'
import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca5ec9f7ad7e610e25df8ed)
 * Указатель инициализации верстки по сетке
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Grid = ({ ...props }) => (
    <div
        {...props}
        className={defaultTheme.grid}
    />)

Grid.propTypes = {
    children: PropTypes.node
}

Grid.defaultProps = {
    children: void 0
}

Grid.theme = defaultTheme
Grid.Cell = Cell
Grid.displayName = 'Grid'

export default Grid
