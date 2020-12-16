import {
    reducerWorkflow,
    selectors as workflowSelectors,
    actionsWorkflow as allActionsWorkflow
} from './adapter'
import { SLICE_NAME, WF_EVENTS } from './constants'
import * as _actionTypes from './adapter/action-types'
import { protocols } from './builder/strategy-protocols'

const {
    getPid,
    getName,
    getFlow,
    getUrl,
    getState,
    getError,
    getHistory,
    getMessages,
    getStateFinished,
    hasMessages,
    getStandardMessages,
    getReferences,
    getReferenceByReferenceId,
    getReferencesByList,
    getProgress,
    getDocument,
    getDocumentId,
    getTemplateId,
    getSrcDocumentId,
    getSrcTemplateId,
    getInitialFieldsValuesFromResponse,
    getStatusLevel,
    getModifiedScreens: getScreens,
    getStages
} = workflowSelectors

const {
    event,
    rollbackHistory,
    rollback,
    exit,
    abort,
    update,
    updateReference,
    updateReferences,
    replaceReference,
    defaultEventHandlers,
    clearStore
} = allActionsWorkflow

/**
 * @protected
 */
export { _actionTypes }

export {
    /**
     * Основной компонент рендера формы
     */
    Workflow,
    /**
     * Множество компонентов форматов Fieldset
     */
    formats,
    /**
     * Множество компонентов типов Fieldset
     */
    types
} from './builder'

/**
 * Redux reducer формы
 */
export const getReducerWorkflow = () => ({ [SLICE_NAME]: reducerWorkflow })
export {
    /**
     * Базовая обертка для виджетов
     */
    DefaultWidgetWrapper,
    /**
     * HOC-аналог для DefaultWidgetWrapper
     */
    defaultWidgetWrapper,
    /**
     * Обертка для статусных экранов с изображением
     */
    BackgroundStatus,
    /**
     * @deprecated
     */
    fieldsMapperHOC,
    /**
     * @deprecated
     */
    fieldsMapper
} from './builder/helpers'
export {
    /**
     * Обертка для возможности реализовывать multi-виджеты
     */
    MultiWidget
} from './builder/helpers/multi-widget'

export const selectors = {
    /**
     * process id
     */
    getPid,
    /**
     * workflow name
     */
    getName,
    /**
     * flow id
     */
    getFlow,
    /**
     * workflow gateway url
     */
    getUrl,
    /**
     * state of state machine
     */
    getState,
    /**
     * workflow error
     */
    getError,
    /**
     * all workflow messages
     */
    getMessages,
    /**
     * error|info|warning messages
     */
    getStandardMessages,
    /**
     * workflow state machine history
     */
    getHistory,
    /**
     * Совокупность скринов данного шага
     */
    getScreens,
    /**
     * Окончен ли процесс
     */
    getStateFinished,
    /**
     * is any workflow messages
     */
    hasMessages,
    /**
     * Все справочники
     */
    getReferences,
    /**
     * Справочника по id
     * принимает вторым аргументом id справочника
     */
    getReferenceByReferenceId,
    /**
     * Список справочников по массиву полей
     * принимает вторым аргументом массив полей
     */
    getReferencesByList,
    /**
     * Прогресс workflow. Для рендера степпера
     */
    getProgress,
    /**
     * Совокупность данных документа
     */
    getDocument,
    /**
     * ID документа
     */
    getDocumentId,
    /**
     * ID шаблона
     */
    getTemplateId,
    /**
     * ID источника документа
     */
    getSrcDocumentId,
    /**
     * ID источника шаблона
     */
    getSrcTemplateId,
    /**
     * Первоначальные данные, которые вернул шлюз
     */
    getInitialFieldsValuesFromResponse,
    /**
     * Получение статуса процесса (done, waiting, draft, error)
     */
    getStatusLevel,
    /**
     * Прогресс workflow. Для рендера степпера с текстовками из виджета WebStages
     */
    getStages
}

export const actionsWorkflow = {
    /**
     * custom event
     */
    event,
    /**
     * Возврат без проверок
     */
    rollbackHistory,
    /**
     * Возврат с проверками
     */
    rollback,
    /**
     * Выход из процесса
     */
    exit,
    /**
     * Отмена процесса
     */
    abort,
    /**
     * Подмена данных по процессу, не рекомендуется к использованию!
     */
    update,
    /**
     * Дополнение справочника
     */
    updateReference,
    /**
     * Дополнение справочников
     */
    updateReferences,
    /**
     * Замена справочника
     */
    replaceReference,
    /**
     * { event, rollback, exit, abort }
     */
    defaultEventHandlers,
    /*
     * сброс состояния wf && redux-form
     */
    clearStore,
}

export { protocols }
