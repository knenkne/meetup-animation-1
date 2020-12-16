import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { disableHandler, metaOmitter } from '../../utils'
import { autoSizeFactory } from '../hoc/auto-size'

import defaultTheme from './text.css'

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=blocks%20input%20text)
 * Поле многострочного ввода
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Text = (props) => {
    const passedProps = _(props)
        .omit([
            'theme',
            'error',
            'formName',
            'refWrapper'
        ])
        .extend({
            type: 'text',
            ref: props.refWrapper,
            role: 'textbox',
            title: props.value,
            className: classnames(
                defaultTheme.text,
                props.error && defaultTheme.error,
                props.readOnly && defaultTheme.readonly
            ),
            'data-unit': 'input:textarea',
            onChange: disableHandler(props.onChange, props.disabled),
            form: props.formName,
            disabled: props.disabled || props.readOnly,
        })
        .value()

    return <textarea {...passedProps} />
}

Text.propTypes = {
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    refWrapper: PropTypes.func,
    value: PropTypes.string, // eslint-disable-line react/no-unused-prop-types, comment: сквозной проброс пропов
    onChange: PropTypes.func,
    error: PropTypes.string,
    formName: PropTypes.string
}

Text.defaultProps = {
    disabled: false,
    readOnly: false,
    refWrapper: _.noop,
    value: '',
    onChange: _.noop,
    error: void 0,
    formName: void 0
}

Text.displayName = 'Input.Text'
Text.theme = defaultTheme
export default autoSizeFactory({ minHeight: 56 })(metaOmitter(Text))
