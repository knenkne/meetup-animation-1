import React, { useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Tab } from './tab'
import { Header } from './header'
import { TabsStyled, TabsContentSectionStyled } from './tabs.style'
import { getFirstChildTitle, useUpdateEffect } from './tab-utils'

const KEYS = {
    35: 'end',
    36: 'home',
    37: 'left',
    39: 'right'
}

const DIRECTIONS = {
    37: -1,
    39: 1
}

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5cab79d394299816a9a8595d)
 * Компонент параллельного отображения блоков верстки
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Tabs = ({
    children,
    initialValue,
    onChange,
    size,
    selectedItem,
    onSelect,
    ...rest
}) => {
    const parentId = useMemo(() => _.uniqueId('tab-wrapper-'), [])
    const tabsId = useMemo(() => _.uniqueId('tabs-'), [])
    const childrenArray = useMemo(() => React.Children.toArray(children))

    const refs = useMemo(() => childrenArray.reduce((acc, child) => ({
        ...acc,
        [child.props?.title]: React.createRef()
    }), {}), [children])

    const { current: isControlled } = React.useRef(Boolean(selectedItem))
    const [selectedTitle, setSelectedTitle] = useState(
        isControlled
            ? selectedItem
            : initialValue || getFirstChildTitle(children)
    )
    const selectedTabTitle = isControlled ? selectedItem : selectedTitle

    const selectedTabChild = useMemo(() => {
        const properChild = childrenArray.find((child) => child.props?.title === selectedTabTitle)

        return properChild?.props.children
    })

    const handleChange = useCallback(
        (value) => isControlled ? onSelect(value) : setSelectedTitle(value),
        [selectedTitle, selectedItem]
    )

    const focusTab = (title) => {
        refs[title].current.focus()
        handleChange(title)
    }

    // Either focus the next, previous, first, or last tab depening on key pressed
    const handleKeyDown = (event) => {
        const pressed = KEYS[event.keyCode]
        const direction = DIRECTIONS[event.keyCode]

        if (pressed) {
            event.preventDefault()

            if (pressed === 'end') {
                focusTab(_.last(Object.keys(refs)))
                return
            }

            if (pressed === 'home') {
                focusTab(_.first(Object.keys(refs)))
                return
            }

            const currentTabIndex = childrenArray.findIndex((child) => child.props?.title === selectedTabTitle)
            const nextTitle = childrenArray[currentTabIndex + direction]?.props?.title

            if (nextTitle) {
                focusTab(nextTitle)
            } else if (pressed === 'left') {
                focusTab(_.last(Object.keys(refs)))
            } else {
                focusTab(_.first(Object.keys(refs)))
            }
        }
    }

    useUpdateEffect(() => {
        onChange(selectedTitle)
    }, [selectedTitle, selectedItem])

    const mapChildren = () =>
        childrenArray.map((child) => React.cloneElement(child, {
            forceOpened: child.props?.title === selectedTabTitle,
            id: tabsId,
            onChange: handleChange,
            onKeyDown: handleKeyDown,
            parentId,
            size,
            ref: refs[child.props.title]
        }))

    return (
        <TabsStyled aria-live="polite">
            <Header parentId={parentId} {...rest}>
                <div role="tablist">
                    {mapChildren()}
                </div>
            </Header>
            {!!selectedTabChild && <TabsContentSectionStyled
                id={`panel-${tabsId}`}
                role="tabpanel"
                aria-labelledby={`tab-${tabsId}`}
                key={selectedTitle}
                tabIndex="0"
            >
                {selectedTabChild}
            </TabsContentSectionStyled>}
        </TabsStyled>
    )
}

Tabs.propTypes = {
    onChange: PropTypes.func,
    selectedItem: PropTypes.string,
    onSelect: PropTypes.func,
    initialValue: PropTypes.string,
    children: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    sticky: PropTypes.bool,
    fullWidth: PropTypes.bool,
    borderless: PropTypes.bool,
}

Tabs.defaultProps = {
    onChange: _.noop,
    selectedItem: void 0,
    onSelect: _.noop,
    initialValue: void 0,
    children: void 0,
    size: 'md',
    sticky: false,
    fullWidth: false,
    borderless: false,
}

Tabs.Tab = Tab
Tabs.displayName = 'Tabs'
