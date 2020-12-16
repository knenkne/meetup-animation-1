import _ from 'lodash'

class CustomError extends Error {
    constructor ({ status, hasUFSError, error }) {
        super()
        this.status = status
        this.hasUFSError = hasUFSError
        this.error = error
    }
}

export const hasUFSError = (response) => _.get(response, 'success') === false && _.has(response, 'error')

export const platformErrorCheck = {
    handleSuccess: (response) => {
        const responseData = _.get(response, 'data', {})

        if (hasUFSError(responseData)) {
            return Promise.reject(
                new CustomError({
                    status: _.get(response, 'status'),
                    hasUFSError: true,
                    error: _.get(responseData, 'error')
                }))
        }

        return Promise.resolve(response)
    }
}
