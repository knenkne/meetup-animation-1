import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { log } from '@sbol/lib.app'
import _ from 'lodash'

import { selectors } from '../../../adapter'
import { withDefaultHandlers } from '../../helpers'
import { defaultWidgets } from '../../widgets'

import { StructurePositionProps } from './const'
import { StrategyWidget } from './strategy-widget'
import { WidgetToComponent } from './widget-to-component'

/**
 * @param {ReactComponent} Component - Компонент виджета.
 * @param {Object} properties - Настройки виджета.
 * @param {Array} fields - Список связанных полей, с учётом порядка.
 * @param {Object} references - Связанные справочники (статические и динамические).
 * @constructor
 *
 * @desc Порождает компонент в зависимости от типа.
 * @tutorial https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-WidgetType
 */
export class Widget extends React.Component {
    constructor (props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError () {
        return { hasError: true }
    }

    componentDidCatch = log.error

    render () {
        const {
            strategies,
            component
        } = this.props

        const { hasError } = this.state

        const Component = hasError ? defaultWidgets.CoreFieldset : component

        return (
            <>
                {strategies ?
                    <StrategyWidget {...this.props} component={Component} /> :
                    <WidgetToComponent {...this.props} component={Component} /> }
            </>
        )
    }
}


Widget.propTypes = {
    component: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    properties: PropTypes.object,
    fields: PropTypes.arrayOf(PropTypes.object),
    readonly: PropTypes.bool,
    references: PropTypes.object,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            cmd: PropTypes.string,
            name: PropTypes.string,
            type: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            uri: PropTypes.string
        })
    ),
    history: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            flow: PropTypes.string.isRequired,
            flowId: PropTypes.number,
            state: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            value: PropTypes.string,
            status: PropTypes.oneOf(['ACTIVE', 'DISABLED', 'HIDDEN']).isRequired
        })
    ),
    eventsActions: PropTypes.object,
    screenIndex: PropTypes.number.isRequired,
    widgetIndex: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    fieldStyles: PropTypes.object,
    structurePosition: StructurePositionProps,
    strategies: PropTypes.arrayOf(PropTypes.object),
    customStrategies: PropTypes.objectOf(PropTypes.func)
}

Widget.defaultProps = {
    component: defaultWidgets.CoreFieldset,
    title: '',
    description: '',
    properties: {},
    fields: [],
    readonly: false,
    references: {},
    events: [],
    eventsActions: {},
    history: [],
    fieldStyles: {},
    structurePosition: '',
    strategies: void 0,
    customStrategies: void 0,
    screenIndex: void 0,
    widgetIndex: void 0
}

const mapStateToProps = (state, { fields }) => ({
    references: selectors.getReferencesByList(state, fields),
    history: selectors.getActiveProcessSteps(state)
})

const makeMapStateToProps = () => mapStateToProps

export default compose(
    connect(makeMapStateToProps),
    withDefaultHandlers
)(Widget)
