import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { clickProduct } from 'Thunks/analytic/clickProduct'
import { clickProductFromPage } from 'Thunks/analytic/clickProductFromPage'
import { isProductFromPagesSelector } from 'Selectors'

import styles from './products-list.css'
import { Product } from './product'

const DumbProductsList = ({
    products,
    productsFromPage,
    clickMetric,
    clickFromPageMetric
}) => (
    <div className={styles.container}>
        {products.map((product, index) => {
            const productWithIndex = { ...product, position: index }
            return (
                <Product
                    key={product.id}
                    product={productWithIndex}
                    productsFromPage={productsFromPage}
                    clickMetric={clickMetric}
                    clickFromPageMetric={clickFromPageMetric}
                />)
        }
        )}
    </div>
)

DumbProductsList.propTypes = {
    products: PropTypes.array.isRequired,
    productsFromPage: PropTypes.bool.isRequired,
    clickMetric: PropTypes.func,
    clickFromPageMetric: PropTypes.func
}

DumbProductsList.defaultProps = {
    clickMetric: _.identity,
    clickFromPageMetric: _.identity
}

const mapStateToProps = (state) => ({
    productsFromPage: isProductFromPagesSelector(state)
})

const mapDispatchToProps = {
    clickMetric: clickProduct,
    clickFromPageMetric: clickProductFromPage
}

export const ProductsList = connect(mapStateToProps, mapDispatchToProps)(DumbProductsList)
