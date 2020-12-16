import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Dropdown } from '../../dropdown'
import { Loader } from '../../loader'

import { TargetInput } from './target-input'
import { Long } from './long'
import { NoMatches } from './no-matches'
import { Error } from './error'
import { Option } from './option'
import { dropdownTheme, contentsTheme, loaderTheme, optionTheme, optionThemeWithIcon, inputTheme } from './themes'
import defaultTheme from './style.css'

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=input%20suggest)
 * Текстовое поле с выпадающим списком
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Suggest extends React.Component {
    static displayName = 'Input.Suggest'
    static TargetInput = TargetInput
    static Long = Long
    static NoMatches = NoMatches
    static Error = Error
    static theme = defaultTheme

    static propTypes = {
        value: PropTypes.string,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        mode: PropTypes.oneOf(['error', 'noMatches', 'long', void 0]),
        isLoading: PropTypes.bool,
        disabled: PropTypes.bool,
        error: PropTypes.string,
        placeholder: PropTypes.string,
        translations: PropTypes.shape({
            requestTimeout: PropTypes.string,
            noMatches: PropTypes.string,
            repeat: PropTypes.string,
            requestError: PropTypes.string
        }),
        /**
         * Компонент, который будет формировать ввод в Dropdown.TargetInput
         */
        inputComponent: PropTypes.func,
        /**
         * Строка ввода (не путать с value)
         */
        query: PropTypes.string,
        /**
         * Опции
         */
        options: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            value: PropTypes.string.isRequired,
            icon: PropTypes.string
        })),
        /**
         * Поле ввода под поиск
         */
        isSearch: PropTypes.bool,
        /**
         * Иконка должна быть взята из Icon (при false - из img)
         */
        iconFromCode: PropTypes.bool,
        /**
         * При смене опции
         */
        onChangeOption: PropTypes.func,
        /**
         * При смене ввода
         */
        onChangeInput: PropTypes.func,
        /**
         * При нажатии "Повторить"
         */
        onRetry: PropTypes.func,
        /**
         * При смене опции или ввода
         */
        onChange: PropTypes.func,
        /**
         * При скролле плашки опций
         */
        onScroll: PropTypes.func
    }

    static defaultProps = {
        inputComponent: void 0,
        onChangeOption: _.noop,
        onChangeInput: _.noop,
        onRetry: _.noop,
        onFocus: _.noop,
        onChange: _.noop,
        onBlur: _.noop,
        onScroll: _.noop,
        value: void 0,
        query: void 0,
        mode: void 0,
        disabled: false,
        isLoading: false,
        error: void 0,
        options: [],
        iconFromCode: true,
        isSearch: false,
        translations: {
            requestTimeout: void 0,
            noMatches: void 0,
            repeat: void 0,
            requestError: void 0
        },
        placeholder: void 0
    }

    getModeRender = () => {
        const { options, value, query, onRetry, mode, iconFromCode, translations: {
            requestTimeout,
            repeat,
            noMatches,
            requestError
        } } = this.props

        switch (mode) {
            case 'long':
                return requestTimeout && <Long onClick={onRetry} title={repeat}>{requestTimeout}</Long>
            case 'error':
                return requestError && <Error onClick={onRetry} title={repeat}>{requestError}</Error>
            case 'noMatches':
                return noMatches && <NoMatches>{noMatches}</NoMatches>
            default:
                return _.map(options, ({ value: optionValue, title, description, icon }) => (
                    <Option
                        key={optionValue}
                        value={optionValue}
                        title={title}
                        description={description}
                        theme={icon ? optionThemeWithIcon : optionTheme}
                        searchString={query || value}
                        icon={icon}
                        iconFromCode={iconFromCode}
                    />
                ))
        }
    }

    handleFocus = (event) => {
        this.props.onFocus(this.props.value, event)
    }

    handleChangeOption = (value) => {
        this.props.onChangeOption(value)
        this.props.onChange(value)
    }

    handleChangeInput = (event) => {
        if (_.isObject(event)) {
            this.props.onChangeInput(event.target.value, event)
            this.props.onChange(event.target.value, event)
        } else {
            this.props.onChangeInput(event)
            this.props.onChange(event)
        }
    }

    handleBlur = (event) => {
        this.props.onBlur(this.props.value, event)
    }

    static Option = Option

    render () {
        const { options, disabled, value, query, onScroll, mode, isLoading, isSearch } = this.props

        const selectedOption = _.find(options, { value })
        const icon = _.get(selectedOption, 'icon')
        const title = _.get(selectedOption, 'title')

        return (
            <Dropdown
                mode="focus"
                onChange={this.handleChangeOption}
                disabled={disabled}
                theme={dropdownTheme}
                value={value}
            >
                <TargetInput
                    {...this.props}
                    value={title || query || value}
                    onChange={this.handleChangeInput}
                    icon={icon}
                    mode={isSearch ? 'search' : void 0}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    theme={inputTheme}
                    withOptions={!mode && !!options.length}
                />
                <Dropdown.Contents
                    theme={contentsTheme}
                    align={Dropdown.utils.autoLeftCheckByWindow}
                    onScroll={onScroll}
                >
                    {this.getModeRender()}
                    {isLoading && !mode &&
                    <div className={defaultTheme.additionalInfo}>
                        <Loader.Button theme={loaderTheme} />
                    </div>
                    }
                </Dropdown.Contents>
            </Dropdown>
        )
    }
}

export default Suggest
