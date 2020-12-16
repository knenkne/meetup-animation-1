import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import { getFeatureOption, getFeatureValue, getNavigationValue, log } from '@sbol/lib.app'
import { Loader } from '@sbol/lib.ui'

import { AnalyticEvent } from '../'

import { CapacityProductDumb } from './CapacityProductDumb'
import { STATUS } from './status'
import styles from './style.css'

const FEATURE = 'CapacityStatus'
const DEFAULT_ERROR = 'LC_DEFAULT_ERROR_CODE'

const getErrorCapacity = () => ({
    status: STATUS.LC_ERROR,
    locales: {
        title: i18next.t('lib.creditability:product.title'),
        description: i18next.t('lib.creditability:product.text'),
        button: i18next.t('lib.creditability:product.button')
    }
})

export class CapacityProduct extends PureComponent {

    static propTypes = {
        axios: PropTypes.object.isRequired
    }

    state = {
        capacity: void 0,
        error: void 0,
        initialized: false
    }

    componentDidMount () {
        this.fetch().then(({ capacity, error }) => this.setState({ capacity, error, initialized: true }, this.handleOnShow))
    }

    getEventLabelKey = (hasError) => {
        if (hasError) {
            return 'lib.creditability:product.analytics.negative'
        }
        return 'lib.creditability:product.analytics.positive'
    }

    handleOnShow = () => this.createEvent().track()

    handleOnClick = () => this.createEvent(true).track()

    fetch = async () => {
        const { axios } = this.props
        const endpoint = getFeatureOption(FEATURE, 'endpointUrl')
        try {
            const { data: { success, body, error } } = await axios.post(endpoint, {})
            if (success) {
                return { capacity: body }
            }
            return { capacity: getErrorCapacity(), error: error.code }
        } catch (e) {
            log.error('Error while fetch capacity', e)
        }
        return { capacity: getErrorCapacity(), error: DEFAULT_ERROR }
    }

    createEvent = (isClick = false) => {
        const { capacity, error } = this.state
        const { system, status } = capacity
        const action = i18next.t(isClick ? 'lib.creditability:product.analytics.click' : 'lib.creditability:product.analytics.show')
        return new AnalyticEvent(
            'loans.dashboard',
            i18next.t('lib.creditability:product.analytics.action'),
            i18next.t(this.getEventLabelKey(!!error)),
            { status, system, error, action }
        )
    }

    render () {
        return (
            <div className={styles.product}>
                {this.renderContent()}
            </div>
        )
    }

    renderContent = () => {
        const { capacity, initialized } = this.state
        if (initialized) {
            const capacityKey = getFeatureValue(FEATURE)
            const link = getNavigationValue(capacityKey)
            return (<CapacityProductDumb link={link} onButtonClick={this.handleOnClick} {...capacity} />)
        }
        return (<Loader.Button colorScheme="secondary" />)
    }
}

CapacityProduct.displayName = 'CapacityProduct'
