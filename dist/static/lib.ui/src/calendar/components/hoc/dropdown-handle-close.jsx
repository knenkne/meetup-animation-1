import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export const dropdownHandleClose = (Component) => {

    class Wrapped extends React.PureComponent {
        handleChange = (date, e) => {
            _.attempt(this.context.dropdown.handleClose)
            this.props.onChange(date, e)
        }
        render () {
            const passedProps = _.assign(_.omit(this.props, ['onChange']), { onChange: this.handleChange })
            return (
                <Component {...passedProps} />
            )
        }
    }

    Wrapped.contextTypes = {
        dropdown: PropTypes.object
    }

    Wrapped.propTypes = Component.propTypes

    Wrapped.displayName = 'HandleCloseHOC'

    return Wrapped
}
