export default {
    getOptions: (path) => {
        if (path[0] === 'config') {
            if (path[1] === 'isErib') {
                return false
            }
            if (path[1] === 'erib.url') {
                return '/ERIB/'
            }

            return ''
        }
        return ''
    }
}

const getBroker = () => ({
    on: () => {}
})

const getPrefetch = () => {}

export {
    getPrefetch,
    getBroker
}
