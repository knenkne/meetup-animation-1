import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from '@sbol/lib.ui'
import classnames from 'classnames'
import _ from 'lodash'
import { log, getFeatureValue, getFeatureOption } from '@sbol/lib.app'
import { Collapse } from 'react-collapse'
import i18next from 'i18next'

import stubImgUrl from '../../assets/stub.png'
import { getOffers } from '../../api'
import { DEFAULT_PLACE } from '../../constants'

import style from './style.css'

const optionalSplit = (string) => string instanceof Array ? string : string.split(',')

const omitProps = ['withOutProducts', 'withProducts', 'contentId', 'app', 'withFallback']

export const connect = ({ type }) => {
    const loaderTheme = {
        loader: classnames(style.loader, style[type]),
        loaderPoint: style.point,
    }

    return (Component) => class ConnectedOffers extends React.Component {
        static propTypes = {
            withOutProducts: PropTypes.arrayOf(PropTypes.string),
            withProducts: PropTypes.arrayOf(PropTypes.string),
            contentId: PropTypes.string,
            app: PropTypes.string,
            withFallback: PropTypes.bool,
            mode: PropTypes.oneOf(['small', 'big'])
        }

        static defaultProps = {
            withOutProducts: [],
            withProducts: [DEFAULT_PLACE],
            contentId: void '',
            app: void '',
            withFallback: true,
            mode: 'big'
        }

        state = {
            offers: void 0
        }

        componentWillMount () {
            const feature = getFeatureValue(this.props.app, process.env.PKG_ID)

            if (feature === 'true' || feature === true) {
                const withoutProductsOption = getFeatureOption(this.props.app, 'withoutProducts', process.env.PKG_ID)
                const withProductsOption = getFeatureOption(this.props.app, 'withProducts', process.env.PKG_ID)

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

        handleHide = (removeId) => {
            const offers = this.state.offers
                .filter(({ uniqueId }) => removeId !== uniqueId)

            this.setState({ offers })
        }

        componentDidCatch (error, info) {
            this.setState({ offers: [] })
            log.error(error, info)
        }

        addOffers = (offers) => {
            this.setState({ offers })
        }

        noOffers = () => {
            this.setState({ offers: [] })
        }

        stub = [{
            imageUrl: stubImgUrl,
            title: i18next.t('lib.offers:carousel.stub')
        }]

        render () {
            const { offers } = this.state

            if (!offers && Loader.Button.theme.loader) {
                return <Loader.Button theme={loaderTheme} />
            }

            if (!offers) {
                return (
                    <div className={classnames(style.loader, style[type])}>
                        <Loader.Button colorScheme="dark" />
                    </div>
                )
            }

            if (!offers.length && type === 'carousel') {
                return (
                    <Component
                        {..._.omit(this.props, omitProps)}
                        offers={this.stub}
                    />
                )
            }

            if (type === 'blocks') {
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
}
