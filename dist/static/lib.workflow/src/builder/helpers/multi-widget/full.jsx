import React from 'react'
import cn from 'classnames'

import style from './multi-widget.css'

export const Full = ({
    onClose,
    onClean,
    onRemove,
    index,
    closeButtonTitle,
    cleanButtonTitle,
    removeButtonTitle,
    active,
    cleanable,
    removable,

    widget: Widget,
    ...props
}) => {
    const handleClose = React.useCallback(() => {
        onClose(index)
    }, [index])
    const handleClean = React.useCallback(() => {
        onClean(index)
    }, [index])
    const handleRemove = React.useCallback(() => {
        onRemove(index)
    }, [index])

    const [focused, onFocus] = React.useState(false)

    const handleFocusIn = React.useCallback(() => {
        onFocus(true)
    }, [])
    const handleFocusOut = React.useCallback(() => {
        onFocus(false)
    }, [])


    return (
        <div
            className={cn(style.full, focused && style.focused)}
            onBlurCapture={handleFocusOut}
            onFocusCapture={handleFocusIn}
        >
            <div className={style.fullWidget}>
                <Widget {...props} />
            </div>
            <div className={style.buttons}>
                <button
                    className={cn(style.button, style.buttonClose)}
                    onClick={handleClose}
                    type="button"
                >
                    {closeButtonTitle}
                </button>
                {cleanable &&
                <button
                    className={cn(style.button, style.buttonClean)}
                    onClick={handleClean}
                    type="button"
                >
                    {cleanButtonTitle}
                </button>
                }
                {removable &&
                <button
                    className={cn(style.button, style.buttonRemove)}
                    onClick={handleRemove}
                    type="button"
                >
                    {removeButtonTitle}
                </button>
                }
            </div>
        </div>
    )
}
