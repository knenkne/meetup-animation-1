import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'

import { useMarkup } from '../../../utils/custom-hooks'

import { ValueStyled } from './value.styles'

/*
 * Компонент для отображения
 * значения слева
 * @param isStaticName - значение задано через локали
 * @return
 * @constructor
 */
export const Value = ({
    isStaticName,
    content,
    children,
    className,
    ...rest
}) => {
    if (isStaticName) {
        return (
            <ValueStyled className={className} {...rest}>{i18next.t(content)}</ValueStyled>
        )
    }

    if (children) {
        return (
            <ValueStyled className={className} {...rest}>
                { children }
            </ValueStyled>
        )
    }

    return (
        <ValueStyled
            className={className}
            {...rest}
        >
            {useMarkup(content)}
        </ValueStyled>
    )
}

Value.propTypes = {
    isStaticName: PropTypes.bool,
    content: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
}

Value.defaultProps = {
    isStaticName: false,
    content: '',
    children: null,
    className: ''
}
