import React, { useMemo, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import i18next from 'i18next'

import { getFilteredProducts } from 'Selectors'

import { ITEMS_MAX_COUNT } from '../constants'
import { showAdditionalProducts } from '../../../__data__/thunks/analytic/showAdditionalProducts'
import { hideAdditionalProducts } from '../../../__data__/thunks/analytic/hideAdditionalProducts'

import styles from './styles.css'
import { ProductsList } from './products/products-list'
import { ShowMoreButton } from './show-more-button'
import { smoothScroll } from './utils/smooth-scroll'

export const DumbProducts = ({
    products,
    showMoreProductsMetric,
    hideProductsMetric,
    onMarkupChange
}) => {
    const productsResults = useRef(null)
    const isShowMore = useMemo(() => products.length > ITEMS_MAX_COUNT, [products.length])

    // Список элементов свернут или открыт
    const [showMoreExpanded, setShowMoreExpanded] = useState(false)

    function changeShowMore () {
        setShowMoreExpanded(!showMoreExpanded)

        if (showMoreExpanded) {
            // Абсолютное значение вертикальной координаты верхнего края блока Продукты
            const productsTopValue = productsResults.current.getBoundingClientRect().top + pageYOffset
            smoothScroll(productsTopValue)
            hideProductsMetric()
        } else {
            showMoreProductsMetric(products.length - ITEMS_MAX_COUNT)
        }
    }

    // При обновлении списка показываем в свернутом виде
    useEffect(() => {
        setShowMoreExpanded(false)
        onMarkupChange()
    }, [products])

    return (
        <React.Fragment>
            {products.length > 0 ?
                <div className={styles.resultsBlock} ref={productsResults}>
                    <h3 className={styles.header}>
                        <span className={styles.resultsBlockTitle}>
                            {i18next.t('products')}
                        </span>
                    </h3>
                    <ProductsList products={showMoreExpanded ? products : products.slice(0, ITEMS_MAX_COUNT)} />
                    {isShowMore && <ShowMoreButton length={products.length} showMoreExpanded={showMoreExpanded} onClick={changeShowMore} categoryName="products" />}
                </div>
                : null}
        </React.Fragment>
    )
}

DumbProducts.propTypes = {
    products: PropTypes.array.isRequired,
    showMoreProductsMetric: PropTypes.func.isRequired,
    hideProductsMetric: PropTypes.func.isRequired,
    onMarkupChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    products: getFilteredProducts(state)
})

const mapDispatchToProps = {
    showMoreProductsMetric: showAdditionalProducts,
    hideProductsMetric: hideAdditionalProducts
}

export const Products = connect(mapStateToProps, mapDispatchToProps)(DumbProducts)
