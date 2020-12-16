import { log } from '../../log'

export default {
    handleError: (error) => {
        log.error(error)

        return Promise.reject(error)
    }
}
