import React, { useCallback } from 'react'
import { Perimeter } from '@sbol/lib.ui/core/perimeter'
import PropTypes from 'prop-types'
import { getFeatureOption } from '@sbol/lib.app'

import { useLongPress } from '../../../utils/custom-hooks'
import { isStatusLoading } from '../../utils/helpers'
import {
    RATING_LIST,
    PRESS_DURATION,
    MS
} from '../../utils/constants'

import { VisualRatingListItem } from './visual-rating-list-item'
import { VisualRatingLoader } from './visual-rating-loader'
import { VisualRatingWrapperStyled, VisualRatingListStyled } from './visual-rating-block.styles'

export const VisualRatingBlock = ({ children, isVisualRatingOpened, handleToggleVisualRatingBlock }) => {

    let perimeter
    const setRef = (component) => {
        if (!perimeter) {
            perimeter = component
        }
    }
    const handleClickOutside = useCallback(() => {
        handleToggleVisualRatingBlock()
        perimeter.disableOnClickOutside()
    }, [])

    const pressDurationOption = Number(
        getFeatureOption('AccessVisualRatingCodes', 'Activate')
    ) * MS || PRESS_DURATION

    const {
        onMouseDown,
        onMouseUp,
        onTouchStart,
        onTouchEnd,
        status
    } = useLongPress(
        () => {
            handleToggleVisualRatingBlock()
            perimeter.enableOnClickOutside()
        },
        pressDurationOption
    )

    return (
        <Perimeter
            ref={setRef}
            onClickOutside={handleClickOutside}
            disableOnClickOutside
        >
            <VisualRatingWrapperStyled
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {
                    !isVisualRatingOpened && isStatusLoading(status) &&
                    <VisualRatingLoader pressDuration={pressDurationOption} />
                }
                {children}
                {
                    isVisualRatingOpened &&
                    <VisualRatingListStyled>
                        {
                            RATING_LIST.map((num) => (
                                <VisualRatingListItem
                                    num={num}
                                    key={num.value}
                                    handleClickOutside={handleClickOutside}
                                />
                            ))
                        }
                    </VisualRatingListStyled>
                }
            </VisualRatingWrapperStyled>
        </Perimeter>
    )
}

VisualRatingBlock.defaultProps = {
    children: null,
    isVisualRatingOpened: false,
    handleToggleVisualRatingBlock: () => {}
}

VisualRatingBlock.propTypes = {
    children: PropTypes.node,
    isVisualRatingOpened: PropTypes.bool,
    handleToggleVisualRatingBlock: PropTypes.func
}
