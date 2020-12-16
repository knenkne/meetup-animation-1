import styled from '@emotion/styled'

import { focusStyles, IE_MEDIA_HACK } from '../../style-constants'

export const profileLineOnHover = `
    &:hover {
        opacity: 0.64;
    }
`

export const ProfileStyled = styled.div`
      position: relative;
      ${({ isVisualRatingOpened, theme }) => isVisualRatingOpened && `
            &:after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                background: ${theme.backgroundProductWrapper};
                opacity: 0.8;
                filter: blur(10px);
            }
      `}
`

export const OverlayAvatarsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    & > :nth-child(2) {
      margin-top: -15%;
      z-index: 2;
    }
`

export const ProfileHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
`


export const ProfileInfoStyled = styled.div`
    text-align: center;
    margin-top: 8px;
    padding: 0 18px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileDescriptionStyled = styled.a`
    font-size: 14px;
    display: inline-block;
    text-decoration: none;
    line-height: 1.35;
    letter-spacing: -0.3px;
    margin: 0 auto;
    padding: 0 4px;
    /* fix for IE */
    @media ${IE_MEDIA_HACK} {
      width: 100%;
    }
    ${profileLineOnHover}
    ${({ theme }) => `
        ${focusStyles(theme)}
        color: ${theme.additionalFontColor}
    `}
`

export const ProfileRoleStyled = styled.div`
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: -0.3px;
    text-align: center;
    ${({ theme }) => `
        color: ${theme.mainFontColor}
    `}
`
