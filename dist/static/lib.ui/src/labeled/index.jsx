import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Markdown } from '../markdown'
import { Typography } from '../typography'
import { Button } from '../button'
import { mergeTheme } from '../utils'

import defaultTheme from './labeled.css'

export const Labeled = ({
    title,
    description,
    id,
    touched,
    error,
    value,
    children,
    tooltip,
    hint,
    theme,
    mode,
    onHintOpen,
    onHintClose
}) => {
    const [classNames, errorTheme, descriptionTheme] = useMemo(() => {
        const labeledClassNames = classnames(
            Typography.theme.caption,
            theme.title,
            value && theme.filled
        )
        const markdownErrorTheme = mergeTheme(Markdown.theme, {
            container: theme.errorText
        })
        const markdownDescriptionTheme = mergeTheme(Markdown.theme, {
            container: theme.description
        })

        return [labeledClassNames, markdownErrorTheme, markdownDescriptionTheme]
    }, [theme, value])

    const withHeadline = useMemo(() => title || tooltip.contents || hint, [
        title, tooltip, hint
    ])

    const label = id ? (
        <label htmlFor={id} className={classNames}>
            {title}
        </label>
    ) : (
        <span className={classNames}>{title}</span>
    )

    return (
        <div className={classnames(theme.labeled, theme[mode])}>
            {withHeadline && (
                <div className={theme.headline}>
                    {title && label}
                    {Boolean(tooltip.contents || hint) && (
                        <div className={theme.hint}>
                            <Button.Info
                                title={tooltip.title}
                                mode="info"
                                icon="info"
                                size="sm"
                                onOpen={onHintOpen}
                                onClose={onHintClose}
                            >
                                <Markdown.Full
                                    content={tooltip.contents || hint}
                                />
                            </Button.Info>
                        </div>
                    )}
                </div>
            )}

            <div>{children}</div>

            {(touched || value) && error && (
                <Markdown.Full content={error} theme={errorTheme} />
            )}
            {description && (
                <Markdown.Full content={description} theme={descriptionTheme} />
            )}
        </div>
    )
}

Labeled.propTypes = {
    theme: PropTypes.shape({
        caption: PropTypes.string,
        description: PropTypes.string,
        errorText: PropTypes.string,
        filled: PropTypes.string,
        headline: PropTypes.string,
        hint: PropTypes.string,
        labeled: PropTypes.string,
        title: PropTypes.string
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.node.isRequired,
    touched: PropTypes.bool,
    hint: PropTypes.string,
    tooltip: PropTypes.shape({
        title: PropTypes.string,
        contents: PropTypes.string
    }),
    mode: PropTypes.oneOf(['checkbox', 'switch', void '']),
    onHintOpen: PropTypes.func,
    onHintClose: PropTypes.func
}

Labeled.defaultProps = {
    theme: defaultTheme,
    title: void '',
    description: void '',
    id: '',
    error: void '',
    value: void '',
    touched: false,
    hint: void '',
    tooltip: {},
    mode: void '',
    onHintOpen: void '',
    onHintClose: void ''
}

Labeled.theme = defaultTheme

export default Labeled
