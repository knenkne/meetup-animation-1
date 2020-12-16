import * as types from '../../action-types'
import { SUB_FLOW_IN_REGION_STATUSES } from '../../../constants'

const initialState = {
    status: '',
    startData: {
        regionName: '',
        url: '',
        pid: ''
    },
    onReturnUrl: ''
}

export const subFlow = (state = initialState, action) => {
    switch (action.type) {
        case types.START_SUB_FLOW_IN_REGION: {
            const { regionName, url, pid } = action
            return { ...state, status: SUB_FLOW_IN_REGION_STATUSES.startLoading, startData: { regionName, url, pid } }
        }
        case types.SUBFLOW_IN_REGION_LOADED: {
            return { ...state, status: SUB_FLOW_IN_REGION_STATUSES.loaded }
        }
        case types.FINISH_SUB_FLOW_IN_REGION: {
            return { ...state, status: SUB_FLOW_IN_REGION_STATUSES.externalReturn, onReturnUrl: action.url, nextPid: action.pid }
        }
        default:
            return state
    }
}
