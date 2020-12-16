import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Markdown } from '../markdown'
import { Button } from '../button'

import { LabeledStyled, DescriptionStyled, ErrorTextStyled, HeadlineStyled, HintStyled, LabelStyled, LabelSpanStyled } from './labeled.style'

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
    mode,
    onHintOpen,
    onHintClose,
    className
}) => {
    const withHeadline = useMemo(() => title || tooltip.contents || hint, [
        title, tooltip, hint
    ])

    const label = id ? (
        <LabelStyled htmlFor={id} value={value} className={className}>
            {title}
        </LabelStyled>
    ) : (
        <LabelSpanStyled value={value} className={className}>{title}</LabelSpanStyled>
    )

    return (
        <LabeledStyled mode={mode}>
            {withHeadline && (
                <HeadlineStyled>
                    {title && label}
                    {Boolean(tooltip.contents || hint) && (
                        <HintStyled>
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
                        </HintStyled>
                    )}
                </HeadlineStyled>
            )}

            <div>{children}</div>

            {(touched || value) && error && (
                <ErrorTextStyled content={error} />
            )}
            {description && (
                <DescriptionStyled content={description} />
            )}
        </LabeledStyled>
    )
}

Labeled.propTypes = {
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
    onHintClose: PropTypes.func,
    className: PropTypes.string
}

Labeled.defaultProps = {
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
    onHintClose: void '',
    className: void ''
}

export default Labeled
