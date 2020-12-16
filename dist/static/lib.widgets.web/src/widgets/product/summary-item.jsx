import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import defaultTheme from './summary-item.css'

export const SummaryItem = ({ item: { properties, properties: { description }, title }, theme, getValue }) => {
    const value = getValue(properties)

    if (!title && !description && !value) {
        return null
    }

    return (
        <div className={theme.item}>
            {title &&
            <div className={theme.title}>{title}</div>
            }
            {value &&
            <div className={theme.value}>
                {value} {description}
            </div>
            }
        </div>
    )
}

SummaryItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.string,
        properties: PropTypes.object
    }),
    theme: PropTypes.shape({
        item: PropTypes.string,
        title: PropTypes.string,
        value: PropTypes.string,
        description: PropTypes.string
    }),
    getValue: PropTypes.func
}
SummaryItem.defaultProps = {
    item: {},
    theme: defaultTheme,
    getValue: _.noop
}
