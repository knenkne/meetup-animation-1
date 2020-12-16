import styled from '@emotion/styled'

import { ComponentWrapper } from '../utils/component-wrapper'
import { styleConstants, focusStyles } from '../../style-constants'
import { NotificationsStyled } from '../single-product/single-product-icon/product-icon-notification/notification.styles'
import { SingleProductLinkStyled } from '../single-product/single-product-link/single-product-link.styles'
import { ThemedIconStyled } from '../themed-icon/themed-icon.styles'

import { ProductWrapperWithoutListStyled } from './refetch-button/refetch-button.styles'

export const ProductsListHeaderStyled = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 8px 8px 8px;
`

export const ProductsListTogglerStyled = styled.button`
        text-decoration: none;
        background: none;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        padding: 17px 8px;
        flex: 1 1 auto;
        cursor: pointer;
        ${({ theme }) => `
            color: ${theme.productListHeaderColor};
            &:hover {
               color: ${theme.productListHeaderColorOnHover};
            }
            &:active, &:focus {
               color: ${theme.productListHeaderColor};
            }
            ${focusStyles(theme)}
        `}
`

export const ProductsListNameStyled = styled.div`
        display: flex;
        align-items: center;
        min-height: 6px;
        svg {
            transform: rotate(180deg);
        }
        ${ThemedIconStyled} {
            flex: 0 0 24px;
        }
        ${({ opened }) => !opened && `
            svg {
                transform: rotate(0);
            }
        `}
`

export const ProductsListNameTitleStyled = styled.span`
        margin-right: 4px;
`

export const ProductsListNewStyled = styled(ComponentWrapper)`
        padding: 19px;
        font-size: 0;
        min-height: 16px;
        svg {
            width: 16px;
            height: 16px;
        }
        ${({ theme }) => focusStyles(theme)}
`

export const ProductsListWrapperStyled = styled.ul(
    `
        list-style: none;
        padding: 0;
        margin: 0;
    `,
    ({ theme }) => `
            background-color: ${theme.backgroundProductWrapper};
    `
)

export const ProductsListStyled = styled.li`
    /* fix for mozilla */
    @-moz-document url-prefix() {
        &:last-child {
            margin-bottom: 200px;
        }
    
        /* nested .products-list */
        ${() => ProductsListStyled}:last-child {
            margin-bottom: 0;
        }
    }
    &:not(:first-of-type) {
        padding-top: 8px;
    }
    
    ${
    () => NestedListStyled} {
        ${() => ProductsListStyled} {
            padding: 0;
            border: 0;
        }
    }
    ${({ theme }) => `
        &:not(:last-child) {
           border-bottom: 1px solid ${theme.productDivider};
        }
         /* nested .products-list */
        .products-list {
            &:not(:last-child) {
                border-bottom: 1px solid ${theme.productDivider};
            }
        }
    `}
`

export const ProductListItemStyled = styled.li(
    `
    position: relative;
    & > ul {
        padding: 0;
    }
    &:last-child {
        hr {
            border: 0 !important;
        }
    }
    `
)

export const NestedListStyled = styled.ul`
    ${ProductsListStyled} {
        ${ProductsListStyled} {
            border: 0;
        }
    }
    
    ${({ theme }) => `
        list-style: none;
        padding: 0;
        
        ${ProductsListHeaderStyled} {
            background-color: ${theme.backgroundNestedProductWrapper};
        }
        
        ${ProductsListWrapperStyled} {
            background-color: ${theme.backgroundNestedProductWrapper};
        }
        
        ${NotificationsStyled} {
            background: ${theme.backgroundNestedProductWrapper};
        }
        
        ${ProductsListTogglerStyled} {
            font-size: 14px;
            font-weight: normal;
            letter-spacing: -0.3px;
        }
        
        ${ProductsListHeaderStyled} {
            padding-bottom: 0;
            background-color: ${theme.backgroundNestedProductWrapper};
        }
        
        ${ProductListItemStyled}:last-child hr {
            margin: 0;
            padding-bottom: 16px;
        }
        ${SingleProductLinkStyled} {
            &[href], &[button] {
                &:hover:not(:active) {
                    background-color: ${theme.backgroundNestedProductWrapperOnHover};
                    ${NotificationsStyled} {
                        background: ${theme.backgroundNestedProductWrapperOnHover};
                    }
                }
            }
        }
        ${ProductWrapperWithoutListStyled} {
            background-color: ${theme.backgroundNestedProductWrapper};
        }
    `}
`

export const AdditionalProductStyled = styled.li`
    position: relative;
    overflow-y: hidden;
    ${({ theme }) => `
            &:before {
              content: '';
              width: 1px;
              height: ${styleConstants.graphAdditionalHeight};
              border-radius: 0.5px;
              background-color: ${theme.additionalProductLine};
              position: absolute;
              left: ${styleConstants.graphLeft};
            }
            &:not(:last-child):after {
              content: '';
              width: 1px;
              height: 100%;
              border-radius: 0.5px;
              background-color: ${theme.additionalProductLine};
              position: absolute;
              left: ${styleConstants.graphLeft};
              top: ${styleConstants.graphTop};
            }
    `}
    
    &:not(:last-child) hr {
        border: 0;
        margin: 0;
    }
`

export const ProductContainedWrapperStyled = styled.div(
    ({ theme, isMain }) => isMain && `
    position: relative;
    overflow-y: hidden;
    hr {
        border: 0;
        margin: 0;
    }
    &:before {
      content: '';
      width: 1px;
      height: 100%;
      border-radius: 0.5px;
      background-color: ${theme.additionalProductLine};
      position: absolute;
      left: ${styleConstants.graphLeft};
      top: ${styleConstants.graphTop};
    }
    `
)
