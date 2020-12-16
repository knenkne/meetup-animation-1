import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'
import i18next from 'i18next'
import { FullWidth } from '@sbol/lib.ui/core/full-width'
import { Icon } from '@sbol/lib.ui/core/icon'
import { isMobilePlatform } from '@sbol/lib.ui/core/utils/adaptive'

import { leftCheck, rightCheck, smoothScroll } from './utils'
import defaultTheme from './style.css'

const SCROLL_TIME = 1000

export class HorizontalScroll extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node,
        theme: PropTypes.shape({
            scroll: PropTypes.string,
            button: PropTypes.string,
            buttonLeft: PropTypes.string,
            buttonRight: PropTypes.string,
            buttonOpened: PropTypes.string,
            fading: PropTypes.string,
            fadingLeft: PropTypes.string,
            fadingRight: PropTypes.string,
            contents: PropTypes.string,
            mobile: PropTypes.string,
            desktop: PropTypes.string
        }),
        onScroll: PropTypes.func,
        id: PropTypes.string,
        getScrollWidth: PropTypes.func.isRequired
    }

    static defaultProps = {
        children: void 0,
        theme: defaultTheme,
        onScroll: _.noop,
        id: void ''
    }

    componentDidMount () {
        this.forceUpdate()
    }

    setContentsRef = (component) => {
        this.contents = component
    }

    handleLeftClick = () => {
        smoothScroll(this.contents, -this.props.getScrollWidth(), SCROLL_TIME)
        this.forceUpdate()
    }

    handleRightClick = () => {
        smoothScroll(this.contents, this.props.getScrollWidth(), SCROLL_TIME)
        this.forceUpdate()
    }

    handleScroll = (event) => {
        this.props.onScroll(event)
        this.forceUpdate()
    }

    render () {
        const { children, theme, id } = this.props

        const left = leftCheck(this.contents)
        const right = rightCheck(this.contents)
        const isMobile = isMobilePlatform()

        const Wrapper = isMobile ? FullWidth : 'div'
        const WrapperInner = isMobile ? FullWidth.Inner : 'div'

        return (
            <Wrapper className={classnames(theme.scroll, isMobile && theme.mobile)}>
                {!isMobile && (
                    <button
                        className={classnames(
                            theme.button,
                            theme.buttonLeft,
                            left && theme.buttonOpened
                        )}
                        onClick={this.handleLeftClick}
                        disabled={!left}
                        type="button"
                        title={i18next.t('region.offers:scroll.backward')}
                    >
                        <Icon name="icon:core/common/arrow-right" size="md" />
                    </button>
                )}

                <WrapperInner
                    className={theme.contents}
                    ref={this.setContentsRef}
                    onScroll={this.handleScroll}
                    id={id}
                >
                    {children}
                </WrapperInner>

                {!isMobile && (
                    <div
                        className={classnames(
                            theme.fading,
                            left && theme.fadingLeft,
                            right && theme.fadingRight
                        )}
                    />
                )}

                {!isMobile && (
                    <button
                        className={classnames(
                            theme.button,
                            right && theme.buttonOpened
                        )}
                        onClick={this.handleRightClick}
                        disabled={!right}
                        type="button"
                        title={i18next.t('region.offers:scroll.forward')}
                    >
                        <Icon name="icon:core/common/arrow-right" size="md" />
                    </button>
                )}
            </Wrapper>
        )
    }
}

HorizontalScroll.theme = defaultTheme
HorizontalScroll.displayName = 'HorizontalScroll'
export default HorizontalScroll
