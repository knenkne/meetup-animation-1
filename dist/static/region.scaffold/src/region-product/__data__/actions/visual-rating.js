import * as types from '../action-types'
import { axiosUFS } from '../../__data__/axios'

export function setVisualRating (visualRatingCodes) {
    return (dispatch) => {
        dispatch({
            type: types.VISUAL_RATING_LOADING
        })
        axiosUFS('/sm-uko/v1/sbolpro/data/visualRating/set ', {
            method: 'POST',
            data: [visualRatingCodes]
        })
            .then(
                ({ data }) => {
                    dispatch({
                        type: types.VISUAL_RATING_FETCH,
                        payload: data
                    })
                    Promise.resolve()
                },
                (error) => {
                    Promise.reject(error)
                    dispatch({
                        type: types.VISUAL_RATING_ERROR
                    })
                }
            )
    }
}
