import PropTypes from 'prop-types'

import { Widgets } from './widget'

export const Screen = PropTypes.shape({
    properties: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    widgets: Widgets
})
