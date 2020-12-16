import _ from 'lodash'
import i18next from 'i18next'

import { ACTIVE, CONFIRMATION_EXCLUDES, statusTypePrefix } from '../../constants'
import { validatorFactory } from '../utils'
import { regexpTest } from '../utils/validator-factory'

import { createDeepEqualSelector, createSelector } from './selector'
import {
    getDocument,
    getError,
    getFlow,
    getHistory,
    getMessages,
    getReferences,
    getScreens,
    getState,
    getStateFailed,
    getStateLoading
} from './core'
import { getStatusWidget } from './get-status-widget'
import { getValues } from './redux-form-values'

export const hasScreens = createSelector(
    [getScreens],
    (screens) => !_.isEmpty(screens)
)

export const isInitialLoading = createSelector(
    [getStateLoading, hasScreens],
    (isLoading, hasAnyScreens) => isLoading && !hasAnyScreens
)

export const hasMessages = createSelector(
    [getMessages],
    (messages) => !_.isEmpty(messages)
)

export const getActiveProcessSteps = createDeepEqualSelector(
    [getHistory],
    (history) => history.filter((historyItem) => historyItem.status === ACTIVE)
)

export const getActiveProcessStepIDs = createSelector(
    [getActiveProcessSteps],
    (steps) => steps.map((step) => step.id)
)

export const getPreviousActiveStepId = createSelector(
    [getActiveProcessStepIDs],
    (historyIDs) => historyIDs[1] || -1
)

export const hasSingleScreen = createSelector(
    [getScreens],
    (screens = []) => screens.length === 1
)

const mergeValidatorWithParams = (func, params) => {
    _.forIn(params, (value, key) => {
        func[key] = value
    })

    return func
}

const createValidationFunction = (validator, { readonly, ...field }) => {
    if (readonly) {
        return mergeValidatorWithParams(() => void '', validator)
    }

    return mergeValidatorWithParams(validatorFactory(validator, field), validator)
}

const resolver = ({ type, value, message } = {}, { id, type: fieldType, readonly, masked }) =>
    `${type}-${value}-${message}-${id}-${fieldType}-${readonly}-${masked}`

const memoizedCreateValidationFunction = _.memoize(createValidationFunction, resolver)

const mapValidatorsToValidationFunctions = ({ validators = [], ...field }) =>
    _.map(validators, (validator) => memoizedCreateValidationFunction(validator, field))

export const getFilteredScreens = createSelector(
    [getScreens],
    (screens = []) => _.reject(screens, (screen) => _.get(screen, ['properties', 'documentOverview'], false))
)

export const isWidgetVisible = (widget, formValues, widgets, visibilityCache) => {
    if (!_.has(widget, 'visible')) {
        return true
    }
    if (!visibilityCache.has(widget)) {
        const { id, regexp } = widget.visible
        const value = _.get(formValues, id, '')
        const relatedWidget = widgets.find((w) => w.fields?.find((f) => f.id === id))
        const isVisible = regexpTest(regexp, value) && isWidgetVisible(relatedWidget, formValues, widgets, visibilityCache)
        visibilityCache.set(widget, isVisible)
    }
    return visibilityCache.get(widget)
}

export const getVisibleWidgets = (widgets, values) => {
    const visibilityCache = new WeakMap()
    return _.filter(widgets, (widget) => isWidgetVisible(widget, values, widgets, visibilityCache))
}

export const enhanceVisibleWidgets = (container, values, screenIndex, state) =>
    getVisibleWidgets(container, values).map(
        (widget) => ({
            ...widget,
            state
        })
    )

export const getScreensWithVisibleWidgets = createSelector(
    [getFilteredScreens, getValues, getState],
    (screens, values, state) =>
        screens.map((screen, screenIndex) => ({
            ...screen,
            header: enhanceVisibleWidgets(_.get(screen, 'header', []), values, screenIndex, state),
            widgets: enhanceVisibleWidgets(_.get(screen, 'widgets', []), values, screenIndex, state),
            footer: enhanceVisibleWidgets(_.get(screen, 'footer', []), values, screenIndex, state)
        }))
)

const updateWidget = (widget) => ({
    ...widget,
    readonly: Boolean(widget.readonly),
    fields: _.get(widget, 'fields', []).map((field) => ({
        ...field,
        readonly: Boolean(field.readonly || widget.readonly),
        validators: mapValidatorsToValidationFunctions(field)
    }))
})

export const getModifiedScreens = createSelector(
    [getScreensWithVisibleWidgets],
    (screens) =>
        screens.map((screen) => ({
            ...screen,
            header: _.get(screen, 'header', []).map(updateWidget),
            widgets: _.get(screen, 'widgets', []).map(updateWidget),
            footer: _.get(screen, 'footer', []).map(updateWidget)
        }))
)

const removeFragmentedStatusWidgets = (widgets) =>
    _.reject(widgets, (widget) => _.startsWith(widget.type, statusTypePrefix))

export const getPurifiedStatusScreen = createSelector(
    [getModifiedScreens],
    (screens) => {
        let nextScreens = screens.filter((screen) => screen.type !== 'WebFullscreenBottom')

        // Формируем StatusHeadline
        const statusWidget = getStatusWidget(screens)

        /*
            Если StatusHeadline сформировался, втыкаем его в начало header
            вместо всех остальных МПшных виджетов (спасибо паралакс эффектам)
        */

        if (statusWidget) {
            nextScreens = _.map(screens, (screen) => ({
                ...screen,
                title: '',
                description: '',
                header: [statusWidget, ...removeFragmentedStatusWidgets(screen.header)],
                widgets: removeFragmentedStatusWidgets(screen.widgets),
                footer: removeFragmentedStatusWidgets(screen.footer)
            }))
        }

        return nextScreens
    }
)

const ignoreCoreStatusGroup = (container) =>
    _.reject(container, (widget) => _.has(widget, 'properties.coreStatusGroup'))

export const getBodyScreens = createSelector(
    [getPurifiedStatusScreen],
    (screens) =>
        screens.map((screen) => ({
            ...screen,
            header: ignoreCoreStatusGroup(_.get(screen, 'header', [])),
            widgets: ignoreCoreStatusGroup(_.get(screen, 'widgets', [])),
            footer: ignoreCoreStatusGroup(_.get(screen, 'footer', []))
        }))
)

export const getHeaderWidgets = createSelector(
    [getBodyScreens],
    (screens) =>
        _(screens)
            .flatMap((screen) => screen.header)
            .compact()
            .value()
)

export const hasHeaderWidgets = createSelector(
    [getHeaderWidgets],
    (widgets) => !_.isEmpty(widgets)
)

export const getBodyWidgets = createSelector(
    [getBodyScreens],
    (screens) =>
        _(screens)
            .flatMap((screen) => screen.widgets)
            .compact()
            .value()
)

export const getFooterWidgets = createSelector(
    [getBodyScreens],
    (screens) =>
        _(screens)
            .flatMap((screen) => screen.footer)
            .compact()
            .value()
)

export const filterBottomScreens = (screens) => screens.filter((screen) => screen.type === 'WebFullscreenBottom')

export const getWebFullscreenBottomScreens = createSelector(
    [getModifiedScreens],
    (screens) => filterBottomScreens(screens)
)

export const getWebFullscreenBottomWidgets = createSelector(
    [getWebFullscreenBottomScreens],
    (screens) =>
        _(screens)
            .flatMap((screen) => screen.widgets)
            .compact()
            .value()
)

export const hasFooterWidgets = createSelector(
    [getFooterWidgets],
    (widgets) => !_.isEmpty(widgets)
)

const hasErrorAndFailedResponse = createDeepEqualSelector(
    [getStateFailed, getError],
    (isFailed, error) => isFailed && _.some(error, (value) => !_.isNull(value))
)

export const hasFatalError = createSelector(
    [hasErrorAndFailedResponse, hasScreens],
    (failedWithError, screens) => failedWithError && !screens
)

export const hasProcessError = createSelector(
    [getMessages, hasScreens],
    (messages, screens) => Boolean(messages?.length) && screens
)

const listReferencesById = (state, fields) =>
    _.reduce(
        fields,
        (result, { referenceId }) => !(result.indexOf(referenceId) + 1) ? result.concat([referenceId]) : result,
        []
    )

export const getReferencesByList = createSelector(
    [getReferences, listReferencesById],
    (references, list) =>
        _.reduce(
            list,
            (result, id) => _.get(references, id) ? _.extend({}, result, { [id]: _.get(references, id) }) : result,
            {}
        )
)

const getReferenceId = (state, referenceId) => referenceId

export const getReferenceByReferenceId = createSelector(
    [getReferences, getReferenceId],
    (references, referenceId) => _.get(references, referenceId, {})
)

export const getDocumentProperties = createDeepEqualSelector(
    [getFlow, getState, getDocument],
    (flow, state, document) => ({ flow, state, ...document })
)

const UFS_STANDARD_MESSAGE_TYPES = [
    'error',
    'info',
    'warning'
]
export const getStandardMessages = createDeepEqualSelector(
    [getMessages],
    (messages) => messages?.filter((message) =>
        UFS_STANDARD_MESSAGE_TYPES.includes(message.type)
            && !CONFIRMATION_EXCLUDES.includes(message.code)
    )
)

export const getStepTitle = createDeepEqualSelector(
    [getScreens, getHeaderWidgets, getBodyWidgets],
    (screens, headerWidgets, bodyWidgets) => {
        const coreNavBar = headerWidgets?.find((widget) => widget.type === 'CoreNavBar')

        return coreNavBar?.title
            || screens?.[0]?.title
            || bodyWidgets?.[0]?.title
            || i18next.t('lib.workflow:accessibility.next.step.default.title')
    }
)
