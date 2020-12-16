import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { isPhoneViewport, isTabletViewport } from '@sbol/lib.ui/core/utils/adaptive'

import { HorizontalScroll } from '../components/horizontal-scroll'
import { connect } from '../components/connect'

import { Offer } from './offer'

const LG_COLUMN_WIDTH = 32
const MD_COLUMN_WIDTH = 32
const SM_COLUMN_WIDTH = 16

const LG_COLUMN_COUNT = 28
const MD_COLUMN_COUNT = 14
const SM_COLUMN_COUNT = 21

const MD_SMALL_COLUMN_COUNT = 9
const SM_SMALL_COLUMN_COUNT = 18

const getScrollWidth = (mode) => {
    if (mode === 'small') {
        if (isTabletViewport()) {
            return MD_COLUMN_WIDTH * MD_SMALL_COLUMN_COUNT
        }
        if (isPhoneViewport()) {
            return SM_COLUMN_WIDTH * SM_SMALL_COLUMN_COUNT
        }

        return LG_COLUMN_WIDTH * LG_COLUMN_COUNT
    }

    if (isTabletViewport()) {
        return MD_COLUMN_WIDTH * MD_COLUMN_COUNT
    }
    if (isPhoneViewport()) {
        return SM_COLUMN_WIDTH * SM_COLUMN_COUNT
    }

    return LG_COLUMN_WIDTH * LG_COLUMN_COUNT
}

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

    getScrollWidth = () => getScrollWidth(this.props.mode)

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
            <HorizontalScroll onScroll={this.handleScroll} id={this.id} getScrollWidth={this.getScrollWidth}>
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

export default connect({ type: 'blocks', collapseEnabled: true })(OffersBlocks)
