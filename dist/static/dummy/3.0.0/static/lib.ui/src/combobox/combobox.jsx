import React from 'react'
import PropTypes from 'prop-types'

import theme from './combobox.css'
import { ComboboxView } from './combobox-view'
import { ComboboxWithRequest } from './combobox-with-request'

export const Combobox = (props) => {
    if (props.onDataRequest) {
        return <ComboboxWithRequest {...props} />
    }

    return <ComboboxView {...props} />
}

Combobox.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({})),
    onDataRequest: PropTypes.func,
}

Combobox.defaultProps = {
    options: void 0,
    onDataRequest: void 0,
}

Combobox.theme = theme

Combobox.displayName = 'Combobox'

Combobox.View = ComboboxView
Combobox.WithRequest = ComboboxWithRequest

export default Combobox
