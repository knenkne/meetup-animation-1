import React from 'react'
import _ from 'lodash'

import { getDisplayName } from '../utils/get-display-name'

const warnCache = {}

function warnInDevelopmentOnce (name, replacementName, removeVersion) {
    if (process.env.NODE_ENV !== 'production' && !warnCache[name]) {
        // Using console conditionally
        console.warn(
            `Component Usage Warning: ${name} is deprecated and will be deleted${
                removeVersion ? ` since v${removeVersion}` : ''
            }. Please use ${replacementName} instead`
        ) // eslint-disable-line no-console, comment: предупреждение о deprecate для компонентов
        warnCache[name] = true
    }
}

export const deprecate = (
    removeVersion,
    pathName,
    replacementName = 'no component'
) => (Component) => {
    const DeprecatedComponent = (props) => {
        warnInDevelopmentOnce(
            pathName || getDisplayName(Component),
            replacementName,
            removeVersion
        )
        return <Component {...props} />
    }

    _.forEach(Component, (prop, key) => {
        DeprecatedComponent[key] = prop
    })
    DeprecatedComponent.displayName = getDisplayName(
        Component,
        'DeprecatedComponent'
    )
    DeprecatedComponent.WrappedComponent = Component

    return DeprecatedComponent
}
