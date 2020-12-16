import styled from '@emotion/styled'

export const NotificationsStyled = styled.span`
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(25%, -25%);
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        ${({ theme }) => `
            background: ${theme.backgroundProductWrapper};
        `}
`
