import * as types from '../../action-types'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE:
            return action.references
        case types.UPDATE_REFERENCE:
            return {
                ...state,
                [action.referenceId]: {
                    items: [
                        ...state[action.referenceId].items,
                        ...action.items
                    ],
                    properties: {
                        ...state[action.referenceId].properties,
                        ...action.properties
                    }
                }
            }
        case types.UPDATE_REFERENCES:
            return {
                ...state,
                ...action.references
            }
        case types.REPLACE_REFERENCE:
            return {
                ...state,
                [action.referenceId]: {
                    ...state[action.referenceId],
                    items: action.items
                }
            }
        default:
            return state
    }
}
