import styled from '@emotion/styled'

import { ADDITIONAL, ARRESTED, WARNING_TEXT, NEED_RQ_DELIVERY } from '../../../style-constants'
import { colors } from '../../theme-wrapper/theme-colors'
import { NameStyled } from '../name/name.styles'

export const additionalMessageStyle = ({ theme }) => `
    font-size: 14px;
    color: ${theme.additionalFontColor};
`

export const arrestedMessageStyle = `
    font-size: 14px;
    width: 100%;
    color: ${colors.red};

    ${NameStyled} {
        width: 100%;
    }
`
export const warningMessageStyle = `
    font-size: 14px;
    width: 100%;
    color: ${colors.orange4};

    ${NameStyled} {
        width: 100%;
    }
`

export const getMessageStyle = (props) => {
    const { messageStyle, theme } = props
    switch (messageStyle) {
        case ADDITIONAL:
            return additionalMessageStyle(props)
        case ARRESTED:
            return arrestedMessageStyle
        case WARNING_TEXT:
            return warningMessageStyle
        case NEED_RQ_DELIVERY:
            return `
                ${additionalMessageStyle(props)}
                color: ${theme.mainFontColor};
            `
        default:
            return ''
    }
}

const REGULAR = 400

export const ContentRowStyled = styled.span`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    letter-spacing: -0.3px;
    max-width: 237px;
    line-height: 1.43;
    
    ${({ theme }) => ` 
        color: ${theme.mainFontColor};
        font-weight: ${REGULAR};
    `}
    
    ${(props) => getMessageStyle(props)}
`
