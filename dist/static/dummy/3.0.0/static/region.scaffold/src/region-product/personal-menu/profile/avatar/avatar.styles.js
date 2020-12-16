import styled from '@emotion/styled'

import { ProfileLinkStyled } from '../profile-link/profile-link.styles'

export const AvatarStyled = styled(ProfileLinkStyled)`
    overflow: hidden;
    display: block;
    position: relative;
    padding: 0;
    &:hover {
      opacity: 55%;
    }
    ${(props) => props.isVisualRatingOpened && `
        ${props.main ? 'z-index: 1;' : void 0}
        user-select: none; /* webkit (safari, chrome) browsers */
    `}
`

export const AvatarImgStyled = styled.span`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-position: center center;
    background-size: cover;
`
