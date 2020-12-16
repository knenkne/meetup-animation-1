import React from 'react'
import { PropTypes } from 'prop-types'
import { CapacityScale } from '@sbol/lib.creditability/src/scale'

export const CreditabilityIcon = (icon) => (
    <CapacityScale
        theme="capacity-scale-legacy"
        {...icon}
    />
)

CreditabilityIcon.displayName = 'CreditabilityIcon'

CreditabilityIcon.defaultProps = {
    icon: {}
}

CreditabilityIcon.propTypes = {
    icon: PropTypes.object
}
