import React, { useCallback } from 'react'
import { IconLoader } from '@sbol/design-system/core/icon'
import { Link } from '@sbol/lib.app'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { toggleProductRegion } from '../utils/toggle-product-region'
import { onNewProductClick } from '../../../analytics'
import { ThemedIcon } from '../themed-icon'

import {
    ProductsListHeaderStyled,
    ProductsListTogglerStyled,
    ProductsListNameStyled,
    ProductsListNewStyled,
    ProductsListNameTitleStyled
} from './product-list.styles'

export const ProductHeader = ({ type, title, onClick, link, onMouseDown, opened, collapseId, newProductTitle, linkRedirector }) => (
    <ProductsListHeaderStyled>
        <ProductsListTogglerStyled
            onClick={onClick}
            onMouseDown={onMouseDown}
            aria-expanded={opened}
            aria-controls={collapseId}
        >
            <ProductsListNameStyled opened={opened}>
                <ProductsListNameTitleStyled>{i18next.t(title)}</ProductsListNameTitleStyled>
                <ThemedIcon name="icon:products/common/ic24ChevronDown" type="gray" colorScheme="#d6d6d6" />
            </ProductsListNameStyled>
        </ProductsListTogglerStyled>
        {link &&
            <ProductsListNewStyled
                as={linkRedirector ? 'a' : Link}
                href={link}
                title={newProductTitle}
                onClick={useCallback(() => {
                    onNewProductClick(type)
                    toggleProductRegion()
                })}
            >
                <IconLoader name="icon:region.product/common/add" />
            </ProductsListNewStyled>
        }
    </ProductsListHeaderStyled>
)

ProductHeader.displayName = 'ProductHeader'

ProductHeader.defaultProps = {
    title: i18next.t('region.scaffold:header'),
    opened: false,
    newProductTitle: null,
    link: null,
    type: void '',
    linkRedirector: false
}
ProductHeader.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    link: PropTypes.string,
    opened: PropTypes.bool,
    collapseId: PropTypes.string.isRequired,
    newProductTitle: PropTypes.string,
    type: PropTypes.string,
    linkRedirector: PropTypes.bool
}
