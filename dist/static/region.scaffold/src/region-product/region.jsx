import React from 'react'
import { Provider } from 'react-redux'
import { PropTypes } from 'prop-types'

import PersonalMenu from './personal-menu'

const Region = ({ store }) => (
    <Provider store={store}>
        <PersonalMenu />
    </Provider>
)

Region.propTypes = {
    store: PropTypes.object.isRequired
}

export default Region
