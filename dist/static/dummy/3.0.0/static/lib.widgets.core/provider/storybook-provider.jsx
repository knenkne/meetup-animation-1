import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators, compose } from 'redux'
import { Provider as ReduxProvider, connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import _ from 'lodash'
import { init, update } from '@sbol/lib.workflow/src/adapter/actions'
import { selectors } from '@sbol/lib.workflow'
import Widget from '@sbol/lib.workflow/src/builder/components/structure/widget'

import { widgets } from '../src/widgets'

export class StorybookProvider extends React.Component {
    componentWillMount () {
        const { name, initWF, updateWF, output } = this.props
        const data = { body: { output, state: 'step1' } }
        initWF({
            name,
            url: '/testurl',
            customProductWidgetsTypes: [],
            pid: 'f23c5600-1c97-11e8-a172-5d91d97f466b',
        }, {
            transition: _.noop
        })
        updateWF(data)
    }
    render () {
        return (
            <ReduxProvider store={this.props.store}>
                <form style={{ maxWidth: '604px' }}>
                    {this.props.screens[0] &&
                        _.map(this.props.screens[0].widgets, (w, index) => (
                            <Widget
                                key={`${w.title || index}_${w.description || index}`}
                                component={widgets[w.type]}
                                structurePosition="body"
                                {...w}
                            />
                        ))
                    }
                </form>
            </ReduxProvider>
        )
    }
}

const makeMapStateToProps = () => (state, ownProps) => ({
    initialValues: selectors.getInitialFieldsValuesFromResponse(state),
    screens: selectors.getScreens(state),
    form: ownProps.name,
})
const makeMapDispatchToProps = () => (dispatch) => bindActionCreators({
    initWF: init,
    updateWF: update
}, dispatch)

const enhance = compose(
    connect(makeMapStateToProps, makeMapDispatchToProps),
    reduxForm({ enableReinitialize: true, keepDirtyOnReinitialize: true, onSubmit: _.noop })
)

StorybookProvider.propTypes = {
    name: PropTypes.string,
    output: PropTypes.object,
    initWF: PropTypes.func,
    updateWF: PropTypes.func,
    store: PropTypes.object,
    screens: PropTypes.array
}
StorybookProvider.defaultProps = {
    name: void 0,
    output: {},
    initWF: _.noop,
    updateWF: _.noop,
    store: void 0,
    screens: []
}

export const RendererWithReduxForm = enhance(StorybookProvider)
