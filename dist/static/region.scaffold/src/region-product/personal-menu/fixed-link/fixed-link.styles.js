import styled from '@emotion/styled'

import { EDGE_MEDIA_HACK } from '../../style-constants'

export const FixedLinkStyled = styled.div`
    align-items: flex-start;
    position: fixed;                          /* added to support older browsers */
    position: sticky;
    bottom: 12px;
    left: 0;
    width: 320px;
    z-index: 10;
    display: block;
    
    ${EDGE_MEDIA_HACK} {
       position: fixed;   
    }
`

export const FixedLinkInnerStyled = styled.div`
   display: flex;
   height: 60px;
   padding: 4px;
   margin: 12px;
   border-radius: 8px;
   ${({ theme }) => `
        background: ${theme.fixedLinkBg};
    `}
`
