import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Tooltip } from '../../tooltip'
import { handlePreventDefault } from '../../utils'
import { Icon } from '../../icon'

import defaultTheme from './style.css'

const iconTheme = { ...Icon.theme, icon: classnames(Icon.theme.icon, defaultTheme.icon) }

const iconMap = {
    info: 'icon:core/common/button-info-info',
    warning: 'icon:core/common/button-info-warning'
}

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Button%20Info%20Link)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Info = ({ size, children, mode, direction, title, icon, onOpen, onClose, ...passedProps }) => (
    <Tooltip.Hover onOpen={onOpen} onClose={onClose}>
        <button
            {...passedProps}
            type="button"
            className={classnames(
                defaultTheme.info,
                defaultTheme[size],
                !icon && defaultTheme.underline,
                mode === 'error' && defaultTheme.error
            )}
            data-unit="button:info:link"
            onClick={handlePreventDefault}
        >
            {icon &&
                <Icon
                    name={iconMap[icon]}
                    theme={iconTheme}
                    size="md"
                />
            }
            {title &&
                <span className={defaultTheme.title}>{title}</span>
            }
        </button>
        <Tooltip.Tip mode={mode} direction={direction}>
            {children}
        </Tooltip.Tip>
    </Tooltip.Hover>
)

Info.propTypes = {
    title: PropTypes.string,
    tabIndex: PropTypes.number, // eslint-disable-line react/no-unused-prop-types, comment: сквозной проброс пропов
    size: PropTypes.oneOf(['sm', 'lg']),
    children: PropTypes.node.isRequired,
    mode: PropTypes.oneOf(['info', 'error']),
    icon: PropTypes.oneOf(['info', 'warning']),
    /**
     * Направление отображения подсказки относительно родителя
     */
    direction: PropTypes.oneOf([
        'topLeft',
        'topRight',
        'topCenter',
        'bottomLeft',
        'bottomRight',
        'bottomCenter'
    ]),
    onOpen: PropTypes.func,
    onClose: PropTypes.func
}

Info.defaultProps = {
    title: '',
    tabIndex: 0,
    size: 'lg',
    mode: 'info',
    icon: void 0,
    direction: 'topLeft',
    onOpen: void 0,
    onClose: void 0
}

Info.displayName = 'Button.Info'
Info.theme = defaultTheme
