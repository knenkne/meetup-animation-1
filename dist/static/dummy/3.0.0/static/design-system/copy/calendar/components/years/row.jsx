import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { fullISOFormat } from '../../utils'
import commonTableStyles from '../common/table.css'

import { Cell } from './cell'

const Row = ({ years }) => (
    <tr className={commonTableStyles.tableRow}>
        {_.map(years, (year, index) => (
            <Cell year={fullISOFormat(year)} key={index} />
        ))}
    </tr>
)

Row.propTypes = {
    years: PropTypes.array.isRequired
}

export { Row }
