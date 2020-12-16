import React, { useState, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { CollapseStyled } from './collapse.styles'

const HALF = 2
const DIVIDER_HEIGHT = 16

export const Collapse = ({
    isOpened,
    duration,
    children
}) => {

    const collapsibleContent = useRef('')
    const mounted = useRef()

    const [animationContainer, setAnimationContainer] = useState({
        ...isOpened && { maxHeight: `${collapsibleContent.current.clientHeight}px`, transition: `all ${duration}ms` },
        ...!isOpened && { maxHeight: '0px', visibility: 'hidden' },
    })

    useLayoutEffect(() => {
        if (!mounted.current) {
            mounted.current = true
        } else if (isOpened) {
            setAnimationContainer({
                transition: `all ${duration}ms`,
                maxHeight: `${collapsibleContent.current.clientHeight + DIVIDER_HEIGHT}px`,
                visibility: 'visible'
            })

            // на случай, если в блоке загрузилась доп. информация,
            // раскрываем список полностью
            setTimeout(() => setAnimationContainer({
                transition: `all ${duration}ms`,
                maxHeight: '100%'
            }), duration)
        } else {
            // для плавной анимации закрытия
            // указываем точную высоту
            setAnimationContainer({
                maxHeight: `${collapsibleContent.current.clientHeight + DIVIDER_HEIGHT}px`
            })
            setTimeout(() => {
                setAnimationContainer({
                    transition: `all ${duration}ms`,
                    maxHeight: '0',

                    // элементы с закрытой вкладки
                    // не фокусируются с клавиатуры
                    visibility: 'hidden'
                })
            }, duration / HALF)
        }
    }, [isOpened])

    /* eslint-disable react/forbid-component-props, comment: TODO: перенести в styled */
    return (
        <CollapseStyled
            style={animationContainer}
        >
            <div ref={collapsibleContent}>
                { children }
            </div>
        </CollapseStyled>
    )
}

Collapse.defaultProps = {
    duration: 250,
    children: null
}

Collapse.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    children: PropTypes.node
}
