import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { SingleProduct } from '../single-product'
import { actions } from '../../__data__'
import { onContractClick, onAgreementClick } from '../../../analytics/insurance'

import { ProductsListWrapperStyled, ProductListItemStyled } from './product-list.styles'
import { ProductList } from './product-list'

/**
 * Список заявок и оформленных контрактов
 * @param {Object} insurances - объект с пропсами
 * @param {Array} insurances.content - содержимое вкладки "Страхование"
 * @param {String} insurances.type - значение для стилизации продуктовой карточки
 * @return {*} - React Component
 */
export const InsuranceListComponent = (insurances) => (
    <ProductList {...insurances}>
        <ProductsListWrapperStyled>
            {insurances.content.map(({ id, isContract, productTag, ...rest }) => (
                <ProductListItemStyled
                    key={id}
                >
                    <SingleProduct
                        id={id}
                        type={insurances.type}
                        handleItemClick={isContract ? onContractClick(productTag) : onAgreementClick}
                        {...rest}
                    />
                </ProductListItemStyled>
            ))}
        </ProductsListWrapperStyled>
    </ProductList>
)


const mapDispatchToProps = (dispatch) => {
    const handleContracts = () => dispatch(actions.insurance.fetchContracts())

    return {
        onListClick: handleContracts,
        refetchArray: [handleContracts]
    }
}

InsuranceListComponent.displayName = 'InsuranceList'

InsuranceListComponent.defaultProps = {
    type: '',
    refetchArray: PropTypes.arrayOf(PropTypes.func),
    refetchStatuses: PropTypes.arrayOf(PropTypes.string)
}

InsuranceListComponent.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array.isRequired
}

export const InsuranceList = connect(null, mapDispatchToProps)(InsuranceListComponent)
