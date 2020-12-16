import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { markdownShort } from './utils'
import { ShortStyled } from './markdown.style'

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Markdown)
 * Формат markdown для текстовых переменных
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Short = (props) => {
    const passedProps = _.omit(props, [
        'content',
        'children',
    ])

    // In this special case we explicitly dangerously set inner HTML,
    // because it is the whole point of this component
    return (
        <ShortStyled
            {...passedProps}
            dangerouslySetInnerHTML={{ __html: markdownShort.render(props.content) }} // eslint-disable-line react/no-danger, comment: Markdown - один из немногих случаев, когда позволяется делать danger
        />
    )
}

Short.propTypes = {
    /**
     * Markdown code
     */
    content: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'lg'])
}

Short.defaultProps = {
    size: 'sm'
}

Short.displayName = 'Markdown.Short'

export default Short
