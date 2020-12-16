import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
    fontSizeBodyWeb,
    lineHeightBodyWeb,
    fontSizeCaptionWeb,
    lineHeightCaptionWeb,
    letterSpacingSecondWeb,
    fontSizeHeadline1Web,
    lineHeightHeadline1Web,
    fontSizeHeadline2Web,
    lineHeightHeadline2Web,
    fontSizeHeadline3Web,
    lineHeightHeadline3Web,
    fontSizeHeadline4Web,
    lineHeightHeadline4Web,
    fontSizeHeadline5Web,
    lineHeightHeadline5Web,
    letterSpacingWeb
} from '../utils/styles/font-sizes.config.style'
import { linkColor, textMainColor } from '../utils/styles/semantic-palette.config.style'
import '../utils/styles/standard.config.css'
import { gray1, darkBlue10, noColor } from '../styles/colors.config.style'

const sizes = {
    sm: 'sm',
    lg: 'lg'
}

const marginBottom = '8px'

const lgSizes = css`
    font-size: ${fontSizeBodyWeb};
    line-height: ${lineHeightBodyWeb};

    p {
        margin: 0 0 ${lineHeightBodyWeb};
    }

    ul,
        ol {
        p {
            margin: 0;
        }
    }
`

const smSizes = css`
    font-size: ${fontSizeCaptionWeb};
    line-height: ${lineHeightCaptionWeb};

    p {
        margin: 0 0 ${lineHeightCaptionWeb};
    }

    ul,
    ol {
        p {
            margin: 0;
        }
    }
`

const dynamicSizes = ({ size }) => {
    switch (size) {
        case sizes.sm:
            return smSizes
        case sizes.lg:
            return lgSizes
        default:
    }
    return null
}

const Container = styled.div`
    color: ${textMainColor};
    letter-spacing: ${letterSpacingWeb};

    // font: 14px/1.3 SBSans, Arial, Helvetica, sans-serif;
    
    ${dynamicSizes}
    
    
    
    sub {
        font-size: smaller;
        vertical-align: sub;
    }

    sup {
        font-size: smaller;
        vertical-align: super;
    }

    /* заголовки */
    h1,
    h2,
    h3,
    h4,
    h5 {
        letter-spacing: ${letterSpacingSecondWeb};
        font-weight: 600;
    }

    h1 {
        font-size: ${fontSizeHeadline1Web};
        line-height: ${lineHeightHeadline1Web};
        margin: 0 0 ${marginBottom};
    } 

    h2 {
        font-size: ${fontSizeHeadline2Web};
        line-height: ${lineHeightHeadline2Web};
    }

    h3 {
        font-size: ${fontSizeHeadline3Web};
        line-height: ${lineHeightHeadline3Web};
    }

    h4 {
        font-size: ${fontSizeHeadline4Web};
        line-height: ${lineHeightHeadline4Web};
    }

    h5 {
        font-size: ${fontSizeHeadline5Web};
        line-height: ${lineHeightHeadline5Web};
    }

    /* параграфы */

    /* ссылки (для внешних ссылок автоматически проставляется \\\`target="_blank" rel="noopener noreferrer"\\\`) */
    a {
        color: ${linkColor};
        text-decoration: none;
        padding: 3px;
        margin: -3px;
        outline: none;

        & > span:last-child {
            white-space: nowrap;
        }

        svg {
            fill: ${linkColor};
            vertical-align: middle;
            margin-left: 4px;
        }

        &:hover > span {
            text-decoration: underline;
        }

        &:active > span {
            text-decoration: none;
        }

        body:not(:global(.pointer-events)) &:focus {
            border-bottom: 2px solid ${linkColor};
        }
    }

    /* изображения */
    img {
        max-width: 64px;
        max-height: 64px;
    }

    /* выделение жирным (курсив автоматически преобразуется к жирному) */
    b {
        font-weight: bold;
    }

    /* неупорядоченный и упорядоченный список (с вложенностью) */
    ul,
    ol {
        padding: 0 0 0 24px;

        ul,
        ol {
            padding: 0 24px;
            margin: 16px 0;
        }

        li {
             margin-bottom: 8px;
        }

        li:last-child {
            margin-bottom: 0;
        }
    }

    /* разделители */
    hr {
        height: 1px;
        background-color: ${gray1};
        border: 0;
        width: 100%;
        margin: 24px 0;
    }

    /* аббревиатуры */
    abbr {
        color: ${darkBlue10};
        border-bottom: dotted 1px ${darkBlue10};
        transition: border-bottom 0.17s ease-in-out;
        text-decoration: none;

        &:hover {
            border-bottom-color: ${noColor};
        }
    }

    > :last-child {
        margin-bottom: 0 !important; /* stylelint-disable-line declaration-no-important, comment: не должно быть отступов никогда */
    }


`

export const FullStyled = Container
export const ShortStyled = Container
