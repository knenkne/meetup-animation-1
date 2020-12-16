import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { fullISOFormat } from '../../utils'
import commonTableStyles from '../common/table.css'

import { Cell } from './cell'

export const Row = ({ part }) => (
    <tr key={_.first(part)} className={commonTableStyles.tableRow}>
        {_.map(part, (month, monthKey) => (
            <Cell month={fullISOFormat(month)} key={monthKey} />
        ))}
    </tr>
)

Row.propTypes = {
    part: PropTypes.arrayOf(PropTypes.string).isRequired
}
