import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Tooltip } from '../../tooltip'
import { Markdown } from '../../markdown'
import { Icon } from '../../icon'

import styles from './hint.css'

const iconTheme = { icon: classnames(Icon.theme.icon, styles.hintIcon) }

export const Hint = ({ text }) => (
    <Tooltip.Hover>
        <Icon name="icon:core/common/moreInfo" theme={iconTheme} />
        <Tooltip.Tip mode="info"><Markdown.Full content={text} /></Tooltip.Tip>
    </Tooltip.Hover>
)

Hint.propTypes = {
    text: PropTypes.string.isRequired
}
