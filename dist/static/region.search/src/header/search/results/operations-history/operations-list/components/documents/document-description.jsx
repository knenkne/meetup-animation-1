import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'
import i18next from 'i18next'

import { useMarkup } from '../../../../../../../utils'

import style from './document.css'

export const DocumentDescription = ({
    date,
    description = ''
}) => {
    const formattedDate = useMemo(() => {
        if (!date.isValid()) {
            return ''
        }
        if (date.isSame(new Date(), 'day')) {
            return i18next.t('today')
        }
        if (date.isSame(moment().subtract(1, 'days'), 'day')) {
            return i18next.t('yesterday')
        }

        return `${date.format('D')} ${date.format('MMMM')
            .substr(0, 3)} ${date.format('YYYY')}`
    }, [date])

    return (
        <p className={classnames(style.caption, style.description)}>
            <span>{formattedDate}</span>
            {description &&
                <React.Fragment>
                    <span>&nbsp;&bull;&nbsp;</span>
                    <span className={style.descriptionText}>{useMarkup(description)}</span>
                </React.Fragment>
            }
        </p>
    )
}

DocumentDescription.propTypes = {
    description: PropTypes.string,
    date: PropTypes.object.isRequired
}
