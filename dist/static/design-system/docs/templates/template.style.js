import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: relative;
  height: 780px;
`

export const TextBlock = styled.p`
  position: absolute;
  bottom: 96px;
  left: 96px;
  font-size: 37px;
  line-height: 44px;
  font-weight: bold;
`

export const BlockImage = styled.img`
    max-height: calc(100% - 32px);
    max-width: 1000px;
    position: absolute;
    top: 0;
    right: 0;
`
