import React from 'react'
import getDisplayName from 'react-display-name'
import _ from 'lodash'

import { WfContext } from '../workflow-context'

export const withContext = (contextTypes) => (Component) => {

    const Wrapped = (props) => (
        <WfContext.Consumer>
            {(context) => (
                <Component
                    {...props}
                    {..._.pick(context, Object.keys(contextTypes))}
                />
            )}
        </WfContext.Consumer>
    )

    Wrapped.displayName = `${getDisplayName(Component)}WithContext`

    return Wrapped
}
