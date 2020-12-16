import _ from 'lodash'
import { createSelector } from 'reselect'
import i18next from 'i18next'
import { Link } from '@sbol/lib.app'

import { formatDate } from '../../utils/format-date'
import { SUCCESS } from '../../../personal-menu/utils/constants'
import { INSURANCE_COLOR, GHOST_COLOR } from '../../../style-constants'
import { insuranceConsentLink as consentUrl, insuranceDashboardUrl } from '../../links'

const insuranceDictionary = {
    ghostIcon: 'icon:products/common/ic36Shield',
    errorIcon: 'icon:products/common/ic36Clock',
    shieldIcon: 'icon:products/common/ic36ShieldCheck',
    status: {
        active: {
            colorScheme: INSURANCE_COLOR,
            text: 'insurance.contract.active.description',
        },
        expired: {
            colorScheme: GHOST_COLOR,
            text: 'insurance.contract.expired.description',
        },
        awaiting: {
            colorScheme: INSURANCE_COLOR,
            text: 'insurance.contract.awaiting.description',
        },
    },
}

const ghostInsurance = [
    {
        id: 'ghostInsurance',
        name: 'region.scaffold:insurance.catalog.title',
        icon: insuranceDictionary.ghostIcon,
        styleInfoWrapper: 'ghost',
        colorScheme: INSURANCE_COLOR,
        href: insuranceDashboardUrl,
        type: 'ghost',
        message: {
            text: 'region.scaffold:insurance.catalog.description',
        },
    }
]

const getContractText = (contract) => {
    const date = contract.status === 'awaiting' ? contract.startDate : contract.endDate
    const formattedDate = formatDate(new Date(date))

    return i18next.t(insuranceDictionary.status[contract.status]?.text, { formattedDate })
}

const rootProductsSelector = (state) => state.products

const contractsSliceSelector = createSelector(
    rootProductsSelector,
    (products) => _.get(products, ['insurance', 'contracts'], {})
)

const contractsBodySelector = createSelector(
    contractsSliceSelector,
    (contractsSlice) => contractsSlice.body || {}
)

const contractsSelector = createSelector(
    contractsBodySelector,
    (body) => body.contracts || []
)

const agreementSelector = createSelector(
    contractsBodySelector,
    (body) => body.agreementState || {}
)

export const insuranceContractsStatus = createSelector(
    contractsSliceSelector,
    (contractsSlice) => contractsSlice.status
)

const contractsErrorSelector = createSelector(
    contractsSliceSelector,
    ({ error }) => {
        if (_.isEmpty(error)) {
            return []
        }

        return [
            {
                id: error.uuid,
                name: error.title,
                icon: insuranceDictionary.errorIcon,
                styleInfoWrapper: 'ghost',
                type: 'ghost',
                message: {
                    text: error.text,
                },
            }
        ]
    }
)

const contractsMessagesSelector = createSelector(
    contractsSliceSelector,
    ({ messages }) => {
        const message = _.first(messages)
        if (_.isEmpty(message)) {
            return []
        }

        return [
            {
                id: message.code,
                name: message.title,
                icon: insuranceDictionary.errorIcon,
                styleInfoWrapper: 'ghost',
                type: 'ghost',
                message: {
                    text: message.text,
                },
            }
        ]
    }
)

const mappedContractsSelector = createSelector(
    contractsSelector,
    (contracts) => contracts.map((contract) => _.assign(
        {
            id: contract.id,
            name: contract.title,
            productTag: contract.productTag,
            icon: insuranceDictionary.shieldIcon,
            href: Link.createUrl('link.welfare.insurance.dashboard.contract', { id: contract.id }),
            colorScheme: insuranceDictionary.status[contract.status]?.colorScheme,
            message: {
                text: getContractText(contract)
            },
            isContract: true,
        },
        contract.status === 'awaiting' && { notification: 'waiting' }
    ))
)

const agreementStateSelector = createSelector(
    agreementSelector,
    (agreement) => {
        if (_.isEmpty(agreement)) {
            return []
        }

        return [{
            id: 'InsuranceConsentObtainIb',
            name: agreement.title,
            icon: insuranceDictionary.shieldIcon,
            href: consentUrl,
            colorScheme: GHOST_COLOR,
            notification: 'repeat',
            message: {
                text: agreement.description
            },
        }]
    }
)

export const insuranceList = createSelector(
    mappedContractsSelector,
    agreementStateSelector,
    insuranceContractsStatus,
    contractsMessagesSelector,
    contractsErrorSelector,
    (contracts, agreementState, contractsStatus, messages, error) => {
        if (_.isEmpty(consentUrl)) {
            return {
                content: []
            }
        }

        const content = _.concat(contracts, agreementState, messages, error)
        const showGhost = contractsStatus === SUCCESS && content.length === 0

        return {
            title: 'region.scaffold:insurance.title',
            content: showGhost ? ghostInsurance : content,
            type: 'insurance',
            newProductUrl: insuranceDashboardUrl,
            initialOpen: false,
            feature: 'AccessInsuranceTab',
            refetchMessage: {
                title: 'refetch.button.name',
                icon: ''
            },
            refetchStatuses: [contractsStatus],
        }
    }
)
