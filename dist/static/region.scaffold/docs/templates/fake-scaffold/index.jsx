import React from 'react'

import { FakeScaffoldStyled } from './fake-scaffold.styles'

export const FakeScaffold = ({ children }) => (
    <FakeScaffoldStyled>
        {children}
    </FakeScaffoldStyled>
)
