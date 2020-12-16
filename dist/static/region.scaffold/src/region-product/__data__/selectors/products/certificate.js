import { createSelector } from 'reselect'
import _ from 'lodash'
import dateFns from 'date-fns'

import { makeArray } from '../utils'
import { urlCertificateDetail } from '../../links'
import { formatDate } from '../../utils/format-date'
import { parseFakeISO } from '../../utils/parse-fake-iso'
import { convertStringToDecimalNumber } from '../../utils/convert-string-to-decimal-number'
import { GHOST_COLOR, DEPO_COLOR } from '../../../style-constants'

const rootProductsSelector = (state) => state.products

const certificateSelector = createSelector(
    rootProductsSelector,
    (products) =>
        makeArray(
            _.get(products, 'securityAccounts.securityAccount', _.get(products, 'securityaccounts.securityaccount', []))
        )
)

export const certificateStatus = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'securityAccounts.status', _.get(products, 'securityaccounts.status'))
)

const mapperForCertificates = (certificate) => ({
    id: parseInt(certificate.id, 10),
    name: 'region.scaffold:certificate',
    icon: 'icon:products/common/ic36Document',
    colorScheme: DEPO_COLOR,
    href: urlCertificateDetail(certificate.id),
    currency: {
        amount: _.get(certificate, 'nominalAmount.amount', ''),
        currency: _.get(certificate, 'nominalAmount.currency.code', '')
    },
    closeDate: certificate?.termStartDate && formatDate(dateFns.addDays(parseFakeISO(certificate.termStartDate), Number(certificate.termDays))),
    rate: convertStringToDecimalNumber(certificate.incomeRate),
})

const attentionTextCertificate = {
    id: 'attentionTextCertificate',
    name: 'certificate.attention.text',
    icon: 'icon:products/common/ic36Document',
    colorScheme: GHOST_COLOR,
    type: 'ghost',
}

const mappedCertificate = createSelector(
    certificateSelector,
    (certificate) =>
        certificate.map(mapperForCertificates)
)

export const certificateList = createSelector(
    mappedCertificate,
    (certificate) => ({
        title: 'region.scaffold:certificates',
        content: certificate?.length ? [attentionTextCertificate, ...certificate] : [],
        type: 'certificates',
        displayIfEmpty: false,
        feature: 'AccessSecurityAccTab',
    })
)

