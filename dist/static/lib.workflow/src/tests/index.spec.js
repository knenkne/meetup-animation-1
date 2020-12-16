import * as exports from '..'

import { exportCheck } from './export-check'

describe('Открытое API библиотеки. Экспортируются:', () => {

    const mandatorySelectorsList = [
        'getPid',
        'getName',
        'getFlow',
        'getUrl',
        'getState',
        'getError',
        'getHistory',
        'getScreens',
        'getMessages',
        'getStandardMessages',
        'getStatusLevel',

        'getStateFinished',

        'hasMessages',

        'getReferences',
        'getReferenceByReferenceId',
        'getReferencesByList',

        'getProgress',
        'getStages',

        'getDocument',
        'getDocumentId',
        'getTemplateId',
        'getSrcDocumentId',
        'getSrcTemplateId',

        'getInitialFieldsValuesFromResponse',
    ]

    it('селекторы из списка', () => {
        exportCheck(exports.selectors, mandatorySelectorsList)
    })
    it('фабрика слайса Workflow с редьюсером', () => {
        expect(exports.getReducerWorkflow).toBeDefined()
    })
    it('контейнер Workflow', () => {
        expect(exports.Workflow).toBeDefined()
    })
    it('экшены', () => {
        expect(exports.actionsWorkflow).toBeDefined()
    })
    it('action - криэйторы', () => {
        expect(exports.actionsWorkflow).toBeDefined()
    })
    it('action types как _actionTypes', () => {
        expect(exports['_actionTypes']).toBeDefined() // eslint-disable-line dot-notation, comment: Доступ к свойству для теста
    })
    it('форматированные поля', () => {
        expect(exports.formats).toBeDefined()
    })
    it('defaultWidgetWrapper', () => {
        expect(exports.defaultWidgetWrapper).toBeDefined()
    })
    it('fieldsMapperHOC и fieldsMapper', () => {
        expect(exports.fieldsMapperHOC).toBeDefined()
        expect(exports.fieldsMapper).toBeDefined()
    })
})
