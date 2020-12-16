import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import style from './style.css'

const markText = (text, searchString, markedClass) => {
    if (!searchString) {
        return text
    }

    const caseInsensitiveString = text.toLowerCase()
    const caseInsensitiveSearchString = searchString.toLowerCase()
    const searchLength = searchString.length

    let stringPosition = 0

    return _.flatMap(_.split(caseInsensitiveString, caseInsensitiveSearchString), (substring, index) => {

        const originalSearch = text.substr(stringPosition, searchLength)
        if (index !== 0) {
            stringPosition += searchLength
        }

        const originalSubstring = text.substr(stringPosition, substring.length)
        stringPosition += substring.length

        if (index !== 0) {
            return [<span className={markedClass} key={index}>{originalSearch}</span>, originalSubstring]
        }

        return originalSubstring
    })
}

/**
 * Компонент для маркировки подстроки в строке
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const MarkedText = ({ title, value, theme, ...passedProps }) => {
    if (!title) {
        return null
    }

    return (
        <span {...passedProps} className={theme.text}>
            {markText(title, value, theme.marked)}
        </span>
    )

}

MarkedText.displayName = 'MarkedText'
MarkedText.theme = style
MarkedText.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    theme: PropTypes.shape({
        text: PropTypes.string,
        marked: PropTypes.string
    })
}

MarkedText.defaultProps = {
    title: '',
    value: '',
    theme: style
}

export default MarkedText
