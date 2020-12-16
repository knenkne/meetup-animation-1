import styled from '@emotion/styled'

export const VisualRatingWrapperStyled = styled.span`
    position: relative;
`

export const PendingLineStyled = styled.span`
        content: '';
        width: 64px;
        height: 64px;
        border: 3px solid #ffffff;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0) rotate(-45deg) scaleX(-1);
        z-index: 1;
        border-radius: 50%;
        margin: 0;
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
        animation: change 1.5s linear forwards;
        animation-delay: 1.5s;
        
        @keyframes change {
            25% {
                clip-path: polygon(50% 50%, 0 0, 0 100%, 0 100%, 0 100%, 0 100%);
            }
        
            50% {
                clip-path: polygon(50% 50%, 0 0, 0 100%, 100% 100%, 100% 100%, 100% 100%);
            }
        
            75% {
                clip-path: polygon(50% 50%, 0 0, 0 100%, 100% 100%, 100% 0, 100% 0);
            }
        
            100% {
                clip-path: polygon(50% 50%, 0 0, 0 100%, 100% 100%, 100% 0, 0% 0%);
            }
        }
`

export const VisualRatingListStyled = styled.ul`
    display: flex;
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    top: calc(100% + 8px);
    right: 50%;
    transform: translate(50%, 0);
    z-index: 1;
`

export const VisualRatingListItemStyled = styled.li`
    &:not(:last-child) {
        margin-right: 20px;
    }

    &:first-of-type {
        transform: translate(25px, -45px);
    }

    &:last-child {
        transform: translate(-25px, -45px);
    }
`

export const VisualRatingListButtonStyled = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
    font-weight: 600;
    color: #717174;
    text-align: center;
    line-height: 40px;
    vertical-align: middle;
    user-select: none;
    padding: 0;
    
    ${({ theme }) => `
        box-shadow: 0 0 0 1px ${theme.mainFontColor};
    `}
    
`
