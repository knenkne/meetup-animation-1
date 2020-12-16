import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const ComponentWithCallback = ({ callback }) => {
    useEffect(() => {
        callback()
    }, [])

    return (
        <div>{name}</div>
    )
}

ComponentWithCallback.propTypes = {
    callback: PropTypes.func
}

ComponentWithCallback.defaultProps = {
    callback: _.noop
}

const ComponentWithHook = ({ hasUpdated }) => {
    const [name, setName] = useState('Initial Render')

    useEffect(() => {
        if (hasUpdated) {
            setName('Updated Name')
        }
    }, [hasUpdated])

    return (
        <div>{name}</div>
    )
}

ComponentWithHook.propTypes = {
    hasUpdated: PropTypes.bool
}

ComponentWithHook.defaultProps = {
    hasUpdated: false
}

export {
    ComponentWithHook,
    ComponentWithCallback
}
