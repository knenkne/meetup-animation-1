import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { baseX } from '../styles/semantic.config.style'
import { Typography } from '../typography/typography'
import { THEMES } from '../styles/semantic-palette.config.style'

export const TabsStyled = styled.div``
export const TabsContentSectionStyled = styled.section``


const { LIGHT_THEME } = THEMES

const stickyStyle = css`
    position: sticky;
    top: 0;
    background-color: ${LIGHT_THEME.noColor};
    z-index: 35;
`

export const TabsHeaderStyled = styled.div`
  ${({ sticky }) => sticky && stickyStyle};
`

export const TabsScrollStyled = styled.div`
    width: 100%;
    border-bottom: 1px solid ${LIGHT_THEME.additional8};
`

const tabHorizontalIndent = {
    lg: {
        margin: `${baseX * 4}px`
    },
    md: {
        margin: `${baseX * 3}px`
    },
    sm: {
        margin: `${baseX * 2}px`
    }
}

const dynamicTabHorizontalIndent = ({ size }) => css`
    margin-left: ${tabHorizontalIndent[size].margin};
    margin-right: ${tabHorizontalIndent[size].margin};
`

const selectedStyle = css`    
    &::before {
        background-color: ${LIGHT_THEME.brandPrimary};
    }
    
    &:hover {
        &::before {
          background-color: ${LIGHT_THEME.brandPrimary};
        }
    }
`

export const TabButtonStyled = styled.button`
    cursor: pointer;
    padding: 0;
    background-color: ${LIGHT_THEME.noColor};
    overflow: visible;
    position: relative;
    outline: none;
    ${dynamicTabHorizontalIndent};
    
    &:first-child {
        margin-left: 0;
    }
    
    &::before {
      content: ""; 
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 2px;
      background-color: ${LIGHT_THEME.noColor};
      transition: background-color 0.17s ease-in-out;
    }
    
    ${({ selected }) => selected && selectedStyle}
`


export const TypographyStyled = styled(Typography)``
