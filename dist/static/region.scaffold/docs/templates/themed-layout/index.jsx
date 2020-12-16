import React, { useState } from 'react'
import { Global } from '@emotion/core'


import { ThemedLayoutStyled } from './themed-layout.styles'
import { global } from '../global.styles'

export const ThemedLayout = ({ themeColor = '', children }) => {
    return (
        <ThemedLayoutStyled className={'themed-layout'}>
            <Global
                styles={global}
            />
            {children}
        </ThemedLayoutStyled>
    )

}
