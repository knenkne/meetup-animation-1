import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { topLine, bottomLine } from '../../../utils/title'

import style from './document.css'

export const DocumentTitle = ({ title }) => {
    const titleBottomLine = bottomLine(title)
    return (
        <div className={style.document}>
            <p className={classnames(style.caption, style.title)}>
                {topLine(title)}
            </p>
            {(titleBottomLine !== '') && <p className={classnames(style.caption, style.title)}>
                {titleBottomLine}
            </p>}
        </div>
    )
}

DocumentTitle.propTypes = {
    title: PropTypes.string
}

DocumentTitle.defaultProps = {
    title: ''
}
