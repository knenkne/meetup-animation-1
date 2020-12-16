import React from 'react'
import _ from 'lodash'

import { getDisplayName } from '../get-display-name'

const warnCache = {}

function warnInDevelopmentOnce (name) {
    // Using console conditionally
    if (process.env.NODE_ENV !== 'production' && !name) {
        console.warn('Component Usage Warning: You are using an experimental component. Component\'s API could be changed. Please be careful in usage of it') // eslint-disable-line no-console, comment: предупреждение об экспериментальном характере компонента
    } else if (process.env.NODE_ENV !== 'production' && !warnCache[name]) {
        console.warn(`Component Usage Warning: ${name} is experimental component. ${name}'s API could be changed. Please be careful in usage of ${name}`) // eslint-disable-line no-console, comment: предупреждение об экспериментальном характере компонента
        warnCache[name] = true
    }
}

export const experimental = (pathName) => (Component) => {
    function ExperimentalComponent (props) {
        warnInDevelopmentOnce(pathName || Component.displayName || Component.name)
        return (<Component {...props} />)
    }

    _.forEach(Component, (prop, key) => {
        ExperimentalComponent[key] = prop
    })
    ExperimentalComponent.displayName = getDisplayName(Component, 'ExperimentalComponent')
    ExperimentalComponent.WrappedComponent = Component

    return ExperimentalComponent
}
