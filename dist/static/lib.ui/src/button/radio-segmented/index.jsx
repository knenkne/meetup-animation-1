import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { disableHandler, metaOmitter } from '../../utils'

import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5cab587b78e0b72a43cd7eb1)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const RadioSegmented = (props) => {
    const inputProps = _(props)
        .omit([
            'children',
            'theme',
            'formName',
            'a11y',
            'title',
            'error',
            'theme',
            'colorScheme'
        ])
        .extend({
            type: 'radio',
            'data-unit': 'button:radio:segmented',
            className: props.theme.input,
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
                props.theme[props.size]
            )}
            title={props.a11y.title}
        >
            <input {...inputProps} />
            <span className={props.theme.children}>{props.children}</span>
        </label>
    )
}

RadioSegmented.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    /**
     * mode="last" должен быть проставлен последнему элементу в списке RadioSegmented
     */
    mode: PropTypes.oneOf(['last', void 0]),
    a11y: PropTypes.shape({
        /**
         * заголовок кнопки, если отображение не представлено текстом
         */
        title: PropTypes.string
    }).isRequired,
    formName: PropTypes.string,
    theme: PropTypes.object,
    colorScheme: PropTypes.oneOf([
        'purple',
        'blue',
        'green',
        'pink',
        'sky-blue',
        'aqua',
        'gold',
        'metal',
        'base'
    ]),
    size: PropTypes.oneOf(['sm', 'lg'])
}

RadioSegmented.defaultProps = {
    onChange: _.noop,
    disabled: false,
    mode: void 0,
    formName: void 0,
    theme: defaultTheme,
    colorScheme: 'base',
    size: 'sm'
}

RadioSegmented.theme = defaultTheme
RadioSegmented.displayName = 'Button.RadioSegmented'
export default metaOmitter(RadioSegmented)
