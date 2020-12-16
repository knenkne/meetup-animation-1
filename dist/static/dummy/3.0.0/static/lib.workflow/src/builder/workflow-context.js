import React from 'react'
import _ from 'lodash'

export const WfContext = React.createContext({
    widgets: [],
    fieldStyles: [],
    onEvent: _.noop
})
