import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import i18next from 'i18next'
import { log, getHistory } from '@sbol/lib.app'

import { actionsWorkflow, selectors } from '../adapter'
import { isRegion } from '../adapter/actions/utils/regions'
import { SUB_FLOW_IN_REGION_STATUSES } from '../constants'
import { setShouldRestart } from '../adapter/actions'

import Renderer from './renderer'
import { FatalError as DefaultFatalError } from './components'
import { WfContext } from './workflow-context'
import { withParsedQueryParams } from './helpers'
import { ConnectedSubFlowInRegion } from './sub-flow-in-region'

const mapStateToProps = (state) => {
    const processInRegion = selectors.isProcessInRegion(state)
    const subFlowInRegionStatus = selectors.getSubFlowInRegionStatus(state)
    return {
        stateName: selectors.getState(state),
        isInitialLoading: selectors.isInitialLoading(state),
        hasFatalError: selectors.hasFatalError(state),
        isFinished: selectors.getStateFinished(state),
        externalReturn: subFlowInRegionStatus === SUB_FLOW_IN_REGION_STATUSES.externalReturn,
        returnDataForParent: selectors.getOnReturnDataForParent(state),
        showMainFlow: selectors.showMainFlow(state),
        shouldRestart: selectors.getStateShouldRestart(state),
        processInRegion,
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionsWorkflow, dispatch)
})

const handleBackClick = (e) => {
    e.preventDefault()
    getHistory().goBack()
}
const handleReloadPage = () => window.location.reload()

@connect(mapStateToProps, mapDispatchToProps)
@withParsedQueryParams
class Workflow extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isInitialLoading: PropTypes.bool,
        hasFatalError: PropTypes.bool,
        isFinished: PropTypes.bool,
        actions: PropTypes.object,
        widgets: PropTypes.object,
        fieldStyles: PropTypes.object,
        onFinish: PropTypes.func,
        location: PropTypes.shape({
            query: PropTypes.shape({
                documentId: PropTypes.string,
                pid: PropTypes.string
            })
        }),
        startWithParameters: PropTypes.func,
        startEvent: PropTypes.string,
        stateName: PropTypes.string,
        appLoaderControl: PropTypes.shape({
            stop: PropTypes.func.isRequired,
            start: PropTypes.func.isRequired
        }),
        __components: PropTypes.shape({
            Header: PropTypes.func,
            Body: PropTypes.func,
            Footer: PropTypes.func,
            Loader: PropTypes.func,
            FatalError: PropTypes.func,
            EventError: PropTypes.func
        }),

        analytics: PropTypes.shape({
            stopAutoTrackTransitions: PropTypes.func,
            startAutoTrackTransitions: PropTypes.func,
            transition: PropTypes.func,
            event: PropTypes.func
        }),
        axiosInterceptors: PropTypes.shape({
            rq: PropTypes.arrayOf(PropTypes.func),
            rs: PropTypes.arrayOf(
                PropTypes.shape({
                    handleSuccess: PropTypes.func,
                    handleError: PropTypes.func
                })
            )
        }),
        withCatch: PropTypes.bool,
        ignoreDocumentIdUrl: PropTypes.bool,
        getStepTitle: PropTypes.func,
        onLoadSubFlow: PropTypes.func,
        onFinishSubFlowInRegion: PropTypes.func,
        processInRegion: PropTypes.bool,
        externalReturn: PropTypes.bool,
        showMainFlow: PropTypes.bool,
        mainProcessId: PropTypes.string,
        returnDataForParent: PropTypes.shape({
            url: PropTypes.string,
            pid: PropTypes.string
        }),
        customStrategies: PropTypes.objectOf(PropTypes.func),
        shouldRestart: PropTypes.bool
    }

    static defaultProps = {
        isInitialLoading: true,
        hasFatalError: false,
        isFinished: false,
        actions: {},
        widgets: {},
        fieldStyles: {},
        onFinish: _.noop,
        location: {},
        startWithParameters: _.noop,
        startEvent: '',
        stateName: void 0,
        appLoaderControl: {
            stop: _.noop,
            start: _.noop
        },
        __components: {},
        analytics: {
            stopAutoTrackTransitions: _.noop,
            startAutoTrackTransitions: _.noop,
            transition: _.noop,
            event: _.noop
        },
        axiosInterceptors: {
            rq: [],
            rs: []
        },
        withCatch: false,
        ignoreDocumentIdUrl: false,
        getStepTitle: void '',
        onLoadSubFlow: _.noop,
        onFinishSubFlowInRegion: _.noop,
        processInRegion: false,
        externalReturn: false,
        showMainFlow: true,
        mainProcessId: void 0,
        returnDataForParent: {
            url: '',
            pid: ''
        },
        customStrategies: void 0,
        shouldRestart: false
    }

    state = {
        renderError: false
    }

    componentDidMount () {
        const {
            name,
            url,
            actions,
            mainProcessId,
            startEvent,
            analytics: { transition },
            axiosInterceptors: { rq: rqInterceptors, rs: rsInterceptors }
        } = this.props

        const processInRegion = isRegion(url, mainProcessId)

        actions.init(
            {
                name,
                url,
                mainProcessId
            },
            {
                transition,
                rqInterceptors,
                rsInterceptors
            }
        )

        if (processInRegion) {
            this.nextEvent()
        } else {
            this.startProcess(startEvent)
                .catch((error) =>
                    actions.failed({ title: _.get(error, 'message') })
                )
        }
    }

    componentDidUpdate (prevProps) {
        const {
            processInRegion,
            externalReturn,
            onFinishSubFlowInRegion,
            returnDataForParent,
            isInitialLoading,
            onLoadSubFlow,
            actions,
            shouldRestart
        } = this.props

        if (processInRegion) {
            if (externalReturn) {
                onFinishSubFlowInRegion(returnDataForParent)
            }
            if (prevProps.isInitialLoading && !isInitialLoading) {
                onLoadSubFlow()
            }
        }

        if (shouldRestart) {
            actions.setShouldRestart(false)
            this.restart()
        }
    }

    componentDidCatch (error) {
        log.error(error)
        if (this.props.withCatch) {
            this.props.actions.failed({
                title: i18next.t('lib.workflow:unexpected.error.happened'),
                text: ''
            })

            this.setState({
                renderError: true
            })
        }
    }

    componentWillUnmount () {
        if (!this.props.processInRegion) {
            this.historyUnlisten()
            this.props.analytics.startAutoTrackTransitions()
            this.props.actions.clearStore(this.props.name)
        }
    }

    handleFinish = _.once(this.props.onFinish)

    restart = _.once(() => {
        this.startProcess()
            .catch((error) =>
                this.props.actions.failed({ title: _.get(error, 'message') })
            )
    })

    wfContext = {
        widgets: this.props.widgets,
        fieldStyles: this.props.fieldStyles,
        onEvent: this.props.analytics.event,
        customStrategies: this.props.customStrategies
    }

    startProcess = (startEvent) => {
        const {
            actions,
            name,
            startWithParameters,
            appLoaderControl: {
                start, stop
            },
            location: { query },
            ignoreDocumentIdUrl
        } = this.props

        this.historyUnlisten = this.props.actions.historyListen()
        this.props.analytics.stopAutoTrackTransitions()

        if (startEvent) {
            const { documentId, pid } = query
            return actions.event(startEvent, startWithParameters(query), false, { documentId, pid })
        }

        return actions.start(name, query, startWithParameters(query), {
            onStart: start,
            onSuccess: stop,
            onFail: stop
        }, { ignoreDocumentIdUrl })
    }

    nextEvent = () => {
        const {
            actions,
            location: { query },
            url
        } = this.props

        return actions.onEnterEvent(url, query?.pid || '')
    }

    render () {
        const {
            name,
            isInitialLoading,
            getStepTitle,
            hasFatalError,
            isFinished,
            stateName,
            processInRegion,
            showMainFlow,
            __components
        } = this.props

        if (isFinished) {
            this.handleFinish()
        }

        if (this.state.renderError || hasFatalError) {
            const { FatalError = DefaultFatalError } = __components

            return (
                <FatalError
                    onBackClick={handleBackClick}
                    onRetryClick={handleReloadPage}
                />
            )
        }

        if (isInitialLoading) {
            const { Loader } = __components

            return Loader ? <Loader /> : null
        }

        return (
            <React.Fragment>
                {showMainFlow && <WfContext.Provider value={this.wfContext}>
                    <Renderer
                        name={name}
                        stateName={stateName}
                        __components={__components}
                        getStepTitle={getStepTitle}
                    />
                </WfContext.Provider>}
                {!processInRegion && <ConnectedSubFlowInRegion />}
            </React.Fragment>
        )
    }
}

export { Workflow }
