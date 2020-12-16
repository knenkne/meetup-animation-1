import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@sbol/lib.ui'
import _ from 'lodash'

import ResultsHandlerContext from '../results-handler-context'

import styles from './product.css'
import { Icon } from './product/icon/icon'
import { DocumentTitle } from './product/documents/document-title'
import { Amount } from './product/amount/amount'
import { DocumentDescription } from './product/documents/document-description'

export const ProductComponent = ({
    product,
    productsFromPage,
    clickMetric,
    clickFromPageMetric,
    handleProductClick
}) => {
    const {
        title,
        description,
        icon,
        amount,
        amountCurrency,
        additionalAmount,
        additionalAmountCurrency,
        href
    } = product

    const handleProductComponentClick = useCallback(() => {
        handleProductClick(product.title)

        if (productsFromPage) {
            clickFromPageMetric(product)
        } else {
            clickMetric(product)
        }
    }, [])

    return (
        <Link
            theme={{ link: styles.statement }}
            href={href}
            onClick={handleProductComponentClick}
        >
            <div className={styles.operation}>
                <Icon name={icon} />
                <div className={styles.operationContent}>
                    <div className={styles.operationTitle}>
                        <DocumentTitle title={title} />
                        <Amount
                            amount={amount}
                            currency={amountCurrency}
                        />
                    </div>
                    <div className={styles.operationDescription}>
                        <DocumentDescription
                            description={description}
                            additionalAmount={additionalAmount}
                            additionalAmountCurrency={
                                additionalAmountCurrency
                            }
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

ProductComponent.propTypes = {
    product: PropTypes.shape({
        type: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        amount: PropTypes.string,
        amountCurrency: PropTypes.string,
        additionalAmount: PropTypes.string,
        additionalAmountCurrency: PropTypes.string
    }).isRequired,
    productsFromPage: PropTypes.bool.isRequired,
    clickMetric: PropTypes.func,
    clickFromPageMetric: PropTypes.func,
    handleProductClick: PropTypes.func.isRequired
}

ProductComponent.defaultProps = {
    clickMetric: _.identity,
    clickFromPageMetric: _.identity
}

/**
 * Обертка для компонента "Продукт", передающая в него методы из контекста, упрощает тестирование компонента ProductComponent.
 * @param {Object} props - пропсы, переданные из родителя
 * @return {Context} - объект контекста
 */

export const Product = (props) => (

    <ResultsHandlerContext.Consumer>
        {(handleProductClick) => (
            <ProductComponent
                {...props}
                handleProductClick={handleProductClick}
            />
        )}
    </ResultsHandlerContext.Consumer>
)

