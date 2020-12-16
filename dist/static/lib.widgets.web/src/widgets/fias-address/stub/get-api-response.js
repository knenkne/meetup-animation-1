import { dictionary } from './dictionary'

const possibleKind = ['REGION', 'CITY', 'STREET', 'HOUSE']

export const getApiResponse = (request) => {
    const requestData = JSON.parse(request.data)

    const {
        addressKind,
        query,
        count
    } = requestData

    let data

    if (_.includes(possibleKind, addressKind) && query) {
        data = {
            "success": true,
            "body": {
                "suggestions": _.slice(dictionary[addressKind.toLowerCase()], 0, count)
            },
        }
    } else {
        data = { "success": false, "errors": [] }
    }

    return { status: 200, data }
}
