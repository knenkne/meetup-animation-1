import moxios from 'moxios'
import { getOptions } from '@sbol/webpage.provider.bootstrap'

import checkSession, { cleanAxios } from '../check-session'

jest.mock('@sbol/webpage.provider.bootstrap')

describe('Axios request check session interceptor', () => {
    beforeEach(() => {
        getOptions.mockImplementation(() => '/sbtsbol')
        moxios.install(cleanAxios)
    })

    afterEach(() => {
        getOptions.mockClear()
        moxios.uninstall(cleanAxios)
    })

    it('calls method on interceptor call', (done) => {
        window.bootstrap.getOptions = () => '/sbtsbol'

        checkSession()
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request
                .respondWith({
                    status: 200
                })
                .then(() => {
                    expect(request.url).toBe('/sbtsbol/api/warmUpSession')
                    expect(request.config.method).toBe('post')
                    expect(moxios.requests.count()).toBe(1)
                    done()
                })
        })
    })
})
