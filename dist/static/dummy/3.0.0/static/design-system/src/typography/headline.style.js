/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca73031b14aee19ff3f343a)
 * Заголовок приложения
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
    fontSizeHeadline1,
    fontSizeHeadline2,
    fontSizeHeadline3,
    fontSizeHeadline4,
    fontSizeHeadline5,
    lineHeightHeadline1,
    lineHeightHeadline2,
    lineHeightHeadline3,
    lineHeightHeadline4,
    lineHeightHeadline5,
    letterSpacing,
} from '../styles/font-sizes.config.style'

const indentConsts = {
    openspace: 'openspace',
    innerspace: 'innerspace'
}

const variantStyle = (indent) => ({
    h1: {
        fontSize: fontSizeHeadline1,
        lineHeight: lineHeightHeadline1,
        paddingTop: indent === indentConsts.innerspace ? 0 : '40px',
        paddingBottom: '16px'
    },
    h2: {
        fontSize: fontSizeHeadline2,
        lineHeight: lineHeightHeadline2,
        paddingTop: indent === indentConsts.innerspace ? 0 : '36px',
        paddingBottom: '12px'
    },
    h3: {
        fontSize: fontSizeHeadline3,
        lineHeight: lineHeightHeadline3,
        paddingTop: indent === indentConsts.innerspace ? 0 : '28px',
        paddingBottom: '8px'
    },
    h4: {
        fontSize: fontSizeHeadline4,
        lineHeight: lineHeightHeadline4,
        paddingTop: indent === indentConsts.innerspace ? 0 : '24px',
        paddingBottom: '4px'
    },
    h5: {
        fontSize: fontSizeHeadline5,
        lineHeight: lineHeightHeadline5,
        paddingTop: indent === indentConsts.innerspace ? 0 : '20px',
        paddingBottom: 0
    }
})

const fontWeightStyle = {
    semibold: 600,
    bold: 700,
    regular: 400
}

export const modeStyles = ({ variant, mode, indent }) => {
    const modeStyle = variantStyle(indent)[variant] || variantStyle.h1

    return css`
        font-size: ${modeStyle.fontSize};
        line-height: ${modeStyle.lineHeight};
        letter-spacing: ${letterSpacing};
        font-weight: ${fontWeightStyle[mode] || fontWeightStyle.semibold}; 
        margin: 0;
        padding: 0;
        padding-top: ${modeStyle.paddingTop};
        padding-bottom: ${modeStyle.paddingBottom};
    `
}

export const HeadlineStyled = styled.h1(modeStyles)

