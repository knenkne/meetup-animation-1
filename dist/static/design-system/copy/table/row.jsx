import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Typography } from '../typography'
import { mergeTheme } from '../utils'

import defaultTheme from './style.css'

const nameCaptionTheme = mergeTheme(Typography.theme, {
    caption: classnames(
        Typography.theme.caption,
        defaultTheme.alignLeft,
        defaultTheme.caption
    )
})

const valueCaptionTheme = mergeTheme(Typography.theme, {
    caption: classnames(
        Typography.theme.caption,
        defaultTheme.alignRight,
        defaultTheme.caption
    )
})

export const Row = ({ children }) => {
    const childrenArray = React.Children.toArray(children)

    if (childrenArray.length < 2) {
        return null
    }

    const [name, value] = childrenArray

    return (
        <dl className={defaultTheme.row} aria-label="Строка таблицы">
            <dt className={defaultTheme.item}>
                <Typography.Caption
                    mode="body"
                    colorScheme="gray"
                    theme={nameCaptionTheme}
                >
                    {name}
                </Typography.Caption>
            </dt>
            <dd className={defaultTheme.item}>
                <Typography.Caption
                    mode="body"
                    colorScheme="black"
                    theme={valueCaptionTheme}
                >
                    {value}
                </Typography.Caption>
            </dd>
        </dl>
    )
}

Row.propTypes = {
    children: PropTypes.node.isRequired
}

Row.defaultProps = {
    children: ''
}

Row.displayName = 'Table.Row'
