import styled from '@emotion/styled'

import { LazyRegion } from '../lazy-region'

export const ProductsStyled = styled.ul`
    margin: 40px 0 100%;
    flex: 1 0 0;
    list-style: none;
    padding: 0;
`

export const LazyProductsStyled = ProductsStyled.withComponent(LazyRegion)
