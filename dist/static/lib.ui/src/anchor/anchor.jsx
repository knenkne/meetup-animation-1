import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { noop, uniqueId, throttle } from 'lodash'

import { Header } from '../tabs/header'
import { getFirstChildTitle, getTopOffset, useUpdateEffect, scrollToElement } from '../tabs/tab-utils'
import { Tabs } from '../tabs'

import { Link } from './link'
import style from './anchor.css'

const THROTTLE_DELAY = 300

const parentId = uniqueId('anchor-link-wrapper-')

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Blocks%20Tabs)
 * Компонент прокрутки блоков верстки
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Anchor = ({ children, colorScheme, size, initialValue, mode, onChange, onClick, theme }) => {

    const [selectedTitle, setSelectedTitle] = useState(() => initialValue || getFirstChildTitle(children))
    const childrenArray = useMemo(() => React.Children.toArray(children), [children])
    const topOffset = useMemo(() => getTopOffset(mode), [mode])

    useUpdateEffect(() => {
        onChange(selectedTitle)
    }, [selectedTitle])

    const scrolling = useRef(false)

    const references = useRef({})

    const handleScroll = () => {
        if (scrolling.current) {
            return
        }
        const referencesKeys = Object.keys(references.current)

        const selectedTitleKey = referencesKeys.find((key) => {
            const rect = references.current[key].getBoundingClientRect()

            return Math.round(rect.bottom) - topOffset > 0
        })

        if (selectedTitleKey) {
            setSelectedTitle(selectedTitleKey)
            return
        }

        const lastRef = referencesKeys[referencesKeys.length - 1]

        if (references.current[lastRef].getBoundingClientRect().top < 0) {
            setSelectedTitle(lastRef)
        }
    }

    const throttleScroll = throttle(handleScroll, THROTTLE_DELAY)

    const getSelectedChild = () => childrenArray.map((child, i) => {
        const setRef = (ref) => {
            if (child.props.title) {
                references.current[child.props.title] = ref
            }
        }
        const key = `${child.props.title}-${i}`

        return (
            <div id={`anchor-link-id-${i}`} ref={setRef} key={key} tabIndex="-1" className={style.outlineNone}>
                {child.props.children}
            </div>
        )
    })

    const handleChange = (value) => {
        const ref = references.current[value]
        onClick(value)

        if (ref) {
            scrolling.current = true
            scrollToElement(ref, { offset: topOffset }, () => {
                scrolling.current = false
                ref.focus({ preventScroll: true })
                setSelectedTitle(value)
            })
        }
    }

    const mapChildren = () =>
        childrenArray.map((child) =>
            React.cloneElement(child, {
                colorScheme,
                forceOpened: child.props.forceOpened || selectedTitle === child.props.title,
                onChange: handleChange,
                parentId,
                size,
            })
        )


    const containerRef = useRef()

    const isInViewPort = () => {
        if (containerRef) {
            const rect = containerRef.current.getBoundingClientRect()
            if ((rect.top < 0 && rect.bottom < 0) ||
                (rect.top > window.innerHeight && rect.bottom > window.innerHeight)) {
                window.removeEventListener('scroll', throttleScroll)
                return
            }
            window.addEventListener('scroll', throttleScroll)
        }
    }

    const throttleViewPort = throttle(isInViewPort, THROTTLE_DELAY)

    useEffect(() => {
        window.addEventListener('scroll', throttleViewPort)
        return () => {
            window.removeEventListener('scroll', throttleViewPort)
            window.removeEventListener('scroll', throttleScroll)
        }
    }, [])

    if (!children) {
        return null
    }

    return (
        <div ref={containerRef} className={theme.tabs}>
            <Header parentId={parentId} mode={mode} theme={theme}>
                <div className={theme.tabsNavigation}>
                    {mapChildren()}
                </div>
            </Header>
            <section className={theme.tabsContent} >
                {getSelectedChild()}
            </section>
        </div>
    )
}

Anchor.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    /**
     * Общая цветовая схема
     */
    colorScheme: PropTypes.oneOf([
        'base',
        'purple',
        'blue',
        'green',
        'black',
        'skyblue',
        'aqua',
        'gold'
    ]),
    initialValue: PropTypes.string,
    children: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'lg']),
    /**
     * Задает варианты отображения перечня заголовков
     * fullwidth - отображение длинной линии по всей ширине контентой части для продуктовой страницы
     * sticky - прилипание шапки к родительскому компоненту
     */
    mode: PropTypes.oneOfType([
        PropTypes.oneOf(['sticky', 'fullwidth']),
        PropTypes.arrayOf(PropTypes.oneOf(['sticky', 'fullwidth']))
    ]),
    theme: PropTypes.object
}

Anchor.defaultProps = {
    onChange: noop,
    onClick: noop,
    colorScheme: 'base',
    initialValue: void 0,
    children: void 0,
    size: 'lg',
    mode: void 0,
    theme: Tabs.theme
}

Anchor.Link = Link
Anchor.displayName = 'Anchor'
