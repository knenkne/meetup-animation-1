import { syncLocationWithWorkflow } from '../location'

describe('Adapter :: actions :: utils :: location', () => {
    describe('Обновляет хэш URL на основе параметров ответа', () => {
        it('Не трогает URL, если в ответе от бэка нет персистируемых параметров', () => {
            const response = {}
            window.location.hash = ''

            syncLocationWithWorkflow(response)
            expect(window.location.hash).toBe('')
        })

        it('Добавляет параметр в хэш URL, если в ответе от бэка он есть', () => {
            const persistingParams = {
                pid: '12345-test-uuid'
            }
            window.location.hash = '#?lel=kek'

            syncLocationWithWorkflow(persistingParams)
            expect(window.location.hash).toBe('#?lel=kek&pid=12345-test-uuid')
        })

        it('Добавляет в хэш URL все персистируемые с бэка параметры, если в ответе от бэка они есть, игнорируя другие', () => {
            const persistingParams = {
                pid: '12345-test-uuid',
                documentId: 'did',
                templateId: 'tid',
                srcDocumentId: 'sdid',
                srcTemplateId: 'stid'
            }
            window.location.hash = '#?lel=kek'

            syncLocationWithWorkflow(persistingParams)
            expect(window.location.hash).toBe('#?lel=kek&pid=12345-test-uuid&documentId=did&templateId=tid&srcDocumentId=sdid&srcTemplateId=stid')
        })

        it('Не портит window.history лишними записями', () => {
            const originalHistoryLength = window.history.length
            const persistingParams = {
                pid: '12345-test-uuid'
            }
            syncLocationWithWorkflow(persistingParams)
            expect(window.history.length).toBe(originalHistoryLength)
        })

        it('Не вызывает лишних событий window.history', () => {
            window.location.hash = ''
            const popSpy = jasmine.createSpy('popstate fired')
            const popListener = window.addEventListener('popstate', popSpy)

            const persistingParams = {
                pid: '12345-test-uuid'
            }
            syncLocationWithWorkflow(persistingParams)
            expect(popSpy).not.toHaveBeenCalled()

            window.removeEventListener('popstate', popListener)
        })
    })
})
