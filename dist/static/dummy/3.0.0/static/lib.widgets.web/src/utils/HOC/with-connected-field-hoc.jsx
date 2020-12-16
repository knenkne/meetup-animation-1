import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import getDisplayName from 'react-display-name'
import { Field } from '@sbol/lib.app'

export const withConnectedFieldHOC = (Component) => {

    const WrappedComponent = (props) => {
        const fieldId = _.get(_.head(props.fields), ['id'])
        return <Field name={fieldId} component={Component} {...props} />
    }

    WrappedComponent.propTypes = {
        fields: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired
        }))
    }

    WrappedComponent.defaultProps = Component.defaultProps
    WrappedComponent.WrappedComponent = Component
    WrappedComponent.displayName = `${getDisplayName(Component)}WithConnectedField`

    return WrappedComponent
}
