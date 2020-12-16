import styled from '@emotion/styled'

import { NestedListStyled } from '../product-list/product-list.styles'

const SINGLE = 'single'
const INFO = 'info'

const getLoaderStyle = (loaderStyle, theme) => {
    switch (loaderStyle) {
        case SINGLE:
            return `
                min-height: 74px;
                background-color: ${theme.backgroundProductWrapper};
                ${NestedListStyled} & {
                    background-color: ${theme.backgroundNestedProductWrapper};
                }
            `
        case INFO:
            return `
                margin-top: 3px;
                min-height: 18px;
                [data-unit='button:loader'] {
                    justify-content: end;
                }
            `
        default:
            return ''
    }
}

export const LoaderStyle = styled.div`
    position: relative;
    
    ${({ theme, loaderStyle }) => `
        & span {
            background-color: ${theme.mainFontColor} !important;
            width: 12px;
            height: 12px;
        }
        ${getLoaderStyle(loaderStyle, theme)}
    `}
`
