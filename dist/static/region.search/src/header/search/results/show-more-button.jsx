import React from 'react'
import i18next from 'i18next'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button, Icon } from '@sbol/lib.ui'

import { ITEMS_MAX_COUNT } from '../constants'

import styles from './styles.css'

export const ShowMoreButton = ({ length, showMoreExpanded, onClick, categoryName }) => (
    <Button
        theme={{ button: styles.showMoreButton }}
        onClick={onClick}
    >
        <span className={styles.showMoreButtonTitle}>
            {showMoreExpanded ? i18next.t('show.less') : i18next.t(`show.more.${categoryName}`, { count: length - ITEMS_MAX_COUNT })}
        </span>
        <span className={cn(styles.showMoreButtonIcon, showMoreExpanded && styles.showMoreButtonReverseIcon)}>
            <Icon name="icon:core/common/down-arrow" size="self" />
        </span>
    </Button>
)

ShowMoreButton.propTypes = {
    length: PropTypes.number.isRequired,
    showMoreExpanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    categoryName: PropTypes.string.isRequired
}
