import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { markdownFull } from './utils'
import { FullStyled } from './markdown.style.js'

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Markdown)
 * Формат markdown для текстовых переменных
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Full = (props) => {
    const passedProps = _.omit(props, [
        'content',
        'children',
    ])

    // In this special case we explicitly dangerously set inner HTML,
    // because it is the whole point of this component
    return (
        <FullStyled
            data-unit="markdown:full"
            {...passedProps}
            dangerouslySetInnerHTML={{ __html: markdownFull.render(props.content) }} // eslint-disable-line react/no-danger, comment: Markdown - один из немногих случаев, когда позволяется делать danger
        />
    )
}

Full.propTypes = {
    /**
     * Markdown code
     */
    content: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'lg'])
}

Full.defaultProps = {
    size: 'sm'
}

Full.displayName = 'Markdown.Full'

export default Full
