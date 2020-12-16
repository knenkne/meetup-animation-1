import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { disableHandler } from '../../utils/handlers'
import { metaOmitter } from '../../utils/hoc/omittere'
import { ic36CheckmarkAlt1 } from '../../icon/common'
import { IndentWrapper } from '../../indent-wrapper/indent-wrapper.style'

import { CheckboxWrapperStyled, InputStyled, CheckboxTypographyStyled, SwitchStyled, CheckboxStyled, IconStyled } from './checkbox.style'

export const Checkbox = (props) => {
    const inputProps = _(props)
        .omit([
            'children',
            'formName',
            'mode',
            'size'
        ])
        .extend({
            value: props.value,
            type: 'checkbox',
            disabled: props.disabled,
            onChange: disableHandler(props.onChange, props.disabled),
            form: props.formName
        })
        .value()

    return (
        <IndentWrapper
            size={props.size}
            vartical="micro"
        >
            <CheckboxWrapperStyled
                size={props.size}
                error={props.error}
            >
                <InputStyled {...inputProps} />

                {props.mode === 'switch' ? (
                    <SwitchStyled />
                ) : (
                    <CheckboxStyled>
                        <IconStyled
                            name="ic36CheckmarkAlt1"
                            colorScheme="whitePrimary"
                            dangerouslySetInnerHTML={{
                                __html: ic36CheckmarkAlt1
                            }}
                        />
                    </CheckboxStyled>
                )}
                <CheckboxTypographyStyled size={props.size} indent="zero">
                    {props.children}
                </CheckboxTypographyStyled>
            </CheckboxWrapperStyled>
        </IndentWrapper>
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
    size: 'md'
}

export default metaOmitter(Checkbox)
