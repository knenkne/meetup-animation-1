const { DEFAULT_DOCUMENT_ID } = require('../constants')

const DOCUMENT_ID_PROPERTY = 'documentId'

const createDocumentResponse = (documentObject = {}) => ({
    ...documentObject,
    [DOCUMENT_ID_PROPERTY]: documentObject[DOCUMENT_ID_PROPERTY] || DEFAULT_DOCUMENT_ID
})

module.exports = createDocumentResponse
