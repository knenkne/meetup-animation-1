export const workflowNamespace = 'lib.workflow'

export const SLICE_NAME = 'workflow'
export const RESULT_SUCCESS = 'SUCCESS'
export const RESULT_END = 'END'

// Workflow HTTP_API_COMMANDS
export const START = 'START'
export const EVENT = 'EVENT'
export const ROLLBACK = 'ROLLBACK'
export const EXIT = 'EXIT'
export const ABORT = 'ABORT'
export const HISTORY = 'HISTORY'

// EventType.names
export const rollback = 'rollback'
export const skip = 'skip'
export const update = 'update'
export const next = 'next'
export const exit = 'exit'
export const abort = 'abort'
export const restore = 'restore'

export const ON_ENTER = 'on-enter'
export const ON_RETURN = 'on-return'
export const EXTERNAL_ENTER = 'EXTERNAL_ENTER'
export const EXTERNAL_RETURN = 'EXTERNAL_RETURN'

// history status types
export const ACTIVE = 'ACTIVE'
export const DISABLED = 'DISABLED'
export const HIDDEN = 'HIDDEN'

// document properties types
export const documentId = 'documentId'
export const templateId = 'templateId'
export const srcDocumentId = 'srcDocumentId'
export const srcTemplateId = 'srcTemplateId'

// Field Types
export const text = 'text'
export const checkbox = 'checkbox'
export const select = 'select'
export const multiselect = 'multiselect'

// Field Types протокола 2.0

export const fieldTypes = {
    text,
    checkbox,
    select,
    multiselect
}

// Field formats
export const resource = 'resource'
export const money = 'money'
export const date = 'date'
export const month = 'month'
export const quarter = 'quarter'
export const time = 'time'
export const year = 'year'

export const dateFormats = [date, month, quarter, time, year]

export const fieldFormats = {
    resource,
    money,
    ...dateFormats
}

// MessageType.type

export const messageTypes = {
    ERROR: 'error',
    INFO: 'info',
    WARNING: 'warning',
    VALIDATION: 'validation',
    FRAUD: 'fraud',
    CUSTOM: 'custom'
}

// handleUIEvents[].on

export const uiEvents = {
    blur: 'blur',
    submit: 'submit'
}

export const metaWidgetsSections = ['header', 'widgets', 'footer']

export const navigationWidgets = ['CoreNavBar', 'CoreButtons', 'StatusNavBar']

export const statusScreenType = 'StatusScreen'
export const statusTypePrefix = 'Status'

export const CONFIRMATION_EXCLUDES = [
    'smsConfirmation:smsCode',
    'confirmation:retry'
]
export const SUB_FLOW_IN_REGION_STATUSES = {
    startLoading: 'START',
    loaded: 'LOADED',
    externalReturn: 'EXTERNAL_RETURN',
}
export const showSubFlowRegionStatuses = {
    [SUB_FLOW_IN_REGION_STATUSES.startLoading]: true,
    [SUB_FLOW_IN_REGION_STATUSES.loaded]: true,
}
export const WF_EVENTS = {
    EVENT_BUTTON_CLICK: 'EVENT_BUTTON_CLICK',
    WIDGET_SHOW: 'WIDGET_SHOW'
}
