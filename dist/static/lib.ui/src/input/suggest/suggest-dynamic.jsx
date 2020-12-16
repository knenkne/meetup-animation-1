import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Suggest } from './suggest'
import { canBeRequestedByTyping, canBeRequestedByScrolling } from './utils'

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=input%20suggest)
 * Текстовое поле с выпадающим списком с локальным хранением данных и динамической работой по таймаутам
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class SuggestDynamic extends React.Component {
    static displayName = 'Input.Suggest.Dynamic'

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        onChangeOption: PropTypes.func,
        onChangeInput: PropTypes.func,
        onBlur: PropTypes.func,
        /**
         * Первоначальный state.query
         */
        initialQuery: PropTypes.string,
        /**
         * Первоначальный state.options
         */
        initialOptions: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            value: PropTypes.string.isRequired,
            icon: PropTypes.string
        })),
        /**
         * Считается ли значение маскированным (надо ли его стирать по первому вводу)
         */
        masked: PropTypes.bool,
        /**
         * Обязательный timeout между последним вводом и возможностью вызова onDataRequest
         */
        keyboardTimeout: PropTypes.number,
        /**
         * Обязательный timeout между началом запроса и включением mode="long" у компонента Input.Suggest
         */
        requestTimeout: PropTypes.number,
        /**
         * Режим работы справочника: (only - выбор только из справочника, on - опциональный выбор из справочника, off - справочник не предоставляется)
         */
        mode: PropTypes.oneOf(['only', 'off', 'on']),
        /**
         * Запрос данных; получает на вход query - введенную строку, offset - при скролле
         */
        onDataRequest: PropTypes.func
    }

    static defaultProps = {
        value: void 0,
        onChange: _.noop,
        onChangeOption: _.noop,
        onChangeInput: _.noop,
        onBlur: _.noop,
        initialQuery: void 0,
        initialOptions: [],
        masked: false,
        keyboardTimeout: 0,
        requestTimeout: void 0,
        mode: 'off',
        onDataRequest: _.noop
    }

    state = {
        query: this.props.initialQuery,
        masked: this.props.masked,
        options: this.props.initialOptions,
        isLoading: false,
        isLongRequest: false,
        isAlreadyRequested: false,
        isFetchError: false,
        isFullSuggestLoaded: false
    }

    // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method
    UNSAFE_componentWillReceiveProps (nextProps) {
        if (this.props.value !== nextProps.value) {
            const selectedOption = this.getCurrentOption(nextProps.value)
            if (selectedOption) {
                this.setState({
                    query: selectedOption.title,
                })
            } else {
                this.setState({
                    query: '',
                    options: []
                })
            }
        }
    }

    getCurrentOption = (value) => _.find(this.state.options, { value })

    handleChangeInput = (event) => {
        clearTimeout(this.requestTimer)

        const { mode, value, keyboardTimeout } = this.props
        const query = _.get(event, 'target.value', event)

        this.setState({
            query,
            masked: false,
            options: [],
            isFullSuggestLoaded: false,
            isAlreadyRequested: false,
            isFetchError: false
        })

        this.props.onChangeInput(query, event)

        this.changeValue(query)

        if (canBeRequestedByTyping(query, this.state.masked, mode, value)) {
            this.requestTimer = setTimeout(() => {
                this.makeRequest(query)
            }, keyboardTimeout)
        }
    }

    handleScroll = (event) => {
        const { query, masked, isFullSuggestLoaded, isLoading } = this.state
        const { mode, value } = this.props
        if (canBeRequestedByScrolling(event, isFullSuggestLoaded, isLoading)
            && canBeRequestedByTyping(query, masked, mode, value)
        ) {
            this.makeRequest(query, true)
        }
    }

    handleChangeOption = (value) => {
        this.setState({
            query: this.getCurrentOption(value).title
        })

        this.props.onChange(value)
        this.props.onChangeOption(value)
    }

    handleRetry = () => {
        this.makeRequest(this.state.query)
    }

    handleBlur = (event) => {
        this.props.onBlur(this.props.value, event)
    }

    changeValue = (query) => {
        const { mode, onChange, value } = this.props
        if (this.state.masked || (mode === 'only' && value)) {
            onChange('')
        } else if (mode === 'off' || mode === 'on') {
            onChange(query)
        }
    }

    async makeRequest (query, isAdding) {
        clearTimeout(this.longRequestTimer)

        this.setState({
            isLoading: true,
            isLongRequest: false
        })

        const requestParams = { query, offset: this.state.options.length }
        this.recentRequest = requestParams

        if (this.props.requestTimeout) {
            this.longRequestTimer = setTimeout(() => {
                this.setState({
                    isLongRequest: true
                })
            }, this.props.requestTimeout)
        }

        try {
            const suggestions = await this.props.onDataRequest(query, this.state.options.length)

            if (_.isEqual(this.recentRequest, requestParams)) {
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

        let mode
        if (isLongRequest) {
            mode = 'long'
        } else if (isFetchError) {
            mode = 'error'
        } else if (_.isEmpty(options) && query && isAlreadyRequested) {
            mode = 'noMatches'
        }

        return (
            <Suggest
                {..._.omit(this.props, ['onChange', 'query'])}
                options={options}
                mode={mode}
                query={query}
                isLoading={isLoading}
                onChangeOption={this.handleChangeOption}
                onChangeInput={this.handleChangeInput}
                onRetry={this.handleRetry}
                onBlur={this.handleBlur}
                onScroll={this.handleScroll}
            />
        )
    }
}
