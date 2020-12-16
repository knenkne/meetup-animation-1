export const canBeRequestedByScrolling = (event, allLoaded, loading) => {
    if (!allLoaded && !loading && event.target) {
        return event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight
    }

    return false
}

export const canBeRequestedByTyping = (query, masked, suggestMode, value) =>
    !masked && !!query && !(suggestMode === 'only' && value)
    && (suggestMode === 'on' || suggestMode === 'only')
