import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import style from './style.css'

const getClass = (theme, styleId) => theme[styleId] ? theme[styleId] : theme.defaultText

export const MultiText = ({
    title,
    description,
    descriptions,
    size,
    theme
}) => {
    const { true: [tag] = [], false: restDescriptions = [] } = _.groupBy(descriptions, (item) => item.styleId === 'preview-tag')

    return (
        <div className={classnames(theme.multiText, theme[size])}>
            {tag && <span className={getClass(theme, tag.styleId)}>{tag.text}</span>}
            {title && <h4 className={theme.caption}>{title}</h4>}
            {description && <p className={style.defaultText}>{description}</p>}
            {Boolean(restDescriptions.length) && restDescriptions.map((element) => (
                <p
                    key={element.id}
                    className={getClass(theme, element.styleId)}
                >
                    {theme[element.styleId] && element.imageUrl &&
                    <div
                        className={style.img}
                        style={{ backgroundImage: `url(${element.imageUrl})` }}
                    />
                    }
                    <span className={style.pointText}>
                        {element.text}
                    </span>
                </p>
            ))}
        </div>
    )
}

MultiText.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    descriptions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        styleId: PropTypes.oneOf([
            'preview-tag',
            'preview-summary',
            'preview-points',
            'preview-subtitle'
        ]),
        imageUrl: PropTypes.string,
        text: PropTypes.string.isRequired
    })),
    size: PropTypes.oneOf([
        'sm',
        'lg'
    ]),
    theme: PropTypes.object
}

MultiText.defaultProps = {
    title: void '',
    description: void '',
    descriptions: [],
    size: 'lg',
    theme: style
}

MultiText.defaultTheme = style
