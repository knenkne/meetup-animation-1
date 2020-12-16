import _ from 'lodash'

/**
 * Add axios interceptor to extract data using new UFS Platform spec
 */
export default {
    handleSuccess: (response) => {
        response.ufs = {
            success: response.data.success,
            messages: response.data.messages,
            error: response.data.error
        }

        response.data = response.data.body || {}

        if (response.ufs.success === true) {
            return Promise.resolve(response)
        }

        return Promise.reject(response)
    },

    handleError: (response) => {
        if (!_.has(response, 'response.success')) {
            return Promise.reject(response)
        }

        response.ufs = {
            messages: response.response.messages,
            error: response.response.error
        }
        response.response = response.response.body || {}

        return Promise.reject(response)
    }
}
