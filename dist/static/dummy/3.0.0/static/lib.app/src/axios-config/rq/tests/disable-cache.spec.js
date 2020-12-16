import moxios from 'moxios'
import axios from 'axios'

import disableCache from '../disable-cache'

const stubDate = String(+new Date())
document.cookie = `SESSION_TIMESTAMP=${stubDate}`

const cleanAxios = axios.create()
cleanAxios.interceptors.request.use(disableCache)

describe('Axios request disable cache interceptor', () => {
    beforeEach(() => {
        moxios.install(cleanAxios)
    })

    afterEach(() => {
        moxios.uninstall(cleanAxios)
    })

    it('adds parameter on API GET request', (done) => {
        cleanAxios('/')
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            expect(request.config.params._c).toBe(stubDate)
            done()
        })
    })

    xit('does not add parameter on API POST request', () => {})
})
