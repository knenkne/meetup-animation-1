import PropTypes from 'prop-types'

export const ReferenceItem = PropTypes.shape({
    properties: PropTypes.object,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
})

export const Reference = PropTypes.shape({
    items: PropTypes.arrayOf(ReferenceItem),
    properties: PropTypes.object
})

export const References = PropTypes.objectOf(Reference)
