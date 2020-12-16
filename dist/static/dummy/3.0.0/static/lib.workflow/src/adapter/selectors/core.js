import { SLICE_NAME, showSubFlowRegionStatuses, SUB_FLOW_IN_REGION_STATUSES } from '../../constants'
import { isRegion } from '../actions/utils/regions'

export const getOutput = (state) => state[SLICE_NAME]
export const getDocument = (state) => state[SLICE_NAME].document
export const getScreens = (state) => state[SLICE_NAME].screens
export const getProgress = (state) => state[SLICE_NAME].progress
export const getReferences = (state) => state[SLICE_NAME].references
export const getHistory = (state) => state[SLICE_NAME].history
export const getError = (state) => state[SLICE_NAME].error
export const getMessages = (state) => state[SLICE_NAME].messages

export const getPid = (state) => state[SLICE_NAME].process.pid
export const getUrl = (state) => state[SLICE_NAME].process.url
export const getFlow = (state) => state[SLICE_NAME].process.flow
export const getName = (state) => state[SLICE_NAME].process.name
export const getState = (state) => state[SLICE_NAME].process.state
export const getMainProcessId = (state) => state[SLICE_NAME].process.mainProcessId

export const getStateLoading = (state) => state[SLICE_NAME].status.isLoading
export const getStateFailed = (state) => state[SLICE_NAME].status.isFailed
export const getStateFinished = (state) => state[SLICE_NAME].status.isFinished
export const getStateShouldRestart = (state) => state[SLICE_NAME].status.shouldRestart
export const getSubflowIndication = (state) => state[SLICE_NAME].status.isInSubflow

export const getDocumentId = (state) => state[SLICE_NAME].document.documentId
export const getTemplateId = (state) => state[SLICE_NAME].document.templateId
export const getSrcDocumentId = (state) => state[SLICE_NAME].document.srcDocumentId
export const getSrcTemplateId = (state) => state[SLICE_NAME].document.srcTemplateId

export const getSubFlowInRegionStatus = (state) => state[SLICE_NAME].subFlow.status
export const getSubFlowInRegionStartData = (state) => state[SLICE_NAME].subFlow.startData
export const getOnReturnDataForParent = (state) => ({
    url: state[SLICE_NAME].subFlow.onReturnUrl,
    pid: state[SLICE_NAME].subFlow.nextPid
})
export const isProcessInRegion = (state) => Boolean(isRegion(getUrl(state), getMainProcessId(state)))

export const getSubFlowVisible = (state) => showSubFlowRegionStatuses[getSubFlowInRegionStatus(state)]

export const showMainFlow = (state) => isProcessInRegion(state) || (!isProcessInRegion(state) &&
    getSubFlowInRegionStatus(state) !== SUB_FLOW_IN_REGION_STATUSES.loaded)
