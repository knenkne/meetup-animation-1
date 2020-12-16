import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getDisplayName from 'react-display-name'

import * as actionsWorkflow from '../../adapter/actions'

export const withDefaultHandlers = (WrappedComponent) => {
    const mapDispatchToProps = (dispatch) => ({
        eventsActions: bindActionCreators(
            actionsWorkflow.defaultEventHandlers,
            dispatch
        )
    })

    const WrappedWithStoreSubscription = connect(null, mapDispatchToProps)(WrappedComponent)
    WrappedWithStoreSubscription.displayName = `${getDisplayName(WrappedComponent)}WithDefaultHandlers`

    return WrappedWithStoreSubscription
}
