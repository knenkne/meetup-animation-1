import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Button } from '../../button'

import style from './style.css'

export const Error = (props) => {
    const { onClick, title, children } = props

    return (
        <div className={classnames(style.additionalInfo, style.attention)}>
            <div className={style.message}>{children}</div>
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
    onClick: PropTypes.func.isRequired
}

Error.displayName = 'Input.Suggest.Error'
