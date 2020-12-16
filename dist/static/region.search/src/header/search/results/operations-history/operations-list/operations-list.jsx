import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import { clickOperation } from 'Thunks/analytic/clickOperation'
import { repeatOperation } from 'Thunks/analytic/repeatOperation'

import { OperationsItem } from './operations-item'
import styles from './operations-list.css'

export const OperationsList = ({
    operations,
    repeatClickMetric = _.identity,
    clickMetric = _.identity
}) => (
    <div className={styles.container}>
        {operations.map((item, index) => {
            const operationWithIndex = { ...item, position: index }
            return (
                <OperationsItem
                    operation={operationWithIndex}
                    repeatClickMetric={repeatClickMetric}
                    clickMetric={clickMetric}
                    key={`${item.description}-${item.id}-${item.date}`}
                />)
        })}
    </div>
)

OperationsList.propTypes = {
    repeatClickMetric: PropTypes.func,
    clickMetric: PropTypes.func,
    operations: PropTypes.array.isRequired
}

const mapDispatchToProps = {
    repeatClickMetric: repeatOperation,
    clickMetric: clickOperation
}

OperationsList.displayName = 'OperationsList'

export const ContainerComponent = connect(null, mapDispatchToProps)(OperationsList)
