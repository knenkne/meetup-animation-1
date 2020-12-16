import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { SingleProduct } from '../single-product'
import { actions, selectors } from '../../__data__'

import {
    ProductsListWrapperStyled,
    ProductListItemStyled,
    AdditionalProductStyled,
    ProductContainedWrapperStyled
} from './product-list.styles'
import { ProductList } from './product-list'

export const CardListComponent = (props) => (
    <ProductList
        {...props}
        refetchArray={[props.handleClaims, props.handleList]}
        refetchStatuses={[props.claimsStatus, props.listStatus]}
    >
        <ProductsListWrapperStyled>
            {props.content.map(({ id, additionalCards, ...rest }) => (
                <ProductListItemStyled
                    key={id}
                >
                    <ProductContainedWrapperStyled
                        isMain={additionalCards?.length > 0}
                    >
                        <SingleProduct
                            id={id}
                            type={props.type}
                            {...rest}
                        />
                    </ProductContainedWrapperStyled>
                    {additionalCards && (
                        <ProductsListWrapperStyled>
                            {additionalCards.map((card) => (
                                <AdditionalProductStyled key={card.id}>
                                    <SingleProduct
                                        id={card.id}
                                        type={props.type}
                                        isAdditional
                                        {...card}
                                    />
                                </AdditionalProductStyled>
                            ))}
                        </ProductsListWrapperStyled>
                    )}
                </ProductListItemStyled>
            ))}
        </ProductsListWrapperStyled>
    </ProductList>
)

const mapDispatchToProps = (dispatch) => ({
    // Если проблема с запросом на заявки,
    // предложение дозагрузки отображаем только
    // у первого продукта - у "Карты"
    handleClaims: () => dispatch(actions.claims.fetchClaims()),
    handleList: () => dispatch(actions.init.fetchProducts({ initialFetch: false }))
})

const mapStateToProps = (state) => ({
    claimsStatus: selectors.products.claimsStatus(state),
    listStatus: selectors.products.productsStatus(state)
})

CardListComponent.displayName = 'CardList'

CardListComponent.defaultProps = {
    type: '',
    handleClaims: () => {},
    handleList: () => {},
    claimsStatus: '',
    listStatus: ''
}
CardListComponent.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array.isRequired,
    handleClaims: PropTypes.func,
    handleList: PropTypes.func,
    claimsStatus: PropTypes.string,
    listStatus: PropTypes.string
}

export const CardList = connect(mapStateToProps, mapDispatchToProps)(CardListComponent)
