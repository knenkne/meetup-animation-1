import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { canBeRequestedByTyping, canBeRequestedByScrolling } from './utils'
import { ComboboxView } from './combobox-view'

/**
 * Семантическое текстовое поле с выпадающим списком с локальным хранением данных и динамической работой по таймаутам
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class ComboboxWithRequest extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        onChangeOption: PropTypes.func,
        onChangeInput: PropTypes.func,
        onBlur: PropTypes.func,
        placeholder: PropTypes.string,
        initialValue: PropTypes.string,
        /**
         * Первоначальный state.query
         */
        initialQuery: PropTypes.string,
        /**
         * Первоначальный state.options
         */
        options: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            value: PropTypes.string.isRequired,
            icon: PropTypes.string
        })),
        /**
         * Тект для обработки случаев: не найдено совпадений, долгая загрузка, ошибка загрузки, повторить загрузку
         */
        translations: PropTypes.shape({
            requestTimeout: PropTypes.string,
            noMatches: PropTypes.string,
            repeat: PropTypes.string,
            requestError: PropTypes.string
        }),
        a11y: PropTypes.shape({
            optionsLabel: PropTypes.string.isRequired,
        }).isRequired,
        /**
         * Обязательный timeout между последним вводом и возможностью вызова onDataRequest
         */
        keyboardTimeout: PropTypes.number,
        /**
         * Обязательный timeout между началом запроса и включением mode="long"
         */
        requestTimeout: PropTypes.number,
        /**
         * Запрос данных; получает на вход query - введенную строку
         */
        onDataRequest: PropTypes.func,
        /**
         * Включение пагинации на скролл
         */
        withPagination: PropTypes.bool,
    }

    static defaultProps = {
        value: void 0,
        onChange: _.noop,
        onChangeOption: _.noop,
        onChangeInput: _.noop,
        onBlur: _.noop,
        initialQuery: void 0,
        initialValue: void 0,
        options: [],
        keyboardTimeout: 0,
        requestTimeout: void 0,
        onDataRequest: _.noop,
        placeholder: void 0,
        translations: {
            requestTimeout: void 0,
            noMatches: void 0,
            repeat: void 0,
            requestError: void 0,
        },
        withPagination: false
    }

    state = {
        query:
            this.props.initialQuery ||
            this.props.options.find(
                (option) => option?.value === this.props.initialValue)?.title || this.props.initialValue || '',
        options: this.props.options,
        isLoading: false,
        isLongRequest: false,
        isAlreadyRequested: false,
        isFetchError: false,
        isFullSuggestLoaded: false
    }

    getCurrentOption = (value) => _.find(this.state.options, { value })

    handleChangeInput = (query, event) => {
        clearTimeout(this.requestTimer)
        const { value, keyboardTimeout } = this.props

        this.setState({
            query,
            options: [],
            isFullSuggestLoaded: false,
            isAlreadyRequested: false,
            isFetchError: false
        })

        this.props.onChangeInput(query, event)

        if (canBeRequestedByTyping(query, value)) {
            this.requestTimer = setTimeout(() => {
                this.makeRequest(query)
            }, keyboardTimeout)
        }
    }

    handleScroll = (event) => {
        const { query, isFullSuggestLoaded, isLoading } = this.state
        const { value, withPagination } = this.props

        if (canBeRequestedByScrolling(withPagination, event, isFullSuggestLoaded, isLoading)
            && canBeRequestedByTyping(query, value)
        ) {
            this.makeRequest(query, true)
        }
    }

    handleChangeOption = (value) => {
        const query = this.getCurrentOption(value).title
        this.setState({
            query
        })

        this.props.onChangeOption(value, query)
    }

    handleRetry = () => {
        this.makeRequest(this.state.query)
    }

    async makeRequest (query, isAdding) {
        clearTimeout(this.longRequestTimer)

        this.setState({
            isLoading: true,
            isLongRequest: false
        })

        const requestParams = { query }

        this.recentRequest = requestParams

        if (this.props.requestTimeout) {
            this.longRequestTimer = setTimeout(() => {
                this.setState({
                    isLongRequest: true
                })
            }, this.props.requestTimeout)
        }

        try {
            const suggestions = await this.props.onDataRequest(requestParams, isAdding)

            if (!suggestions) {
                this.setState({
                    isLoading: false,
                    isFetchError: false,
                    isFullSuggestLoaded: true,
                    isLongRequest: false,
                    isAlreadyRequested: true

                })
            } else if (_.isEqual(this.recentRequest, requestParams)) {
                this.setState({
                    isLoading: false,
                    options: isAdding ? _.concat(this.state.options, suggestions) : suggestions,
                    isFetchError: false,
                    isFullSuggestLoaded: _.isEmpty(suggestions),
                    isLongRequest: false,
                    isAlreadyRequested: true
                })
            }
        } catch (error) {
            if (_.isEqual(this.recentRequest, requestParams)) {
                this.setState({
                    isLoading: false,
                    options: [],
                    isFetchError: true,
                    isFullSuggestLoaded: false,
                    isLongRequest: false,
                    isAlreadyRequested: true
                })
            }
            throw new Error(error)
        } finally {
            clearTimeout(this.longRequestTimer)
        }
    }

    render () {
        const { query, options, isLoading, isLongRequest, isFetchError, isAlreadyRequested } = this.state

        let requestMode

        if (isLongRequest) {
            requestMode = 'long'
        } else if (isFetchError) {
            requestMode = 'error'
        } else if (_.isEmpty(options) && query && isAlreadyRequested) {
            requestMode = 'noMatches'
        }
        return (
            <ComboboxView
                {...this.props}
                options={options}
                requestMode={requestMode}
                isLoading={isLoading}
                onChangeOption={this.handleChangeOption}
                onChangeInput={this.handleChangeInput}
                onRetry={this.handleRetry}
                onScroll={this.handleScroll}
            />
        )
    }
}

ComboboxWithRequest.displayName = 'Combobox.WithRequest'

export default ComboboxWithRequest
