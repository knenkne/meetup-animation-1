import React from 'react'
import i18next from 'i18next'
import { App } from '@sbol/lib.app'

const getApp = () => import('./routes')

export default (props) => (
    <App
        {...props}
        moduleLocation={null}
        name={process.env.PKG_ID}
        version={process.env.VERSION}
        libs={process.env.LIBS}
        locales={process.env.LOCALES}
        i18next={i18next}
        getComponentPromise={getApp}
    />
)
