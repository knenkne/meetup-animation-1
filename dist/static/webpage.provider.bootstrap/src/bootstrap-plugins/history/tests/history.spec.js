import { Bootstrap } from '../../../bootstrap'
import { setCommonConfig } from '../../../configuration/config'

import { historyPlugin } from '..'

describe('Plugin history', () => {
    it('Common work', () => {
        // Устанавливаем basename для history
        setCommonConfig({ 'base.client.url': '/foo/bar' })

        const bootstrap = new Bootstrap({})

        historyPlugin(bootstrap)

        expect(bootstrap.history.createHref({ pathname: '/baz' })).toBe(
            '/foo/bar/baz'
        )
    })
})
