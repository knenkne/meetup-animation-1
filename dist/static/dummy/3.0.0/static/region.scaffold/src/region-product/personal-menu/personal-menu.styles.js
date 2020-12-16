import styled from '@emotion/styled'

import {
    styleConstants,
    EDGE_MEDIA_HACK,
    IE_MEDIA_HACK,
    SAFARI_10_1_HACK_MEDIA,
    SAFARI_10_1_HACK_SUPPORTS,
    MOZILLA_HACK
} from '../style-constants'

export const PersonalMenuSlideWrapperStyled = styled.div(
    `
        position: static;
        width: ${styleConstants.slideWidth};
        height: 100%;
        z-index: 2;
        @media (max-width: 991px) {
            position: fixed;
            transform: translate(-100%, 0);
            transition: ease-in-out 0.5s;
        }
        @media screen and (min-width: 0\\0) and (max-width: 991px) {
            visibility: hidden;
        }
    `
)

export const backgroundGradient = (bgGradient) => `
    &:before {
        content: '';
        background-image: ${bgGradient};
        background-attachment: local;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 600px;
        z-index: -1;
    }
`

export const PersonalMenuInnerStyled = styled.div`
  ${({ theme }) => `
        ${theme.backgroundImage ? backgroundGradient(theme.backgroundImage) : ''}
  `}
`

export const PersonalMenuStyled = styled.div`
        display: flex;
        position: fixed;
        overflow-y: hidden;
        overflow-x: hidden;
        flex-direction: column;
        width: ${styleConstants.slideWidth};
        box-shadow: 0 12px 24px 0 #2d495826;
        top: 0;
        bottom: 0;
    
        /* Hotfix for Windows chrome -webkit-font-smoothing */
        opacity: 0.999;
        
        /* fix for IE */
        @media screen and (min-width: 0\\0) {
            margin-bottom: 64px;
            -ms-overflow-style: none;
            overflow: auto;
        }
        ${({ theme }) => `
            background: ${theme.background};
        `}
`

export const PersonalMenuWithCustomScrollStyled = styled(PersonalMenuStyled)`
    scrollbar-face-color: #c0c9cd;
    scrollbar-arrow-color: transparent;
    scrollbar-track-color: transparent;
    scrollbar-shadow-color: #c0c9cd;
    scrollbar-highlight-color: transparent;
    scrollbar-3dlight-color: #c0c9cd;
    scrollbar-darkshadow-color: #c0c9cd;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: thin;
    scrollbar-color: rgba(239, 245, 248, 0.5) rgba(192, 201, 205, 0.5);
    
    &:hover {
        overflow-y: scroll;
        overflow-y: overlay;
    }
    
    /* width */
    &::-webkit-scrollbar {
        width: 8px;
        background: transparent;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: rgb(192, 201, 205);
        border-radius: 4.5px;
        background-color: #818b99;
        border: 2px solid transparent;
        background-clip: content-box;
    }
    
    @media (max-width: 991px) {
        overflow-y: scroll !important;
    }
    
    /* fix for IE */
    @media ${IE_MEDIA_HACK} {
        overflow-y: scroll;
    }
    
    /* fix for Edge */
    ${EDGE_MEDIA_HACK} {
        overflow-y: scroll;
        margin-bottom: 75px;
    }
    
    /* fix for Safari 10.1+ */
    ${SAFARI_10_1_HACK_MEDIA} {
        ${SAFARI_10_1_HACK_SUPPORTS} {
            overflow-y: overlay;
        }
    }
    
    /* Фикс для Mozilla */
    @media screen and (min-width: 1311px) {
    ${MOZILLA_HACK} {
            overflow-y: scroll;
        }
    }
`

export const PersonalMenuOverflowStyled = styled.div(
    `
        position: fixed;
        left: ${styleConstants.slideWidth};
        overflow-x: hidden;
        top: 0;
        height: 100%;
        width: calc(100vw + ${styleConstants.slideWidth});
        animation: fade-out 0.5s;
        visibility: hidden;
        box-shadow: inset 8px 0 32px rgba(0, 0, 0, 0.24);
        background-color: rgba(45, 45, 45, 0.4);
        z-index: -1;
        @media screen and (min-width: 0\\0) {
            left: 0;
        }
    `
)

export const PersonalMenuBarWrapperStyled = styled.div`
    @media (max-width: 991px) {
            position: fixed;
            width: ${styleConstants.collapsedSlideWidth};
            height: 100%;
            display: block;
            overflow: hidden;
            cursor: pointer;
            z-index: -1;
            opacity: 1;
            transform: translate(0);
            transition: 0.5s;
            box-shadow: 0 12px 24px 0 #2d495826;
           
            ${({ theme }) => `
                .skeleton-products-list {
                    background: ${theme.background};
                }
            `}
    }
`

export const PersonalMenuBarStyled = styled.div`
    @media (max-width: 991px) {
        display: flex;
        position: fixed;
        overflow-y: hidden;
        overflow-x: hidden;
        flex-direction: column;
        width: ${styleConstants.collapsedSlideWidth};
        background: linear-gradient(to bottom, #515b68, #313d4d);
        top: 0;
        bottom: 0;
        
        ${({ theme }) => `
            background: ${theme.background};
            ${theme.previewBackgroundImage ? backgroundGradient(theme.previewBackgroundImage) : ''};
        `}
    }
`
