import { Bootstrap } from '../../../bootstrap'
import {
    setCommonConfig
} from '../../../configuration/config'

import { loaderLegacyPlugin } from '..'

describe('Plugin loader-legacy', () => {
    it('Common work', (done) => {
        const bootstrap = new Bootstrap({
            regions: {},
            apps: {
                '/': {
                    name: 'foo',
                    version: '1.0.0'
                }
            }
        })
        setCommonConfig({ 'res.url': '/foo' })
        document.body.innerHTML = "<div id='main'></div>"

        loaderLegacyPlugin({
            navigation: {
                LOANS: '/loans'
            }
        })(bootstrap)
            .loader({
                extraArguments: {
                    // Плагин срабатывает, если приходит версия вендора
                    vendorVersion: '2.4',

                    name: 'foo',
                    version: '1.0.0',
                    options: {
                        config: {
                            'res.url': '/foo'
                        },
                        navigation: {
                            LOANS: '/loans'
                        }
                    }
                }
            })
            .catch(() => {
                // Если грузится легаси модуль, то плагин останавливает работу bootstrap

                const vendorScript = document.body.querySelectorAll('script')[0]
                // Проверяем загрузку вендора
                expect(vendorScript.src).toBe(
                    'http://localhost/foo/lib.vendor/2.4/index.js'
                )
                // Эмулируем успешную загрузку вендора
                vendorScript.onload()

                // Перезаписываем config
                expect(window.config).toEqual({
                    'res.url': '/foo',
                    resUrl: '/foo/foo/1.0.0',
                    resourcesRootUrl: '/foo',
                    permissions: '[]',
                    eribMainUrl: void 0,
                    eribNode: void 0
                })

                // Перезаписываем config
                expect(window.navigation).toEqual({
                    LOANS: '/loans'
                })

                // setTimeout(() => {
                //     // Провряем загрузку самго приклада
                //     expect(
                //         document.body.querySelectorAll('script')[1].src
                //     ).toBe('http://localhost/foo/foo/1.0.0/index.js')

                // }, 0)
                done()
            })

        bootstrap.start()
    })
    afterAll(() => (document.body.innerHTML = ''))
})
