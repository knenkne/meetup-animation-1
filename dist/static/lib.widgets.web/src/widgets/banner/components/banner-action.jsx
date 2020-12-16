import React, { useMemo, useCallback } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {
    Icon,
    Button,
    Typography,
    Link,
    Card,
} from '@sbol/lib.ui'
import { Link as AppLink } from '@sbol/lib.app'

import theme from '../style.css'

export const BannerAction = ({
    title,
    value,
    properties,
    level,
    eventsActions,
    actions,
}) => {
    if (value === 'link') {
        const { uri, icon } = properties
        const external = uri.startsWith('http')
        const href = external ? uri : AppLink.createUrl(uri)

        return (
            <Card.Actions>
                <Link
                    as={AppLink}
                    href={href}
                    colorScheme="gray"
                    icon={external ? void 0 : icon}
                    external={external}
                    bold
                >
                    {title}
                </Link>
            </Card.Actions>
        )
    }

    if (value === 'action') {
        const { event, icon } = properties

        const handleClick = useCallback(() => {
            const action = actions[value]

            if (action instanceof Function) {
                action(event, {
                    eventsActions,
                    properties
                })
            }
        })

        return (
            <Card.Actions>
                <Button.Icon
                    title={title}
                    icon={icon}
                    onClick={handleClick}
                />
            </Card.Actions>
        )
    }

    if (value === 'text') {
        const { icon, textColor } = properties
        const iconTheme = useMemo(() => ({ self: cn(Icon.theme.self, theme.icon) }), [])

        return (
            <div className={theme.textContainer}>
                {icon && <Icon name={icon} theme={iconTheme} size="self" />}
                <span
                    style={{ color: textColor }}
                    className={cn(
                        Typography.theme.bodySemibold,
                        theme[level]
                    )}
                >
                    {title}
                </span>
            </div>
        )
    }

    return null
}

BannerAction.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    level: PropTypes.string,
    properties: PropTypes.shape({
        uri: PropTypes.string,
        icon: PropTypes.string,
        textColor: PropTypes.string,
        event: PropTypes.string
    }),
    eventsActions: PropTypes.objectOf(PropTypes.func),
    actions: PropTypes.object,
}

BannerAction.defaultProps = {
    value: void 0,
    title: void 0,
    level: void 0,
    properties: {
        uri: void 0,
        icon: void 0,
        event: void 0,
        textColor: void 0
    },
    eventsActions: {
        event: _.noop,
        rollback: _.noop
    },
    actions: {},
}
