import qs from 'qs'

/*
    Сохраняем/обновляем в URL параметры процесса, пришедшие в ответе от бэка:
    pid, documentId, templateId, srcDocumentId и srcTemplateId
 */
export const syncLocationWithWorkflow = (persistingParams = {}) => {
    const [hash, hashQuery] = window.location.hash.split('?')
    const [, searchQuery] = window.location.search.split('?')
    // если есть location.hash, то пустой location.search и наоборот
    const hashParameters = qs.stringify(
        {
            ...qs.parse(hashQuery || searchQuery),
            ...persistingParams
        },
        {
            addQueryPrefix: true,
            skipNulls: true
        }
    )

    if (hashParameters) {
        window.history.replaceState(void 0, void 0, `${hash}${hashParameters}`)
    }
}
