import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { Icon } from '../../icon'
import { disableHandler, metaOmitter } from '../../utils'

import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Checkbox)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Checkbox = (props) => {
    const inputProps = _(props)
        .omit([
            'children',
            'theme',
            'error',
            'formName',
            'mode',
            'colorScheme',
            'size'
        ])
        .extend({
            value: props.value,
            checked: _.isUndefined(props.checked) ? props.value : props.checked,
            type: 'checkbox',
            'data-unit': 'input:checkbox',
            className: classnames(
                props.theme.input,
                props.theme[props.colorScheme],
                props.theme[props.size]
            ),
            disabled: props.disabled,
            onChange: disableHandler(props.onChange, props.disabled),
            form: props.formName
        })
        .value()

    const iconTheme = { icon: classnames(Icon.theme.icon, props.theme.icon) }

    return (
        <label
            className={classnames(
                props.theme.checkbox,
                props.theme[props.colorScheme],
                props.error && props.theme.error
            )}
            data-unit="input:checkbox:wrapper"
        >
            <input {...inputProps} />

            {props.mode === 'switch' ? (
                <div className={props.theme.switch} />
            ) : (
                <div className={props.theme.button}>
                    <Icon
                        name="icon:core/common/check-mark"
                        theme={iconTheme}
                    />
                </div>
            )}

            <div className={props.theme.children}>
                {props.children}
            </div>
        </label>
    )
}

Checkbox.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    value: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    error: PropTypes.string,
    formName: PropTypes.string,
    mode: PropTypes.oneOf(['switch', 'checkbox']),
    theme: PropTypes.shape({
        button: PropTypes.string,
        checkbox: PropTypes.string,
        children: PropTypes.string,
        error: PropTypes.string,
        icon: PropTypes.string,
        input: PropTypes.string,
        switch: PropTypes.string
    }),
    colorScheme: PropTypes.oneOf([
        'purple',
        'blue',
        'green',
        'sky-blue',
        'aqua',
        'yellow',
        'metal'
    ]),
    size: PropTypes.oneOf(['sm', 'md'])
}

Checkbox.defaultProps = {
    children: void 0,
    disabled: false,
    onChange: _.noop,
    value: false,
    checked: void 0,
    error: void 0,
    formName: void 0,
    mode: 'checkbox',
    theme: defaultTheme,
    colorScheme: void 0,
    size: 'md'
}

Checkbox.displayName = 'Selection.Checkbox'
Checkbox.theme = defaultTheme

export default metaOmitter(Checkbox)
