import React from 'react'
import { Icon } from '@sbol/lib.ui'
import classnames from 'classnames'

import style from './multi-widget.css'

const iconTheme = { icon: classnames(Icon.theme.icon, style.icon) }

export const Short = ({ title, description, index, onEdit }) => {
    const handleEdit = React.useCallback(() => {
        onEdit(index)
    }, [])

    return (
        <button
            className={style.short}
            onClick={handleEdit}
            type="button"
        >
            <div className={style.shortContent}>
                <div className={style.title}>
                    {title}
                </div>
                {description &&
                <div className={style.description}>
                    {description}
                </div>
                }
            </div>
            <Icon
                name="icon:core/common/down-arrow"
                size="sm"
                theme={iconTheme}
            />
        </button>
    )
}
