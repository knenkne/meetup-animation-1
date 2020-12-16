import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import i18next from 'i18next'
import { connect } from 'react-redux'
import { Icon } from '@sbol/lib.ui'

import { pagesProductsTitleSelector } from 'Selectors'
import { clearProductsToShow } from 'Actions/pages/requests'

import styles from './styles.css'

export const PageSearchTitleComponent = ({
    title,
    clearProducts,
    onSearchClear,
    setInputFocus
}) => {
    const handleClear = useCallback(() => {
        clearProducts()
        onSearchClear()
    }, [])
    const handleBack = useCallback(() => {
        clearProducts()
        setInputFocus()
    }, [])

    return (
        <div className={styles.pageTitleWrapper}>
            <button
                type="button"
                onClick={handleBack}
                className={classnames(styles.titleIcon, styles.backIcon)}
                title={i18next.t('search.clear')}
            >
                <Icon name="icon:core/common/arrow-right" size="self" />
            </button>

            <div className={styles.pageTitle}>{title}</div>

            <button
                type="button"
                onClick={handleClear}
                className={classnames(styles.titleIcon)}
                title={i18next.t('search.clear')}
            >
                <Icon name="icon:core/common/close" size="self" />
            </button>
        </div>
    )
}

PageSearchTitleComponent.propTypes = {
    title: PropTypes.string.isRequired,
    onSearchClear: PropTypes.func.isRequired,
    clearProducts: PropTypes.func.isRequired,
    setInputFocus: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    title: pagesProductsTitleSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    clearProducts: () => dispatch(clearProductsToShow())
})

export const PageSearchTitle = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageSearchTitleComponent)
