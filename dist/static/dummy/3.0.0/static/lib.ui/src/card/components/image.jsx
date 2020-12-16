import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from '../style.css'

export const Image = ({ imageSrc, srcSet, mobileSrcSet, title, theme }) => (
    <div className={theme.imageContainer}>
        <picture>
            <source
                media="(max-width: 731px)"
                srcSet={mobileSrcSet}
            />

            <img
                src={imageSrc}
                srcSet={srcSet}
                alt={title}
                className={theme.image}
            />
        </picture>
    </div>
)

Image.propTypes = {
    imageSrc: PropTypes.string,
    srcSet: PropTypes.string,
    mobileSrcSet: PropTypes.string,
    title: PropTypes.string,
    theme: PropTypes.object
}

Image.defaultProps = {
    imageSrc: '',
    srcSet: '',
    mobileSrcSet: '',
    title: '',
    theme: defaultTheme
}

Image.displayName = 'Card.Image'
