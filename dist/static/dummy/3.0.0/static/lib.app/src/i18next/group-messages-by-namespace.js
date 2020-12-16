export const groupMessagesByNamespace = (mainNamespace, allMessages) =>
    Object.entries(allMessages).reduce((acc, [key, value]) => {
        const [namespace, rawKey] = key.split(':')

        if (rawKey) {
            acc[namespace] = acc[namespace] || {}
            acc[namespace][rawKey] = value
        } else {
            acc[mainNamespace] = acc[mainNamespace] || {}
            acc[mainNamespace][key] = value
        }

        return acc
    }, {})
