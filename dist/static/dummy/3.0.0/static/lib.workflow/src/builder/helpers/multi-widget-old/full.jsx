import React from 'react'

import style from './multi-widget.css'

export const Full = ({ onClose, index, hideButtonTitle, widget: Widget, ...props }) => {
    const handleClose = React.useCallback(() => {
        onClose(index)
    }, [index])

    return (
        <div className={style.full}>
            <div className={style.fullWidget}>
                <Widget {...props} />
            </div>
            <button
                className={style.hideButton}
                onClick={handleClose}
                type="button"
            >
                {hideButtonTitle}
            </button>
        </div>
    )
}
