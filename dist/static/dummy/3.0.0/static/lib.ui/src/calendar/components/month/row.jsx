import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Cell } from './cell'
import style from './style.css'

export const Row = ({ week }) => (
    <tr className={style.row}>
        {_.map(week, (date, index) => <Cell date={date} key={index} />)}
    </tr>
)

Row.propTypes = {
    week: PropTypes.array.isRequired
}
