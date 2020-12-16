import React, { lazy, memo, Suspense, useMemo, useContext } from 'react'
import cn from 'classnames'
import { PropTypes } from 'prop-types'

import { detectIE } from '../../utils/detect-browser'
import { PersonalMenuWithCustomScrollStyled } from '../personal-menu.styles'
import { ComponentWrapper } from '../utils/component-wrapper'
import { ThemeContext } from '../theme-wrapper/theme-wrapper.context'
import { themeColors } from '../theme-wrapper/theme-colors'

const isIE = detectIE()

export const Scrollbar = memo((props) => {
    const { children, className } = props
    const {
        themeColor
    } = useContext(ThemeContext) || {}
    const Component = PersonalMenuWithCustomScrollStyled
    const ScrollbarComponent = useMemo(() => isIE ? PersonalMenuWithCustomScrollStyled.withComponent(lazy(() => import('react-scrollbars-custom'))) : null, [isIE])
    const customScrollAttrs = useMemo(() => ({
        style: { position: '', width: 'inherit', height: 'inherit' },
        customScroll: true,
        className: cn(className, 'custom-scroll'),
        scrollbarWidth: 0,
        permanentTracks: false,
        removeTracksWhenNotUsed: true,
        disableTracksWidthCompensation: true,
        scrollerProps: {
            style: {
                paddingRight: '20px'
            }
        },
        trackYProps: {
            style: {
                background: themeColors[themeColor]?.background || themeColors[0]?.background,
                width: '10px',
                top: 0,
                height: '100%',
                borderRadius: 'none',
                zIndex: 11
            }
        },
        thumbYProps: {
            style: {
                borderRadius: 4.5,
                background: 'rgba(192, 201, 205, 0.5)',
                width: '4px',
                margin: '0 auto'
            }
        }
    }), [className, themeColor])
    return (
        <Suspense fallback={<PersonalMenuWithCustomScrollStyled {...props}>{children}</PersonalMenuWithCustomScrollStyled>}>
            <ComponentWrapper
                as={ScrollbarComponent || Component}
                {...props}
                {...isIE && customScrollAttrs}
            >
                {children}
            </ComponentWrapper>
        </Suspense>
    )
}, (prevProps, nextProps) => prevProps.id === nextProps.id)

Scrollbar.displayName = 'Scrollbar'

Scrollbar.defaultProps = {
    className: void 0
}

Scrollbar.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}
