import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import classnames from 'classnames'
import _ from 'lodash'
import { storage } from '@sbol/lib.app'

import { connect } from '../components/connect'
import angleRight from '../assets/angle-right.svg'
import angleLeft from '../assets/angle-left.svg'
import { IS_SBOL_PRO } from '../constants'

import { Offer } from './offer'
import style from './style.css'

const AUTO_TRANSITION = 5000

export class OffersCarousel extends React.Component {
    static propTypes = {
        offers: PropTypes.array.isRequired,
        onHide: PropTypes.func
    }

    static defaultProps = {
        onHide: _.noop
    }

    constructor (props) {
        super(props)

        const activeOffer = storage.local.get('activeOffer', 'lib.offers')

        const startWithPosition = props.offers.findIndex(({ uniqueId }) => uniqueId === activeOffer)

        this.state = {
            showOffer: startWithPosition === -1 ? 0 : startWithPosition
        }
    }

    componentWillMount () {
        this.startAutoTransition()
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.offers.length !== nextProps.offers.length) {
            this.setState({ showOffer: 0 }, this.handleScroll)
        }
    }

    setRef = (component) => {
        this.component = component
    }

    handleLeft = () => {
        this.startAutoTransition()
        this.transition(-1)
    }

    handleRight = () => {
        this.startAutoTransition()
        this.transition(1)
    }

    handleScroll = () => {
        if (this.component && this.component.checkViewport) {
            this.component.checkViewport()
        }
    }

    handleHover = (event) => {
        this.stopAutoTransition()
        /* eslint-disable-next-line no-unused-expressions, comment: optional chaining */
        this.props.onMouseEnter?.(event)
    }

    handleLeave = (event) => {
        this.startAutoTransition()
        /* eslint-disable-next-line no-unused-expressions, comment: optional chaining */
        this.props.onMouseLeave?.(event)
    }

    startAutoTransition = () => {
        this.stopAutoTransition()
        if (this.props.offers.length && !IS_SBOL_PRO) {
            this.interval = setInterval(this.transition, AUTO_TRANSITION, 1)
        }
    }

    stopAutoTransition = () => {
        if (this.interval) {
            clearTimeout(this.interval)
        }
    }

    transition = (int) => {
        const countOffers = this.props.offers.length - 1
        const nextShowOffer = this.state.showOffer + int

        if (countOffers < nextShowOffer) {
            return this.setState({ showOffer: 0 }, this.handleScroll)
        }

        if (nextShowOffer < 0) {
            return this.setState({ showOffer: countOffers }, this.handleScroll)
        }

        return this.setState({ showOffer: nextShowOffer }, this.handleScroll)
    }

    components = []

    render () {
        const { showOffer } = this.state
        const { offers } = this.props

        return (
            <div
                className={style.offers}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleLeave}
            >
                {offers.map(
                    (banner, key) =>
                        key === showOffer && (
                            <div key={banner.uniqueId || 'stub'} className={style.offer}>
                                <Offer
                                    {...banner}
                                    onHide={this.props.onHide}
                                    onOpen={this.stopAutoTransition}
                                    onClose={this.startAutoTransition}
                                    ref={this.setRef}
                                />
                            </div>
                        )
                )}
                {offers.length > 1 && (
                    <div className={style.controls}>
                        <button
                            onClick={this.handleLeft}
                            className={style.button}
                            dangerouslySetInnerHTML={{ __html: angleLeft }}
                            title={i18next.t('lib.offers:scroll.backward')}
                        />
                        <div className={style.dotsWrapper}>
                            <div className={style.dots}>
                                {offers.map((banner, index) => (
                                    <div
                                        key={banner.uniqueId}
                                        className={classnames(
                                            style.dot,
                                            index === showOffer && style.active
                                        )}
                                    />
                                ))}
                                <div className={style.dot} />
                            </div>
                        </div>
                        <button
                            onClick={this.handleRight}
                            className={style.button}
                            dangerouslySetInnerHTML={{ __html: angleRight }}
                            title={i18next.t('lib.offers:scroll.forward')}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default connect({ type: 'carousel' })(OffersCarousel)
