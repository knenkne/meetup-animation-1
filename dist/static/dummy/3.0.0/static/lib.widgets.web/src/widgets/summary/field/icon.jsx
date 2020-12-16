import React from 'react'
import PropTypes from 'prop-types'
import { Icon as UIIcon } from '@sbol/lib.ui'
import classnames from 'classnames'

import style from './style.css'

export const Icon = ({
    title,
    description,
    value,
    style: fieldStyle,
    halfWidth
}) => (
    <div className={classnames(style.field, halfWidth && style.half)}>
        {title && <span className={style.title}>{title}</span>}

        <div className={style.value}>
            <span className={style.icon}>
                <UIIcon name={fieldStyle} size="self" />
            </span>
            {value}
        </div>

        {description && <span className={style.description}>{description}</span>}
    </div>
)

Icon.propTypes = {
    style: PropTypes.string,
    value: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    halfWidth: PropTypes.bool
}

Icon.defaultProps = {
    style: '',
    value: '',
    title: '',
    description: '',
    halfWidth: false
}
