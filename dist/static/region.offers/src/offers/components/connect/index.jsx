import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from '@sbol/lib.ui/core/loader'
import classnames from 'classnames'
import _ from 'lodash'
import { log } from '@sbol/lib.app/src/log'
import { getFeatureValue, getFeatureOption } from '@sbol/lib.app/src/config'
import { Collapse } from 'react-collapse'
import i18next from 'i18next'

import stubImgUrl from '../../assets/stub.png'
import { getOffers } from '../../api'
import { DEFAULT_PLACE } from '../../constants'

import style from './style.css'

const optionalSplit = (string) => Array.isArray(string) ? string : string.split(',')

const omitProps = ['withOutProducts', 'withProducts', 'contentId', 'app', 'withFallback']

const configName = 'region.offers.config'

export const connect = ({ type, collapseEnabled, stubEnabled }) => (Component) =>
    class ConnectedOffers extends React.Component {
        static propTypes = {
            withOutProducts: PropTypes.arrayOf(PropTypes.string),
            withProducts: PropTypes.arrayOf(PropTypes.string),
            contentId: PropTypes.string,
            app: PropTypes.string,
            withFallback: PropTypes.bool,
            mode: PropTypes.oneOf(['small', 'big']),
            onCountChange: PropTypes.func
        }

        static defaultProps = {
            withOutProducts: [],
            withProducts: [DEFAULT_PLACE],
            contentId: void '',
            app: void '',
            withFallback: true,
            mode: 'big',
            onCountChange: void ''
        }

        state = {
            offers: void 0
        }

        componentWillMount () {
            const feature = getFeatureValue(this.props.app, configName)

            if (feature === 'true' || feature === true) {
                const withoutProductsOption = getFeatureOption(this.props.app, 'withoutProducts', configName)
                const withProductsOption = getFeatureOption(this.props.app, 'withProducts', configName)

                getOffers({
                    withOutProducts: optionalSplit(withoutProductsOption || this.props.withOutProducts),
                    withProducts: optionalSplit(withProductsOption || this.props.withProducts),
                    contentId: this.props.contentId,
                    apiVersion: getFeatureOption(this.props.app, 'apiVersion', process.env.PKG_ID) || '1',
                    withFallback: this.props.withFallback
                })
                    .then(this.addOffers)
                    .catch((error) => {
                        log.error(error)
                        this.noOffers()
                    })
            } else {
                this.noOffers()
            }
        }

        componentDidCatch (error, info) {
            log.error(error, info)
            this.setState({ offers: [] })
            this.props.onCountChange?.(0)
        }

        handleHide = (removeId) => {
            const offers = this.state.offers
                .filter(({ uniqueId }) => removeId !== uniqueId)

            this.setState({ offers })
            this.props.onCountChange?.(offers.length)
        }

        addOffers = (offers) => {
            this.setState({ offers })
            this.props.onCountChange?.(offers.length)
        }

        noOffers = () => {
            this.setState({ offers: [] })
            this.props.onCountChange?.(0)
        }

        stub = [{
            imageUrl: stubImgUrl,
            title: i18next.t('region.offers:carousel.stub')
        }]

        render () {
            const { offers } = this.state
            const { mode } = this.props

            if (!offers) {
                return (
                    <div className={classnames(style.loader, style[type], style[mode])}>
                        <Loader.Button colorScheme="dark" />
                    </div>
                )
            }

            if (!offers.length && stubEnabled) {
                return (
                    <Component
                        {..._.omit(this.props, omitProps)}
                        offers={this.stub}
                    />
                )
            }

            if (collapseEnabled) {
                return (
                    <Collapse isOpened={Boolean(offers.length)}>
                        <Component
                            {..._.omit(this.props, omitProps)}
                            offers={offers}
                            onHide={this.handleHide}
                        />
                    </Collapse>
                )
            }

            return (
                <Component
                    {..._.omit(this.props, omitProps)}
                    offers={offers}
                    onHide={this.handleHide}
                />
            )
        }
    }
