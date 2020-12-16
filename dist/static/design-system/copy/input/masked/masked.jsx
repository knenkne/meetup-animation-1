import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { createTextMaskInputElement } from 'text-mask-core/dist/textMaskCore'

import WrappedInput from '../input'
import defaultTheme from '../input.css'

import { maskedFormat, isMaskedValue, MASK_SYMBOL } from './masked-format'

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=input%20general)
 * Поле ввода по маске
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Masked extends React.PureComponent {
    static propTypes = {
        // eslint-disable react/no-unused-prop-types, comment: сквозной проброс пропов
        disabled: PropTypes.bool,
        theme: PropTypes.shape({
            input: PropTypes.string,
            error: PropTypes.string,
            readonly: PropTypes.string,
            disabled: PropTypes.string
        }),
        refWrapper: PropTypes.func,

        value: PropTypes.string,
        onChange: PropTypes.func,

        /**
         * Mask of Input. For details see: text-mask-core package
         */
        mask: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.func
        ]).isRequired,
        /**
         * Pipe of Input. For details see: text-mask-core package
         */
        pipe: PropTypes.func,
        /**
         * Проп для постоянного отображения маски ввода, а не по мере заполнения
         */
        guide: PropTypes.bool,
        /**
         * Проп для сохранения позиции у символов, которые идут после удаляемых символов
         */
        keepCharPositions: PropTypes.bool,
        /**
         * Указатель заполняемых символов
         */
        placeholderChar: PropTypes.string,
        /**
         * Функция, которая должна обработать элемент ввода (значение, курсор) перед тем,
         * как отправить значение в mask (подмена символов, корректировка курсора, дополнительный запрет символов)
         */
        onBeforeChange: PropTypes.func
        // eslint-enable
    }

    static defaultProps = {
        disabled: false,
        refWrapper: _.noop,
        theme: defaultTheme,

        value: '',
        onChange: _.noop,
        pipe: void 0,

        guide: false,
        keepCharPositions: false,
        placeholderChar: '_',
        onBeforeChange: _.noop
    }

    componentDidMount () {
        this.textMaskInputElement = createTextMaskInputElement({
            inputElement: this.textBox,
            mask: this.props.mask,
            pipe: this.props.pipe,
            guide: this.props.guide,
            placeholderChar: this.props.placeholderChar,
            keepCharPositions: this.props.keepCharPositions
        })
        this.textMaskInputElement.update(this.props.value)
    }

    componentDidUpdate () {
        this.textMaskInputElement.update(this.props.value)
    }

    setTextBoxRef = (node) => {
        this.textBox = node
        this.props.refWrapper(node)
    }

    handleChange = (event) => {
        this.props.onBeforeChange(event)
        this.textMaskInputElement.update()
        this.props.onChange(event)
    }

    render () {
        const omittedProps = _(this.props)
            .omit([
                'mask',
                'pipe',
                'guide',
                'placeholderChar',
                'keepCharPositions',
                'onBeforeChange'
            ])
            .extend({
                onChange: this.handleChange,
                refWrapper: this.setTextBoxRef
            })
            .value()

        return <WrappedInput {...omittedProps} />
    }
}

Masked.displayName = 'Input.Masked'
Masked.utils = {
    maskedFormat,
    isMaskedValue,
    MASK_SYMBOL
}
