import MockXMLHttpRequest from 'mock-xmlhttprequest'

import { Bootstrap } from '../../../bootstrap'
import { getInitOptions } from '../../../configuration/init'
import {
    setCommonConfig,
    getCommonConfigValue
} from '../../../configuration/config'
import { initAPIPlugin } from '../'

describe('Plugin init', () => {
    it('Common work', (done) => {
        setCommonConfig({ 'api.url': 'api' })

        const response = {
            messages: {
                test: 'text'
            },
            settings: {
                'service-settings': 'foo.bar.setting'
            },
            features: null,
            options: null,
            apps: {
                '/': {
                    name: 'foo',
                    version: 'r-1'
                }
            }
        }

        const server = MockXMLHttpRequest.newServer({
            post: [
                'api/init',
                {
                    // status: 200 is the default
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(response)
                }
            ]
        }).install()

        const bootstrap = new Bootstrap({
            regions: {},
            apps: {
                '/': {
                    name: 'foo',
                    version: '1.0.0'
                }
            }
        })

        initAPIPlugin(bootstrap)
            .router({
                app: {
                    name: 'foo',
                    version: '1.0.0'
                }
            })
            .then(() => {
                // Общие настройки
                expect(getCommonConfigValue('api.url')).toBe('api')

                // Когда пришли сервисные настройки, то записываем их в общии TODO: и это странно, можно использовать только getInitOptions. TODO: ЕФС URL
                expect(getCommonConfigValue('service-settings')).toBe(
                    'foo.bar.setting'
                )

                // Так как пришла новая версия приклада, то перезаписываем версию модуля на r-1
                expect(bootstrap.apps.get('/')).toEqual({
                    name: 'foo',
                    version: 'r-1'
                })

                // Все настройки можно получить по id приклада
                expect(getInitOptions('foo')).toEqual(response)

                server.remove()
                done()
            })
            .catch((e) => console.log(e))

        bootstrap.start()
    })

    afterAll(() => (document.body.innerHTML = ''))
})
