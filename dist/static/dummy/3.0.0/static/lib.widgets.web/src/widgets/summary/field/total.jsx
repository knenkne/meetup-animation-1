import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import i18next from 'i18next'
import { Currency } from '@sbol/lib.ui'
import _ from 'lodash'

import { getOption } from '../utils'

import style from './style.css'

const getDescription = (option, commission) => {
    const message = _.get(option, ['properties', 'message'])

    switch (commission) {
        case 'error': {
            return message || i18next.t('lib.widgets.web:summary.commission.default.error')
        }
        case 'none': {
            return message || i18next.t('lib.widgets.web:summary.commission.default.none')
        }
        case 'success': {
            return (
                <React.Fragment>
                    {message || i18next.t('lib.widgets.web:summary.commission.default.success')}
                    &nbsp;
                    {_.get(option, ['properties', 'value'])}
                    &nbsp;
                    <Currency value={option.properties.value} title={option.properties.currency} />
                </React.Fragment>
            )
        }
        default:
            return null
    }
}

export const Total = ({ title, description, reference, value, halfWidth }) => {
    const option = getOption(reference, value)
    const commission = _.get(option, ['properties', 'commission'], '')
    const totalDescription = getDescription(option, commission) || description

    return (
        <div className={classnames(style.field, halfWidth && style.half)}>
            {title && <span className={style.title}>{title}</span>}

            {option.title && (
                <div className={style.value}>
                    <span className={style.amount}>{option.title}</span>
                    &nbsp;
                    <Currency title={option.properties.currency} />
                </div>
            )}

            {totalDescription && (
                <span
                    className={classnames(
                        style.description,
                        commission === 'error' && style.error
                    )}
                >
                    {totalDescription}
                </span>
            )}
        </div>
    )
}

Total.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string,
    halfWidth: PropTypes.bool,
    reference: PropTypes.object
}
Total.defaultProps = {
    title: '',
    description: '',
    value: '',
    halfWidth: false,
    reference: {}
}
