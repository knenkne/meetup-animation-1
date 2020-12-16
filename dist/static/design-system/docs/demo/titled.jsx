import React from 'react'
import PropTypes from 'prop-types'

import { Caption } from '../../src/typography'

export const Titled = ({ title, children }) => (
    <>
        <Caption mode="semibold">{title}</Caption>
        {children}
    </>
)

Titled.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

Titled.defaultProps = {
    description: void 0
}
