import React from 'react'
import PropTypes from 'prop-types'

import WidgetList from '../widget-list'
import { Fader } from '../../fader'
import { STRUCTURE_POSITION } from '../const'

import style from './styles.css'

const Footer = ({ widgets, isLoading }) => (
    <section className={style.footer}>
        <WidgetList list={widgets} structurePosition={STRUCTURE_POSITION.footer} />
        {isLoading && <Fader mode="transparent" />}
    </section>
)

Footer.propTypes = {
    widgets: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool
}

Footer.defaultProps = {
    widgets: [],
    isLoading: false
}

export default Footer
