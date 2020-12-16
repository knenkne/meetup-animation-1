import styled from '@emotion/styled'

import {
    lgWidth,
    mdWidth,
    menuClosedWidth,
    menuOpenedWidth,
    smWidth,
    mediaLg,
    mediaMd, mediaSm
} from '../styles/media.config.style'

export const lgFullOffsetWidth = `calc(50vw - (${menuOpenedWidth + lgWidth}px) / 2)`
export const lgShortOffsetWidth = `calc(50vw - (${menuClosedWidth + lgWidth}px) / 2)`
export const mdShortOffsetWidth = `calc(50vw - (${menuClosedWidth + mdWidth}px) / 2)`
export const smOffsetWidth = `calc(50vw - ${smWidth}px / 2)`
export const lgFullOffsetWidthNegative = `calc((${menuOpenedWidth + lgWidth}px) / 2 - 50vw)`
export const lgShortOffsetWidthNegative = `calc((${menuClosedWidth + lgWidth}px) / 2 - 50vw)`
export const mdShortOffsetWidthNegative = `calc((${menuClosedWidth + mdWidth}px) / 2 - 50vw)`
export const smOffsetWidthNegative = `calc(${smWidth}px / 2 - 50vw)`

const mediaLgFull = '@media (min-width: 1312px)'
const mediaLgShort = `${mediaLg} and (max-width: 1311px)`

export const OuterStyled = styled.div`
  ${mediaLgFull} {
    margin-left: ${lgFullOffsetWidthNegative};
    margin-right: ${lgFullOffsetWidthNegative};
  }
  
  ${mediaLgShort} {
    margin-left: ${lgShortOffsetWidthNegative};
    margin-right: ${lgShortOffsetWidthNegative};
  }
  
  ${mediaMd} {
    margin-left: ${mdShortOffsetWidthNegative};
    margin-right: ${mdShortOffsetWidthNegative};
  }
  
  ${mediaSm} {
    margin-left: ${smOffsetWidthNegative};
    margin-right: ${smOffsetWidthNegative};
  }
`

export const InnerStyled = styled.div`
   ${mediaLgFull} {
    padding-left: ${lgFullOffsetWidth};
    padding-right: ${lgFullOffsetWidth};
  }
  
  ${mediaLgShort} {
    padding-left: ${lgShortOffsetWidth};
    padding-right: ${lgShortOffsetWidth};
  }
  
  ${mediaMd} {
    padding-left: ${mdShortOffsetWidth};
    padding-right: ${mdShortOffsetWidth};
  }
  
  ${mediaSm} {
    padding-left: ${smOffsetWidth};
    padding-right: ${smOffsetWidth};
  }
`
