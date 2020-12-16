import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Typography } from '@sbol/lib.ui'

import { historySelector } from 'Selectors'

import { ENTER_KEY_CODE } from '../../constants'
import { Content } from '../content'

import styles from './styles.css'

export const History = ({ history, onClick }) => {
    // Не показывать, если нет истории
    if (!history.length) {
        return null
    }

    const handleKeyDown = useCallback( // TODO Неполучается запихнуть li внутрь компонента Content, перестаёт работать кнопка tab в браузере.
        (suggest) => (e) => { // При этом keyDown будет работать, когда на тег установлен tabIndex.
            if (e.keyCode === ENTER_KEY_CODE) { // Соответственно неполучается упростить HOOK до одной функции.
                onClick(suggest)
            }
        }, [])

    return (
        <ul className={styles.queries}>
            {history.map((suggest) => (
                <li
                    tabIndex={0}
                    className={classnames(styles.item, Typography.theme.body)}
                    key={`${suggest.value}-${suggest.date}`}
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

History.propTypes = {
    history: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    history: historySelector(state)
})

export default connect(mapStateToProps)(History)
