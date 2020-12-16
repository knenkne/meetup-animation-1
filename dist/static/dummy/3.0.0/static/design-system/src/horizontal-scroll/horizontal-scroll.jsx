import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Icon } from '../icon'
import { ic24ArrowLeft } from '../icon/common'
import { isMobilePlatform } from '../utils/adaptive'
import { InnerStyled, OuterStyled } from '../full-width/full-width.style'

import { leftCheck, rightCheck } from './utils'
import { WrapperScrollStyled, WrapperInnerStyled, ScrollButtonLeftStyled, FadingStyled, ScrollButtonRightStyled } from './horizontal-scroll.style'

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * Технический компонент для управления горизонтальным скроллом (используется в Tabs)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

const easeInOutQuad = (time, start, change, duration) => {
    /* eslint-disable no-mixed-operators, comment: лучше не скомпоновалось */
    const half = 2
    let halvedTime = time / (duration / half)
    if (halvedTime < 1) {
        return (change / half) * halvedTime * halvedTime + start
    }
    halvedTime -= 1
    return -change / half * (halvedTime * (halvedTime - half) - 1) + start
}

const smoothScroll = (element, change, duration) => {
    const start = element.scrollLeft
    const el = element
    let currentTime = 0
    const increment = 20

    const animateScroll = () => {
        currentTime += increment
        el.scrollLeft = easeInOutQuad(currentTime, start, change, duration)
        if (currentTime < duration) {
            requestAnimationFrame(animateScroll)
        }
    }
    animateScroll()
}

export class HorizontalScroll extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node,
        refWrapper: PropTypes.func
    }

    static defaultProps = {
        children: void 0,
        refWrapper: _.noop
    }

    componentDidMount () {
        this.forceUpdate()
    }

    setContentsRef = (component) => {
        this.contents = component
    }

    handleLeftClick = () => {
        smoothScroll(this.contents, -300, 1000)
        this.forceUpdate()
    }

    handleRightClick = () => {
        smoothScroll(this.contents, 300, 1000)
        this.forceUpdate()
    }

    handleScroll = () => {
        this.forceUpdate()
    }

    render () {
        const { children, refWrapper, parentId } = this.props

        const left = leftCheck(this.contents)
        const right = rightCheck(this.contents)
        const isMobile = isMobilePlatform()

        const Wrapper = isMobile ? WrapperScrollStyled.withComponent(OuterStyled) : WrapperScrollStyled
        const WrapperInner = isMobile ? WrapperInnerStyled.withComponent(InnerStyled) : WrapperInnerStyled

        return (
            <Wrapper
                ref={refWrapper}
                isMobile={isMobile}
            >
                {!isMobile && (
                    <ScrollButtonLeftStyled
                        onClick={this.handleLeftClick}
                        disabled={!left}
                        type="button"
                        aria-label="Листать влево"
                    >
                        <Icon
                            icon={ic24ArrowLeft}
                        />
                    </ScrollButtonLeftStyled>
                )}

                <WrapperInner
                    ref={this.setContentsRef}
                    onScroll={this.handleScroll}
                    id={parentId}
                >
                    {children}
                </WrapperInner>

                {!isMobile && (
                    <FadingStyled
                        left={left}
                        right={right}
                    />
                )}

                {!isMobile && (
                    <ScrollButtonRightStyled
                        right={right}
                        onClick={this.handleRightClick}
                        disabled={!right}
                        type="button"
                        aria-label="Листать вправо"
                    >
                        <Icon
                            icon={ic24ArrowLeft}
                        />
                    </ScrollButtonRightStyled>
                )}
            </Wrapper>
        )
    }
}

export default HorizontalScroll
