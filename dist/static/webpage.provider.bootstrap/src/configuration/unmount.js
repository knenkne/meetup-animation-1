import log from '../bootstrap-logger'

let appUnmount

export const setUnmount = (nextUnmount) => {
    appUnmount = nextUnmount
}

export const unmount = () => {
    if (appUnmount) {
        try {
            appUnmount()
            setUnmount()
        } catch (error) {
            log.error('unmount', error)
        }
    }
}
