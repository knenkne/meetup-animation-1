import React, { useRef, useEffect } from 'react'
import _ from 'lodash'

const PADDING_ON_TOP_DEFAULT = 73

export const checkPositionForScroll = (wrapper, clickedItem) => {
    if (!_.isNil(wrapper) && !_.isNil(clickedItem)) {
        const clickedItemDimensions = clickedItem.getBoundingClientRect()
        const wrapperDimensions = wrapper.getBoundingClientRect()

        if (clickedItemDimensions.x < wrapperDimensions.x) {
            wrapper.scrollTo({
                left: wrapper.scrollLeft - clickedItemDimensions.width,
                behavior: 'smooth'
            })

        }
        if (clickedItemDimensions.right > wrapperDimensions.right) {
            wrapper.scrollTo({
                left: wrapper.scrollLeft + clickedItemDimensions.width,
                behavior: 'smooth'
            })
        }
    }
}

export const getFirstChildTitle = (childrenArgs) => React.Children.toArray(childrenArgs)[0]?.props.title

export const modePredicate = (mode = [], value) =>
    typeof mode === 'string' ? mode === value : mode.includes(value)

export const useUpdateEffect = (effect, inputs) => {
    const isMounted = useRef(false)
    useEffect(() => {
        if (isMounted.current) {
            effect()
        }
        isMounted.current = true
    }, inputs)
}

export const getTopOffset = (mode) => modePredicate(mode, 'sticky') ? PADDING_ON_TOP_DEFAULT : 0

export const scrollToElement = (element, options = {}, onFinishedCb) => {
    const { offset = 0 } = options
    const top = Math.round(element.getBoundingClientRect().top - offset + window.pageYOffset)
    if (onFinishedCb) {
        const onScroll = () => {
            if (window.pageYOffset === top) {
                window.removeEventListener('scroll', onScroll)
                onFinishedCb()
            }
        }
        window.addEventListener('scroll', onScroll)
    }

    window.scroll({ top, left: 0, behavior: 'smooth' })
}
