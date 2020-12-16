import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { Icon } from '../icon'
import { FullWidth } from '../full-width'
import { isMobilePlatform } from '../utils'

import { leftCheck, rightCheck, smoothScroll } from './utils'
import defaultTheme from './style.css'

const SCROLL_WIDTH = 300
const SCROLL_TIME = 1000

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * Технический компонент для управления горизонтальным скроллом (используется в Tabs)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
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
        refWrapper: PropTypes.func,
        a11y: PropTypes.shape({
            titleBackward: PropTypes.string,
            titleForward: PropTypes.string
        }),
        scrollWidth: PropTypes.number
    }

    static defaultProps = {
        children: void 0,
        theme: defaultTheme,
        refWrapper: _.noop,
        a11y: {
            titleBackward: 'Листать назад',
            titleForward: 'Листать вперед'
        },
        scrollWidth: SCROLL_WIDTH
    }

    componentDidMount () {
        this.forceUpdate()
    }

    setContentsRef = (component) => {
        this.contents = component
    }

    handleLeftClick = () => {
        smoothScroll(this.contents, -this.props.scrollWidth, SCROLL_TIME)
        this.forceUpdate()
    }

    handleRightClick = () => {
        smoothScroll(this.contents, this.props.scrollWidth, SCROLL_TIME)
        this.forceUpdate()
    }

    handleScroll = () => {
        this.forceUpdate()
    }

    render () {
        const { children, theme, refWrapper, a11y, parentId } = this.props

        const left = leftCheck(this.contents)
        const right = rightCheck(this.contents)
        const isMobile = isMobilePlatform()

        const Wrapper = isMobile ? FullWidth : 'div'
        const WrapperInner = isMobile ? FullWidth.Inner : 'div'

        return (
            <Wrapper ref={refWrapper} className={theme.scroll}>
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
                        title={a11y.titleBackward}
                    >
                        <Icon name="icon:core/common/arrow-right" size="md" />
                    </button>
                )}

                <WrapperInner
                    className={classnames(
                        theme.contents,
                        isMobile && theme.mobile
                    )}
                    ref={this.setContentsRef}
                    onScroll={this.handleScroll}
                    id={parentId}
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
                        title={a11y.titleForward}
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
