import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { HorizontalScroll } from '../components/horizontal-scroll'
import { connect } from '../components/connect'

import { Offer } from './offer'

export class OffersBlocks extends React.Component {
    static propTypes = {
        offers: PropTypes.array.isRequired,
        onHide: PropTypes.func.isRequired,
        mode: PropTypes.oneOf(['small', 'big']).isRequired
    }

    setRef = (component) => {
        if (!this.offers.includes(component)) {
            this.offers.push(component)
        }
    }

    handleScroll = () => {
        this.offers.forEach((component) => {
            if (component && component.checkViewport) {
                component.checkViewport()
            }
        })
    }

    id = _.uniqueId('offers-block-')
    offers = []

    render () {
        const { offers, onHide, mode } = this.props

        return (
            <HorizontalScroll onScroll={this.handleScroll} id={this.id}>
                {offers.map((offer) => (
                    <Offer
                        key={offer.uniqueId}
                        {...offer}
                        mode={mode}
                        onHide={onHide}
                        ref={this.setRef}
                    />
                ))}
            </HorizontalScroll>
        )
    }
}

export default connect({ type: 'blocks' })(OffersBlocks)
