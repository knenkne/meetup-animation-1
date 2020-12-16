import styled from '@emotion/styled'

import { IE_MEDIA_HACK } from '../../style-constants'

export const ProductsPreviewStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 100%;
    flex: 1 0 0;
    overflow: visible;
    /* fix for IE: icon self size prolongs more than self height */
    @media ${IE_MEDIA_HACK} {
        padding-bottom: 54px;
    };
    
    /* fix for Safari 10.1+ */
    @media not all and (min-resolution: 0.001dpcm) {
        @supports (-webkit-appearance:none) {
            & {
                display: inline-block;
            }
        }
    };
`

export const ProductPreviewIconWrapperStyled = styled.span`
    display: inline-block;
    padding: 18px 0;
    margin: 0 14px;
    min-height: 36px;
    ${({ theme }) => `
        background: ${theme.background};
        &:not(:last-child) {
            border-bottom: 1px solid ${theme.productDivider};
        }
    `}
`

