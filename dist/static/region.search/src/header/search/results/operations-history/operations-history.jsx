import React, { useEffect, useRef, useMemo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import { Link } from '@sbol/lib.app'

import { showAllHistory } from 'Thunks/analytic/showAllHistory'
import {
    selectOperations,
    simpleIsLoadingOperationsSelector,
    simpleLoadingFailedOperationsSelector,
    simpleOperationsShowAllSelector,
    simpleSearchQuerySelector
} from 'Selectors'

import styles from '../styles.css'
import { Loader } from '../../components/loader'
import { eribUrl } from '../../../../utils'
import { ConnectedLinkWrapper } from '../connected-link'

import { ContainerComponent as OperationsList } from './operations-list'

/**
 * Выбрать ссылку.
 * @param {String} query - строка запроса
 * @return {String} - ссылка бесшовного перехода
 */
export const selectLink = (query) => {
    const crashLink = `${eribUrl}/PhizIC/private/payments/common.do?status=all`
    const newLinkType = Link.createUrl('link.operations.search', { search: query })
    const oldLinkType = Link.createUrl('operations', `?search=${query}`) // TODO убрать, когда применится link.operations.search
    // TODO добавить тесты после добавления jest
    return newLinkType || oldLinkType || crashLink
}

const OperationsHistory = ({
    isLoading,
    isLoadingFailed,
    showAll,
    showAllMetric,
    onMarkupChange,
    operations = [],
    query = ''
}) => {
    const isItems = useMemo(
        () => operations.length > 0,
        [operations]
    )
    const link = selectLink(query)
    const historyRef = useRef(null)

    useEffect(() => {
        onMarkupChange()
    }, [operations])

    return (
        <React.Fragment>
            {(isLoading || isItems) && (
                <div className={styles.resultsBlock} ref={historyRef}>
                    <h3 className={styles.header}>
                        <span className={styles.resultsBlockTitle}>
                            {i18next.t('menu.history')}
                        </span>
                        {isLoading && <Loader mode="tiny" />}
                        <ConnectedLinkWrapper
                            href={link}
                            handleMetric={showAllMetric}
                        >
                            {showAll && i18next.t('show.all.link')}
                        </ConnectedLinkWrapper>
                    </h3>

                    {/* TODO: Красивое сообщение об ошибке */}
                    {isLoadingFailed && <span />}
                    {isItems && (
                        <OperationsList operations={operations} />
                    )}
                </div>
            )}
        </React.Fragment>
    )
}

OperationsHistory.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isLoadingFailed: PropTypes.bool.isRequired,
    showAll: PropTypes.bool.isRequired,
    showAllMetric: PropTypes.func.isRequired,
    onMarkupChange: PropTypes.func.isRequired,
    operations: PropTypes.array,
    query: PropTypes.string
}

const mapStateToProps = (state) => ({
    isLoading: simpleIsLoadingOperationsSelector(state),
    isLoadingFailed: simpleLoadingFailedOperationsSelector(state),
    showAll: simpleOperationsShowAllSelector(state),
    operations: selectOperations(state),
    query: simpleSearchQuerySelector(state)
})

const mapDispatchToProps = {
    showAllMetric: showAllHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(OperationsHistory)
