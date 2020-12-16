import React from 'react'
import PropTypes from 'prop-types'

import { Caption } from '../../typography'

import { GroupFieldsetStyled, ContentStyled } from './group.style'

/**
 * Компонент для группировки и выравнивания checkbox и radio
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const SelectionGroup = ({ title, mode, size, children, a11y: { label }, ...passedProps }) => (
    <GroupFieldsetStyled {...passedProps} role="group" aria-label={label}>
        {title &&
            (<Caption>{title}</Caption>)
        }
        <ContentStyled mode={mode} size={size}>
            {children}
        </ContentStyled>
    </GroupFieldsetStyled>
)

SelectionGroup.propTypes = {
    mode: PropTypes.oneOf(['column', 'row']),
    size: PropTypes.oneOf(['sm', 'md']),
    children: PropTypes.node,
    title: PropTypes.string,
    a11y: PropTypes.shape({
        label: PropTypes.string
    })
}

SelectionGroup.defaultProps = {
    mode: 'column',
    size: void 0,
    children: void 0,
    title: void 0,
    a11y: {
        label: 'radio group'
    }
}
