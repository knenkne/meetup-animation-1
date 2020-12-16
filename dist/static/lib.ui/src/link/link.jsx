import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { Icon } from '../icon'

import defaultTheme from './link.css'
import { SimpleExternalLink } from './components'

const modeToSide = {
    'file:word': 'left',
    'file:pdf': 'left',
    'file:xlsx': 'left',
    'file:html': 'left',
    'file:txt': 'left',
    email: 'left',
    print: 'left',
    download: 'left',
    backward: 'left',
    forward: 'right',
    external: 'right',
    externalBold: 'right',
    breadcrumb: 'left'
}

const modeToIcon = {
    backward: 'arrow-right',
    forward: 'arrow-right',
    breadcrumb: 'chevronLeft'
}

const modeToRotate = ['backward']

const checkIcon = (iconMode) => {
    const icon = modeToIcon[iconMode] || iconMode

    return Icon.namespaces['icon:core/common'][_.camelCase(icon)]
        ? `icon:core/common/${icon}`
        : icon
}

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5ca6147577eeb0193d2fe1d7)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
// eslint-disable-next-line complexity, comment: complexity more 12
export const Link = ({
    theme,
    icon,
    size,
    children,
    mode,
    colorScheme,
    refWrapper,
    external,
    bold,
    as: Component,
    ...props
}) => {
    let iconMode = mode
    let externalProps = {}
    let refProps = {}
    const customStyles = [theme[size], theme[colorScheme]]
    const breadcrumbStyles = [theme.breadcrumb, theme.gray]
    const extendProps = {
        className: classnames(
            theme.link,
            bold && theme.linkBold,
            Component === 'button' && theme.transparent,
            mode !== 'breadcrumb' ? customStyles : breadcrumbStyles,
            mode === 'underline' && theme.underline
        ),
        'data-unit': 'link:internal'
    }

    if (refWrapper) {
        refProps = {
            [typeof Component === 'string' ? 'ref' : 'refWrapper']: refWrapper
        }
    }

    if (external) {
        iconMode = mode.startsWith('file:')
            ? mode
            : `external${bold ? 'Bold' : ''}`
        externalProps = {
            'data-unit': 'link:external',
            rel: 'noopener noreferrer',
            target: '_blank'
        }
    }

    const iconName = icon || checkIcon(iconMode)
    const passedProps = {
        ...props,
        ...refProps,
        ...extendProps,
        ...externalProps
    }

    if (external && Component === 'a' && typeof children === 'string') {
        return (
            <SimpleExternalLink
                theme={theme}
                iconName={iconName}
                {...passedProps}
            >
                {children}
            </SimpleExternalLink>
        )
    }

    return (
        <Component {...passedProps}>
            {(icon || modeToSide[iconMode] === 'left') && (
                <Icon
                    name={iconName}
                    size="self"
                    theme={{
                        self: classnames(
                            Icon.theme.self,
                            theme.icon,
                            theme.left,
                            modeToRotate.includes(mode) && theme.rotate
                        )
                    }}
                />
            )}

            <span className={theme.content}>{children}</span>

            {modeToSide[iconMode] === 'right' && (
                <Icon
                    name={iconName}
                    size="self"
                    theme={{
                        self: classnames(
                            Icon.theme.self,
                            theme.icon,
                            theme.right
                        )
                    }}
                />
            )}
        </Component>
    )
}

Link.propTypes = {
    external: PropTypes.bool,
    children: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'lg']),
    mode: PropTypes.string,
    colorScheme: PropTypes.oneOf([
        'green',
        'gray',
        'purple',
        'blue',
        'goals',
        'sky-blue',
        'aqua',
        'gold',
        'metal',
        'orange',
        'button',
        'button-blue',
        'button-purple',
        'button-skyblue',
        'button-aqua',
        'button-gold',
        'button-black',
        'button-green',
        'button-secondary'
    ]),
    theme: PropTypes.shape({
        link: PropTypes.string,
        sm: PropTypes.string,
        lg: PropTypes.string,
        content: PropTypes.string,
        icon: PropTypes.string,
        left: PropTypes.string,
        right: PropTypes.string,
        breadcrumb: PropTypes.string,
        gray: PropTypes.string,
        linkBold: PropTypes.string,
        underline: PropTypes.string,
        rotate: PropTypes.string,
        externalWrapper: PropTypes.string,
        last: PropTypes.string,
        transparent: PropTypes.string
    }),
    refWrapper: PropTypes.func,
    /**
     * Может быть Link из react-router(-dom)
     */
    as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    icon: PropTypes.string,
    bold: PropTypes.bool
}

Link.defaultProps = {
    external: false,
    children: void 0,
    as: 'a',
    size: 'lg',
    colorScheme: 'green',
    mode: '',
    theme: defaultTheme,
    refWrapper: void 0,
    icon: void 0,
    bold: false
}

Link.displayName = 'Link'
Link.theme = defaultTheme

export default Link
