import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { actions } from '../../../__data__'

import { VisualRatingListItemStyled, VisualRatingListButtonStyled } from './visual-rating-block.styles'

const VisualRatingListItemComponent = ({ num, handleClickOutside, handleVisualRating }) => {

    const handleClick = useCallback(() => {
        handleVisualRating(num.value)
        handleClickOutside()
    }, [name.value])

    return (
        <VisualRatingListItemStyled>
            <VisualRatingListButtonStyled onClick={handleClick}>{num.name}</VisualRatingListButtonStyled>
        </VisualRatingListItemStyled>
    )
}


const mapDispatchToProps = {
    handleVisualRating: actions.visualRating.setVisualRating
}

VisualRatingListItemComponent.defaultProps = {
    num: '00',
    handleClickOutside: () => {},
    handleVisualRating: () => {}
}

VisualRatingListItemComponent.propTypes = {
    num: PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string
    }),
    handleClickOutside: PropTypes.func,
    handleVisualRating: PropTypes.func
}

export const VisualRatingListItem = connect(null, mapDispatchToProps)(VisualRatingListItemComponent)
