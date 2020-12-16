import React, { useMemo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { deprecate } from '../utils/hoc/deprecate'
import { FullWidth } from '../full-width'
import { isDesktopViewport, isPhoneViewport } from '../utils/adaptive'

import { Step } from './step'
import { Progress } from './progress'
import defaultTheme from './style.css'

const CENTERED_COUNT = 2
const DESKTOP_OFFSET = 160
const MOBILE_OFFSET = 128
const OFFSET = isPhoneViewport() ? MOBILE_OFFSET : DESKTOP_OFFSET

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5ca7884a65b9d234eaf140ae)
 * Компонент для вывода шагов движения по процессу.
 *
 * @param {Object} props - Свойства компонента.
 * @return {JSX} - Компонент.
 */
export const Stages = ({
    children,
    translations,
    avaLink,
    theme,
    ...props
}) => {
    const mobileCentered = React.Children.count(children) <= CENTERED_COUNT

    const currIndex = useMemo(
        () => React.Children.toArray(children).findIndex((child) => child.props.mode)
        , [children])

    const containerRef = useRef()

    useEffect(() => {
        if (!isDesktopViewport() && containerRef?.current) {
            containerRef.current.scrollTo({
                left: (currIndex - 1) * OFFSET,
                behavior: 'smooth'
            })
        }
    }, [currIndex])

    const mainComponent = (
        <ul
            {...props}
            className={cn(theme.stages, mobileCentered && theme.centered)}
        >
            {React.Children.map(children, (StepChildren, index) =>
                React.cloneElement(StepChildren, {
                    value: index + 1,
                    translations,
                    avaLink
                })
            )}

            {!isDesktopViewport() && !mobileCentered && (
                <li className={theme.emptyStep} />
            )}
        </ul>
    )

    if (isDesktopViewport()) {
        return mainComponent
    }

    return (
        <FullWidth>
            <div className={theme.scroll} ref={containerRef}>
                <FullWidth.Inner>{mainComponent}</FullWidth.Inner>
            </div>
        </FullWidth>
    )
}

Stages.propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * Содержит переводы для компонента.
     */
    translations: PropTypes.shape({
        tooltip: PropTypes.string.isRequired
    }).isRequired,
    /**
     * Ссылка на аватарку пользователя.
     */
    avaLink: PropTypes.string,
    theme: PropTypes.object
}

Stages.defaultProps = {
    avaLink: void 0,
    theme: defaultTheme
}

Stages.theme = defaultTheme
Stages.Step = Step
Stages.Progress = deprecate('4.0.0', 'Stages.Progress')(Progress)
Stages.displayName = 'Stages'

export default Stages
