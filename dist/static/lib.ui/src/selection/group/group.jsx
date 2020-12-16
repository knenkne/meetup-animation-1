import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import defaultTheme from './group.css'

/**
 * Компонент для группировки и выравнивания checkbox и radio
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Group = ({
    title,
    mode,
    size,
    children,
    theme,
    value,
    ...passedProps
}) => (
    <fieldset className={theme.group} {...passedProps}>
        {title && (
            <legend className={classnames(theme.legend, value && theme.filled)}>
                {title}
            </legend>
        )}

        <div className={classnames(theme.content, theme[mode], theme[size])}>
            {children}
        </div>
    </fieldset>
)

Group.propTypes = {
    mode: PropTypes.oneOf(['column', 'row']),
    size: PropTypes.oneOf(['sm', 'md']),
    children: PropTypes.node,
    title: PropTypes.string,
    value: PropTypes.string,
    theme: PropTypes.object
}

Group.defaultProps = {
    mode: 'column',
    size: void 0,
    children: void 0,
    title: void 0,
    value: void 0,
    theme: defaultTheme
}

Group.theme = defaultTheme
Group.displayName = 'Selection.Group'
