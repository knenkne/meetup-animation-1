import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import getDisplayName from 'react-display-name'

export const fieldTitleAndDescriptionExtractionHOC = (Component) => {

    const WrappedComponent = (props) => {
        const title = _.get(_.head(props.fields), ['title'])
        const description = _.get(_.head(props.fields), ['description'])

        const passedProps = _.assign(
            _.omit(props, ['title', 'description']),
            {
                title,
                description
            }
        )

        return <Component {...passedProps} />
    }

    WrappedComponent.propTypes = {
        fields: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        }))
    }

    WrappedComponent.defaultProps = {
        fields: []
    }

    WrappedComponent.displayName = `${getDisplayName(Component)}WithTitledHOC`

    return WrappedComponent
}
