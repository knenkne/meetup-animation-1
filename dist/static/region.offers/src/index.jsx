import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import { Application } from '@sbol/lib.app/src/application'

import {
    OffersBlocks,
    OffersCarousel,
    Showcase,
    feedback,
    init,
    reject,
    getManagerId,
    connect,
    Feedback,
    HorizontalScroll,
    MultiText,
    Navigation
} from './offers'

const componentsDictionary = {
    OffersBlocks,
    OffersCarousel,
    Showcase,
    Catalog: OffersCarousel,
    CrossSale: OffersBlocks
}

const Component = ({ as, ...props }) => {
    const As = componentsDictionary[as]

    return (
        <Application
            name={process.env.PKG_ID}
            version={process.env.VERSION}
            libs={process.env.LIBS}
            locales={process.env.LOCALES}
            i18next={i18next}
        >
            <As {...props} />
        </Application>
    )
}

Component.propTypes = {
    as: PropTypes.oneOf([
        'OffersBlocks',
        'OffersCarousel',
        'Catalog',
        'CrossSale',
        'Showcase'
    ])
}

Component.defaultProps = {
    as: 'CrossSale'
}

const mount = (element, { region }) => {
    ReactDOM.render(element, region)
}

const unmount = ({ region }) => {
    ReactDOM.unmountComponentAtNode(region)
}

const constructor = {
    connect,
    Feedback,
    HorizontalScroll,
    MultiText,
    Navigation
}

Component.mount = mount
Component.unmount = unmount
Component.OffersBlocks = OffersBlocks
Component.OffersCarousel = OffersCarousel
Component.feedback = feedback
Component.init = init
Component.reject = reject
Component.getManagerId = getManagerId
Component.constructor = constructor

export default Component
export {
    mount,
    unmount,
    OffersBlocks,
    OffersCarousel,
    feedback,
    init,
    reject,
    getManagerId,
    constructor
}
