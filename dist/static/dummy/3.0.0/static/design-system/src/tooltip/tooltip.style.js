import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { commonShadowHover } from '../styles/shadows.config.style'
import { mediaSm } from '../styles/media.config.style'
import { xsBorderRadius, lgBorderRadius } from '../styles/radius.config.style'
import { THEMES } from '../styles/semantic-palette.config.style'

const { LIGHT_THEME } = THEMES

export const tipMaxWidthDesktop = '288px'
export const tipMaxWidthMobile = '256px'

const fullWidth = 'fullWidth'

export const ContentsStyled = styled.div`
    display: block;
    position: relative;
    margin: 0;
    height: auto;
    max-width: ${tipMaxWidthDesktop};
    border-radius: ${lgBorderRadius};
    background-color: ${LIGHT_THEME.noColor};
    box-shadow: ${commonShadowHover};
    overflow: hidden;
    text-overflow: ellipsis;
    
    ${mediaSm} {
        width: ${tipMaxWidthMobile}
    }
}
`

export const ActiveZoneStyled = styled.div`
    pointer-events: auto;
`

const topStyle = css`
  bottom: 100%;
  
  ${ActiveZoneStyled} {
    padding-bottom: 8px;
  }
`

const topLeftStyle = css`
  ${ContentsStyled} {
    border-bottom-left-radius: ${xsBorderRadius};
  }
`

const topRightStyle = css`
  ${ContentsStyled} {
    border-bottom-right-radius: ${xsBorderRadius};
  }
`

const bottomStyle = css`
  top: 100%;
  
  ${ActiveZoneStyled} {
    padding-top: 8px;
  }
`

const bottomLeftStyle = css`
  ${ContentsStyled} {
    border-top-left-radius: ${xsBorderRadius};
  }
`

const bottomRightStyle = css`
  ${ContentsStyled} {
    border-top-right-radius: ${xsBorderRadius};
  }
`

const leftStyle = css`
    left: 0;
    justify-content: flex-start;
`

const centerStyle = css`
    left: 50%;
    transform: translate(-50%);
    justify-content: center;
`

const rightStyle = css`
    right: 0;
    justify-content: flex-end;
`

const dynamicVerticalDirection = ({ vd }) => {
    switch (vd) {
        case 'top':
            return topStyle
        case 'bottom':
            return bottomStyle
        default:
    }
    return null
}

const dynamicHorizontalDirection = ({ hd }) => {
    switch (hd) {
        case 'left':
            return leftStyle
        case 'center':
            return centerStyle
        case 'right':
            return rightStyle
        default:
    }
    return null
}

const dynamicComposeDirection = ({ vd, hd }) => {
    if (vd === 'top' && hd === 'left') {
        return topLeftStyle
    }
    if (vd === 'top' && hd === 'right') {
        return topRightStyle
    }
    if (vd === 'bottom' && hd === 'left') {
        return bottomLeftStyle
    }
    if (vd === 'bottom' && hd === 'right') {
        return bottomRightStyle
    }
    return null
}

export const TipStyled = styled.div`
    width: ${tipMaxWidthDesktop};
    pointer-events: none;
    position: absolute;
    display: none;
    
    z-index: 201;
    
    &:hover {
      z-index: 203;
    }
    
    ${dynamicVerticalDirection};
    ${dynamicHorizontalDirection};
    ${dynamicComposeDirection};
    
    ${mediaSm} {
        width: ${tipMaxWidthMobile};
    }
    
    ${({ mode }) => mode === 'error' && { color: LIGHT_THEME.warningPrimary }}
    
    ${({ show }) => show && css`display: flex;`}
`

export const TooltipWrapperStyled = styled.div`
    cursor: pointer;
    display: inline;
    text-decoration: none;
    width: 100%;
`

export const TooltipStyled = styled.div`
    outline: none;
    position: relative;
    margin: 0;
    display: inline-block;
    width: auto;
    
    ${({ mode }) => mode === fullWidth && css`width: 100%;`};
    
    &:hover {
      ${TipStyled} {
        z-index: 202;
      }
    }
`

