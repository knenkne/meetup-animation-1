import React, { useMemo } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { HorizontalScroll } from '../horizontal-scroll'
import { FullWidth } from '../full-width'

import defaultTheme from './style.css'
import { modePredicate } from './tab-utils'

export const Header = ({ children, mode, parentId, theme }) => {
    const isSticky = useMemo(() => modePredicate(mode, 'sticky'), [mode])
    const isFullWidth = useMemo(() => modePredicate(mode, 'fullwidth'), [mode])
    const isBorderless = useMemo(() => modePredicate(mode, 'borderless'), [mode])

    return (
        <div
            className={classnames(
                isSticky && theme.tabsSticky,
                isFullWidth && FullWidth.theme.outer,
                theme.tabsHeader
            )}
        >
            <div
                className={classnames(
                    isBorderless && theme.tabsBorderless,
                    isFullWidth && FullWidth.theme.inner,
                    theme.tabsScroll
                )}
            >
                <HorizontalScroll parentId={parentId}>
                    {children}
                </HorizontalScroll>
            </div>

        </div>
    )
}

Header.propTypes = {
    parentId: PropTypes.string,
    children: PropTypes.node,
    mode: PropTypes.oneOfType([
        PropTypes.oneOf(['sticky', 'fullwidth', 'borderless']),
        PropTypes.arrayOf(PropTypes.oneOf(['sticky', 'fullwidth']))
    ]),
    theme: PropTypes.object
}

Header.defaultProps = {
    mode: void 0,
    children: void 0,
    parentId: '',
    theme: defaultTheme
}
