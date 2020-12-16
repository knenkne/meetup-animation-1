import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { useMarkup } from '../../../../../../../utils'

import style from './document.css'

export const DocumentDescription = ({ description }) => (
    <p className={classnames(style.caption, style.description)}>
        <span>{useMarkup(description)}</span>
    </p>
)

DocumentDescription.propTypes = {
    description: PropTypes.string
}

DocumentDescription.defaultProps = {
    description: ''
}
