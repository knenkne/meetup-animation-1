import React from 'react'
import _ from 'lodash'

import { Loan } from './loan'
import { Order } from './order'

export const LoanInfo = (product) =>
    _.get(product, 'orderType') ?
        <Order {...product} /> :
        <Loan {...product} />

LoanInfo.displayName = 'LoanInfo'
