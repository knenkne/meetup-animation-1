import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@sbol/lib.ui/core/icon'
import i18next from 'i18next'

import { CarouselStyled, SlideStyled, NextArrowStyled, PrevArrowStyled } from './carousel.styles'

export const Carousel = ({
    children: elements,
    nextSlideArrowIcon,
    prevSlideArrowIcon,
    infiniteLoop,
    onChange,
    focusOnEl,
    ariaNextButton,
    ariaPrevButton
}) => {
    if (elements?.length === 1) {
        return elements
    }

    const [currentElementId, setCurrentElementId] = useState(0)
    const mounted = useRef()
    const carouselRef = useRef(null)
    const focusRef = focusOnEl || carouselRef

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
        } else {
            // После пролистывания карусели устанавливаем фокус на самом верхнем элементе
            // делаем это после того, как карусель изменилась
            focusRef.current.focus()
        }
        onChange(currentElementId)
    }, [currentElementId])

    const prevSlide = useCallback(() => {
        const initialElementId = currentElementId === 0

        if (infiniteLoop && initialElementId) {
            return setCurrentElementId(elements.length - 1)
        }

        if (!initialElementId) {
            return setCurrentElementId(currentElementId - 1)
        }

        return null
    }, [currentElementId])

    const nextSlide = useCallback(() => {
        const lastElementId = currentElementId === elements.length - 1

        if (infiniteLoop && lastElementId) {
            return setCurrentElementId(0)
        }

        if (!lastElementId) {
            return setCurrentElementId(currentElementId + 1)
        }

        return null
    }, [currentElementId])

    const firstSlide = currentElementId === 0
    const lastSlide = currentElementId === elements.length - 1

    return (
        <CarouselStyled ref={carouselRef}>
            {elements.map((element, i) => {
                const active = i === currentElementId
                return (
                    <SlideStyled
                        key={`slideClassName-${element.key}`}
                        active={active}
                    >
                        {element}
                    </SlideStyled>
                )
            })}
            <div>
                <PrevArrowStyled
                    onClick={prevSlide}
                    disabled={!infiniteLoop && firstSlide}
                    aria-label={i18next.t(ariaPrevButton)}
                >
                    {prevSlideArrowIcon()}
                </PrevArrowStyled>
                <NextArrowStyled
                    onClick={nextSlide}
                    disabled={!infiniteLoop && lastSlide}
                    aria-label={i18next.t(ariaNextButton)}
                >
                    {nextSlideArrowIcon()}
                </NextArrowStyled>
            </div>
        </CarouselStyled>
    )
}

Carousel.defaultProps = {
    nextSlideArrowIcon: () => <Icon name="icon:core/common/chevronLeft" size="self" />,
    prevSlideArrowIcon: () => <Icon name="icon:core/common/chevronLeft" size="self" />,
    onChange: () => {},
    infiniteLoop: false,
    focusOnEl: null,
    ariaNextButton: 'carousel.next.button',
    ariaPrevButton: 'carousel.prev.button'
}

Carousel.propTypes = {
    children: PropTypes.node.isRequired,
    nextSlideArrowIcon: PropTypes.func,
    prevSlideArrowIcon: PropTypes.func,
    onChange: PropTypes.func,
    infiniteLoop: PropTypes.bool,
    focusOnEl: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ariaNextButton: PropTypes.string,
    ariaPrevButton: PropTypes.string
}

export default Carousel
