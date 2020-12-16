import styled from '@emotion/styled'
import { css } from '@emotion/core'

// TODO: refill

export const WrapperScrollStyled = styled.div`
    max-width: 100%;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    position: relative;
    scroll-behavior: smooth;

`

const ScrollButtonStyled = styled.button`
    display: block;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    overflow: hidden;
    width: 0;
    transition: width 0.17s ease-in-out, box-shadow 0.17s ease-in-out, fill 0.17s ease-in-out;
    fill: #8c8c8c;

    &:hover {
        fill: #2d2d30;
    }
`

export const ScrollButtonLeftStyled = styled(ScrollButtonStyled)`
  
`

export const ScrollButtonRightStyled = styled(ScrollButtonStyled)`
  
`

export const WrapperInnerStyled = styled.div`
    display: inline-block;
    overflow: hidden;
`

export const FadingStyled = styled.div`
    position: absolute;
    pointer-events: none;
    transition: left 0.17s ease-in-out, right 0.17s ease-in-out, box-shadow 0.17s ease-in-out;
    margin: 6px 0;

`
