import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@sbol/lib.ui'
import { Link as ConnectedLink, getNavigationValue } from '@sbol/lib.app'
import i18next from 'i18next'
import _ from 'lodash'

import { feedback, offersQueryParams } from '../api'
import { Feedback } from '../components/feedback'
import { onViewportAdd, onViewportRemove, setActivePromo } from '../utils'

import bigOfferTheme from './big-offer.css'
import smallOfferTheme from './small-offer.css'

export class Offer extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        imageUrl: PropTypes.string,
        link: PropTypes.string,
        uniqueId: PropTypes.string,
        onHide: PropTypes.func,
        want: PropTypes.bool,
        promo: PropTypes.object,
        originalOffer: PropTypes.object,
        external: PropTypes.bool,
        mode: PropTypes.oneOf(['small', 'big'])
    }

    static defaultProps = {
        title: void '',
        description: void '',
        imageUrl: void '',
        link: void '',
        uniqueId: void '',
        onHide: _.noop,
        want: false,
        promo: void '',
        originalOffer: void '',
        external: false,
        mode: 'big'
    }

    componentDidMount () {
        this.checkViewport = onViewportAdd(this.component, () => feedback.shown(this.props), 'horizontal-scroll')
        this.checkViewport()
    }

    componentWillUnmount () {
        onViewportRemove(this.checkViewport)
    }

    setRef = (c) => {
        this.component = c
    }

    handleClick = () => {
        if (this.props.promo) {
            setActivePromo(this.props.originalOffer)
        }

        feedback.started(this.props)
    }

    handleWantClick = () => {
        feedback.opened(this.props)
        this.props.onHide(this.props.uniqueId)
    }

    handleCloseFeedback = (detail) => {
        feedback.close(this.props, detail)
        this.props.onHide(this.props.uniqueId)
    }

    render () {
        const {
            title,
            description,
            imageUrl,
            link,
            promo,
            want,
            external,
            mode
        } = this.props

        const style = mode === 'small' ? smallOfferTheme : bigOfferTheme
        return (
            <div
                className={style.offer}
            >
                <Feedback
                    onCloseFeedback={this.handleCloseFeedback}
                    onWantFeedback={this.handleWantClick}
                    want={want}
                >
                    <ConnectedLink
                        className={style.content}
                        onClick={this.handleClick}
                        href={promo ? offersQueryParams(getNavigationValue('promo'), this.props) : link}
                        external={external}
                    >
                        <div ref={this.setRef}>
                            <div
                                className={style.img}
                                style={{
                                    backgroundImage: `url('${imageUrl}')`
                                }}
                            />
                            {title && <h4 className={style.caption}>{title}</h4>}
                            {description && <p className={style.description}>{description}</p>}
                            {(promo || link) && (
                                <div className={style.link}>
                                    <Link
                                        as="div"
                                        external={false}
                                        mode="forward"
                                        colorScheme="gray"
                                    >
                                        {i18next.t('lib.offers:feedback.next')}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </ConnectedLink>
                </Feedback>
            </div>
        )
    }
}
