import styled from '@emotion/styled'

const SMALL = 'small'
const BIG = 'big'

const getCircleSizeStyles = (size) => {
    switch (size) {
        case SMALL:
            return `
               font-size: 14px;
            `
        case BIG:
            return `
               font-size: 28px; 
            `
        default:
            return ''
    }
}

export const CircleStyled = styled.div`
    border-radius: 50%;
    height: 100%;
    text-align: center;
    width: 100%;
    
    ${({ size }) => getCircleSizeStyles(size)}
    
    ${({ isManager, theme }) => isManager
        ? `background-color: ${theme.initialsManagerBg};`
        : `background-color: ${theme.initialsBg};`}

    &.small .initials {
        font-size: 14px;
    }

    &.big .initials {
        font-size: 28px;
    }
`

export const InitialsStyled = styled.div`
    line-height: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #6c6c6f;
    transform: translate(-50%, -50%);
    font-weight: 600;
    text-transform: uppercase;
    
    ${({ theme }) => `
        color: ${theme.initialsColor}
    `}
`
