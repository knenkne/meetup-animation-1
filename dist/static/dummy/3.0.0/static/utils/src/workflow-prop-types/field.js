import PropTypes from 'prop-types'

export const Field = PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    masked: PropTypes.bool,
    readonly: PropTypes.bool,
    referenceId: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    validators: PropTypes.arrayOf(PropTypes.func),
    value: PropTypes.string
})

export const Fields = PropTypes.arrayOf(Field)
export const MappedFields = PropTypes.objectOf(Field)
