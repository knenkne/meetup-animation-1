import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'


import { useMarkup } from '../../../utils/custom-hooks'

import { NameStyled } from './name.styles'

/*
 * Компонент для отображения
 * значения справа
 * @param isStaticName - значение задано через локали
 * @return
 * @constructor
 */
export const Name = ({
    isStaticName,
    content,
    children,
    className,
    ...rest
}) => {
    if (isStaticName) {
        return (
            <NameStyled className={className} {...rest}>{i18next.t(content)}</NameStyled>
        )
    }

    if (children) {
        return (
            <NameStyled className={className} {...rest}>
                { children }
            </NameStyled>
        )
    }

    return (
        <NameStyled
            className={className}
            {...rest}
        >
            {useMarkup(content)}
        </NameStyled>
    )
}

Name.propTypes = {
    isStaticName: PropTypes.bool,
    content: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
}

Name.defaultProps = {
    isStaticName: false,
    content: '',
    children: null,
    className: ''
}
