import React, { useCallback, useMemo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Icon } from '@sbol/lib.ui'
import classnames from 'classnames'

import { openChat } from 'Thunks/pages'
import { clickPage } from 'Thunks/analytic/clickPage'

import CloseSuggestsContext from '../close-suggests-context'

import styles from './style.css'
import { getOperationIconName } from './utils'
import { DocumentTitle } from './page/documents/document-title'

/**
 * Компонент для отображения функции-чата в выдаче поиска
 * @param {Object} item - описание функции
 * @param {Function} handleOpenChat - обработчик клика по функции
 * @param {Function} handleCloseSearchResult - закрыть поисковую выдачу
 * @param {Function} clickMetric - отправить метрику.
 * @return {*} - ChatComponent
 * @constructor
 */
export const ChatComponent = ({
    item,
    handleOpenChat,
    handleCloseSearchResult,
    clickMetric
}) => {
    const { action: name, id } = item
    const handleClick = useCallback((e) => {
        e.preventDefault()
        handleCloseSearchResult()
        handleOpenChat()
        clickMetric(item)
    }, [id])
    const icon = useMemo(() => getOperationIconName(item), [item])

    return (
        <Button
            theme={{ button: styles.chatStatement }}
            onClick={handleClick}
        >
            <div className={styles.operation}>
                <span className={classnames(styles.iconWrapper, styles.chatIcon)}>
                    <Icon name={`icon:core/operations/${icon}`} size="self" />
                </span>
                <DocumentTitle title={name} />
            </div>
        </Button>
    )
}

ChatComponent.propTypes = {
    handleOpenChat: PropTypes.func.isRequired,
    handleCloseSearchResult: PropTypes.func.isRequired,
    clickMetric: PropTypes.func.isRequired,
    item: PropTypes.shape({
        action: PropTypes.string.isRequired
    }).isRequired
}

/**
 * Обертка для компонента "Чат", передающая в него методы из контекста, упрощает тестирование компонента ChatComponent.
 * @param {Object} props - пропсы, переданные из родителя
 * @return {Context} - объект контекста
 */
const ContextWrapper = (props) => (
    <CloseSuggestsContext.Consumer>
        {(onCloseSearchResult) =>
            <ChatComponent
                handleCloseSearchResult={onCloseSearchResult}
                {...props}
            />
        }
    </CloseSuggestsContext.Consumer>
)

const mapDispatchToProps = {
    handleOpenChat: openChat,
    clickMetric: clickPage
}

export const Chat = connect(null, mapDispatchToProps)(ContextWrapper)
