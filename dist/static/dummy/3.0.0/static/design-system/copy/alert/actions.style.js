import styled from '@emotion/styled'

import { offsetMd } from '../utils/styles/offsets.config.style'

export const ActionsStyled = styled.div`
    padding: 0;
    margin-top: ${offsetMd};

    /* stylelint-disable-line selector-max-type, comment: предвосхищение специфики использования */
    button, a { 
        margin-right: ${offsetMd};
    }

    &:last-child {
        padding-bottom: 0;
        margin-right: 0;
    }
`
