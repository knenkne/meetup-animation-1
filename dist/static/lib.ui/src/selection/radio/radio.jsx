import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { disableHandler, metaOmitter } from '../../utils'

import defaultTheme from './radio.css'

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Selection%20Radio)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Radio = (props) => {
    const inputProps = _(props)
        .omit(['children', 'theme', 'error', 'formName', 'colorScheme', 'size'])
        .extend({
            type: 'radio',
            'data-unit': 'input:radio',
            disabled: props.disabled,
            className: classnames(
                props.theme.input,
                props.theme[props.colorScheme]
            ),
            name: props.name,
            value: props.value,
            onChange: disableHandler(props.onChange, props.disabled),
            form: props.formName
        })
        .value()

    return (
        <label
            className={classnames(
                props.theme.radio,
                props.theme[props.colorScheme],
                props.error && props.theme.error
            )}
            data-unit="input:radio:wrapper"
        >
            <input {...inputProps} />
            <div
                className={classnames(
                    props.theme.button,
                    props.theme[props.size]
                )}
            />
            <div className={props.theme.children}>{props.children}</div>
        </label>
    )
}

Radio.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    formName: PropTypes.string,
    colorScheme: PropTypes.oneOf([
        'purple',
        'blue',
        'green',
        'pink',
        'sky-blue',
        'aqua',
        'gold',
        'metal'
    ]),
    theme: PropTypes.object,
    size: PropTypes.oneOf(['sm', 'md'])
}

Radio.defaultProps = {
    name: void 0,
    children: void 0,
    disabled: false,
    onChange: _.noop,
    value: void 0,
    error: void 0,
    formName: void 0,
    colorScheme: void 0,
    theme: defaultTheme,
    size: 'md'
}

Radio.displayName = 'Selection.Radio'
Radio.theme = defaultTheme
export default metaOmitter(Radio)
