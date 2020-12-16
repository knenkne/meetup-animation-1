import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Link } from '@sbol/lib.ui'
import { log, Link as AppLink } from '@sbol/lib.app'
import webWidgets from '@sbol/lib.widgets.web'
import coreWidgets from '@sbol/lib.widgets.core'

import { Workflow, selectors, BackgroundStatus } from '../../../../src'
import { MultiFullName } from '../../widgets/multi-full-name'
import { ParamsEvent } from '../../widgets/params-event'
import { customVisibility } from '../../custom-strategies/custom-visibility'

import Stages from './stages'
import style from './style.css'

const analyticsWorkflow = /* analytics.workflow  ||*/ {
    stopAutoTrackTransitions: () => log.info('stopAutoTrackTransitions'),
    startAutoTrackTransitions: () => log.info('startAutoTrackTransitions'),
    transition: (stepData) => {
        log.info('transition', {
            url: `${window.location.pathname}${window.location.search}${
                window.location.hash
            }`,
            title: _.get(stepData.output, ['screens', '0', 'title'])
        })
        /* analytics.transition({
            url: `${window.location.pathname}${window.location.search}${window.location.hash}`,
            title: stepData.output.screens[0].title
        }) */
    },
    event: () => {
        log.info('wf event')
    }
}

const customWidgets = {
    WebMultiFullName: MultiFullName,
    WebParamsEvent: ParamsEvent
}

const widgets = {
    ...webWidgets,
    ...coreWidgets,
    ...customWidgets
}

const customStrategies = {
    customVisibility
}

export const WorkflowWrapper = ({
    fullWidth,
    hasError,
    mode,
    isFinished,
    progress,
    ...props
}) => {
    if (fullWidth) {
        return (
            <>
                <BackgroundStatus mode={mode}>
                    {!hasError &&
                    <div className={style.navBar}>
                        <div className={style.link}>
                            <Link
                                as={AppLink}
                                external={false}
                                href={AppLink.createUrl(process.env.PKG_ID)}
                                mode="breadcrumb"
                            >
                                {'Назад'}
                            </Link>
                        </div>
                    </div>
                    }
                    <Workflow
                        {...props}
                        widgets={widgets}
                        analytics={analyticsWorkflow}
                        mainProcessId="lib.workflow"
                    />
                </BackgroundStatus>
                <div id="workflowFullscreenBottom" />
            </>
        )
    }

    return (
        <div>
            <BackgroundStatus mode={mode}>
                <div className={style.navBar}>
                    <Grid>
                        <Grid.Cell lg={19} md={19} sm={23}>
                            <Workflow
                                {...props}
                                widgets={widgets}
                                analytics={analyticsWorkflow}
                                mainProcessId="lib.workflow"
                                customStrategies={customStrategies}
                            />

                            {!isFinished && !hasError && <Stages {...progress} />}
                        </Grid.Cell>
                    </Grid>
                </div>
            </BackgroundStatus>
            <div id="workflowFullscreenBottom" />
        </div>
    )
}

WorkflowWrapper.propTypes = {
    fullWidth: PropTypes.bool,
    title: PropTypes.string,
    hasError: PropTypes.bool,
    mode: PropTypes.string,
    isFinished: PropTypes.bool,
    progress: PropTypes.shape({
        position: PropTypes.number,
        range: PropTypes.number
    })
}

WorkflowWrapper.defaultProps = {
    fullWidth: false,
    title: '',
    hasError: false,
    mode: null,
    isFinished: false,
    progress: {}
}

const mapStateToProps = (state) => ({
    hasError: !_.isEmpty(selectors.getError(state)),
    mode: selectors.getStatusLevel(state),
    isFinished: selectors.getStateFinished(state),
    progress: selectors.getProgress(state),
})

export const BindWorkflow = connect(mapStateToProps)(WorkflowWrapper)
