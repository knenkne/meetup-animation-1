import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link, Icon } from '@sbol/lib.ui'
import { Link as ConnectedLink } from '@sbol/lib.app'

import ResultsHandlerContext from '../../results-handler-context'
import { operationLink, eribUrl } from '../../../../../utils'
import { calculate } from '../../utils/processByForm/operationsHistory/content'

import styles from './operations-item.css'
import { MerchantIcon } from './components/merchant-icon/merchant-icon'
import { Amount } from './components/amount/amount'
import { getDefaultOperationIcon } from './default-operation-icon'
import { DocumentTitle } from './components/documents/document-title'
import { DocumentDescription } from './components/documents/document-description'
import { joinUrl } from './utils'

export class OperationsItem extends React.Component {
    static contextType = ResultsHandlerContext

    /**
     * Обработчик клика по всей плашке.
     * @return {undefined} - ничего не возвращает
     */
    handleOperationClick = () => {
        const { clickMetric, operation } = this.props
        const handleSearchResultClick = this.context
        const title = operation.description || operation.from || operation.to

        if (title) {
            handleSearchResultClick(title)
        }

        clickMetric(operation)
    }

    /**
     * Обработчик клика по иконке повтора операции.
     * @param {Object} e - событие
     * @return {undefined} - ничего не возвращает
     */
    handleRepeatClick = (e) => {
        e.stopPropagation()
        const { repeatClickMetric, operation } = this.props

        repeatClickMetric(operation)
    }

    render () {
        const operationStatus = _.toLower(
            _.get(this.props.operation, 'state', '')
        )
        const toResource = _.get(this.props.operation, 'to', '')
        const rawDescription = _.get(this.props.operation, 'description', '')
        const operationDate = _.get(this.props.operation, 'date', '')
        const operationId = _.get(this.props.operation, 'id', '')
        const operationTemplatable = _.get(this.props.operation, 'templatable', false)
        const { title, description } = calculate(toResource, rawDescription)
        const amount = {
            value: _.get(this.props.operation, 'operationAmount.amount', 0),
            currency: _.get(
                this.props.operation,
                'operationAmount.currency.name'
            ),
            code: _.get(this.props.operation, 'operationAmount.currency.code')
        }
        const commission = _.get(this.props.operation, 'commission.amount', 0)
        const rawIcon = _.get(this.props.operation, 'imageId.staticImage.url')
        const icon = {
            default: getDefaultOperationIcon(this.props.operation),
            external: rawIcon
        }

        return (
            <div className={styles.main}>
                <Link
                    theme={{ link: styles.statement }}
                    href={operationLink(this.props.operation)}
                    onClick={this.handleOperationClick}
                    external={false}
                >
                    <div className={styles.operation}>
                        <MerchantIcon icon={icon} />
                        <div className={styles.operationContent}>
                            <div className={styles.operationTitle}>
                                <DocumentTitle title={title} />
                                <Amount
                                    amount={amount}
                                    commission={commission}
                                    operationStatus={operationStatus}
                                />
                            </div>
                            <div className={styles.operationSubtitle}>
                                <div className={styles.operationDescription}>
                                    <DocumentDescription
                                        description={description}
                                        date={operationDate}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                {operationId && operationTemplatable && <div className={styles.operationIcon}>
                    <Link
                        href={joinUrl(
                            `${eribUrl}/PhizIC/private`,
                            ConnectedLink.createUrl('payments.payment.repeat', { id: operationId }))
                        }
                        theme={{ link: styles.operationIconLink }}
                        external={false}
                        onClick={this.handleRepeatClick}
                    >
                        <Icon name="icon:core/product-status/repeat" size="xs" />
                    </Link>
                </div>}
            </div>
        )
    }
}

OperationsItem.propTypes = {
    operation: PropTypes.shape({
        id: PropTypes.number.isRequired,
        ufsId: PropTypes.string,
        state: PropTypes.string.isRequired,
        date: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
            PropTypes.instanceOf(Date)
        ]).isRequired,
        from: PropTypes.string,
        to: PropTypes.string,
        description: PropTypes.string,
        operationAmount: PropTypes.shape({
            amount: PropTypes.number.isRequired,
            currency: PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            })
        }),
        isMobilePayment: PropTypes.bool.isRequired,
        copyable: PropTypes.bool.isRequired,
        templatable: PropTypes.bool.isRequired,
        autopayable: PropTypes.bool.isRequired,
        type: PropTypes.string.isRequired,
        invoiceSubscriptionSupported: PropTypes.bool.isRequired,
        invoiceReminderSupported: PropTypes.bool.isRequired,
        form: PropTypes.string.isRequired,
        imageId: PropTypes.shape({
            staticImage: PropTypes.shape({
                url: PropTypes.string.isRequired
            })
        })
    }).isRequired,
    clickMetric: PropTypes.func,
    repeatClickMetric: PropTypes.func
}

OperationsItem.defaultProps = {
    clickMetric: _.identity,
    repeatClickMetric: _.identity,
    operation: {
        from: '',
        to: '',
        description: ''
    }
}
