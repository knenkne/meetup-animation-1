import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=dropdown)
 * Компонент группировки опций в выпадающем списке
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Group = (props) => {
    const { title, children } = props

    return (
        <section className={classnames(defaultTheme.group)} data-unit="dropdown:group">
            {title && <p className={defaultTheme.groupLabel}>{title}</p>}
            {children}
        </section>
    )
}

Group.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

Group.defaultProps = {
    title: void 0,
    children: void 0
}

Group.displayName = 'Dropdown.Group'
