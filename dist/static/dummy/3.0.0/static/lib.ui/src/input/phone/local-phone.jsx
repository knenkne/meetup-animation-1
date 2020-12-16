import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { conformToMask } from 'text-mask-core/dist/textMaskCore'

import { Masked } from '../masked/masked'
import { Input } from '../input'
import { getInputDiff } from '../utils'
import { typeaheadFactory } from '../hoc/typeahead'

import { phoneMask, trimPhoneRight, unmaskedPhone } from './phone-mask'

const EMPTY_STRING = ''
const PLUS = '+'
const COUNTRY_CODE = '7'
const COUNTRY_CODE_PREFIX = `${PLUS}${COUNTRY_CODE} (`
const PLACEHOLDER = `${COUNTRY_CODE_PREFIX}___) ___-__-__`
const START_OF_DELETING = COUNTRY_CODE_PREFIX.length

const createMaskedTypeahead = typeaheadFactory(
    (props) => _.extend({}, props, { guide: false }),
    (props) => _.extend({}, props, { guide: true })
)

const MaskedTypeahead = createMaskedTypeahead(Masked)

const getConformedValue = (value, arrayMask) => {
    const maskedValue = _.get(conformToMask(COUNTRY_CODE_PREFIX + value, arrayMask), 'conformedValue', EMPTY_STRING)
    return trimPhoneRight(maskedValue)
}

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=phone)
 * Поле ввода российского номера телефона
 * Справочник для автономной работы предоставляется сайтом [На Связи](https://na-svyazi.ru/russia_code.htm)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class LocalPhone extends React.Component {
    static normalize = (event) => {
        const { target } = event
        const { selectionStart } = target
        let normalizedValue = target.value
        const firstChar = normalizedValue.charAt(0)
        if (firstChar === COUNTRY_CODE && selectionStart === 0) {
            normalizedValue = normalizedValue.substring(START_OF_DELETING)
        } else if (firstChar !== PLUS && normalizedValue.length > 1) {
            if (normalizedValue.charAt(1) === PLUS && selectionStart === 1) {
                normalizedValue = normalizedValue.substring(1) + firstChar
            } else {
                normalizedValue = COUNTRY_CODE_PREFIX + normalizedValue
            }
        }
        if (target.value !== normalizedValue) {
            target.value = normalizedValue
            target.setSelectionRange(selectionStart, selectionStart)
        }
    }

    static displayName = 'Input.LocalPhone'

    static getFormattedValue = (value = '') => conformToMask(value, Masked.utils.maskedFormat(phoneMask(value), value))?.conformedValue

    constructor (props) {
        super(props)
        this.state = {
            suggest: props.suggest
        }
        this.cache = EMPTY_STRING
        if (_.isEmpty(props.suggest)) {
            import('./phone-codes.json')
                .then(({ default: suggest }) => {
                    if (!this.unmount) {
                        this.setState({ suggest })
                    }
                })
        }
    }

    componentWillUnmount () {
        this.unmount = true
    }

    handleKeyDown = (event) => {
        const { selectionStart, selectionEnd } = event.target
        this.prevSelectionStart = selectionStart < START_OF_DELETING &&
        selectionStart === selectionEnd ?
            event.target.setSelectionRange(START_OF_DELETING, START_OF_DELETING)
            : selectionStart
        this.props.onKeyDown(event)
    }

    handleMouseUp = (event) => {
        const { selectionStart, selectionEnd } = event.target
        this.prevSelectionStart = selectionStart < START_OF_DELETING &&
        selectionStart === selectionEnd ?
            event.target.setSelectionRange(START_OF_DELETING, START_OF_DELETING)
            : selectionStart
        this.props.onMouseUp(event)
    }

    handleContextMenu = (event) => {
        this.prevSelectionStart = event.target.selectionStart
        this.props.onContextMenu(event)
    }

    handleOnChange = (e) => {
        if (Masked.utils.isMaskedValue(this.props.value)) {
            this.cache = EMPTY_STRING
            this.props.onChange(getInputDiff(e.target.value, this.prevSelectionStart, e.target.selectionStart), e)
        } else {
            this.cache = e.target.value
            this.props.onChange(unmaskedPhone(e.target.value), e)
        }
    }

    handleOnBlur = (e) => {
        const { initialValue, onBlur } = this.props
        const fieldValue = e.target.value
        if (unmaskedPhone(initialValue) !== unmaskedPhone(fieldValue)) {
            onBlur(unmaskedPhone(fieldValue), e)
        }
    }

    makePhoneMask = (value) => Masked.utils.maskedFormat(phoneMask(value, this.state.suggest), value)

    render () {
        const { value, theme, ...props } = this.props
        const rawValue = unmaskedPhone(value)
        const calculatedMask = this.makePhoneMask(rawValue)

        const maskedValue = rawValue ? getConformedValue(value, calculatedMask) : COUNTRY_CODE_PREFIX
        const newValue = maskedValue === trimPhoneRight(this.cache) ? this.cache : maskedValue

        const passedProps = _(props)
            .omit('suggest')
            .extend({
                placeholder: PLACEHOLDER,
                theme,
                value: newValue,
                mask: this.makePhoneMask,
                onChange: this.handleOnChange,
                onBlur: this.handleOnBlur,
                onKeyDown: this.handleKeyDown,
                onMouseUp: this.handleMouseUp,
                onContextMenu: this.handleContextMenu,
                placeholderChar: '_',
                type: 'tel'
            })
            .value()

        return (
            <MaskedTypeahead {...passedProps} />
        )
    }
}

LocalPhone.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    suggest: PropTypes.array,
    onKeyDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onContextMenu: PropTypes.func,
    initialValue: PropTypes.string,
    theme: PropTypes.shape({
        input: PropTypes.string,
        phoneBlock: PropTypes.string,
        block: PropTypes.string,
        disabled: PropTypes.string,
        error: PropTypes.string,
        icon: PropTypes.string,
        inputIcon: PropTypes.string
    })
}

LocalPhone.defaultProps = {
    value: '',
    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    onKeyDown: _.noop,
    onMouseUp: _.noop,
    onContextMenu: _.noop,
    suggest: [],
    initialValue: '',
    theme: Input.theme
}
