import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Icon } from '../../icon'

import style from './eye-style.css'

const Eye = (props) => {
    const { onOpen, onClose, isOpen } = props
    const handleClose = useCallback((e) => {
        if (isOpen) {
            onClose(e)
        }
    }, [isOpen])

    const handleOpen = useCallback((e) => {
        if (!e || !e.key || e.key !== 'Tab') {
            onOpen(e)
        }
    }, [])

    return (
        <button
            type="button"
            className={style.eye}
            onMouseDown={handleOpen}
            onMouseUp={handleClose}
            onMouseLeave={handleClose}
            onTouchStart={handleOpen}
            onTouchEnd={handleClose}
            onKeyDown={handleOpen}
            onKeyUp={handleClose}
            onBlur={handleClose}
            data-unit="input:password:eye"
            aria-label="Показать пароль"
        >
            <Icon name={isOpen ? 'icon:core/common/eyeOpened' : 'icon:core/common/eyeClosed'} theme={style} />
        </button>
    )
}

Eye.propTypes = {
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool
}
Eye.defaultProps = {
    onOpen: _.noop,
    onClose: _.noop,
    isOpen: false
}

export { Eye }
