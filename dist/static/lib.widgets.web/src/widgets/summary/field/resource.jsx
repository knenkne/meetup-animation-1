import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@sbol/lib.ui'
import classnames from 'classnames'

import { parseResource } from '../../utils'
import { getOption } from '../utils'

import style from './style.css'

export const Resource = ({
    title,
    description,
    reference,
    value,
    halfWidth
}) => {
    const resourceValue = getOption(reference, value)
    const item = parseResource(resourceValue)

    return (
        <div className={classnames(style.field, halfWidth && style.half)}>
            {title && <span className={style.title}>{title}</span>}

            <div className={style.value}>
                {item.icon && (
                    <span className={style.icon}>
                        <Icon name={item.icon} size="self" />
                    </span>
                )}
                {item.title && <span>{item.title}</span>}
                &nbsp;
                {item.description && (
                    <span className={style.description}>
                        {item.description}
                    </span>
                )}
            </div>

            {description && <span className={style.description}>{description}</span>}
        </div>
    )
}

Resource.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string,
    halfWidth: PropTypes.bool,
    reference: PropTypes.object.isRequired
}

Resource.defaultProps = {
    title: '',
    description: '',
    value: '',
    halfWidth: false
}
