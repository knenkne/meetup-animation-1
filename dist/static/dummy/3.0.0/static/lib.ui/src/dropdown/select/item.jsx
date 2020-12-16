import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './select.css'

export const Item = (props) => (
    <div title={props.title} className={classnames(styles.item, { [styles.itemReadOnly]: props.readOnly })}>
        <span className={styles.itemTitle}>{props.title}</span>
        <span className={styles.itemDescription}>{props.description}</span>
        <span className={classnames(styles.itemAside, { [styles.touched]: props.touched })}>{props.additional}</span>
    </div>
)

Item.propTypes = {
    title: PropTypes.string,
    readOnly: PropTypes.bool,
    description: PropTypes.string,
    additional: PropTypes.string,
    touched: PropTypes.bool
}

Item.defaultProps = {
    title: '',
    readOnly: false,
    additional: void 0,
    description: void 0,
    touched: false
}
