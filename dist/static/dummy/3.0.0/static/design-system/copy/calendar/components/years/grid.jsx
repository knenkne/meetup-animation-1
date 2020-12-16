import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import commonTableStyles from '../common/table.css'

import { Row } from './row'

const Grid = ({ items }) => (
    <div>
        <table
            className={commonTableStyles.table}
            data-unit="calendar:years"
        >
            <tbody>
                {_.map(items, (years, i) => (
                    <Row years={years} key={i} />
                ))}
            </tbody>
        </table>
    </div>
)

Grid.propTypes = {
    items: PropTypes.array,
}

Grid.defaultProps = {
    items: []
}

export { Grid }
