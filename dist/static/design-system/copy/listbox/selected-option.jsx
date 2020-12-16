import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import { Icon } from '../icon'

export const SelectedOption = ({
    icon,
    children,
    title,
    description,
    additional,
    additionalDescription,
    theme
}) => (
    <div className={theme.itemInfo}>
        {icon && (
            <Icon
                name={icon}
                theme={{ icon: cs(Icon.theme.icon, theme.itemIcon) }}
            />
        )}
        {children && <span className={theme.itemIcon}>{children}</span>}
        <div className={theme.itemRow}>
            <div className={theme.itemColumn}>
                <div
                    className={cs(
                        theme.itemTitle,
                        !description && theme.itemCentered
                    )}
                >
                    {title}
                </div>

                {description && (
                    <div className={theme.itemDescription}>{description}</div>
                )}
            </div>

            {(additional || additionalDescription) && (
                <div className={theme.itemColumn}>
                    {additional && (
                        <div
                            className={cs(
                                theme.itemAside,
                                !description && !additionalDescription && theme.itemCentered
                            )}
                        >
                            {additional}
                        </div>
                    )}

                    {additionalDescription && (
                        <div className={theme.itemDescription}>
                            {additionalDescription}
                        </div>
                    )}
                </div>
            )}
        </div>
    </div>
)

SelectedOption.propTypes = {
    icon: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    additional: PropTypes.string,
    additionalDescription: PropTypes.string,
    theme: PropTypes.object.isRequired
}

SelectedOption.defaultProps = {
    icon: '',
    children: void 0,
    description: '',
    additional: '',
    additionalDescription: ''
}
