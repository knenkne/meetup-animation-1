import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getProductsFromPages } from 'Selectors'

import styles from './styles.css'
import { ProductsList } from './products/products-list'

export const ProductsFromPagesComponent = ({ products }) => (
    <React.Fragment>
        {products.length > 0 ?
            <div className={styles.resultsBlock}>
                <ProductsList products={products} />
            </div>
            : null}
    </React.Fragment>
)

ProductsFromPagesComponent.propTypes = {
    products: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    products: getProductsFromPages(state)
})

export const ProductsFromPages = connect(mapStateToProps)(ProductsFromPagesComponent)
