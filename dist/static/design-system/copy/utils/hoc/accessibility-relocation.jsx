import React from 'react'
import PropTypes from 'prop-types'

const ROOT_SELECTOR = '#application'

export const a11yRelocation = (Component, options = { destinationSelector: 'body', rootSelector: ROOT_SELECTOR }) => {
    const WrappedComponent = (props) => {

        if (document && document.querySelector !== void 0) {
            const rootAppElement = document.querySelector(options.rootSelector)

            if (rootAppElement) {
                const scrollToElement = document.querySelector(options.destinationSelector)

                rootAppElement.setAttribute('aria-label', props.route.title || props.a11y.title)
                rootAppElement.focus()

                if (scrollToElement) {
                    scrollToElement.scrollIntoView()
                }
            }
        }

        return <Component {...props} />

    }

    WrappedComponent.WrappedComponent = Component
    WrappedComponent.propTypes = {
        route: PropTypes.shape({
            title: PropTypes.string
        }),
        a11y: PropTypes.shape({
            title: PropTypes.string
        }).isRequired,
        children: PropTypes.node.isRequired
    }
    WrappedComponent.defaultProps = {
        route: {}
    }

    return WrappedComponent
}
