import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { xsBorderRadius } from '../styles/radius.config.style'
import { Typography } from '../typography/typography'
import { baseX } from '../styles/semantic.config.style'
import { Icon } from '../icon'

const typographyIndentStyled = {
    lg: {
        margin: `${baseX * 6}px`
    },
    md: {
        margin: `${baseX * 5}px`
    },
    sm: {
        margin: `${baseX * 4}px`
    }
}

const dynamicTypographyHorizontalIndent = ({ size, icon, iconReverse }) => {
    if (icon) {
        if (iconReverse) {
            return css`
                margin-right: ${typographyIndentStyled[size].margin}
            `
        }
        return css`
            margin-left: ${typographyIndentStyled[size].margin}
        `
    }
    return css`
        margin-left: ${typographyIndentStyled[size].margin};
        margin-right: ${typographyIndentStyled[size].margin}
    `
}

export const ButtonTypographyStyled = styled(Typography)`
    display: inline-block;
`

const iconIndentStyled = {
    lg: {
        margin: `${baseX * 5}px`
    },
    md: {
        margin: `${baseX * 4}px`
    },
    sm: {
        margin: `${baseX * 3}px`
    }
}

const dynamicIconHorizontalIndent = ({ size }) => css`
    margin-left: ${iconIndentStyled[size].margin};
    margin-right: ${iconIndentStyled[size].margin};
`

export const IconStyled = styled(Icon)``

export const ButtonContainerStyled = styled.div`
    display: inline-flex;
    align-items: center;
    flex-direction: row;
        
    ${({ iconReverse }) => iconReverse && css`
        flex-direction: row-reverse;
    `};
`

export const ButtonBaseStyled = styled.button`

    position: relative;
    padding: 0;
    cursor: pointer;
    border-radius: ${xsBorderRadius};
    text-decoration: none;
    transition: 
          border-color 0.17s, 
          background-color 0.17s, 
          color 0.17s, 
          box-shadow 0.17s;
    outline: none;
    overflow: hidden;
    user-select: none;
    -kit-tap-highlight-color: transparent;   
    

    ${({ fullWidth }) => fullWidth && css`width: 100%;`};

    ${ButtonTypographyStyled} {
        ${dynamicTypographyHorizontalIndent}
    }
    
    ${IconStyled} {
        ${dynamicIconHorizontalIndent}
    }
`
