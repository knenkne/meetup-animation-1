import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Typography } from '../typography'
import { mergeTheme } from '../utils'

import { Description, Actions, Image } from './components'
import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/5d385a888b7034775ab1a026/screen/5ecbc419487aa129233e2d6e0)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Card = ({
    title,
    children,
    imageSrc,
    srcSet,
    mobileSrcSet,
    mode,
    colorScheme,
    theme
}) => {
    const titleTheme = useMemo(() =>
        mergeTheme(Typography.theme, { headline: theme.title }, [theme])
    )

    return (
        <div
            className={cn(
                theme.container,
                theme[mode],
                theme[colorScheme],
                !mobileSrcSet && theme.noImage
            )}
        >
            <div className={theme.content}>
                {title && (
                    <Typography.Headline mode="h4" theme={titleTheme}>
                        {title}
                    </Typography.Headline>
                )}
                {children}
            </div>

            <Image
                alt="title"
                imageSrc={imageSrc}
                srcSet={srcSet}
                mobileSrcSet={mobileSrcSet}
                theme={theme}
            />
        </div>
    )
}

Card.propTypes = {
    mode: PropTypes.oneOf(['banner']),
    colorScheme: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
    title: PropTypes.string,
    imageSrc: PropTypes.string,
    srcSet: PropTypes.string,
    mobileSrcSet: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object
}

Card.defaultProps = {
    mode: 'banner',
    colorScheme: void 0,
    title: '',
    imageSrc: '',
    srcSet: '',
    mobileSrcSet: '',
    children: void 0,
    theme: defaultTheme
}

Card.theme = defaultTheme
Card.Description = Description
Card.Actions = Actions
Card.Image = Image
Card.displayName = 'Card'
