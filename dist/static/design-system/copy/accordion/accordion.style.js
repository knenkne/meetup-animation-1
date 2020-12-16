import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
    boxColorTransition,
    defaultTransitionDuration, defaultTransitionRules,
    defaultTransitionType
} from '../utils/styles/standard.config.style'
import {
    black100,
    black2Alpha, black4Alpha,
    gray0,
    gray1,
    gray3, gray55Alpha,
    gray9,
    noColor,
    white
} from '../styles/colors.config.style'
import { commonBorderWidth, inputFocusErrorBorder } from '../styles/semantic.config.style'
import { xsBorderRadius } from '../styles/radius.config.style'
import { commonShadow, commonShadowHover } from '../styles/shadows.config.style'
import { Typography } from '../typography'
import { mediaSm, mediaMd, mediaLg } from '../styles/media.config.style'
import { fontSizeMd, lineHeightBodyWeb } from '../utils/styles/font-sizes.config.style'

export const HeadingStyled = styled.div``

export const TitleButtonStyled = styled.button`
    transition:
        background-color
        ${defaultTransitionDuration}
        ${defaultTransitionType};
    background-color: ${noColor};
    outline: none;
`

export const TextBodyStyled = styled(Typography.Body)``

export const HeadlineStyled = styled(Typography.Headline)`
    margin: 0;
    text-align: left;  
`

export const TitleTextStyled = styled.span``

export const ArrowStyled = styled.div`
    width: 10px;
    height: 24px;
    transition:
        transform
        ${defaultTransitionDuration}
        ${defaultTransitionType};
    margin-left: 20px;

    ${({ isOpened }) => isOpened && css`transform: rotate(180deg);`}

    path {
        fill: ${gray9};
    }
`

export const SideTitleStyled = styled.div`
    display: flex;
    align-items: baseline;
    margin-left: auto;
`

export const DescriptionStyled = styled.div``

export const CollapseWrapperStyled = styled.div`
  
`

export const ContentStyled = styled.div(({ isOpened }) => !isOpened && css`
    visibility: hidden;
    opacity: 0;
    transition:
        ${defaultTransitionRules}
        ${defaultTransitionDuration}
        ${defaultTransitionType};
`)

export const AccordionWrapperStyled = styled.div`
    .ReactCollapse--collapse {
        transition:
            height
            ${defaultTransitionDuration}
            ${defaultTransitionType};
    }
`

const classicModeStyle = css`
    &:not(:last-child) {
        padding-bottom: 40px;
    }

    ${TitleButtonStyled} {
        cursor: pointer;
        padding-left: 0;
        padding-right: 0;
    }


    ${TitleTextStyled} {
        border-bottom: ${commonBorderWidth} dashed ${black100};

        ${mediaLg} {
            &:hover {
                border-bottom-color: ${noColor};
            }
        }
    }

    ${ContentStyled} {
        font-size: ${fontSizeMd};
        line-height: ${lineHeightBodyWeb};
        color: ${gray55Alpha};
        padding-top: 16px;
    }
`

const titleStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
`

const infoModeStyle = css`
    .ReactCollapse--collapse {
        margin-top: -20px;    
    }
    
    &:not(:last-child) {
        border-bottom: ${commonBorderWidth} solid ${gray1};
    
        ${ContentStyled} {
            position: relative;
    
            &::before {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 11px;
                background-color: ${gray0};
            }
        }
    
        ${({ isOpened }) => isOpened && css`
            border-color: ${gray0};
        `}
    }
    
    ${CollapseWrapperStyled} {
       min-height: 20px
    }
    
    ${HeadingStyled} {
        display: flex;
        flex-direction: column;
    }
    
    ${TitleButtonStyled} {
        min-height: 120px;
        border-radius: ${xsBorderRadius};
        padding: 36px 0;
    
        ${titleStyle};
         
        ${mediaLg} {
            &:hover {
                h4:first-child,
                ${ArrowStyled} {
                    opacity: 0.7;
                }
            }
        }
          
        &:active {
            h4:first-child,
            ${ArrowStyled} {
                opacity: 0.55;
            }
        }
    }
    
    ${ContentStyled} {
        font-size: ${fontSizeMd};
        line-height: ${lineHeightBodyWeb};
        color: ${gray55Alpha};
        /* 32px от контента + 11px для бордера (будет 12px в сумме с бордером аккордеона) */
        padding-bottom: 43px;
    }
    
    ${HeadlineStyled} {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`


const descriptionModeStyle = css`
    position: relative;
    z-index: 1;
    
    .ReactCollapse--collapse {
        margin-top: -16px;    
    }
    
    border: ${commonBorderWidth} solid ${gray3};
    border-bottom-color: ${noColor};

    ${({ isOpened }) => !isOpened && css`
        ${TitleButtonStyled} {
            ${mediaLg} {
                &:hover {
                    background-color: ${black2Alpha};
                }
            }
        }

        &:active {
            background-color: ${black4Alpha};
        }
        
        &:not(:active) {
            ${ArrowStyled} {
                opacity: 0.4;
            }
        }
    `}

    &:first-child {
        border-top-left-radius: ${xsBorderRadius};
        border-top-right-radius: ${xsBorderRadius};
    }

    &:last-child {
        border-bottom: ${commonBorderWidth} solid ${gray3};
        border-bottom-left-radius: ${xsBorderRadius};
        border-bottom-right-radius: ${xsBorderRadius};
    }

    ${HeadingStyled} {
        display: flex;
        flex-direction: column;
    }

    ${TitleButtonStyled} {
        min-height: 116px;
        padding: 32px;
        flex-wrap: wrap;
        ${titleStyle};
        
        ${SideTitleStyled} {
            margin-left: auto;
        }

        ${DescriptionStyled} {
            color: ${gray9};
            width: 100%;
            text-align: left;
            margin-top: 8px;
        }
    }

    ${ContentStyled} {
        color: ${gray9};
        padding: 0 32px 32px;
    }
    
    ${CollapseWrapperStyled} {
       min-height: 16px
    }

    ${HeadlineStyled} {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`

const widgetModeStyle = css`
    border-radius:  ${xsBorderRadius};
    box-shadow: ${commonShadow};
    background-color: ${white}
    transition: ${boxColorTransition};

    &:not(:last-child) {
        margin-bottom: 16px;
    }
    
    ${mediaLg} {
        &:hover {
            box-shadow: ${commonShadowHover};
        }
    }

    ${TitleButtonStyled} {
        border-radius: ${xsBorderRadius};
        padding: 20px;
        height: 100%;
        ${titleStyle};
    } 

    ${TextBodyStyled} {
        text-align: left;
        
        ${mediaMd} {
            max-width: 60%;
        }
        
        ${mediaSm} {
            max-width: 50%;
        }
    }

    ${ContentStyled} {
        padding: 0 20px 20px;
        border-radius: 0 0 ${xsBorderRadius} ${xsBorderRadius};
    }
`


const modes = {
    widget: widgetModeStyle,
    info: infoModeStyle,
    description: descriptionModeStyle,
    classic: classicModeStyle
}

const dynamicMode = ({ mode }) => modes[mode]

const warningStyle = css`
    box-shadow: ${commonShadow}, ${inputFocusErrorBorder};

    ${mediaLg} {
        &:hover {
          box-shadow: ${commonShadowHover}, ${inputFocusErrorBorder};
        }
    }
`

export const AccordionItemStyled = styled.div`
    display: block;
    background-color: ${noColor};
    
    ${dynamicMode};
    
    ${({ warning }) => warning && warningStyle}
`


export const globalStyles = css`
   body:not(.pointer-events) ${TitleButtonStyled}:focus {
        box-shadow: none;
        outline: ${commonBorderWidth} dotted ${gray9};
   }
`
