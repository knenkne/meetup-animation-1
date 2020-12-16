import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

export const Content = ({
    suggest,
    onClick
}) => {
    const handleClick = useCallback(
        (e) => {
            e.preventDefault()
            onClick(suggest)
        },
        [suggest]
    )

    return (
        <div onClick={handleClick}>
            {suggest.value}
        </div>
    )
}

Content.propTypes = {
    suggest: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}
