import React from 'react'
import _ from 'lodash'

import { Input } from '../input'

import defaultTheme from './style.css'

const getBoundaries = (props) => {
    if (props.options) {
        return {
            min: _.first(props.options).title,
            max: _.last(props.options).title
        }
    } else if (props.grid) {
        return {
            min: Input.formatNumberValue(_.first(props.grid).toString(), props),
            max: Input.formatNumberValue(_.last(props.grid).toString(), props)
        }
    }

    return {
        min: Input.formatNumberValue(props.min.toString(), props),
        max: Input.formatNumberValue(props.max.toString(), props)
    }
}

export const Boundaries = (props) => {
    const { min, max } = getBoundaries(props)

    return (
        <div className={defaultTheme.boundaries}>
            <div className={defaultTheme.min}>
                {min}
            </div>
            <div className={defaultTheme.max}>
                {max}
            </div>
        </div>
    )
}
