import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import i18next from 'i18next'
import { Icon } from '@sbol/lib.ui'

import { autocompleteSelector } from 'Selectors'
import { suggestArrowRight } from 'Thunks/analytic/suggestArrowRight'

import styles from '../style.css'
import { PageSearchTitle } from '../components/page-search-title'


import SearchTypeahead from './Field'

export const SearchInput = ({
    value,
    autocompleteValue,
    onChange,
    onSearchClear,
    onFocus,
    isProductFromPages,
    inputRef,
    setInputFocus,
    panelVisible = false
}) => {
    const handleChange = useCallback(
        (event) => onChange(event.target.value),
        []
    )
    const useSuggestion = useCallback(
        (event) => {
            if (event.key === 'ArrowRight' && autocompleteValue && autocompleteValue !== value) {
                onChange(autocompleteValue)
                suggestArrowRight()
            }
        },
        [autocompleteValue, value]
    )

    return (
        <div className={styles.search}>
            {isProductFromPages && (
                <PageSearchTitle
                    onSearchClear={onSearchClear}
                    setInputFocus={setInputFocus}
                />
            )}
            <SearchTypeahead
                onChange={handleChange}
                value={value}
                search={value ? autocompleteValue : i18next.t('region.search:search.placeholder')}
                aria-label={i18next.t('region.search:search.placeholder')}
                autoComplete="off"
                name="search"
                id="global-search"
                refWrapper={inputRef}
                onFocus={onFocus}
                theme={{
                    input: classnames(styles.searchInput, panelVisible && styles.searchVisible)
                }}
                onKeyUp={useSuggestion}
            />

            {value.length > 0 ? (
                <button
                    type="button"
                    onClick={onSearchClear}
                    className={classnames(
                        styles.searchIcon,
                        styles.clearSearch
                    )}
                    onFocus={onFocus}
                    title={i18next.t('region.search:search.clear')}
                >
                    <Icon name="icon:core/common/close" size="self" />
                </button>
            ) : (
                <div className={styles.searchIcon}>
                    <Icon name="icon:core/common/search" size="self" />
                </div>
            )}
        </div>
    )
}

SearchInput.propTypes = {
    value: PropTypes.string,
    autocompleteValue: PropTypes.string,
    onFocus: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSearchClear: PropTypes.func.isRequired,
    setInputFocus: PropTypes.func.isRequired,
    isProductFromPages: PropTypes.bool.isRequired,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) })
    ]).isRequired,
    panelVisible: PropTypes.bool
}

SearchInput.defaultProps = {
    value: '',
    autocompleteValue: ''
}

const mapStateToProps = (state) => ({
    autocompleteValue: autocompleteSelector(state)
})

export default connect(mapStateToProps)(SearchInput)
