import React from 'react'
import PropTypes from 'prop-types'

import { HorizontalScroll } from '../horizontal-scroll'
import { InnerStyled, OuterStyled } from '../full-width/full-width.style'

import { TabsHeaderStyled, TabsScrollStyled } from './tabs.style'

export const Header = ({ children, sticky, fullWidth, parentId }) => {
    const TabsHeaderComponent = fullWidth ? TabsHeaderStyled.withComponent(OuterStyled) : TabsHeaderStyled
    const TabsScrollComponent = fullWidth ? TabsScrollStyled.withComponent(InnerStyled) : TabsScrollStyled

    return (
        <TabsHeaderComponent
            sticky={sticky}
        >
            <TabsScrollComponent>
                <HorizontalScroll parentId={parentId}>
                    {children}
                </HorizontalScroll>
            </TabsScrollComponent>

        </TabsHeaderComponent>
    )
}

Header.propTypes = {
    parentId: PropTypes.string,
    children: PropTypes.node
}

Header.defaultProps = {
    mode: void 0,
    children: void 0,
    parentId: ''
}
