import React from 'react'
import PropTypes from 'prop-types'

import { ContentRowStyled } from './content-row.styles'

/*
 * Row для partials
 * @param children
 * @param rest
 * @returns {*}
 * @constructor
 */
export const ContentRow = ({ children, className, ...rest }) => (
    <ContentRowStyled
        className={className}
        {...rest}
    >
        {children}
    </ContentRowStyled>
)

ContentRow.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

ContentRow.defaultProps = {
    children: null,
    className: ''
}
