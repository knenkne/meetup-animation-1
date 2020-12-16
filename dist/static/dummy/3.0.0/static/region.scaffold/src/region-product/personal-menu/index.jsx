import React, { Component } from 'react'
import { throttle } from 'lodash'

import { Profile } from './profile'
import { Products } from './products'
import { FixedLink } from './fixed-link'
import { ProductsPreviewLaptopBar } from './products-preview-laptop-bar'
import { toggleProductRegion } from './utils/toggle-product-region'
import { Navigation } from './navigation'
import { Scrollbar } from './scrollbar'
import { isMobileViewport, isCollapsedViewport } from './utils/is-viewport'
import { ThemeWrapper } from './theme-wrapper'
import {
    PersonalMenuSlideWrapperStyled,
    PersonalMenuOverflowStyled,
    PersonalMenuBarWrapperStyled,
    PersonalMenuBarStyled,
    PersonalMenuInnerStyled
} from './personal-menu.styles'

/* стандартный промежуток времени,
за который пользователи не замечают
задержку интерфейса, а браузер успевает выполнить манипуляции с dom*/
const RESIZE_THROTTLE_DELAY = 300

class PersonalMenu extends Component {
    state = {
        collapsedViewport: false,
        mobileViewport: false,
    }

    componentDidMount () {
        this.setIsTabletViewport()
        window.addEventListener('resize', this.throttlingSetIsTabletViewport, false)
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.throttlingSetIsTabletViewport, false)
    }

    setIsTabletViewport = () => {
        this.setState({
            collapsedViewport: isCollapsedViewport(),
            mobileViewport: isMobileViewport()
        })
    }

    throttlingSetIsTabletViewport = throttle(this.setIsTabletViewport, RESIZE_THROTTLE_DELAY)

    render () {
        const { collapsedViewport, mobileViewport } = this.state
        return (
            <ThemeWrapper>
                <PersonalMenuSlideWrapperStyled className="personal-menu-slide-wrapper">
                    <Scrollbar
                        className="personal-menu"
                        id="scroll-menu"
                    >
                        <PersonalMenuInnerStyled>
                            <Navigation onClick={toggleProductRegion} />
                            <Profile />
                            <Products />
                            <FixedLink />
                        </PersonalMenuInnerStyled>
                    </Scrollbar>
                    <PersonalMenuOverflowStyled className="personal-menu-overflow" onClick={toggleProductRegion} />
                </PersonalMenuSlideWrapperStyled>
                {collapsedViewport && !mobileViewport && (
                    <PersonalMenuBarWrapperStyled className="personal-menu-bar-wrapper" onClick={toggleProductRegion}>
                        <PersonalMenuBarStyled>
                            <Profile isTablet />
                            <ProductsPreviewLaptopBar />
                            <FixedLink isTablet />
                        </PersonalMenuBarStyled>
                    </PersonalMenuBarWrapperStyled>
                )}
            </ThemeWrapper>
        )
    }
}

export default PersonalMenu
