import React from 'react'
import PropTypes from 'prop-types'

import WidgetList from '../widget-list'
import { Fader } from '../../fader'
import { STRUCTURE_POSITION } from '../const'

import style from './styles.css'

const Header = ({ widgets, isLoading }) => (
    <section className={style.header}>
        <WidgetList list={widgets} structurePosition={STRUCTURE_POSITION.header} />
        {isLoading && <Fader mode="transparent" />}
    </section>
)

Header.propTypes = {
    widgets: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool
}

Header.defaultProps = {
    widgets: [],
    isLoading: false
}

export default Header
