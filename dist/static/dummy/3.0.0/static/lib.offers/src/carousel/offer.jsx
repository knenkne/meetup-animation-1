import React from 'react'
import PropTypes from 'prop-types'
import { FullWidth, Link } from '@sbol/lib.ui'
import { storage, Link as ConnectedLink, getNavigationValue } from '@sbol/lib.app'
import i18next from 'i18next'
import _ from 'lodash'
import classnames from 'classnames'

import { feedback, offersQueryParams } from '../api'
import { Feedback } from '../components/feedback'
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
        external: PropTypes.bool
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
        external: false
    }

    componentDidMount () {
        if (this.props.uniqueId) {
            this.checkViewport = onViewportAdd(this.component, () => {
                storage.local.set('activeOffer', this.props.uniqueId, 'lib.offers')
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
            buttonName,
            link,
            uniqueId,
            promo,
            want,
            external
        } = this.props

        const LinkComponent = uniqueId ? ConnectedLink : 'div'

        return (
            <Feedback
                onCloseFeedback={this.handleCloseFeedback}
                onOpen={this.props.onOpen}
                onClose={this.props.onClose}
                onWantFeedback={this.handleWantClick}
                disabled={!uniqueId}
                want={want}
                fullWidth
            >
                <FullWidth>
                    <LinkComponent
                        className={classnames(style.content, !description && style.titleOnly)}
                        onClick={this.handleClick}
                        href={promo ? offersQueryParams(getNavigationValue('promo'), this.props) : link}
                        external={external}
                    >
                        <FullWidth.Inner>
                            <div
                                ref={this.setRef}
                                className={style.layout}
                                style={{
                                    backgroundImage: `url('${imageUrl}')`
                                }}
                            >
                                {title && <div className={style.caption}>{title}</div>}
                                {description && <p className={style.description}>{description}</p>}
                                {(promo || link) && (
                                    <div className={style.link}>
                                        <Link
                                            as="div"
                                            external={false}
                                            mode="forward"
                                            colorScheme="gray"
                                        >
                                            {buttonName || i18next.t('lib.offers:feedback.next')}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </FullWidth.Inner>
                    </LinkComponent>
                </FullWidth>
            </Feedback>
        )
    }
}
