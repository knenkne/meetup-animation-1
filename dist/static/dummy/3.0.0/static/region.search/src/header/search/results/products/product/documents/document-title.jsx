import React from 'react'
import PropTypes from 'prop-types'

import { useMarkup } from '../../../../../../utils'

import style from './document.css'

export const DocumentTitle = ({ title }) => (
    <div className={style.document}>
        <p className={ style.caption}>
            <span className={style.title}>{useMarkup(title)}</span>
        </p>
    </div>
)

DocumentTitle.propTypes = {
    title: PropTypes.string
}

DocumentTitle.defaultProps = {
    title: ''
}
