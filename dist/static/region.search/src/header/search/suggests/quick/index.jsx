import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Typography } from '@sbol/lib.ui'

import { historySelector, suggestSelector } from 'Selectors'
import { getQuickSuggestions } from 'Thunks/suggests'

import { ENTER_KEY_CODE } from '../../constants'
import { Content } from '../content'

import styles from './styles.css'

export const Quick = ({ history, suggests, onClick, getQuickSuggestions }) => {
    const handleKeyDown = useCallback( // TODO Неполучается запихнуть li внутрь компонента Content, перестаёт работать кнопка tab в браузере.
        (suggest) => (e) => { // При этом keyDown будет работать, когда на тег установлен tabIndex.
            if (e.keyCode === ENTER_KEY_CODE) { // Соответственно неполучается упростить HOOK до одной функции.
                onClick(suggest)
            }
        }, [])

    useEffect(() => {
        getQuickSuggestions()
    }, [])

    return (
        <ul className={classnames(styles.queries, !history.length && styles.queriesNoHistory)}>
            {suggests.map((suggest) => (
                <li
                    tabIndex={0}
                    className={classnames(styles.item, Typography.theme.body)}
                    key={suggest.value}
                    onKeyDown={handleKeyDown(suggest)}
                >
                    <Content
                        suggest={suggest}
                        onClick={onClick}
                    />
                </li>
            ))}
        </ul>
    )
}

Quick.propTypes = {
    suggests: PropTypes.arrayOf(PropTypes.object).isRequired,
    history: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    suggests: suggestSelector(state),
    history: historySelector(state)
})

const mapDispatchToProps = {
    getQuickSuggestions
}

export default connect(mapStateToProps, mapDispatchToProps)(Quick)
