import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@sbol/lib.ui/core/link'
import { storage } from '@sbol/lib.app/src/storage'
import { Link as ConnectedLink } from '@sbol/lib.app/src/link'
import i18next from 'i18next'
import _ from 'lodash'

import { feedback } from '../api'
import { Feedback } from '../components/feedback'
import { MultiText } from '../components/multi-text'
import { onViewportAdd, onViewportRemove, setActivePromo } from '../utils'

import style from './style.css'

export class Offer extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        imageUrl: PropTypes.string,
        buttonName: PropTypes.string,
        link: PropTypes.string,
        uniqueId: PropTypes.string,
        onHide: PropTypes.func,
        want: PropTypes.bool,
        promo: PropTypes.object,
        originalOffer: PropTypes.object,
        external: PropTypes.bool,
        descriptions: PropTypes.array,
        onOpen: PropTypes.func,
        onClose: PropTypes.func
    }

    static defaultProps = {
        title: void '',
        description: void '',
        imageUrl: void '',
        buttonName: void '',
        link: void '',
        uniqueId: void '',
        onHide: _.noop,
        want: false,
        promo: void '',
        originalOffer: void '',
        external: false,
        descriptions: [],
        onOpen: void '',
        onClose: void ''
    }

    componentDidMount () {
        if (this.props.uniqueId) {
            this.checkViewport = onViewportAdd(this.component, () => {
                storage.local.set('activeOffer', this.props.uniqueId, 'region.offers')
                feedback.shown(this.props)
            })
            this.checkViewport()
        }
    }

    componentWillUnmount () {
        if (this.props.uniqueId) {
            onViewportRemove(this.checkViewport)
        }
    }

    setRef = (component) => {
        this.component = component
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
            buttonName,
            link,
            want,
            external
        } = this.props

        const externalProps = external ? {
            target: '_blank',
            rel: 'noopener noreferrer'
        } : {}

        return (
            <div className={style.content}>
                <div
                    ref={this.setRef}
                    className={style.layout}
                    style={{
                        backgroundImage: `url('${imageUrl}')`
                    }}
                >
                    <div className={style.text}>
                        <MultiText
                            title={title}
                            description={description}
                            descriptions={descriptions}
                        />
                        {link && (
                            <div className={style.link}>
                                <Link
                                    as={ConnectedLink}
                                    href={link}
                                    external={false}
                                    colorScheme="button"
                                    onClick={this.handleClick}
                                    {...externalProps}
                                >
                                    <span className={style.spacer}>
                                        {buttonName || i18next.t('region.offers:feedback.next')}
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.feedback}>
                    <Feedback
                        onCloseFeedback={this.handleCloseFeedback}
                        onOpen={this.props.onOpen}
                        onClose={this.props.onClose}
                        onWantFeedback={this.handleWantClick}
                        want={want}
                    />
                </div>
            </div>
        )
    }
}
