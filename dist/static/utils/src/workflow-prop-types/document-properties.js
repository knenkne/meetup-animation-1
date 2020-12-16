import PropTypes from 'prop-types'

export const DocumentProperties = PropTypes.shape({
    documentId: PropTypes.string,
    flow: PropTypes.string,
    srcDocumentId: PropTypes.string,
    state: PropTypes.string,
    templateId: PropTypes.string
})
