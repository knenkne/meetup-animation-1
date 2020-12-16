import React from 'react'
import PropTypes from 'prop-types'

const Component = ({ name, gender }) => (
    <div>
        {`${name} - ${gender}`}
    </div>
)

Component.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string
}

Component.defaultProps = {
    name: 'Creature',
    gender: 'it'
}

export default Component
