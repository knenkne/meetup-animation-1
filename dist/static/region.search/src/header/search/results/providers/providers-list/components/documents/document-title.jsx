import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { useMarkup } from '../../../../../../../utils'
import { bottomLine, topLine } from '../../../../utils/title'

import style from './document.css'

export const DocumentTitle = ({ title }) => {
    const titleBottomLine = bottomLine(useMarkup(title))
    return (
        <div className={style.document}>
            <p className={classnames(style.caption, style.title)}>
                {topLine(useMarkup(title))}
            </p>
            {(titleBottomLine !== '') && (<p className={classnames(style.caption, style.title)}>
                {titleBottomLine}
            </p>)}
        </div>
    )
}

DocumentTitle.propTypes = {
    title: PropTypes.string
}

DocumentTitle.defaultProps = {
    title: ''
}
