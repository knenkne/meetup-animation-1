import styled from '@emotion/styled'
import { css } from '@emotion/core'

import Markdown from '../markdown'
import { gray55, orange5 } from '../styles/colors.config.style.js'
import { CaptionStyled } from '../typography/caption.style.js'

export const ErrorTextStyled = styled(Markdown.Full)`
    margin-top: 8px;
    color: ${orange5};
`

export const DescriptionStyled = styled(Markdown.Full)`
   margin-top: 8px;
   color: ${gray55};
`

export const HeadlineStyled = styled.div`
      margin-bottom: 8px;
`

export const HintStyled = styled.div`
    margin-left: 8px;
    display: inline;
    vertical-align: middle;
`

const modes = {
    checkbox: 'checkbox',
    switch: 'switch'
}

const checkboxStyle = css`    
     ${DescriptionStyled} {
        margin-left: 28px;
     }
`

const switchStyle = css`      
     ${DescriptionStyled} {
        margin-left: 44px;
     }  
`

const modeStyles = ({ mode }) => {
    switch (mode) {
        case modes.checkbox:
            return checkboxStyle
        case modes.switch:
            return switchStyle
        default:
    }
    return null
}

export const LabeledStyled = styled.div`
  & + & {
    margin-top: 24px;
  }
    
  ${modeStyles}
  
`

export const LabelStyled = styled(CaptionStyled)`
    display: inline;
    transition: color 0.3s ease-in-out;
    margin: 0;
    
    
    ${({ value }) => value && `color: ${gray55}`}
`.withComponent('label')

export const LabelSpanStyled = LabelStyled.withComponent('span')
