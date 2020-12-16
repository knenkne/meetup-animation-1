import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'
import i18next from 'i18next'
import { isMobilePlatform, isDesktopPlatform, FullWidth } from '@sbol/lib.ui'

import arrow from '../../assets/arrow.svg'

import { leftCheck, rightCheck, smoothScroll } from './utils'
import defaultTheme from './style.css'

const SCROLL_WIDTH = 896
const SCROLL_TIME = 1000

export class HorizontalScroll extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node,
        theme: PropTypes.shape({
            scroll: PropTypes.string
        }),
        onScroll: PropTypes.func
    }

    static defaultProps = {
        children: void 0,
        theme: defaultTheme,
        onScroll: _.noop
    }

    componentDidMount () {
        this.forceUpdate()
    }

    setContentsRef = (component) => {
        this.contents = component
    }

    handleLeftClick = () => {
        smoothScroll(this.contents, -SCROLL_WIDTH, SCROLL_TIME)
        this.forceUpdate()
    }

    handleRightClick = () => {
        smoothScroll(this.contents, SCROLL_WIDTH, SCROLL_TIME)
        this.forceUpdate()
    }

    handleScroll = (event) => {
        this.props.onScroll(event)
        this.forceUpdate()
    }

    render () {
        const { children, theme } = this.props

        const left = leftCheck(this.contents)
        const right = rightCheck(this.contents)

        const Wrapper = isMobilePlatform() ? FullWidth : 'div'
        const WrapperInner = isMobilePlatform() ? FullWidth.Inner : 'div'

        return (
            <Wrapper
                className={classnames(
                    theme.scroll,
                    isMobilePlatform() && theme.mobile,
                    isDesktopPlatform() && theme.desktop
                )}
            >
                {isDesktopPlatform() && left &&
                <button
                    className={theme.button}
                    onClick={this.handleLeftClick}
                    type="button"
                    dangerouslySetInnerHTML={{ __html: arrow }}
                    title={i18next.t('lib.offers:scroll.backward')}
                />
                }
                <WrapperInner
                    className={theme.contents}
                    ref={this.setContentsRef}
                    onScroll={this.handleScroll}
                    id={this.props.id}
                >
                    {children}
                </WrapperInner>
                {isDesktopPlatform() && right &&
                <button
                    className={theme.button}
                    onClick={this.handleRightClick}
                    type="button"
                    dangerouslySetInnerHTML={{ __html: arrow }}
                    title={i18next.t('lib.offers:scroll.forward')}
                />
                }
            </Wrapper>
        )
    }
}

HorizontalScroll.theme = defaultTheme
HorizontalScroll.displayName = 'HorizontalScroll'
export default HorizontalScroll
