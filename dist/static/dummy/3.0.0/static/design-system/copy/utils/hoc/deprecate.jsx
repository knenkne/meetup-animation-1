import React from 'react'
import _ from 'lodash'

import { getDisplayName } from '../get-display-name'

import style from './style.css'

const warnCache = {}

const deprecatedLabel = (WrappedComponent) => ({ children }) => (
    <WrappedComponent>
        <div className={style.warningLabel} />
        {children}
    </WrappedComponent>
)

const DivWithErrorHandling = deprecatedLabel(({ children }) => <div>{children}</div>)


function warnInDevelopmentOnce (name, replacementName, removeVersion) {
    if (process.env.NODE_ENV !== 'production' && !warnCache[name]) {
        // Using console conditionally
        console.warn(`Component Usage Warning: ${name} is deprecated and will be deleted${removeVersion ? ` since v${removeVersion}` : ''}. Please use ${replacementName} instead`) // eslint-disable-line no-console, comment: предупреждение о deprecate для компонентов
        warnCache[name] = true
    }
}

export const deprecate = (removeVersion, pathName, replacementName = 'no component') => (Component) => {
    const DeprecatedComponent = (props) => {
        warnInDevelopmentOnce(pathName || getDisplayName(Component), replacementName, removeVersion)

        if (process.env.NODE_ENV !== 'production') {
            return (
                <DivWithErrorHandling>
                    <Component {...props} />
                </DivWithErrorHandling>
            )
        }

        return (
            <Component {...props} />
        )
    }

    _.forEach(Component, (prop, key) => {
        DeprecatedComponent[key] = prop
    })
    DeprecatedComponent.displayName = getDisplayName(Component, 'DeprecatedComponent')
    DeprecatedComponent.WrappedComponent = Component

    return DeprecatedComponent
}
