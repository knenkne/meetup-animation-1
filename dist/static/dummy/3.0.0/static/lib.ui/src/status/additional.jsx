import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Typography } from '../typography'

import defaultTheme from './style.css'

const { Caption } = Typography

export const Additional = (props) => {
    const passedProps = _.omit(props, 'children')

    return (
        <Caption>
            <ul
                {...passedProps}
                className={defaultTheme.additional}
                data-unit="status:additional"
            >
                {React.Children.map(props.children, (child, idx) => (
                    <li
                        className={defaultTheme.additionalItem}
                        key={idx}
                        data-unit="status:additional:item"
                    >
                        {child}
                    </li>
                ))}
            </ul>
        </Caption>
    )
}

Additional.propTypes = {
    children: PropTypes.node
}

Additional.defaultProps = {
    children: void 0
}

Additional.displayName = 'Status.Additional'
