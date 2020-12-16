import React from 'react'

import { CoreStatusHeadline } from '../status-headline'

const modifyProps = (props) => ({
    ...props,
    properties: {
        ...props.properties,
        level: props.properties.level === 'success' ? 'done' : props.properties.level
    }
})

const CoreStatus = (props) => <CoreStatusHeadline {...modifyProps(props)} />

CoreStatus.displayName = 'CoreStatus'

export default CoreStatus
