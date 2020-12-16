import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../button'

export const Long = (props) => {
    const { children, title, onClick, className } = props

    return (
        <div className={className}>
            <div>{children}</div>
            <Button
                title={title}
                onClick={onClick}
                type="button"
            />
        </div>
    )
}

Long.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}

Long.defaultProps = {
    className: void 0
}

Long.displayName = 'Combobox.Long'
