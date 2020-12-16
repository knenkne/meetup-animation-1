import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import _ from 'lodash'

import * as actions from 'Actions'
import {
    onPrefetchOperations,
    onSearchQueryChange,
    onAddSuggestValue,
    onUpdateSearchQuerySuggestions,
    didMount,
    willUnmount
} from 'Thunks'
import {
    simpleSearchQuerySelector,
    isSearchEmptySelector,
    isProductFromPagesSelector
} from 'Selectors'
import { clickSuggest } from 'Thunks/analytic/clickSuggest'

import { onSearch } from './analytics/'
import { SearchPanel } from './panel'
import SearchInput from './input'
import { SearchSuggests } from './suggests'
import SearchResults from './results'
import style from './style.css'

export class SearchComponent extends React.Component {
    static propTypes = {
        handleSearchQueryChange: PropTypes.func.isRequired,
        handlePrefetchOperations: PropTypes.func.isRequired,
        handleSearchQueryClear: PropTypes.func.isRequired,
        updateSearchQuerySuggestions: PropTypes.func.isRequired,
        addSuggestValue: PropTypes.func.isRequired,
        searchQuery: PropTypes.string.isRequired,
        isSearchEmpty: PropTypes.bool.isRequired,
        isProductFromPages: PropTypes.bool.isRequired,
        isErib: PropTypes.bool.isRequired,
        onDidMount: PropTypes.func.isRequired,
        onWillMount: PropTypes.func.isRequired
    }

    constructor (props) {
        super(props)
        this.rootRef = React.createRef()
        this.inputRef = null
    }

    state = {
        searchInputIsInFocus: false,
        merchantsData: null,
        operationsHistoryLoaded: false,
        clickOnSearch: 0,
        clickOnDocument: 0
    }

    componentDidMount () {
        this.props.onDidMount()
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.handleClickDocument)
        this.props.onWillMount()
    }

    setInputFocus = () => this.inputRef.focus()

    /**
     * Собирать количество кликов по приложению region.search
     * @return {undefined} - ничего не вернет
     */
    handleClickOnSearch = () => {
        this.setState((state) => ({
            clickOnSearch: state.clickOnSearch + 1
        }))
    }

    /**
     * Собрать клики по всему документу.
     * @return {undefined} - ничего не вернет
     */
    handleClickDocument = () => {
        this.setState((state) => ({
            clickOnDocument: state.clickOnDocument + 1
        }))

        const { clickOnSearch, clickOnDocument } = this.state

        if (clickOnDocument > clickOnSearch) {
            document.removeEventListener('click', this.handleClickDocument)
            this.setState({
                searchInputIsInFocus: false,
                clickOnDocument: 0,
                clickOnSearch: 0
            })
        }
    }

    handleOnInputFocus = () => {
        document.addEventListener('click', this.handleClickDocument)
        onSearch()

        const { merchantsData, operationsHistoryLoaded } = this.state

        this.setState({ searchInputIsInFocus: true })

        if (!merchantsData) {
            import('../assets/merchantsData.json').then((fileContent) => {
                this.setState({ merchantsData: fileContent })
            })
        }

        if (!operationsHistoryLoaded) {
            this.setState({ operationsHistoryLoaded: true })
            this.props.handlePrefetchOperations()
        }
    }

    handleOnInputBlur = () => {
        document.removeEventListener('click', this.handleClickDocument)
        this.setState({ searchInputIsInFocus: false })
    }

    handleSearchQueryInput = (searchQuery) => {
        this.props.handleSearchQueryChange(searchQuery)
        this.props.updateSearchQuerySuggestions(searchQuery, this.state.merchantsData)
    }

    handleSearchQueryInputClear = () => {
        this.props.handleSearchQueryClear()
        this.setInputFocus()
    }

    onTextSuggestClick = (suggest) => {
        this.props.handleSearchQueryChange(suggest.value)
        this.props.addSuggestValue(suggest.value)
        this.setInputFocus()
        clickSuggest(suggest)
    }

    onSearchResultClick = (suggest) => {
        this.props.addSuggestValue(suggest)
    }

    createInputReference = (input) => {
        this.inputRef = input
    }

    render () {
        const { searchQuery, isSearchEmpty, isProductFromPages, isErib } = this.props
        const { searchInputIsInFocus } = this.state
        const panelVisible = searchInputIsInFocus || isProductFromPages

        return (
            <div
                ref={this.rootRef}
                onClick={this.handleClickOnSearch}
                className={classnames(
                    style.searchWrapper,
                    isErib && style.eribSearchWrapper,
                    panelVisible && style.show
                )}
            >
                <SearchInput
                    onFocus={this.handleOnInputFocus}
                    value={searchQuery}
                    onChange={this.handleSearchQueryInput}
                    onSearchClear={this.handleSearchQueryInputClear}
                    isProductFromPages={isProductFromPages}
                    inputRef={this.createInputReference}
                    setInputFocus={this.setInputFocus}
                    panelVisible={panelVisible}
                />
                {panelVisible &&
                    <SearchPanel>
                        {searchQuery.length > 0 ? (
                            <SearchResults
                                handleSearchResultClick={
                                    this.onSearchResultClick
                                }
                                isSearchEmpty={isSearchEmpty}
                                isProductFromPages={isProductFromPages}
                                onCloseSearchResult={this.handleOnInputBlur}
                            />
                        ) : (
                            <SearchSuggests handleTextSuggestClick={this.onTextSuggestClick} />
                        )}
                    </SearchPanel>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchQuery: simpleSearchQuerySelector(state),
    isSearchEmpty: isSearchEmptySelector(state),
    isProductFromPages: isProductFromPagesSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    handleSearchQueryChange: (query) => dispatch(onSearchQueryChange(query)),
    handleSearchQueryClear: () => dispatch(actions.clearSearchQuery()),
    addSuggestValue: (value) => dispatch(onAddSuggestValue(value)),
    onDidMount: () => dispatch(didMount()),
    onWillMount: () => dispatch(willUnmount()),
    updateSearchQuerySuggestions: (value, merchantsData) => {
        if (merchantsData) {
            return dispatch(onUpdateSearchQuerySuggestions(value, merchantsData))
        }

        return _.identity(null)
    },
    handlePrefetchOperations: (value) => dispatch(onPrefetchOperations(value))
})

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchComponent)
