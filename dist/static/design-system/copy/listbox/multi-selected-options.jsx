import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import { Icon } from '../icon'

export const MultiSelectedOptions = ({ items, theme, onChange }) => {
    const handleClick = useCallback((value) => (e) => {
        e.stopPropagation()

        const newSelected = items.map((item) => item.value).filter((val) => val !== value)
        onChange(newSelected)
    }, [items])

    return (
        <ul className={theme.selectedList}>
            {items.map((item) => (
                <li key={item.value} className={theme.selectedItem} >
                    <span>{item.title}</span>
                    <Icon
                        name="icon:core/common/close"
                        theme={{ icon: cs(Icon.theme.icon, theme.selectedIcon) }}
                        onClick={handleClick(item.value)}

                    />
                </li>
            ))}
        </ul>
    )
}

MultiSelectedOptions.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    theme: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}
