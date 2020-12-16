import * as types from '../../adapter/action-types'

export const success = (pid) => ({ type: types.SUCCESS, pid })
export const failed = (error = {}) => ({ type: types.FAILED, error })
export const updateMessages = (messages = []) => ({ type: types.UPDATE_MESSAGES, messages })
export const finishFlow = () => ({ type: types.FINISH })
export const startRequest = () => ({ type: types.START_REQUEST })
export const stopRequest = () => ({ type: types.STOP_REQUEST })
export const changeFlow = (url) => ({ type: types.CHANGE_FLOW, url })
export const subFlowReturn = (url) => ({ type: types.RETURNING_FROM_SUBFLOW, url })
export const subFlowEnter = (url) => ({ type: types.ENTERING_SUBFLOW, url })
export const clearState = (flow) => ({ type: types.CLEAR_STATE, flow })
export const initialize = (options) => ({ type: types.INIT, options })
export const resumeProcess = (documentId) => ({ type: types.RESUMING_PROCESS, documentId })
export const noAvailableSteps = () => ({ type: types.NO_AVAILABLE_STEPS })
export const noStepFound = () => ({ type: types.STEP_NOT_FOUND })
export const updateHistory = (history) => ({ type: types.UPDATE_HISTORY, history })
export const removeScreens = () => ({ type: types.REMOVE_SCREENS })

export const update = (response = {}) => {
    const {
        body: {
            pid,
            flow,
            state,
            history = [],
            output: {
                document = {},
                screens = [],
                events = [],
                references = {},
                progress = {}
            } = {}
        } = {}
    } = response

    return {
        type: types.UPDATE,
        pid,
        flow,
        state,
        document,
        screens,
        events,
        references,
        history,
        progress
    }
}

export const updateReference = (referenceId, items = [], properties = {}) => ({
    type: types.UPDATE_REFERENCE,
    referenceId,
    items,
    properties
})

export const updateReferences = (references = {}) => ({
    type: types.UPDATE_REFERENCES,
    references
})

export const replaceReference = (referenceId, items = []) => ({
    type: types.REPLACE_REFERENCE,
    referenceId,
    items
})

export const setServerValidationError = (serverValidationErrors = {}) => ({
    type: types.SET_SERVER_VALIDATION_ERROR,
    fieldId: Object.keys(serverValidationErrors)[0]
})

export const setSubFlowInRegionStarted = ({ regionName, url, pid }) => ({
    type: types.START_SUB_FLOW_IN_REGION,
    regionName,
    url,
    pid,
})

export const setSubFlowInRegionLoaded = () => ({
    type: types.SUBFLOW_IN_REGION_LOADED
})

export const setSubFlowInRegionFinished = ({ url, pid }) => ({
    type: types.FINISH_SUB_FLOW_IN_REGION,
    url,
    pid
})

export const setWidgetTitle = ({ fieldId, newTitle }) => ({
    type: types.UPDATE_WIDGET_TITLE,
    fieldId,
    newTitle
})

export const setShouldRestart = (shouldRestart) => ({
    type: types.SHOULD_RESTART,
    shouldRestart
})

/**
 *
 * @param {Number} screenIndex - индекс скрина на котором виджет
 * @param {String} screenPart - часть скрина на котороый виджет в терминах SCREEN_PART
 * @param {Number} widgetIndex - индекс виджета в скрине
 * @param {Boolean} hiddenByStrategy - признак скрытия виджета стратегией
 * @return {{screenPart: *, screenIndex: *, type: symbol, widgetIndex: *}} - экшн
 */
export const changeWidgetVisibility = ({ screenIndex, screenPart, widgetIndex, hiddenByStrategy }) => ({
    type: types.CHANGE_WIDGET_VISIBILITY,
    screenIndex,
    screenPart,
    widgetIndex,
    hiddenByStrategy
})
