import React from 'react'
import PropTypes from 'prop-types'
import { Icon as UiIcon } from '@sbol/lib.ui'

import style from './icon.css'


const theme = {
    icon: style.product
}

export const Icon = ({ name }) => (
    <div className={style.icon}>
        <UiIcon name={name || 'icon:region.header:operation/sbol'} theme={theme} />
    </div>
)


Icon.propTypes = {
    name: PropTypes.string
}

Icon.defaultProps = {
    name: void 0
}
