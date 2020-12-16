import styled from '@emotion/styled'

export const CarouselStyled = styled.div`
    position: relative;
`

export const SlideStyled = styled.div`
    display: none;
    margin-bottom: 24px;
    
    ${({ active }) => active && `
        display: block;
    `}
`

export const ArrowStyled = styled.button`
    padding: 3px 10px 3px 8px;
    vertical-align: middle;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    ${({ theme, disabled }) => `
        opacity: ${disabled ? '0.32' : '1'};
        cursor: ${disabled ? 'default' : 'pointer'};
        background: ${theme.sliderArrowBg};
        path {
            fill: ${theme.mainFontColor};
        }
        
        &:hover {
            background: ${!disabled && theme.sliderArrowBgOnHover};
        }
    `}
`

export const PrevArrowStyled = styled(ArrowStyled)`
  margin-right: 8px;
`

export const NextArrowStyled = styled(ArrowStyled)`
    filter: FlipH;
    transform: scale(-1, 1);
`
