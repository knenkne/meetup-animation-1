import { css } from '@emotion/core'

import { styleConstants } from './region-product/style-constants'
import { colors } from './region-product/personal-menu/theme-wrapper/theme-colors'
import { PersonalMenuBarWrapperStyled, PersonalMenuSlideWrapperStyled } from './region-product/personal-menu/personal-menu.styles'

export const global = css`
    body {
        scrollbar-width: thin;
    }
    
    body.pointer-events .scaffold__region-product &:focus {
        border-color: ${colors.noColor};
        box-shadow: 0 0 0 0 ${colors.noColor};
    }
    
    .scaffold__region-product {
        overflow: visible;
        box-shadow: none;
    }
    @media (max-width: 991px) {
        .scaffold__region-product {
            min-width: ${styleConstants.collapsedSlideWidth};
            flex: 0 1 ${styleConstants.collapsedSlideWidth};
            background: transparent;
            height: 100vh;
        }
    
        /*
         Фикс для подложки при анимации смены бара на продуктовый регион
         Изменить при появлении компонента для бэкграундного градиента
        */
        .scaffold__region-header::before {
            width: calc(100% + ${styleConstants.collapsedSlideWidth});
            left: ${styleConstants.negativeCollapsedSlideWidth};
        }
        
        .opened-product-region ${PersonalMenuSlideWrapperStyled} {
            transform: translate(0);
            visibility: visible;
        }
        
        .opened-product-region ${PersonalMenuBarWrapperStyled} {
            opacity: 0;
            transform: translate(-100%);
            z-index: -1;
        }
    
        .opened-product-region .personal-menu-overflow {
            visibility: visible;
            animation: fade-in 0.5s;
        }
    }
    @media (max-width: 731px) {
        .scaffold__region-product {
            min-width: 0;
            max-width: 0;
        }
    
        .scaffold__region-header:before {
            width: 100%;
            left: 0;
        }
    }
    
    .opened-product-region .personal-menu {
        width: ${styleConstants.slideWidth};
    }
    
    
    @keyframes fade-in {
        from {
            opacity: 0;
        }
    
        to {
            opacity: 1;
        }
    }
    
    @keyframes fade-out {
        from {
            opacity: 1;
        }
    
        to {
            opacity: 0;
        }
    }
    
    .opened-product-region .personal-menu {
        width: ${styleConstants.slideWidth};
    }
    
    .capacity-scale-legacy {
        width: 32px;
        height: 32px;
        margin: 2px;
    }
    
    .custom-scroll {
        -ms-overflow-style: none;
    }
    
    @keyframes repaint-view {
        from {
            width: 99.9%;
        }
    
        to {
            width: 100%;
        }
    }
    
    .repaint-view {
        animation: repaint-view 10ms;
    }
`
