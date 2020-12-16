import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { Icon, Typography, mergeTheme } from '@sbol/lib.ui'

import styles from './summary-title.css'

const headlineTheme = mergeTheme(Typography.theme, {
    headline: styles.title
})

const keyCodes = {
    enter: 13,
    space: 32
}

export const SummaryTitle = ({
    title,
    collapsed,
    onToggleCollapse,
    withStatus,
    collapsable
}) => {
    const handleToggleExpand = useCallback(() => {
        onToggleCollapse()
    }, [onToggleCollapse])

    const handleKeyPress = useCallback((e) => {
        if (e.keyCode === keyCodes.enter || e.keyCode === keyCodes.space) {
            handleToggleExpand()
        }
    }, [handleToggleExpand])

    const passedProps = collapsable
        ? {
            role: 'button',
            tabIndex: 0,
            className: classnames(
                styles.header,
                collapsed && styles.collapsed,
                collapsable && styles.collapsable
            ),
            onClick: handleToggleExpand,
            onKeyDown: handleKeyPress,
            'aria-expanded': !collapsed
        }
        : {
            className: styles.header
        }

    return (
        <div {...passedProps}>
            <Typography.Headline mode="h4" theme={headlineTheme}>
                {title}
            </Typography.Headline>

            <div className={styles.icons}>
                {collapsable && withStatus && (
                    <div className={styles.check}>
                        <Icon
                            name="icon:core/widgets.web/summary-success"
                            size="lg"
                        />
                    </div>
                )}

                {collapsable && (
                    <div className={styles.expand}>
                        <Icon
                            name="icon:core/common/down-arrow"
                            theme={{
                                icon: classnames(
                                    Icon.theme.icon,
                                    styles.expandIcon
                                )
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

SummaryTitle.propTypes = {
    title: PropTypes.string,
    collapsable: PropTypes.bool,
    collapsed: PropTypes.bool,
    onToggleCollapse: PropTypes.func,
    withStatus: PropTypes.bool
}
SummaryTitle.defaultProps = {
    title: '',
    collapsable: false,
    collapsed: void 0,
    onToggleCollapse: _.noop,
    withStatus: false
}
