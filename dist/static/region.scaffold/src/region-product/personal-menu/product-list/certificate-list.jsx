import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { SingleProduct } from '../single-product'
import * as actions from '../../__data__/actions'
import * as selectors from '../../__data__/selectors'

import { ProductsListWrapperStyled, ProductListItemStyled } from './product-list.styles'
import { ProductList } from './product-list'

export const CertificateListComponent = (certificates) => (
    <ProductList
        {...certificates}
        refetchArray={[certificates.handleUpdateSecurityAccounts]}
        refetchStatuses={[certificates.certificateStatus]}
    >
        <ProductsListWrapperStyled>
            {certificates.content.map((certificate) => (
                <ProductListItemStyled
                    key={certificate.id}
                >
                    <SingleProduct
                        id={certificate.id}
                        type={certificates.type}
                        {...certificate}
                    />
                </ProductListItemStyled>
            ))}
        </ProductsListWrapperStyled>
    </ProductList>
)

const mapDispatchToProps = (dispatch) => ({
    handleUpdateSecurityAccounts: () => dispatch(actions.init.fetchEribProducts({ showProductType: 'securityAccounts' })),
})

const mapStateToProps = (state) => ({
    certificateStatus: selectors.products.certificateStatus(state)
})

CertificateListComponent.displayName = 'CertificateList'

CertificateListComponent.defaultProps = {
    type: ''
}

CertificateListComponent.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array.isRequired
}

export const CertificateList = connect(mapStateToProps, mapDispatchToProps)(CertificateListComponent)
