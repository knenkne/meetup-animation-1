import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { clickProvider } from 'Thunks/analytic/clickProvider'

import styles from './styles.css'
import { Item } from './item'


export const ProvidersList = ({
    providers,
    clickMetric = _.identity
}) => (
    <div className={styles.container}>
        {_.map(providers, (item, index) => {
            const providerWithIndex = { ...item, position: index }
            return (
                <Item
                    provider={providerWithIndex}
                    clickMetric={clickMetric}
                    key={`${item.provider?.id}`}
                />)
        })}
    </div>
)

ProvidersList.propTypes = {
    providers: PropTypes.array.isRequired,
    clickMetric: PropTypes.func
}

ProvidersList.displayName = 'ProvidersList'

const mapDispatchToProps = {
    clickMetric: clickProvider
}

export const ContainerComponent = connect(null, mapDispatchToProps)(ProvidersList)
