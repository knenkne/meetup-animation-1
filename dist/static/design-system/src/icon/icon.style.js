import styled from '@emotion/styled'

import * as colors from '../styles/colors.config.style'

const fullWidthCss = `
  height: 100%;
  width: 100%;
`

export const IconWrapperStyled = styled.span(({ theme, colorScheme, fullWidth }) => `
    display: inline-block;
    text-decoration: none;
    vertical-align: middle;

    svg {
        display: block;
        fill: ${colors[colorScheme] || colorScheme};
        ${fullWidth && fullWidthCss};

    }

`)
