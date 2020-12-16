import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import style from './style.css'

const markText = (text, searchString, markedClass) => text.replace(
    new RegExp(`(${_.escapeRegExp(searchString)})`, 'gi'),
    `<span class="${markedClass}">$&</span>`
)

export const MarkedText = ({ text, searchString, theme, ...passedProps }) => {
    if (!text) {
        return null
    }

    return (
        <span
            {...passedProps}
            className={theme.text}
            dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger, comment: устаревший компонент, реализация есть без такой грязи, TODO
                __html: searchString ? markText(text, searchString, theme.marked) : text
            }}
        />
    )

}

MarkedText.theme = style
MarkedText.propTypes = {
    text: PropTypes.string,
    searchString: PropTypes.string,
    theme: PropTypes.shape({
        text: PropTypes.string,
        marked: PropTypes.string
    })
}

MarkedText.defaultProps = {
    text: '',
    searchString: '',
    theme: style
}
