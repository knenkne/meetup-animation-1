import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import i18next from 'i18next'

import { isSearchEmptySelector, isLoadingSelector } from 'Selectors'
import { showNotFound } from 'Thunks/analytic/showNotFound'

import styles from './styles.css'


const EmtpyResultComponent = ({ isSearchEmpty, isLoading, showNotFoundMetric }) => {
    useEffect(() => {
        if (!isLoading && isSearchEmpty) {
            showNotFoundMetric()
        }
    })

    return (
        !isLoading && isSearchEmpty
            ? <div className={styles.emptyResults}>{i18next.t('nothing.found')}</div>
            : null)
}

EmtpyResultComponent.propTypes = {
    isSearchEmpty: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    showNotFoundMetric: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    isSearchEmpty: isSearchEmptySelector(state),
    isLoading: isLoadingSelector(state)
})

const mapDispatchToProps = {
    showNotFoundMetric: showNotFound
}

export const EmtpyResult = connect(mapStateToProps, mapDispatchToProps)(EmtpyResultComponent)
