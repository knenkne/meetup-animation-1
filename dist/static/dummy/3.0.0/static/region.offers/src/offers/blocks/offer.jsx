import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@sbol/lib.ui/core/link'
import { Link as ConnectedLink } from '@sbol/lib.app/src/link'
import i18next from 'i18next'
import _ from 'lodash'

import { feedback } from '../api'
import { Feedback } from '../components/feedback'
import { MultiText } from '../components/multi-text'
import { onViewportAdd, onViewportRemove, setActivePromo } from '../utils'

import bigOfferTheme from './big-offer.css'
import smallOfferTheme from './small-offer.css'

export class Offer extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        descriptions: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
                id: PropTypes.string,
                styleId: PropTypes.string,
                imageUrl: PropTypes.string
            })
        ),
        imageUrl: PropTypes.string,
        link: PropTypes.string,
        uniqueId: PropTypes.string,
        onHide: PropTypes.func,
        want: PropTypes.bool,
        promo: PropTypes.object,
        originalOffer: PropTypes.object,
        external: PropTypes.bool,
        mode: PropTypes.oneOf(['small', 'big']),
        buttonName: PropTypes.string
    }

    static defaultProps = {
        title: void '',
        description: void '',
        descriptions: [],
        imageUrl: void '',
        link: void '',
        uniqueId: void '',
        onHide: _.noop,
        want: false,
        promo: void '',
        originalOffer: void '',
        external: false,
        mode: 'big',
        buttonName: void ''
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
            descriptions,
            imageUrl,
            link,
            want,
            external,
            mode,
            buttonName
        } = this.props

        const style = mode === 'small' ? smallOfferTheme : bigOfferTheme

        return (
            <div
                className={style.offer}
            >
                <ConnectedLink
                    className={style.content}
                    onClick={this.handleClick}
                    href={link}
                    external={external}
                >
                    <div
                        ref={this.setRef}
                        className={style.layout}
                    >
                        {(!descriptions.length || mode === 'small') &&
                        <div
                            className={style.img}
                            style={{
                                backgroundImage: `url('${imageUrl}')`
                            }}
                        />
                        }
                        <div className={style.text}>
                            <MultiText
                                title={title}
                                description={description}
                                descriptions={descriptions}
                                size="sm"
                            />
                            {link && (
                                <div className={style.link}>
                                    <Link
                                        as="div"
                                        external={false}
                                        mode="forward"
                                        colorScheme="gray"
                                    >
                                        {buttonName || i18next.t('region.offers:feedback.next')}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </ConnectedLink>
                <div className={style.feedback}>
                    <Feedback
                        onCloseFeedback={this.handleCloseFeedback}
                        onWantFeedback={this.handleWantClick}
                        want={want}
                    />
                </div>
            </div>
        )
    }
}
