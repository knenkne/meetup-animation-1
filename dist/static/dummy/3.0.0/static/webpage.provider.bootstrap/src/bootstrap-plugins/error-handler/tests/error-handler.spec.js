import { Bootstrap } from '../../../bootstrap'
import { setCommonConfig } from '../../../configuration/config'

import { errorHandlerPlugin } from '..'

describe('Plugin error-handler', () => {
    it('Common work', () => {
        // Устанавливаем basename для history
        setCommonConfig({ 'base.client.url': '/foo/bar' })

        const bootstrap = new Bootstrap({
            regions: {},
            apps: {
                '/': {
                    name: 'foo',
                    version: '1.0.0'
                }
            }
        })

        // Эмуляция поведения Bootstrap, устанавливает текущий модуль
        bootstrap.apps.setCurrentApp('foo')

        errorHandlerPlugin(bootstrap)
            .error({
                extraArguments: {
                    name: 'foo',
                    version: '1.0.0',
                    region: document.body
                }
            })
            .catch(() => {
                // Плагин всегда возвращает reject
                // Плагин проставил текущий модуль ERROR-PAGE
                expect(bootstrap.apps.getCurrentApp().name).toBe('ERROR-PAGE')
                // Проверка, что в DOM вставился элемент с ошибкой
                expect(document.body.querySelector('.not-found')).toBeDefined()
            })
    })
})
