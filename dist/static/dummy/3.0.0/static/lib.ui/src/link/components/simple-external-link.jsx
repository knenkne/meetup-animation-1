import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Icon } from '../../icon'
import defaultTheme from '../link.css'

const lastWorldRegExp = /[^ ]*$/

export const SimpleExternalLink = ({ iconName, theme, children, ...props }) => {
    const [droppedLast, lastWord] = useMemo(
        () => [
            children.replace(lastWorldRegExp, ''),
            children.match(lastWorldRegExp)[0]
        ],
        [children]
    )

    return (
        <a {...props}>
            {droppedLast && <span className={theme.content}>{droppedLast}</span>}

            <span className={theme.externalWrapper}>
                {lastWord && <span className={theme.last}>{lastWord}</span>}

                <Icon
                    name={iconName}
                    size="self"
                    theme={{
                        self: classnames(
                            Icon.theme.self,
                            theme.icon,
                            theme.right
                        )
                    }}
                />
            </span>
        </a>
    )
}

SimpleExternalLink.propTypes = {
    children: PropTypes.string.isRequired,
    iconName: PropTypes.string,
    theme: PropTypes.object
}

SimpleExternalLink.defaultProps = {
    iconName: void 0,
    theme: defaultTheme
}
