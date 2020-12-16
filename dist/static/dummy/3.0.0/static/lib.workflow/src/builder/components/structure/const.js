import PropTypes from 'prop-types'

// deprecated, использовать SCREEN_PARTS body -> body неудобный нейминг
// выпилить нельзя использовано в lib.widgets.web и прикладных проектах
// TODO.ver.4.0.0 выпилить
export const STRUCTURE_POSITION = {
    header: 'header',
    body: 'body',
    footer: 'footer',
}

export const SCREEN_PARTS = {
    header: 'header',
    widgets: 'widgets',
    footer: 'footer'
}

export const StructurePositionProps = PropTypes.oneOf(['header', 'body', 'footer'])
