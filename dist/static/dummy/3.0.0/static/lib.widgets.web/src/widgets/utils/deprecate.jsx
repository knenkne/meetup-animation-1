/**
 * копипаста из @sbol/lib.ui/utils/deprecate
 */
import React from 'react'
import _ from 'lodash'

const warnCache = {}

function warnInDevelopmentOnce (name, replacementName, removeVersion) {
    if (process.env.NODE_ENV !== 'production' && !warnCache[name]) {
        // Using console conditionally
        console.warn(`${name} is deprecated and will be deleted${removeVersion ? ` since v${removeVersion}` : ''}. Please use ${replacementName} instead`) // eslint-disable-line no-console, comment: не используйте устаревший код!!!
        warnCache[name] = true
    }
}

export const deprecate = (removeVersion, pathName, replacementName = 'no component') => (Component) => {
    const DeprecatedComponent = (props) => {
        warnInDevelopmentOnce(pathName || Component.displayName || Component.name, replacementName, removeVersion)
        return <Component {...props} />
    }

    _.forEach(Component, (prop, key) => {
        DeprecatedComponent[key] = prop
    })
    DeprecatedComponent.displayName = Component.displayName || Component.name || 'DeprecatedComponent'
    DeprecatedComponent.WrappedComponent = Component

    return DeprecatedComponent
}
