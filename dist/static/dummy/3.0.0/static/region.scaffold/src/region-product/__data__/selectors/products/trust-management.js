import _ from 'lodash'
import { createSelector } from 'reselect'
import i18next from 'i18next'
import { Link } from '@sbol/lib.app'

import { onProductBusinessError, onProductLoadingError, onProductNonBlockingError } from '../../../../analytics'
import { convertStringToDecimalNumber } from '../../utils/convert-string-to-decimal-number'
import { isStatusLoading, isStatusError } from '../../../personal-menu/utils/helpers'
import { checkFeature } from '../../../../utils/check-feature'
import { ERROR, LOADING, SUCCESS } from '../../../personal-menu/utils/constants'
import { getInvestmentIcon } from '../../utils/get-investments-icon'
import {
    INVESTMENTS_COLOR,
    ERROR_COLOR,
    GHOST_COLOR
} from '../../../style-constants'

import { getInvestmentsServiceData } from './investments-service/get-investments-service-data'
import { makeItemLink } from './investments-service/make-item-link'
import { moduleOptions } from './investments-service/enums'

const SCAFFOLD_PKG_NAME = 'region.scaffold'

const TYPE = 'trustManagement'

const isInvestmentsService = checkFeature(moduleOptions.featureName.investmentsIisAndDuService, moduleOptions.moduleName.regionScaffold)

const serviceCards = ['messageCard', 'agreementRequest', 'notification']

const buildInvestmentsUrl = () => Link.createUrl('investments.dashboard')

const buildWfUrl = () => {
    const url = buildInvestmentsUrl()

    return url && `${url}/agreement?processName=WelfareAgreementRequest`
}

const buildContent = (content, message = '', status) => ({
    title: 'investments.trust.management',
    content,
    type: TYPE,
    initialOpen: false,
    message,
    feature: 'AccessInvestmentTab',
    contractsStatus: status
})

const investmentsProductsSelector = (state) => state.products.investments

const productCategory = {
    pif: 'cat_opif',
    iis: 'cat_iis',
    dy: 'cat_dy',
    ili: 'cat_ili',
    ali: 'cat_ali'
}

const { pif, iis, dy, ili, ali } = productCategory

const investmentsIconDictionary = {
    startInvesting: {
        icon: 'icon:products/common/ic36CirclePlus',
        colorScheme: INVESTMENTS_COLOR
    },
    alertIcon: {
        icon: 'icon:products/common/ic36Exclamation',
        colorScheme: ERROR_COLOR
    },
    lackProductIcon: {
        icon: 'icon:products/common/ic36Document',
        colorScheme: GHOST_COLOR
    },
    notAgreementIcon: {
        icon: 'icon:products/common/ic36CaseDiagram',
        colorScheme: GHOST_COLOR
    }
}

const CATEGORIES_SIMPLE_INSURANCE = [ili, ali]

const buildListElement = ({ message, ...rest }) => ({
    message: {
        text: message
    },
    ...rest
})

const buildError = ({ href = '', icon = investmentsIconDictionary.alertIcon, ...rest }) =>
    buildListElement({ href, ...icon, ...rest })


const buildAgreement = (
    {
        icon = getInvestmentIcon({ productCategory: '' }),
        href = buildWfUrl(),
        ...rest
    }) => buildListElement({ href, ...icon, ...rest })


const investmentsSelector = createSelector(
    investmentsProductsSelector,
    (products) => _.get(products, 'investmentsObj.body.contracts', [])
)

const buildGhost = () => checkFeature('NewInvestmentProduct', SCAFFOLD_PKG_NAME) ?
    buildListElement({
        id: 'ghostId',
        name: 'investments.add.title',
        type: 'ghost',
        href: buildInvestmentsUrl(),
        message: 'investments.add.description',
        ...investmentsIconDictionary.startInvesting
    }) : {
        id: 'ghostId',
        type: 'ghost',
        name: 'investments.nocontracts.description',
        ...investmentsIconDictionary.lackProductIcon,
    }

const ghostStyle = (contract) => [[ili], 'daughterAgreement'].includes(contract?.productCategory)

const getAdditionalData = (info, content) => i18next.t(info, { content })

const investmentsInfo = (contract) => {
    const lastUpdate = contract?.lastUpdateDate
    const type = _.get(contract, 'productCategory', '')
    const status = _.get(contract, 'state.code', '').toLowerCase()

    const contractInfo = {
        amount: convertStringToDecimalNumber(_.get(contract, 'totalAmount.value', '')),
        currency: _.get(contract, 'totalAmount.currency', ''),
    }

    const profitAmount = {
        amount: convertStringToDecimalNumber(_.get(contract, 'profitAmount.value', '')),
        currency: _.get(contract, 'profitAmount.currency', ''),
        sign: _.get(contract, 'profitAmount.value') > 0 ? '+' : '',
    }

    if (_.isEmpty(lastUpdate)) {
        if ([iis, dy].includes(type)) {
            return {
                contractInfo,
                profitAmount,
                additionalData: contract?.dateFrom &&
                    getAdditionalData('investments.date.from', contract?.dateFrom)
            }
        }

        if (pif === type) {
            return {
                contractInfo,
                profitAmount,
                additionalData: contract?.contractNumber &&
                    getAdditionalData('investments.productAccount', contract?.contractNumber)
            }
        }

        if (CATEGORIES_SIMPLE_INSURANCE.includes(type)) {
            return status === 'payment' ?
                {
                    contractInfo,
                    additionalData: getAdditionalData('investments.status.payment'),
                } :
                {
                    contractInfo,
                    profitAmount,
                    additionalData: getAdditionalData('investments.insurance.description.till', contract?.dateTo),
                }
        }
    }

    return {
        contractInfo,
        profitAmount,
        lastUpdate,
        additionalData: getAdditionalData('investments.insurance.description.till.warning', lastUpdate?.text),
    }
}

const commonAgreementSelector = createSelector(
    investmentsProductsSelector,
    (products) => {
        const agreement = _.get(products, 'investmentsObj.body.personalDataAgreement', null)

        return agreement === null ? true : agreement
    }
)

const daughterAgreementSelector = createSelector(
    investmentsProductsSelector,
    (products) => !_.get(products, 'investmentsObj.body.newproductavailable')
)

const errorsSelector = createSelector(
    investmentsProductsSelector,
    (products) => _.get(products, 'investmentsObj.error', '')
)

export const serviceSuccess = createSelector(
    investmentsProductsSelector,
    (products) => _.get(products, 'investmentsObj.success', false)
)

const mappedTrustManagement = createSelector(
    investmentsSelector,
    (list) => list.filter(({ viewType }) => !serviceCards.includes(viewType))
        .map(({ id, productName: name, ...another }) => ({
            id,
            productCategory: another.productCategory,
            productCode: another.productCode,
            contractNumber: another.contractNumber,
            name,
            colorScheme: ghostStyle(another) ? GHOST_COLOR : '',
            ...investmentsInfo(another),
            ...getInvestmentIcon(another)
        }))
)

const agreementStateSelector = createSelector(
    commonAgreementSelector,
    daughterAgreementSelector,
    (commonAgreement, daughterAgreement) => {
        const showAgreement = checkFeature('ShowInvestmentConsentProcess', SCAFFOLD_PKG_NAME)

        if (!commonAgreement && showAgreement) {
            const agreementContent = {
                id: 'commonAgreement',
                name: i18next.t('investments.find.title'),
                notification: 'bad-attention',
                message: i18next.t('investments.agreement.description'),
                colorScheme: GHOST_COLOR,
            }

            return buildAgreement(agreementContent)
        }

        if (!commonAgreement && !showAgreement) {
            const agreementContent = {
                name: i18next.t('investments.find.title.turnoff'),
                id: 'commonAgreement',
                message: i18next.t('investments.find.description.turnoff'),
                ...investmentsIconDictionary.notAgreementIcon
            }

            return buildListElement(agreementContent)
        }

        if (!daughterAgreement && showAgreement) {
            const agreementContent = {
                colorScheme: GHOST_COLOR,
                id: 'daughterAgreement',
                name: i18next.t('investments.findMore.title'),
                message: i18next.t('investments.agreement.description'),
                notification: 'repeat',
            }

            return buildAgreement(agreementContent)
        }

        if (!daughterAgreement && !showAgreement) {
            const agreementContent = {
                name: i18next.t('investments.find.title.turnoff'),
                id: 'daughterAgreement',
                message: i18next.t('investments.find.description.turnoff'),
                ...investmentsIconDictionary.notAgreementIcon
            }

            return buildListElement(agreementContent)
        }

        return null
    }
)

export const residentError = createSelector(
    serviceSuccess,
    errorsSelector,
    (success, error) => {
        if (!success && error?.code === 'SC_03') {
            const errContent = {
                id: 'citizenshipError',
                name: i18next.t('investments.insurance.error.citizenship.title'),
                message: i18next.t('investments.insurance.error.citizenship.description'),
                isProduct: false
            }

            return buildError(errContent)
        }

        return null
    }
)

export const trustManagementStatus = createSelector(
    investmentsProductsSelector,
    serviceSuccess,
    residentError,
    (products, success, error) => {
        const natureStatus = _.get(products, 'status')

        return !success && !error && natureStatus !== LOADING ? ERROR : natureStatus
    }
)

const messagesSelector = createSelector(
    investmentsProductsSelector,
    serviceSuccess,
    residentError,
    (products, success, error) => {
        const natureStatus = _.get(products, 'status')

        if (!success && !error && natureStatus !== LOADING) {
            const message = {
                title: i18next.t('investments.insurance.error.network.title'),
                description: i18next.t('investments.insurance.error.network.description')
            }

            if (natureStatus === SUCCESS || natureStatus === ERROR) {
                onProductLoadingError(TYPE)
            }

            return message
        }

        const message = _.get(products, 'investmentsObj.messages[0]', {})

        if (message.type === ERROR) {
            onProductNonBlockingError(TYPE)
        }

        return {
            title: message?.title,
            description: message?.text,
            ...message
        }
    }
)

const errorsStateSelector = createSelector(
    messagesSelector,
    residentError,
    serviceSuccess,
    (message, error, success) => {
        if (error) {
            return error
        }

        if (success && message?.type === 'ERROR') {
            const errContent = {
                id: 'anotherError',
                name: message?.title || '',
                message: message?.text || ''
            }

            return buildError(errContent)
        }

        return null
    }
)

export const buildCurrentContentIfEmptyContracts = (buildProps) => {
    const { buildCurrentContent, ghost, productsIisAndDu } = buildProps

    if (isInvestmentsService) {
        return buildCurrentContent(getInvestmentsServiceData([ghost], productsIisAndDu))
    }

    return buildCurrentContent([ghost])
}

export const trustManagementList = createSelector(
    agreementStateSelector,
    mappedTrustManagement,
    trustManagementStatus,
    messagesSelector,
    errorsStateSelector,
    // eslint-disable-next-line complexity, comment: TODO разнести логику на разные селекторы
    (agreement, contracts, investStatus, message, error) => {
        let result = []

        const productsIisAndDu = {
            iis: [
                { productCode: 'iia_saving', name: i18next.t('iia.saving.title'), amount: i18next.t('iia.saving.amount') },
                { productCode: 'iia_roubleshares', name: i18next.t('region.scaffold:iia.roubleshares.title'), amount: i18next.t('region.scaffold:iia.roubleshares.amount') }
            ],
            du: [
                { productCode: 'trust_bonded_income', name: i18next.t('region.scaffold:trust.bonded.income.title'), amount: i18next.t('region.scaffold:trust.bonded.income.amount') },
                { productCode: 'trust_balanced_income', name: i18next.t('region.scaffold:trust.balanced.income.title'), amount: i18next.t('region.scaffold:trust.balanced.income.amount') }
            ]
        }

        const ghost = buildGhost()
        const buildCurrentContent = (content) => buildContent(content, message, investStatus)

        const buildProps = { buildCurrentContent, ghost, productsIisAndDu }

        if (isStatusLoading(investStatus) || isStatusError(investStatus)) {
            return buildCurrentContent(result)
        }

        if (error?.id === 'citizenshipError') {
            onProductBusinessError(TYPE)

            return buildCurrentContent([error])
        }

        if (agreement && agreement.id === 'commonAgreement') {
            return buildCurrentContent([agreement])
        }

        if (agreement && _.isEmpty(contracts)) {
            return buildCurrentContent([agreement])
        }

        if (!error && _.isEmpty(contracts)) {
            return buildCurrentContentIfEmptyContracts(buildProps)
        }

        if (error) {
            result.push(error)
        }

        if (agreement) {
            result.push(agreement)
        }

        result = [...result, ...contracts]

        result = makeItemLink(result)

        if (isInvestmentsService) {
            result = getInvestmentsServiceData(result, productsIisAndDu)
        }

        return buildCurrentContent(result)
    }
)
