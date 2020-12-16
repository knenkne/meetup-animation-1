import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { Icon } from '../icon'
import { PseudoButton } from '../utils'
import colorTheme from '../button/style.css'

import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=dropdown)
 * Стандартизированная кликабельная цель выпадения списка для Dropdown.
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const TargetButton = (props) => {
    let ariaLabel = ''
    if (!props.children) {
        ariaLabel = props.forceOpened ? props.a11y.closeLabel : props.a11y.openLabel
    }

    return (
        <PseudoButton
            data-unit="dropdown:target"
            aria-disabled={props.disabled}
            className={classnames(props.theme.target, colorTheme[props.colorScheme], {
                [props.theme.disabled]: props.disabled,
                [props.theme.opened]: props.forceOpened
            })}
            aria-label={ariaLabel || props['aria-label']}
            {..._.omit(props, ['theme', 'forceOpened', 'children', 'a11y', 'colorScheme'])}
        >
            {props.children}
            {props.mode === 'arrow' &&
            <Icon
                theme={{ icon: classnames(Icon.theme.icon, props.theme.arrowElement) }}
                name="icon:core/common/down-arrow"
            />
            }
        </PseudoButton>
    )
}

TargetButton.propTypes = {
    children: PropTypes.node,
    forceOpened: PropTypes.bool,
    disabled: PropTypes.bool,
    theme: PropTypes.object,
    mode: PropTypes.oneOf(['arrow', 'none']),
    'aria-label': PropTypes.string,
    a11y: PropTypes.shape({
        openLabel: PropTypes.string,
        closeLabel: PropTypes.string
    }),
    colorScheme: PropTypes.oneOf(['purple', 'blue', 'green', 'pink', 'black', 'base', '']),
}

TargetButton.defaultProps = {
    children: void 0,
    forceOpened: false,
    disabled: false,
    theme: defaultTheme,
    mode: 'arrow',
    'aria-label': '',
    a11y: void 0,
    colorScheme: 'base',
}

TargetButton.theme = defaultTheme
TargetButton.displayName = 'Dropdown.TargetButton'
