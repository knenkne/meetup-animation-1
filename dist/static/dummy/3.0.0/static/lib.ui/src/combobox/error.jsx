import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../button'

export const Error = (props) => {
    const { onClick, title, children, className } = props

    return (
        <div>
            <div className={className}>{children}</div>
            <Button
                title={title}
                onClick={onClick}
                type="button"
            />
        </div>
    )
}

Error.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}

Error.defaultProps = {
    className: void 0
}

Error.displayName = 'Combobox.Error'
