import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'
import { compose } from 'redux'
import i18next from 'i18next'

import { selectors } from '../adapter'

import { scrollToElement, scrollToError } from './components/utils/scroll-to'
import {
    Body as DefaultBody,
    EventError as DefaultEventError,
    Footer as DefaultFooter,
    Header as DefaultHeader
} from './components'
import { FullscreenBottom } from './components/structure/fullscreen-bottom'

const WITHOUT_OFFSET = 0

export class Renderer extends React.Component {
    static propTypes = {
        stateName: PropTypes.string.isRequired,
        __components: PropTypes.shape({
            Header: PropTypes.func,
            Body: PropTypes.func,
            Footer: PropTypes.func
        }),
        handleSubmit: PropTypes.func,
        hasProcessError: PropTypes.bool,
        formErrors: PropTypes.object.isRequired,
        serverValidationErrors: PropTypes.object.isRequired,
        submitFailed: PropTypes.bool,
        messages: PropTypes.array,
        isLoading: PropTypes.bool,
        hasStatus: PropTypes.bool,
        headerWidgets: PropTypes.array,
        bodyScreens: PropTypes.array,
        footerWidgets: PropTypes.array,
        stepTitle: PropTypes.string,
        fullscreenWidgets: PropTypes.array
    }

    static defaultProps = {
        __components: {},
        handleSubmit: _.noop,
        hasProcessError: false,
        formErrors: {},
        serverValidationErrors: {},
        submitFailed: false,
        messages: [],
        isLoading: false,
        hasStatus: false,
        headerWidgets: [],
        bodyScreens: [],
        footerWidgets: [],
        stepTitle: void '',
        fullscreenWidgets: []
    }

    componentDidMount () {
        scrollToElement(this.form)
    }

    componentDidUpdate (prevProps) {
        const { submitFailed, formErrors, hasProcessError, stateName, serverValidationErrors } = this.props

        const processError = prevProps.hasProcessError !== hasProcessError && Boolean(hasProcessError)
        const changeState = prevProps.stateName !== stateName

        const formSubmitted = !prevProps.submitFailed && submitFailed

        if (formSubmitted && !_.isEmpty(formErrors)) {
            this.pseudoTitle.focus()
            scrollToError(formErrors)
        } else if (formSubmitted && !_.isEmpty(serverValidationErrors)) {
            scrollToError(serverValidationErrors)
        } else if (processError || changeState) {
            this.pseudoTitle.focus()
            this.scrollToTop(processError)
        }
    }

    getFormRef = (component) => {
        this.form = component
    }

    getPseudoTitleRef = (component) => {
        this.pseudoTitle = component
    }

    scrollToTop = (hasProcessError = false) => {
        const { headerWidgets, messages } = this.props
        const hasNoHeader = headerWidgets.length === 0

        if (this.props.hasStatus) {
            scrollToElement(document.body, WITHOUT_OFFSET)
        } else if (hasProcessError || messages.length) {
            scrollToElement(this.form)
        } else if (hasNoHeader) {
            scrollToElement(this.form, WITHOUT_OFFSET)
        } else {
            scrollToElement(this.form.firstChild.lastChild, WITHOUT_OFFSET)
        }
    }

    render () {
        const {
            handleSubmit,
            isLoading,
            headerWidgets,
            bodyScreens,
            footerWidgets,
            stepTitle,
            fullscreenWidgets,
            __components: {
                Header = DefaultHeader,
                Body = DefaultBody,
                Footer = DefaultFooter,
                EventError = DefaultEventError
            }
        } = this.props

        return (
            <>
                <div
                    aria-label={`${i18next.t('lib.workflow:accessibility.change.step')}${stepTitle}`}
                    tabIndex={-1}
                    ref={this.getPseudoTitleRef}
                />
                <form onSubmit={handleSubmit} ref={this.getFormRef} aria-busy={isLoading}>
                    <EventError />
                    {Boolean(headerWidgets.length) &&
                    <Header widgets={headerWidgets} isLoading={isLoading} />
                    }
                    {Boolean(bodyScreens.length) &&
                    <Body screens={bodyScreens} isLoading={isLoading} />
                    }
                    {Boolean(footerWidgets.length) &&
                    <Footer widgets={footerWidgets} isLoading={isLoading} />
                    }
                    {Boolean(fullscreenWidgets.length) &&
                    <FullscreenBottom widgets={fullscreenWidgets} />
                    }
                </form>
            </>
        )
    }
}


const makeMapStateToProps = () => (state, props) => ({
    initialValues: selectors.getInitialFieldsValuesFromResponse(state),
    form: props.name,
    hasProcessError: selectors.hasProcessError(state),
    messages: selectors.getStandardMessages(state),
    formErrors: selectors.getFormErrors(state),
    submitFailed: selectors.formSubmitFailed(state),
    serverValidationErrors: selectors.getSubmitErrors(state),
    hasStatus: !!selectors.getStatusLevel(state),
    headerWidgets: selectors.getHeaderWidgets(state, props),
    bodyScreens: selectors.getBodyScreens(state, props),
    footerWidgets: selectors.getFooterWidgets(state, props),
    isLoading: selectors.getStateLoading(state),
    stepTitle: props.getStepTitle ? props.getStepTitle(state) : selectors.getStepTitle(state),
    fullscreenWidgets: selectors.getWebFullscreenBottomWidgets(state),
})

export default compose(
    connect(makeMapStateToProps, null, null, { forwardRef: true }),
    reduxForm({
        onSubmit: _.noop
    })
)(Renderer)
