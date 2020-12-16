import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { disableHandler } from '../../utils/handlers'
import { metaOmitter } from '../../utils/hoc/omittere'
import { IndentWrapper } from '../../indent-wrapper/indent-wrapper.style'

import { RadioWrapperLabelStyled, InputStyled, ButtonStyled, RadioTypograpyStyled } from './radio.style'

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Selection%20Radio)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Radio = (props) => {
    const inputProps = _(props)
        .omit(['children', 'error', 'formName', 'size'])
        .extend({
            type: 'radio',
            disabled: props.disabled,
            name: props.name,
            value: props.value,
            onChange: disableHandler(props.onChange, props.disabled),
            form: props.formName
        })
        .value()

    return (
        <IndentWrapper
            size={props.size}
            vertical="micro"
        >
            <RadioWrapperLabelStyled
                className={props.className}
                error={props.error}
            >
                <InputStyled {...inputProps} />
                <ButtonStyled
                    size={props.size}
                />
                <RadioTypograpyStyled size={props.size} indent="zero">{props.children}</RadioTypograpyStyled>
            </RadioWrapperLabelStyled>
        </IndentWrapper>
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
    size: 'md'
}

export default metaOmitter(Radio)
