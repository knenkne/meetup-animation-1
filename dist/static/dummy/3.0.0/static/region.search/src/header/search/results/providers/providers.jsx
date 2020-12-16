import React, { useEffect, useRef, useMemo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import { Link } from '@sbol/lib.app'

import { showAllProviders } from 'Thunks/analytic/showAllProviders'
import {
    selectProvidersResult,
    selectProvidersShowAll,
    simpleIsLoadingProvidersSelector,
    simpleLoadingFailedProvidersSelector,
    simpleSearchQuerySelector
} from 'Selectors'

import { eribUrl } from '../../../../utils'
import resultsStyles from '../styles.css'
import { Loader } from '../../components/loader'
import { ConnectedLinkWrapper } from '../connected-link'

import { ContainerComponent as ProvidersList } from './providers-list'

/**
 * Выбрать ссылку.
 * @param {String} query - строка запроса
 * @return {String} - ссылка бесшовного перехода
 */
export const selectLink = (query) => {
    const crashLink = `${eribUrl}/PhizIC/private/payments.do`
    const newLinkType = Link.createUrl('link.payments.dashboard.searchProvider', { searchProvider: query })
    const oldLinkType = Link.createUrl('payments.dashboard', `?searchProvider=${query}`) // TODO убрать, когда применится link.payments.dashboard.searchProvider
    // TODO добавить тесты после добавления jest
    return newLinkType || oldLinkType || crashLink
}

const Providers = ({
    isLoading,
    loadingFailed,
    providers,
    showAll,
    showAllMetric,
    onMarkupChange,
    query = ''
}) => {
    const isItems = useMemo(() => providers.length > 0, [providers])
    const link = selectLink(query)
    const prvidersRef = useRef(null)

    useEffect(() => {
        onMarkupChange()
    }, [providers])

    return (
        <React.Fragment>
            {(isLoading || isItems) && (
                <div className={resultsStyles.resultsBlock} ref={prvidersRef}>
                    <h3 className={resultsStyles.header}>
                        <span className={resultsStyles.resultsBlockTitle}>
                            {i18next.t('payments.title')}
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
                    {loadingFailed && <span />}
                    {isItems && <ProvidersList providers={providers} />}
                </div>
            )}
        </React.Fragment>
    )
}

Providers.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    loadingFailed: PropTypes.bool.isRequired,
    providers: PropTypes.array.isRequired,
    showAll: PropTypes.bool.isRequired,
    showAllMetric: PropTypes.func.isRequired,
    onMarkupChange: PropTypes.func.isRequired,
    query: PropTypes.string
}

const mapStateToProps = (state) => ({
    isLoading: simpleIsLoadingProvidersSelector(state),
    loadingFailed: simpleLoadingFailedProvidersSelector(state),
    showAll: selectProvidersShowAll(state),
    providers: selectProvidersResult(state),
    query: simpleSearchQuerySelector(state)
})

const mapDispatchToProps = {
    showAllMetric: showAllProviders
}

export default connect(mapStateToProps, mapDispatchToProps)(Providers)
