import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Collapse } from 'react-collapse'
import { Global as GlobalStyles } from '@emotion/core'

import { memoizeFuncWithArgs } from '../utils'
import { Icon } from '../icon'
import { Typography } from '../typography'

import {
    AccordionItemStyled,
    HeadingStyled,
    TitleButtonStyled,
    TextBodyStyled,
    HeadlineStyled,
    TitleTextStyled,
    ArrowStyled,
    SideTitleStyled,
    DescriptionStyled,
    ContentStyled,
    CollapseWrapperStyled,
    globalStyles
} from './accordion.style'

const omitProps = [
    'title',
    'description',
    'children',
    'forceOpened',
    'onChange',
    'onKeyDown',
    'id',
    'aria-level',
    'collapsible',
    'as',
    'theme'
]

// eslint-disable-next-line complexity, comment: complexity of 15
export const Item = (props) => {
    const { title, children, forceOpened, mode, onChange, onKeyDown, id, 'aria-level': ariaLevel, as, description, collapsible } = props
    const [active, updateState] = useState(forceOpened)

    const handleOnchange = useCallback(
        () => {
            updateState(!active)
            onChange(title)
        })

    // вычисляем открывать или не открывать для кейсов, когда могут быть открыты несколько итемов
    const isOpened = collapsible ? active : forceOpened
    return (
        <AccordionItemStyled
            {..._.omit(props, omitProps)}
        >
            <GlobalStyles
                styles={globalStyles}
            />
            <HeadingStyled role="heading" aria-level={ariaLevel}>
                <TitleButtonStyled
                    onClick={handleOnchange}
                    onKeyDown={memoizeFuncWithArgs(onKeyDown, title)}
                    type="button"
                    aria-expanded={isOpened}
                    aria-controls={`${id}-section`}
                    id={`${id}-title`}
                >
                    {mode === 'widget' ?
                        (<TextBodyStyled mode="semibold" as="span">
                            {title}
                        </TextBodyStyled>)
                        : <HeadlineStyled mode="h4">
                            <TitleTextStyled>{title}</TitleTextStyled>
                            {mode !== 'classic' && (
                                <ArrowStyled isOpened={isOpened}>
                                    <Icon name="icon:core/common/down-arrow" />
                                </ArrowStyled>)}
                        </HeadlineStyled>
                    }

                    {mode !== 'classic' && (
                        <SideTitleStyled>
                            {as && (
                                <Typography.Body mode="semibold" as="span">{as}</Typography.Body>
                            )}
                        </SideTitleStyled>)
                    }
                    {mode === 'description' && description &&
                        <DescriptionStyled>{description}</DescriptionStyled>
                    }
                    {mode === 'widget' &&
                        <ArrowStyled isOpened={isOpened}>
                            <Icon name="icon:core/common/down-arrow" />
                        </ArrowStyled>
                    }
                </TitleButtonStyled>
            </HeadingStyled>
            <CollapseWrapperStyled
                id={`${id}-section`}
                role="region"
                aria-labelledby={`${id}-title`}
            >
                <Collapse
                    isOpened={isOpened}
                >
                    <ContentStyled
                        isOpened={isOpened}
                        aria-hidden={!isOpened}
                    >
                        {children}
                    </ContentStyled>
                </Collapse>
            </CollapseWrapperStyled>
        </AccordionItemStyled>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
    forceOpened: PropTypes.bool,
    mode: PropTypes.oneOf(['widget', 'info', 'description', 'classic']),
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    'aria-level': PropTypes.string,
    /**
     * Для mode: widget, индикация негативного контента
     */
    warning: PropTypes.bool,
    collapsible: PropTypes.bool,
    as: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
}

Item.defaultProps = {
    id: void 0,
    description: void 0,
    forceOpened: false,
    mode: 'classic',
    onChange: _.noop,
    onKeyDown: _.noop,
    'aria-level': void '',
    warning: false,
    collapsible: false,
    as: void 0,
}

Item.displayName = 'Accordion.Item'
