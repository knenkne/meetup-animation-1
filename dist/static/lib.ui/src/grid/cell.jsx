import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca5ec9f7ad7e610e25df8ed)
 * Компонент, задающий размер ячейки в сетке
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
const Cell = ({ lg, offsetLg, md, offsetMd, sm, offsetSm, ...props }) => (
    <div
        {...props}
        className={classnames(
            defaultTheme.cell,
            defaultTheme[`colLg${lg}`],
            defaultTheme[`colLgOffset${offsetLg}`],
            defaultTheme[`colMd${md}`],
            defaultTheme[`colMdOffset${offsetMd}`],
            defaultTheme[`colSm${sm}`],
            defaultTheme[`colSmOffset${offsetSm}`]
        )}
    />
)

Cell.propTypes = {
    /**
     * 0-29
     */
    lg: PropTypes.number,
    /**
     * 0-29
     */
    offsetLg: PropTypes.number,
    /**
     * 0-19
     */
    md: PropTypes.number,
    /**
     * 0-19
     */
    offsetMd: PropTypes.number,
    /**
     * 0-23
     */
    sm: PropTypes.number,
    /**
     * 0-23
     */
    offsetSm: PropTypes.number,
    children: PropTypes.node
}

Cell.defaultProps = {
    lg: 1,
    offsetLg: void 0,
    md: 1,
    offsetMd: void 0,
    sm: 1,
    offsetSm: void 0,
    children: void 0
}

Cell.displayName = 'Grid.Cell'

export { Cell }
