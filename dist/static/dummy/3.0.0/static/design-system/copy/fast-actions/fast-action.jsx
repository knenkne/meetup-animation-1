import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Icon } from '../icon'
import typography from '../typography/style.css'
import { mergeTheme } from '../utils'

import defaultTheme from './style.css'

// eslint-disable-next-line complexity, comment: complexity of 12
export const FastAction = ({
    href,
    onClick,
    icon,
    imageSrc,
    title,
    description,
    as,
    external,
    colorScheme,
    theme,
    ...props
}) => {
    const Wrapper = useMemo(() => {
        if (as) {
            return as
        }

        if (href) {
            return 'a'
        }

        if (onClick) {
            return 'button'
        }

        return 'div'
    }, [as, href, onClick])

    const [iconTheme, externalIconTheme] = useMemo(() => {
        const themeIcon = mergeTheme(Icon.theme, {
            icon: theme.icon
        })
        const themeExternalIcon = mergeTheme(Icon.theme, {
            icon: theme.iconExternal
        })

        return [themeIcon, themeExternalIcon]
    }, [theme])

    const normalColorScheme = React.useMemo(
        () => colorScheme === 'success' ? 'done' : colorScheme,
        [colorScheme]
    )

    return (
        <Wrapper
            type={Wrapper === 'button' ? 'button' : void 0}
            href={href}
            external={href && as ? external : void 0}
            target={Wrapper === 'a' && external ? '_blank' : void 0}
            rel={Wrapper === 'a' && external ? 'noopener noreferrer' : void 0}
            onClick={onClick}
            {...props}
            className={cn(theme.action, Wrapper !== 'div' && theme.active)}
        >
            <div className={theme.body}>
                <div className={cn(theme.iconWrapper, theme[normalColorScheme])}>
                    {icon ? (
                        <Icon name={icon} theme={iconTheme} />
                    ) : (
                        <img src={imageSrc} alt={title} role="presentation" />
                    )}
                </div>
                {external &&
                <Icon name="icon:core/common/external" theme={externalIconTheme} />
                }
                <div className={theme.text}>
                    <div className={typography.bodySemibold} title={title}>
                        {title}
                    </div>
                    {description && (
                        <div
                            className={cn(
                                typography.caption,
                                typography.blackOpaque,
                                theme.description
                            )}
                            title={description}
                        >
                            {description}
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

FastAction.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    imageSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    external: PropTypes.bool,
    colorScheme: PropTypes.oneOf(['done', 'waiting', 'error', 'info']),
    theme: PropTypes.object
}

FastAction.defaultProps = {
    href: void 0,
    onClick: void 0,
    icon: '',
    imageSrc: '',
    description: '',
    as: void 0,
    external: void 0,
    colorScheme: void '',
    theme: defaultTheme
}

FastAction.displayName = 'FastActions.FastAction'

export default FastAction
