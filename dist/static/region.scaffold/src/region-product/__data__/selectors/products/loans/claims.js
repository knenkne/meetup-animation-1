import _ from 'lodash'
import { createSelector } from 'reselect'
import { getOption } from '@sbol/lib.app'

import { isClaimDraft } from '../../../../personal-menu/utils/helpers'
import { makeArray } from '../../utils'
import { getRelativePathOperationUrl } from '../../../links'
import { calcPlUrl } from '../../../../../utils/links'
import { parseFakeISO } from '../../../utils/parse-fake-iso'
import { isDateInterval } from '../../../utils/is-date-interval'
import { GHOST_COLOR, LOANS_COLOR } from '../../../../style-constants'


import { loanClaimsInfo, autoLoanClaimsInfo } from './utils'
import {
    LOAN_CLAIM,
    REFINANCING_CLAIM,
    loanClaimsFinished,
    loanIcon,
    loanIconDictionary,
    loanClaimTitle
} from './dictionaries'

// Платформенная настройка, 7 дней
const DEFAULT_DAYS_RANGE = 7
const Depth1 = getOption('Depth1', 'region.scaffold') || DEFAULT_DAYS_RANGE

const rootProductsSelector = (state) => state.products
const legacyClaimsSelector = createSelector(
    rootProductsSelector,
    (products) => makeArray(_.get(products, 'claims.claimList'))
)

export const autoLoanClaimsSelector = createSelector(
    rootProductsSelector,
    (products) => makeArray(_.get(products, 'autoLoans.loansList.documents'))
)

export const claimsStatus = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'claims.status')
)

export const loanClaimsSelector = createSelector(
    legacyClaimsSelector,
    (claims) => claims
        .filter((claim) =>
            claim.form === LOAN_CLAIM ||
            claim.form === REFINANCING_CLAIM)
        .filter((claim) =>
            // для каждого продукта выполняется дополнительная фильтрация -
            // завершённые заявки ограничиваются диапазоном createdDate [текущая дата-Depth1, текущая дата]
            !loanClaimsFinished.includes(claim.state) || isDateInterval(parseFakeISO(claim.date), Depth1)
        )
        .filter((claim) =>
            claim.state !== 'ISSUED'
        )
)

export const loanClaimsMapped = createSelector(
    loanClaimsSelector,
    (claims) => claims.map((claim) => {
        const colorScheme = isClaimDraft(claim.state) ? GHOST_COLOR : LOANS_COLOR
        return {
            id: claim.ufsId,
            name: loanClaimTitle(claim),
            icon: loanIcon({ name: claim.description }),
            colorScheme,
            currency: {
                amount: _.get(claim, 'operationAmount.amount', ''),
                currency: _.get(claim, 'operationAmount.currency.code', '')
            },
            ...loanClaimsInfo(claim),
            ...getRelativePathOperationUrl({ ...claim, documentId: claim.ufsId, form: claim.form, isArchive: false }),
            iconStyle: isClaimDraft(claim.state) ? 'draft-icon' : ''
        }
    })
)

export const autoLoanClaimsMapped = createSelector(
    autoLoanClaimsSelector,
    (claims) => claims.map((claim) => {
        const colorScheme = isClaimDraft(claim.status) ? GHOST_COLOR : LOANS_COLOR
        return {
            id: claim.documentId,
            name: claim.productName,
            icon: loanIconDictionary.auto.icon,
            colorScheme,
            currency: {
                amount: _.get(claim, 'amount'),
                currency: 'RUB'
            },
            ...autoLoanClaimsInfo(claim),
            href: calcPlUrl(`/loans/car/dashboard?pid=${claim.documentId}`),
            iconStyle: isClaimDraft(claim.status) ? 'draft-icon' : ''
        }
    })
)
