import _ from 'lodash'
import { createSelector } from 'reselect'
import { Link, getFeatureOption } from '@sbol/lib.app'

import { convertStringToDecimalNumber } from '../../utils/convert-string-to-decimal-number'
import { isStatusLoading, isStatusSuccess } from '../../../personal-menu/utils/helpers'
import { ERROR, LOADING, SUCCESS } from '../../../personal-menu/utils/constants'
import { checkFeature } from '../../../../utils/check-feature'
import { getProductMessage } from '../../utils/get-product-message'
import { getInvestmentIcon } from '../../utils/get-investments-icon'
import { GHOST_COLOR } from '../../../style-constants'

const FULL_RELOAD_LINKS = 'full.reload.links'
const BROKERAGE_NEW_CONTRACT = 'brokerage.new.contract'
const BROKERAGE_NEW_CONTRACT_DRAFT = 'brokerage.new.contract.draft'

const rootProductsSelector = (state) => state.products

const getContracts = createSelector(
    rootProductsSelector,
    (products) => _.get(products, ['brokerage', 'products', 'body', 'agreements'], [])
)

const getApplications = createSelector(
    rootProductsSelector,
    (products) => _.get(products, ['brokerage', 'products', 'body', 'applications'], [])
)

const getApplicationInvitation = createSelector(
    rootProductsSelector,
    (products) => _.get(products, ['brokerage', 'products', 'body', 'applicationInvitation'], false)
)

const hasNewProductPermission = () =>
    checkFeature('NewBrokerageProduct')

const getLink = (id, type) =>
    Link.createUrl(
        [BROKERAGE_NEW_CONTRACT], {
            from: type === 'ghost' ? 'prodmenu_body' : 'prodmenu',
            IIA: '0',
            notShowLanding: '0',
            notAskAddAgreement: '0'
        }
    )

export const brokerageStatus = createSelector(
    rootProductsSelector,
    (products) => _.get(products, ['brokerage', 'status'])
)

const getBrokerageRequestStatus = createSelector(
    rootProductsSelector,
    (products) => _.pickBy(_.get(products, 'brokerage.products'), (val, key) => _.includes(['success', 'error', 'messages'], key))
)

const agreementTypeText = {
    1: 'region.scaffold:brokerage.contract.main.description',
    2: 'region.scaffold:brokerage.contract.iis.description'
}

const marginCallText = {
    MarginCall: 'region.scaffold:brokerage.contract.margin.call',
    ClosePosition: 'region.scaffold:brokerage.contract.margin.call.close'
}

const setMarginCall = (mcMarket) => {
    const mcText = marginCallText[mcMarket]
    return mcText ? {
        notification: 'bad-attention',
        warning: true,
        ...getProductMessage(mcText, '', { strictName: true })
    } : {}
}

const mappedBrokerageContracts = createSelector(
    getContracts,
    (contracts) => contracts.map((contract) => ({
        id: contract.number,
        href: Link.createUrl('brokerage.contract', { id: contract.number }),
        linkRedirector: getFeatureOption('AccessBrokerageTab', FULL_RELOAD_LINKS),
        name: contract.number,
        additionalData: agreementTypeText[contract.agreementType],
        contractInfo: {
            amount: convertStringToDecimalNumber(_.get(contract, 'total.value', '')),
            currency: _.get(contract, 'total.currencyCode', '')
        },
        profitAmount: {
            amount: convertStringToDecimalNumber(_.get(contract, 'change.value', '')),
            currency: _.get(contract, 'change.currencyCode', ''),
            sign: _.get(contract, 'change.value') > 0 ? '+' : '',
        },
        ...setMarginCall(contract.mcMarket),
        ...contract,
        ...getInvestmentIcon('default')
    }))
)

const appNotificationIcon = {
    IN_PROCESS: 'waiting',
    STOPPED: 'waiting',
    DECLINED: 'bad-attention'
}

const appStatusIcon = {
    DRAFT: GHOST_COLOR,
    VERIFIED: GHOST_COLOR,
    STOPPED: GHOST_COLOR
}

const appStatusText = {
    DRAFT: 'region.scaffold:brokerage.application.status.draft',
    VERIFIED: 'region.scaffold:brokerage.application.status.draft',
    IN_PROCESS: 'region.scaffold:brokerage.application.status.progress',
    STOPPED: 'region.scaffold:brokerage.application.status.stopped',
    DECLINED: 'region.scaffold:brokerage.application.status.declined'
}

const mappedBrokerageApplications = createSelector(
    getApplications,
    (apps) => apps.map((app) => ({
        id: app.number,
        href: Link.createUrl(BROKERAGE_NEW_CONTRACT_DRAFT, { productCode: app.applicationType, id: app.number }),
        linkRedirector: getFeatureOption('AccessBrokerageTab', FULL_RELOAD_LINKS),
        name: 'region.scaffold:brokerage.application.title',
        strictTitle: true,
        notification: appNotificationIcon[app.statusCode],
        ...getProductMessage(appStatusText[app.statusCode], '', { strictName: true }),
        ...app,
        ...getInvestmentIcon('default', appStatusIcon[app.statusCode]),
    }))
)

const messageCodes = {
    INFO_INVITATION: 'InfoInvitation',
    INFO_PROHIBITION: 'InfoProhibition',
    INCOMPLETENESS: 'WarningIncompleteness',
}

export const errorCodes = {
    PBROKERAGE_TECH_BREAK_ERROR: 'PBROKERAGE_TECH_BREAK_ERROR',
}

const handleErrors = (base, error) => _.extend({}, base, {
    refetchStatus: SUCCESS,
    content: [
        {
            id: 'warning',
            name: error.text,
            icon: 'icon:products/common/ic24Exclamation',
            colorScheme: GHOST_COLOR,
            type: 'ghost',
            ...getProductMessage(error.text || 'region.scaffold:brokerage.error.tech.break.description', '', { strictName: _.isEmpty(error.text) })
        }
    ]
})

const handleMessages = (base, globalStatus, requestStatus, applicationInvitation) => {
    const messages = _.chain(requestStatus)
        .get('messages', [])
        .mapKeys((k) => k.code)
        .value()
    const result = _.extend({}, base)

    if (messages[messageCodes.INCOMPLETENESS]) {
        _.extend(result, {
            refetchStatus: isStatusLoading(globalStatus) ? LOADING : ERROR,
            refetchMessage: {
                title: 'region.scaffold:brokerage.warning.incompleteness.title',
                description: 'region.scaffold:brokerage.warning.incompleteness.description'
            }
        })
    } else if (messages[messageCodes.INFO_PROHIBITION]
        || (
            isStatusSuccess(globalStatus)
            // empty contracts and empty apps
            && _.isEmpty(result.content)
            && !applicationInvitation
        )
    ) {
        const text = _.get(messages, [messageCodes.INFO_PROHIBITION, 'text'])
        result.content = [{
            id: 'info_prohibition',
            name: text || 'region.scaffold:brokerage.warning.info.prohibition.text',
            strictTitle: _.isEmpty(text),
            icon: 'icon:products/common/ic36Document',
            colorScheme: GHOST_COLOR,
            type: 'ghost'
        }]
    } else if (_.isEmpty(result.content) && applicationInvitation && isStatusSuccess(globalStatus)) {
        const message = _.get(messages, messageCodes.INFO_INVITATION, {})
        result.content = [{
            id: 'ghostId',
            name: message.title || 'region.scaffold:brokerage.ghost.title',
            strictTitle: _.isEmpty(message.title),
            href: getLink(BROKERAGE_NEW_CONTRACT, 'ghost'),
            linkRedirector: getFeatureOption('AccessBrokerageTab', FULL_RELOAD_LINKS),
            type: 'ghost',
            ...getProductMessage(message.text || 'region.scaffold:brokerage.ghost.description', '', { strictName: _.isEmpty(message.text) }),
            ...getInvestmentIcon('default', GHOST_COLOR)
        }]
    }
    return result
}

export const brokerageList = createSelector(
    mappedBrokerageContracts,
    mappedBrokerageApplications,
    brokerageStatus,
    getBrokerageRequestStatus,
    getApplicationInvitation,
    (contracts = [], applications = [], globalStatus, requestStatus, applicationInvitation) => {
        const base = {
            title: 'brokerage',
            type: 'brokerage',
            newProductUrl: hasNewProductPermission() && getLink(BROKERAGE_NEW_CONTRACT),
            linkRedirector: getFeatureOption('AccessBrokerageTab', FULL_RELOAD_LINKS),
            initialOpen: false,
            feature: 'AccessBrokerageTab'
        }
        const { error } = requestStatus

        if (!_.isEmpty(contracts)) {
            base.content = contracts
        }
        if (_.isEmpty(contracts)) {
            base.content = applications
        }

        if (!_.isEmpty(error) && _.find(errorCodes, (code) => code === error.code)) {
            return handleErrors(base, error)
        }

        return handleMessages(base, globalStatus, requestStatus, applicationInvitation)
    }
)
