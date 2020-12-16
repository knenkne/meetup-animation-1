import React from 'react'
import { PropTypes } from 'prop-types'

import { CardInfo } from './card'
import { AccountInfo } from './account'
import { ImpersonalMetalAccountInfo } from './impersonal-metal-accounts'
import { DefaultProductInfo } from './default-product'
import { DepoProductInfo } from './depo'
import { TargetInfo } from './target'
import { TrustManagementInfo } from './trust-management'
import { CertificateInfo } from './certificates'
import { BrokerageInfo } from './brokerage'
import { LoanInfo } from './loan'

export const SingleProductInfoWrapper = (product) => {
    switch (product.type) {
        case 'cards':
            return <CardInfo {...product} />
        case 'accounts':
            return <AccountInfo {...product} />
        case 'imaccounts':
            return <ImpersonalMetalAccountInfo {...product} />
        case 'loans':
            return <LoanInfo {...product} />
        case 'depo':
            return <DepoProductInfo {...product} />
        case 'targets':
            return <TargetInfo {...product} />
        case 'trustManagement':
            return <TrustManagementInfo {...product} />
        case 'certificates':
            return <CertificateInfo {...product} />
        case 'brokerage':
            return <BrokerageInfo {...product} />
        default:
            return <DefaultProductInfo {...product} />
    }
}

SingleProductInfoWrapper.displayName = 'SingleProductInfoWrapper'

SingleProductInfoWrapper.defaultProps = {
    type: ''
}
SingleProductInfoWrapper.propTypes = {
    type: PropTypes.string
}
