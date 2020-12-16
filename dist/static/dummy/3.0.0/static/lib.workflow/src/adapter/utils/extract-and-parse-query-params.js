import qs from 'qs'

export const extractAndParseQueryParams = () => {
    const { hash, search } = window.location
    // без #хэша берем window.location.search
    if (search) {
        return qs.parse(search, { ignoreQueryPrefix: true })
    }

    // пока что дефолт это hashRouter
    const queryParamsPart = hash.split('?')[1] || ''
    return qs.parse(queryParamsPart)
}
