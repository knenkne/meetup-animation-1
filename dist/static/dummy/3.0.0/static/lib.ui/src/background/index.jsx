import React from 'react'
import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types'
import cx from 'classnames'

import { FullWidth } from '../full-width'

import style from './style.css'

export class Background extends React.Component {
    static propTypes = {
        colorScheme: PropTypes.oneOf([
            'gradient-basic',
            'gradient-basic-wrapper',
            'gradient-head',
            'gradient-head-wrapper',
            'gradient-narnia',
            'gradient-narnia-wrapper',
            'gradient-waiting',
            'gradient-waiting-wrapper',
            'gradient-success',
            'gradient-success-wrapper',
            'gradient-error',
            'gradient-error-wrapper',
            'gradient-info',
            'gradient-info-wrapper',
            'gradient-cards',
            'gradient-cards-wrapper',
            'gradient-deposits',
            'gradient-deposits-wrapper',
            'gradient-insurance',
            'gradient-insurance-wrapper',
            'gradient-investments',
            'gradient-investments-wrapper',
            'gradient-credits',
            'gradient-credits-wrapper',
            'gradient-gold',
            'gradient-gold-wrapper',
            'gradient-silver',
            'gradient-silver-wrapper',
        ]),
        mode: PropTypes.oneOf([void 0, 'done', 'error', 'waiting', 'info']),
        children: PropTypes.node.isRequired,
        theme: PropTypes.object
    }

    static defaultProps = {
        colorScheme: 'gradient-basic',
        theme: style,
        mode: void 0
    }

    componentDidMount () {
        if (this.gradientRegion && this.gradientRegion.parentNode) {
            this.gradientRegion.parentNode.classList.add(this.props.theme[this.colorScheme])
        }
    }
    componentDidUpdate () {
        if (this.gradientRegion && this.gradientRegion.parentNode) {
            this.gradientRegion.parentNode.classList.remove(this.props.theme[this.colorScheme])
            this.colorScheme = this.props.colorScheme
            this.gradientRegion.parentNode.classList.add(this.props.theme[this.colorScheme])
        }
    }
    componentWillUnmount () {
        if (this.gradientRegion && this.gradientRegion.parentNode) {
            this.gradientRegion.parentNode.classList.remove(this.props.theme[this.colorScheme])
        }
    }

    static defaultTheme = style

    gradientRegion = document.getElementById('gradient-region')
    colorScheme = this.props.colorScheme

    render () {
        const { children, theme, mode, colorScheme, ...props } = this.props

        if (!this.gradientRegion) {
            return (
                <FullWidth
                    {...props}
                    className={cx(theme.background, theme[colorScheme])}
                >
                    <div id="important-gradient-background" className={cx(theme.wrapper, mode && theme.container)}>
                        <FullWidth.Inner className={theme.inner}>
                            {children}
                        </FullWidth.Inner>
                    </div>
                </FullWidth>
            )
        }

        return ReactDOM.createPortal(
            <FullWidth
                {...props}
            >
                <div id="important-gradient-background" className={cx(theme.wrapper, mode && theme.container)}>
                    <FullWidth.Inner className={theme.inner}>
                        {children}
                    </FullWidth.Inner>
                </div>
            </FullWidth>,
            this.gradientRegion
        )
    }
}

Background.theme = style
