import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Loader } from '../../loader'
import { Button } from '../../button'

import { loaderTheme } from './themes'
import style from './style.css'

export const Long = (props) => {
    const { children, title, onClick } = props

    return (
        <div className={classnames(style.additionalInfo, style.attention)}>
            <Loader.Button theme={loaderTheme} />
            <div className={style.message}>{children}</div>
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
    onClick: PropTypes.func.isRequired
}

Long.displayName = 'Input.Suggest.Long'
