import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { disableHandler } from '../utils/handlers'

import { ButtonStyled } from './button.primary.style'
import { ButtonTypographyStyled, IconStyled, ButtonContainerStyled } from './button.style'

export const ButtonPrimary = (props) => {
    const isLoading = useMemo(() => props.mode === 'loading', [props.mode])

    const passedProps = _(props)
        .omit(['title'])
        .extend({
            onClick: disableHandler(props.onClick, isLoading),
            'aria-live': 'polite',
            'aria-busy': props.mode === 'loading'
        })
        .value()

    return (
        <ButtonStyled {...passedProps}>
            <ButtonContainerStyled iconReverse={props.iconReverse} >
                <ButtonTypographyStyled indent="innerspace" mode="semibold" colorScheme="white" size={props.size}>
                    {props.title}
                </ButtonTypographyStyled>
                {props.icon && <IconStyled icon={props.icon} colorScheme="white" />}
            </ButtonContainerStyled>
            {/*{props.mode === 'loading' && <Loader />}*/}
        </ButtonStyled>
    )
}

ButtonPrimary.propTypes = {
    title: PropTypes.string,
    mode: PropTypes.oneOf(['loading', void 0]),
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['md', 'sm', 'lg']),
    theme: PropTypes.shape({
        buttonPrimaryTextNormal: PropTypes.string,
        buttonPrimaryNormal: PropTypes.string,
        buttonPrimaryHover: PropTypes.string,
        buttonPrimaryClick: PropTypes.string,
        buttonPrimaryFocusBody: PropTypes.string,
        buttonPrimaryFocusBorder: PropTypes.string
    }),
    icon: PropTypes.string,
    iconReverse: PropTypes.bool,
    fullWidth: PropTypes.bool,
}

ButtonPrimary.defaultProps = {
    title: void 0,
    mode: void 0,
    tabIndex: 0,
    onClick: _.noop,
    size: 'md',
    icon: void 0,
    iconReverse: false,
    fullWidth: false,
}

export default ButtonPrimary
