import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Button, Link, FullWidth, TechnicalError } from '@sbol/lib.ui'
import { feedback, reject } from '@sbol/lib.offers'
import { Link as AppLink, getConfigValue } from '@sbol/lib.app'

import { actions } from '../../__data__'

import { Builder } from './builder'
import style from './style.css'

const isFooter = () => getConfigValue('isSbolPro') && !window.location.search.includes('noServiceIssuedButton=true')
const getCommonImageUrl = (name) => `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/${name}`
const handleReload = () => window.location.reload()

export class PromoPage extends React.Component {
    static propTypes = {
        init: PropTypes.func.isRequired,
        promo: PropTypes.object,
        loading: PropTypes.bool.isRequired,
        contentId: PropTypes.string
    }

    static defaultProps = {
        promo: void 0,
        contentId: void ''
    }

    componentWillMount () {
        this.unsubscribe = this.props.init()
    }

    componentWillUnmount () {
        if (typeof this.unsubscribe === 'function') {
            this.unsubscribe()
        }
    }

    handleDone = () => {
        feedback.done()
        if (this.props.contentId) {
            reject([this.props.contentId])
        }
    }

    render () {
        if (this.props.loading) {
            return null
        }

        if (_.isEmpty(this.props.promo)) {
            return (
                <TechnicalError title={i18next.t('promo.error.title')} mode="technical" imageSrc={getCommonImageUrl('errors/error.png')}>
                    <TechnicalError.Description>
                        {i18next.t('promo.error.description')}
                    </TechnicalError.Description>
                    <TechnicalError.Actions>
                        <Button onClick={handleReload}>
                            {i18next.t('promo.reload')}
                        </Button>
                        {AppLink.createUrl('index') &&
                        <div className={style.errorLink}>
                            <Link as={AppLink} href={AppLink.createUrl('index')}>
                                {i18next.t('promo.main')}
                            </Link>
                        </div>
                        }
                    </TechnicalError.Actions>
                </TechnicalError>
            )
        }

        return (
            <div className={style.promo}>
                <FullWidth className={style.safeArea}>
                    <FullWidth.Inner>
                        {AppLink.createUrl('catalog') &&
                        <Link
                            mode="breadcrumb"
                            external={false}
                            as={AppLink}
                            href={AppLink.createUrl('catalog')}
                        >
                            {i18next.t('promo.back')}
                        </Link>
                        }
                        <Builder {...this.props.promo} />
                    </FullWidth.Inner>
                </FullWidth>

                {isFooter() && (
                    <FullWidth className={style.done}>
                        <FullWidth.Inner>
                            <Link
                                onClick={this.handleDone}
                                mode="forward"
                                external={false}
                                as={AppLink}
                                href={AppLink.createUrl('catalog')}
                            >
                                {i18next.t('promo.done')}
                            </Link>
                        </FullWidth.Inner>
                    </FullWidth>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    promo: state.init.promo,
    loading: state.init.loading,
    contentId: state.init.contentId
})

const mapDispatchToProps = {
    init: actions.init
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoPage)
