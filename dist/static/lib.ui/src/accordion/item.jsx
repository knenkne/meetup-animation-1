import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import _ from 'lodash'
import { Collapse } from 'react-collapse'

import { memoizeFuncWithArgs, mergeTheme } from '../utils'
import { Icon } from '../icon'
import { Typography } from '../typography'

import defaultTheme from './style.css'

const omitProps = [
    'title',
    'description',
    'children',
    'forceOpened',
    'onChange',
    'onKeyDown',
    'id',
    'aria-level',
    'warning',
    'collapsible',
    'as',
    'theme'
]

export const extendedHeadlineTheme = mergeTheme(Typography.theme, {
    headline: cs(Typography.theme.h4, defaultTheme.headline)
})

// eslint-disable-next-line complexity, comment: complexity of 15
export const Item = (props) => {
    const { title, children, icon, forceOpened, mode, onChange, onKeyDown, id, 'aria-level': ariaLevel, as, warning, description, collapsible, theme } = props
    const [active, updateState] = useState(forceOpened)

    const handleOnchange = useCallback(
        () => {
            updateState(!active)
            onChange(title)
        })

    // вычисляем открывать или не открывать для кейсов, когда могут быть открыты несколько итемов
    const isOpened = collapsible ? active : forceOpened

    const headingContent = React.useMemo(() => {
        if (mode === 'widget') {
            return (
                <>
                    <span className={cs(Typography.theme.bodySemibold, theme.text)}>
                        {title}
                    </span>
                    <div className={theme.sideTitle}>
                        {as && (
                            <div className={Typography.theme.bodySemibold}>{as}</div>
                        )}
                    </div>
                    <div className={cs(theme.arrow, isOpened && theme.arrowOpened)}>
                        <Icon name="icon:core/common/down-arrow" />
                    </div>
                </>
            )
        }

        if (mode === 'classic') {
            return (
                <Typography.Headline mode="h4" theme={extendedHeadlineTheme}>
                    <span className={theme.titleText}>{title}</span>
                </Typography.Headline>
            )
        }

        return (
            <>
                <div className={theme.headingContent}>
                    {icon &&
                        <div className={theme.icon}>
                            <Icon name={icon} size="self" />
                        </div>
                    }
                    <div className={theme.headingWrapper}>
                        <Typography.Headline mode="h4" theme={extendedHeadlineTheme}>
                            {title}
                        </Typography.Headline>
                        {description &&
                            <div className={theme.description}>{description}</div>
                        }
                    </div>
                    <div className={cs(theme.arrow, isOpened && theme.arrowOpened)}>
                        <Icon name="icon:core/common/down-arrow" />
                    </div>
                </div>

                <div className={theme.sideTitle}>
                    {as && (
                        <div className={Typography.theme.bodySemibold}>{as}</div>
                    )}
                </div>
            </>
        )
    }, [mode, isOpened])

    return (
        <div
            {..._.omit(props, omitProps)}
            className={cs(
                theme.item,
                theme[`item${`-${mode}`}`],
                isOpened && theme.active,
                warning && theme.warning)}
        >
            <div role="heading" aria-level={ariaLevel} className={theme.heading}>
                <button
                    onClick={handleOnchange}
                    onKeyDown={memoizeFuncWithArgs(onKeyDown, title)}
                    className={theme.title}
                    type="button"
                    aria-expanded={isOpened}
                    aria-controls={`${id}-section`}
                    id={`${id}-title`}
                >
                    {headingContent}
                </button>
            </div>
            <div
                className={theme.collapseWrapper}
                id={`${id}-section`}
                role="region"
                aria-labelledby={`${id}-title`}
            >
                <Collapse
                    isOpened={isOpened}
                >
                    <div
                        className={cs(theme.content, !isOpened && theme.contentHidden)}
                        aria-hidden={!isOpened}
                    >
                        {children}
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
    forceOpened: PropTypes.bool,
    mode: PropTypes.oneOf(['widget', 'info', 'description', 'classic']),
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    'aria-level': PropTypes.string,
    /**
     * Для mode: widget, индикация негативного контента
     */
    warning: PropTypes.bool,
    collapsible: PropTypes.bool,
    as: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
    icon: PropTypes.string,
    theme: PropTypes.object
}

Item.defaultProps = {
    id: void 0,
    description: void 0,
    forceOpened: false,
    mode: 'classic',
    onChange: _.noop,
    onKeyDown: _.noop,
    'aria-level': void '',
    warning: false,
    collapsible: false,
    as: void 0,
    icon: void 0,
    theme: defaultTheme
}

Item.displayName = 'Accordion.Item'
