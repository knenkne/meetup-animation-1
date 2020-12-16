import React from 'react'
import PropTypes from 'prop-types'

import { Header } from './header'
import { Block } from './block'
import { Row } from './row'
import { Title } from './title'
import defaultTheme from './style.css'

export const Table = ({ children }) =>
    (<div className={defaultTheme.table}>
        {children}
    </div>)

Table.propTypes = {
    children: PropTypes.node
}

Table.defaultProps = {
    children: void 0
}

Table.displayName = 'Table'
Table.theme = defaultTheme

Table.Header = Header
Table.Title = Title
Table.Block = Block
Table.Row = Row
