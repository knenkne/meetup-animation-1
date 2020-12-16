import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

import { RegularIcon } from './regular-icon'

const CREDITABILITY = 'creditability'

export const ProductIconComponent = ({ icon, colorScheme, type }) => {
    // eslint-disable-next-line sonarjs/no-small-switch, comment: как в single-product-info
    switch (type) {
        case CREDITABILITY: {
            const CreditabilityComponent = lazy(() => import('./creditability-icon').then((module) => ({ default: module.CreditabilityIcon })))
            return (
                <Suspense fallback={null}>
                    <CreditabilityComponent {...icon} />
                </Suspense>
            )
        }
        default:
            return <RegularIcon icon={icon} colorScheme={colorScheme} type={type} size="self" />
    }
}

ProductIconComponent.defaultProps = {
    icon: '',
    type: '',
    colorScheme: ''
}

ProductIconComponent.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.string,
    colorScheme: PropTypes.string
}
