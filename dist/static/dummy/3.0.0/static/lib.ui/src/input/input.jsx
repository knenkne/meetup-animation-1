import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { disableHandler, metaOmitter } from '../utils'
import { Icon } from '../icon'

import defaultTheme from './input.css'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5c8a5f5f9663d725192e86cf)
 * Обычное поле ввода
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Input = (props) => {
    const passedProps = _(props)
        .omit([
            'theme',
            'refWrapper',
            'error',
            'formName',
            'icon',
            'disabled',
            'forceDisabled',
            'readOnly',
            'readonly',
            'onClick'
        ])
        .extend({
            // can be type="password"
            // type: 'text',
            ref: props.refWrapper,
            className: classnames(
                props.theme.input,
                {
                    [props.theme.error]: !!props.error,
                    [props.theme.inputIcon]: !!props.icon,
                    [props.theme.inputClickIcon]: props.onClick,
                    [props.theme.readonly]: props.readOnly || props.readonly
                }
            ),
            onChange: disableHandler(props.onChange, props.disabled),
            form: props.formName,
            disabled: props.disabled || props.readOnly || props.readonly,
            readOnly: props.readOnly || props.readonly
        })
        .value()

    const input = <input data-unit="input:textbox" {...passedProps} />

    if (props.icon) {        
        return (
            <div className={props.theme.block}>
                {input}
                <Icon
                    name={props.icon}
                    theme={{
                        icon: classnames(
                            props.theme.icon,
                            props.onClick && props.theme.clickIcon,
                            (props.disabled || props.readOnly || props.readonly) && props.theme.readonlyIcon
                        )
                    }}
                    onClick={props.onClick}
                />
            </div>
        )
    }

    return input
}

Input.propTypes = {
    disabled: PropTypes.bool,
    theme: PropTypes.shape({
        input: PropTypes.string,
        inputIcon: PropTypes.string,
        error: PropTypes.string,
        icon: PropTypes.string,
        clickIcon: PropTypes.string,
        block: PropTypes.string,
        readonly: PropTypes.string,
        readonlyIcon: PropTypes.string

    }),
    refWrapper: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object,
    ]),
    value: PropTypes.string, // eslint-disable-line react/no-unused-prop-types, comment: сквозной проброс пропов
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    error: PropTypes.string,
    formName: PropTypes.string,
    icon: PropTypes.string,
    autoComplete: PropTypes.string,
    readOnly: PropTypes.bool,
    /**
     * @ignore
     */
    readonly: PropTypes.bool
}

Input.defaultProps = {
    disabled: false,
    theme: defaultTheme,
    refWrapper: _.noop,
    value: void 0,
    onChange: _.noop,
    onClick: void 0,
    error: void 0,
    formName: void 0,
    icon: void 0,
    autoComplete: 'off',
    readOnly: false,
    readonly: false
}

Input.displayName = 'Input'
Input.theme = defaultTheme
export default metaOmitter(Input)
