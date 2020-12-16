import PropTypes from 'prop-types'

import { Field } from './field'

export const Widget = PropTypes.shape({
    description: PropTypes.string,
    fields: PropTypes.arrayOf(Field),
    properties: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string
})

export const Widgets = PropTypes.arrayOf(Widget)
