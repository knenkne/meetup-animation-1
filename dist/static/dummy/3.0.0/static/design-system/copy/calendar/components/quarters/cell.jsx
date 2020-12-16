import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

import { LOCALE } from '../../constants'

import style from './style.css'

export const Cell = ({ month }) => (
    <span className={style.month}>
        {format(month, 'MMMM', LOCALE)}
    </span>
)

Cell.propTypes = {
    month: PropTypes.string.isRequired
}
