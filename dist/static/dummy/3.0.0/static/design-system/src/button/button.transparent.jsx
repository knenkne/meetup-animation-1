import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { ButtonStyled } from './button.transparent.style'
import { ButtonContainerStyled, ButtonTypographyStyled, IconStyled } from './button.style'

export const ButtonTransparent = (props) => {
    const passedProps = _(props)
        .omit(['title'])
        .extend({
            onClick: props.onClick,
            'aria-live': 'polite'
        })
        .value()

    return (
        <ButtonStyled {...passedProps}>
            <ButtonContainerStyled iconReverse={props.iconReverse} >
                <ButtonTypographyStyled indent="innerspace" mode="regular" size={props.size}>{props.title}</ButtonTypographyStyled>
                {props.icon && <IconStyled icon={props.icon} />}
            </ButtonContainerStyled>
        </ButtonStyled>
    )
}

ButtonTransparent.propTypes = {
    title: PropTypes.string,
    mode: PropTypes.oneOf(['loading', void 0]),
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    theme: PropTypes.shape({
        buttonTextNormal: PropTypes.string,
        buttonTextBodyNormal: PropTypes.string,
        buttonTextBorderNormal: PropTypes.string,
        buttonTextHover: PropTypes.string,
        buttonTextClick: PropTypes.string,
        buttonTextFocus: PropTypes.string,
    }),
    size: PropTypes.oneOf(['md', 'sm', 'lg']),
    icon: PropTypes.string,
    iconReverse: PropTypes.bool,
    fullWidth: PropTypes.bool
}

ButtonTransparent.defaultProps = {
    title: void 0,
    mode: void 0,
    tabIndex: 0,
    onClick: _.noop,
    size: 'md',
    icon: void 0,
    iconReverse: false,
    fullWidth: false,
}

export default ButtonTransparent
