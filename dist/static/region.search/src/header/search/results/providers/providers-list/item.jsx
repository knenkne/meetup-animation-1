import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link } from '@sbol/lib.ui'
import { getNavigationValue } from '@sbol/lib.app'

import ResultsHandlerContext from '../../results-handler-context'

import styles from './item.css'
import { ProviderIcon } from './components/provider-icon/provider-icon'
import { DocumentTitle } from './components/documents/document-title'
import { DocumentDescription } from './components/documents/document-description'

export class Item extends React.PureComponent {
    static contextType = ResultsHandlerContext

    /**
     * Обработчик клика по всей плашке.
     * @return {undefined} - ничего не возвращает
     */
    handleOperationClick = () => {
        const { clickMetric, provider } = this.props
        const handleSearchResultClick = this.context
        const providerName = _.get(provider, 'provider.name', null)
        const serviceName = _.get(provider, 'service.name', null)
        const categoryTitle = _.get(provider, 'category.title', null)
        const title = providerName || serviceName || categoryTitle

        if (title) {
            handleSearchResultClick(title)
        }

        clickMetric(provider)
    }

    render () {

        const title = _.get(this.props.provider, 'provider.name')
        const description = _.get(this.props.provider, 'service.name') || _.get(this.props.provider, 'category.title') || _.get(this.props.provider, 'category.description')

        const rawIcon =
            _.get(this.props.provider, 'category.imgURL.staticImage.url') ||
            _.get(this.props.provider, 'service.imgURL.staticImage.url') ||
            _.get(this.props.provider, 'provider.imgURL.staticImage.url')

        const icon = {
            default: 'other',
            external: rawIcon
        }

        const providerId = _.get(this.props.provider, 'provider.id', _.get(this.props.provider, 'service.id'))

        // fixme: брать либо из navigation, либо из конфига строить на основе erib.url
        const paymentsUrl = _.replace(getNavigationValue('MAIN', ''), 'accounts.do', 'payments/servicesPayments/edit.do')
        const url = `${paymentsUrl}?recipient=${providerId}`

        return (
            <Link theme={{ link: styles.statement }} href={url} onClick={this.handleOperationClick} external={false}>
                <div className={styles.operation}>
                    <ProviderIcon icon={icon} />
                    <div className={styles.operationContent}>
                        <div className={styles.operationTitle}>
                            <DocumentTitle title={title} />
                        </div>
                        <div className={styles.operationDescription}>
                            <DocumentDescription description={description} />
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

Item.propTypes = {
    provider: PropTypes.shape({
        autoPaymentSupported: PropTypes.bool.isRequired,
        billing: PropTypes.number.isRequired,
        isBarSupported: PropTypes.bool.isRequired,

        provider: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            imgURL: PropTypes.shape({
                staticImage: PropTypes.shape({
                    url: PropTypes.string
                })
            })
        }),
        service: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            imgURL: PropTypes.shape({
                staticImage: PropTypes.shape({
                    url: PropTypes.string
                })
            })
        }),

        INN: PropTypes.number,
        accountNumber: PropTypes.string,
        category: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            description: PropTypes.string,
            imgURL: PropTypes.shape({
                staticImage: PropTypes.shape({
                    url: PropTypes.string
                })
            })
        })

    }).isRequired,
    clickMetric: PropTypes.func
}

Item.defaultProps = {
    provider: {
        name: '',
        imgURL: {
            staticImage: {
                url: ''
            }
        }
    },
    service: {
        name: '',
        imgURL: {
            staticImage: {
                url: ''
            }
        }
    },
    category: {
        title: '',
        description: '',
        imgURL: {
            staticImage: {
                url: ''
            }
        }
    },
    clickMetric: _.identity
}
