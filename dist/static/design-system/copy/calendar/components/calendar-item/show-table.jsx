import React from 'react'
import PropTypes from 'prop-types'

import { Months } from '../months'
import { Quarters } from '../quarters'
import { Month } from '../month'
import { Years } from '../years'
import { CALENDAR_MODES } from '../../constants'

export const ShowTable = ({ showComponent }) => {
    switch (showComponent) {
        case CALENDAR_MODES.MONTHS:
            return <Months />
        case CALENDAR_MODES.QUARTERS:
            return <Quarters />
        case CALENDAR_MODES.YEARS:
            return <Years />
        default:
            return <Month />
    }
}

ShowTable.propTypes = {
    showComponent: PropTypes.string.isRequired
}
