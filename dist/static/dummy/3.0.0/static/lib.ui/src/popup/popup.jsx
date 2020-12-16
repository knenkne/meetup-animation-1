import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import _ from 'lodash'
import classnames from 'classnames'

import { Icon } from '../icon'
import { deprecate } from '../utils'

import defaultTheme from './style.css'

ReactModal.setAppElement('body')

const getScrollWidth = _.memoize(() => {
    const div = document.createElement('div')

    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'

    document.body.appendChild(div)
    const scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)
    return scrollWidth
})

/**
 * DEPRECATED. DO NOT USE
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Popup extends React.PureComponent {
    contentLabel = _.uniqueId('popup-title-')
    contentDescription = _.uniqueId('popup-description-')

    render () {
        const { forceOpened, title, size, onClose, children, a11y, 'data-node': dataNode } = this.props

        if (forceOpened && (document.body.offsetHeight > document.documentElement.clientHeight)) {
            document.body.style.paddingRight = `${getScrollWidth()}px`
        } else {
            document.body.style.paddingRight = ''
        }

        return (
            <ReactModal
                isOpen={forceOpened}
                className={defaultTheme.modal}
                onRequestClose={onClose}
                shouldCloseOnOverlayClick={!!onClose}
                overlayClassName={defaultTheme.overlay}
                ariaHideApp={a11y.ariaHideApp}
                contentLabel={title ? this.contentLabel : a11y.title}
            >
                <aside
                    role="dialog"
                    aria-labelledby={this.contentLabel}
                    aria-describedby={this.contentDescription}
                    className={classnames(defaultTheme.container, defaultTheme[size])}
                    data-node={dataNode}
                    data-unit="modal"
                >
                    {onClose &&
                    <button
                        className={defaultTheme.close}
                        title={a11y.closeButtonTitle}
                        onClick={onClose}
                        data-unit="modal:close"
                        aria-label={a11y.closeButtonTitle}
                        type="button"
                    >
                        <Icon name="icon:core/common/close" />
                    </button>
                    }
                    <legend className={defaultTheme.legend}>
                        <h2
                            data-unit="modal:title"
                            className={classnames(defaultTheme.title, { [defaultTheme.titleEmpty]: !title })}
                            id={this.contentLabel}
                        >
                            {title}
                        </h2>
                        <div
                            data-unit="modal:body"
                            className={defaultTheme.body}
                            id={this.contentDescription}
                        >
                            {children}
                        </div>
                    </legend>
                </aside>
            </ReactModal>
        )

    }
}

Popup.propTypes = {
    forceOpened: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
    title: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    'data-node': PropTypes.string,
    a11y: PropTypes.shape({
        /**
         * Сокрытие от screen reader всего контента кроме модального окна
         */
        ariaHideApp: PropTypes.bool,
        /**
         * Смысловой заголовок кнопки закрытия модального окна (если она есть)
         */
        closeButtonTitle: PropTypes.string,
        /**
         * Смысловой заголовок модалки (используется вместо title)
         */
        title: PropTypes.string,
    }).isRequired
}

Popup.defaultProps = {
    forceOpened: false,
    children: null,
    onClose: void 0,
    title: void 0,
    size: 'md',
    'data-node': void 0,
    a11y: void 0
}

Popup.theme = defaultTheme
Popup.displayName = 'Popup'
export default deprecate()(Popup)
