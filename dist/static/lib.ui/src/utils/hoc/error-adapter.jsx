import React from 'react'

import { getDisplayName } from '../get-display-name'

export const defaultCondition = (props) => props.touched || props.value ? props.error : ''

// TODO упростить api

export const errorAdapterFactory = (calcError = defaultCondition) => (Component) => {
    const Wrapped = (props) => <Component {...props} error={calcError(props)} />
    Wrapped.displayName = getDisplayName(Component, 'ErrorAdapter')
    Wrapped.WrappedComponent = Component
    return Wrapped
}
