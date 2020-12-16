import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getValue, getOption } from '../utils'

import style from './style.css'

export const Text = ({
    value,
    title,
    type,
    description,
    reference,
    halfWidth
}) => (
    <div className={classnames(style.field, halfWidth && style.half)}>
        {title && <span className={style.title}>{title}</span>}

        <div className={style.value}>
            {getValue(value, getOption(reference, value).title, type)}
        </div>

        {description && <span className={style.description}>{description}</span>}
    </div>
)

Text.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    halfWidth: PropTypes.bool,
    reference: PropTypes.object
}

Text.defaultProps = {
    title: '',
    description: '',
    value: '',
    type: void '',
    halfWidth: false,
    reference: void 0
}
