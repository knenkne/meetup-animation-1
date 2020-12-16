import React from 'react'
import PropTypes from 'prop-types'

import { PAGES_CHAT_UID } from '../../constants'

import { Page } from './page'
import { Chat } from './chat'
import { select } from './utils'
import styles from './style.css'

/**
 * Соответствие функции компоненту.
 * @type {{[p: String|Number]: Component}}
 */
const componentStore = {
    [PAGES_CHAT_UID]: Chat
}

export const PagesList = ({
    pages
}) => (
    <div className={styles.container}>
        {pages.map((item, index) => {
            const componentFound = select(item)
            const Component = componentFound ? componentStore[componentFound] : Page
            const pageWithIndex = { ...item, position: index }
            return <Component key={item.id} item={pageWithIndex} />
        })}
    </div>
)

PagesList.propTypes = {
    pages: PropTypes.array.isRequired
}
