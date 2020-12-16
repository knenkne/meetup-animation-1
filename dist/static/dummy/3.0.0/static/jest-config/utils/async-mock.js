import { act } from 'react-dom/test-utils'
import _ from 'lodash'

export const multipleRequest = async (mock, responses) => {
    await act(async () => {
        await mock.onAny().reply((config) => {
            const [method, url, params, ...response] = responses.shift()
            if (config?.url?.includes(url) && config?.method?.toUpperCase() === method) {
                if (!config?.params || _.isEqual(config?.params, params)) {
                    return response
                }
            }
            return [500, {}]
        })
    })
}
