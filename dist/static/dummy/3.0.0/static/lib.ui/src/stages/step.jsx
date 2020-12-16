import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Icon } from '../icon'

import defaultTheme from './style.css'

const iconTheme = { icon: cn(Icon.theme.icon, defaultTheme.checkMark) }

/**
 * Компонент для вывода шага подпроцесса.
 *
 * @param {Object} props - Свойства компонента.
 * @return {JSX} - Компонент.
 */
export const Step = ({
    title,
    mode,
    value,
    translations,
    avaLink,
    theme,
    ...props
}) => (
    <li
        {...props}
        className={cn(theme.step, mode && theme.current)}
    >
        {mode && <div className={cn(theme.tooltip, avaLink && theme.hasAvatar)}>
            {avaLink && (
                <img className={theme.avatar} src={avaLink} alt="avatar" />
            )}
            {translations.tooltip}
        </div>}

        <div className={theme.marker}>
            <Icon
                theme={iconTheme}
                name="icon:core/common/checkMark"
                size="xs"
            />
            <span className={theme.markerIndex}>{value}</span>
        </div>

        <div className={theme.title}>{title}</div>
    </li>
)

Step.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['progress', '']),
    /**
     * Содержит переводы для компонента.
     * Автоматически пробрасывается компонентом Stages.
     */
    translations: PropTypes.shape({
        tooltip: PropTypes.string
    }).isRequired,
    /**
     * Автоматически пробрасывается компонентом Stages.
     */
    value: PropTypes.number,
    /**
     * Ссылка на аватарку пользователя.
     */
    avaLink: PropTypes.string,
    theme: PropTypes.object
}
Step.defaultProps = {
    mode: void 0,
    tooltip: void 0,
    value: void 0,
    avaLink: void 0,
    translations: {},
    theme: defaultTheme
}
Step.displayName = 'Stages.Step'
