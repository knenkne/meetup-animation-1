import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { SingleProductLinkStyled, linkStatuses } from '../../single-product/single-product-link/single-product-link.styles'
import { ProductIconStyled } from '../../single-product/single-product-icon/single-product-icon.styles'
import { ThemedIcon } from '../../themed-icon'

export const ProductWrapperWithoutListStyled = styled(SingleProductLinkStyled)`
        width: 100%;
        text-align: left;
        cursor: pointer;
        background: none;
        ${({ theme }) => css`
            ${linkStatuses(theme)}
            ${ProductIconStyled} {
                svg {
                    fill: ${theme.mainFontColor}
                }
            }
            &:hover {
                svg {
                    transition: 0.5s transform;
                    transform: rotate(180deg);
                }
            }
            &:active {
                svg {
                    transition: 0.5s transform;
                    transform: rotate(360deg);
                }
            }
        `}
`

export const IconWithRotateStyled = styled(ThemedIcon)`
    margin-right: 15px;
    margin-top: 4px;
    flex: 0 0 36px;
    svg {
        transition: 0.2s transform;
        transform: rotate(0);
        margin-top: 0;
    }
`
