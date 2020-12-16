import React from 'react'
import PropTypes from 'prop-types'

export const MockField = ({ component: Component, ...props }) => (
    <Component {...props} />
)

MockField.propTypes = {
    component: PropTypes.func.isRequired,
}
