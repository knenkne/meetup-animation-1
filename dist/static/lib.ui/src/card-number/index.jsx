import React from 'react'
import PropTypes from 'prop-types'
import { compact } from 'lodash'
import classnames from 'classnames'

import style from './style.css'

const MAX_CARD_NUMBER_LENGTH = 18
const MAX_CARD_NUMBER_LENGTH_GROUPS_COUNT = 5
const COMMON_CARD_NUMBER_LENGTH_GROUPS_COUNT = 4
const MAX_CARD_NUMBER_LENGTH_GROUP_LENGTH = 2
const COMMON_CARD_NUMBER_LENGTH_GROUP_LENGTH = 4

export const splitNumber = (value) => {
    const draftValue = String(value)
        .replace(/ /g, '')
        .replace(/\*/g, '•')

    const numbers = draftValue.split('').reverse()

    const groups = []

    const groupsCount = draftValue.length === MAX_CARD_NUMBER_LENGTH
        ? MAX_CARD_NUMBER_LENGTH_GROUPS_COUNT
        : COMMON_CARD_NUMBER_LENGTH_GROUPS_COUNT

    let nextNumberPosition = 0

    for (let groupIndex = 0; groupIndex < groupsCount; groupIndex += 1) {
        const groupLength = draftValue.length === MAX_CARD_NUMBER_LENGTH && groupIndex === 0
            ? MAX_CARD_NUMBER_LENGTH_GROUP_LENGTH
            : COMMON_CARD_NUMBER_LENGTH_GROUP_LENGTH

        for (let numberIndex = 0; numberIndex < groupLength; numberIndex += 1) {
            groups[groupIndex] = groups[groupIndex] || ''
            groups[groupIndex] = (numbers[nextNumberPosition] || '') + groups[groupIndex]
            nextNumberPosition += 1
        }
    }

    return compact(groups.reverse())
}

export const CardNumber = ({ value, ...props }) => {
    const groups = splitNumber(value)

    return (
        <span {...props} className={classnames(style.cardNumber, props.className)}>
            {groups.map((group, index) => (
                <React.Fragment key={group + index}>
                    {Boolean(index) && <span aria-hidden="true">&nbsp;</span>}
                    {group}
                </React.Fragment>
            ))}
        </span>
    )
}

CardNumber.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string
}

CardNumber.defaultProps = {
    className: void ''
}

export default CardNumber
