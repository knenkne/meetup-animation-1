import React, { memo } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { SingleProduct } from '../single-product'
import { actions, selectors } from '../../__data__'

import { ProductsListWrapperStyled, ProductListItemStyled } from './product-list.styles'
import { ProductList } from './product-list'


export const BrokerageListComponent = (brokerageList) => (<ProductList
    {...brokerageList}
    refetchArray={[brokerageList.getData]}
    refetchStatuses={[brokerageList.refetchStatus || brokerageList.brokerageStatus]}
    refetchMessage={brokerageList.refetchMessage}
>
    <ProductsListWrapperStyled>
        {brokerageList.content.map(({ id, ...rest }) => (
            <ProductListItemStyled
                key={id}
            >
                <SingleProduct
                    id={id}
                    type={brokerageList.type}
                    {...rest}
                />
            </ProductListItemStyled>
        ))}
    </ProductsListWrapperStyled>
</ProductList>)

const mapDispatchToProps = {
    getData: actions.brokerage.fetchBrokerageContracts,
    onListClick: actions.brokerage.fetchBrokerageContracts
}

const mapStateToProps = (state) => ({
    brokerageStatus: selectors.products.brokerageStatus(state)
})

BrokerageListComponent.displayName = 'Brokerage'

BrokerageListComponent.defaultProps = {
    type: ''
}

BrokerageListComponent.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array.isRequired
}

export const BrokerageList = memo(connect(mapStateToProps, mapDispatchToProps)(BrokerageListComponent))

