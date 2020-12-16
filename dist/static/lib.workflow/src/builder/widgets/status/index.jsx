import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { Icon, Grid, Background, Tabs, Button } from '@sbol/lib.ui'

import { WfContext } from '../../workflow-context'

import { default as StatusWhatNext } from './what-next'
import * as icons from './icons'
import defaultTheme from './style.css'

Icon.addIcons('icon:workflow/status', icons)

const statusIconTheme = {
    ...Icon.theme,
    icon: classnames(Icon.theme.icon, defaultTheme.icon)
}

const additionalButtonTheme = {
    ...Button.theme,
    button: classnames(Button.theme.button, defaultTheme.additionalButton)
}

export const Status = (props) => {
    const {
        properties: { level, statusWidgets },
        title
    } = props

    const whatNextProps = _.find(
        statusWidgets,
        (widget) => widget.type === 'StatusWhatNext'
    )
    const summaryProps = _.find(
        statusWidgets,
        (widget) => widget.type === 'StatusHeaderSummary'
    )
    const productDescriptionProps = _.find(
        statusWidgets,
        (widget) => widget.type === 'StatusProductDescription'
    )
    const additionalInfoProps = _.find(
        statusWidgets,
        (widget) => widget.type === 'StatusAdditionalInfo'
    )

    return (
        <React.Fragment>
            <Background
                colorScheme={`gradient-${level}-wrapper`}
                theme={{
                    ...Background.theme,
                    background: Background.theme.background
                }}
            >
                <div
                    data-status={level}
                    className={defaultTheme[`status-${level}`]}
                >
                    <Grid mode="strict">
                        <article
                            className={classnames(
                                defaultTheme.status,
                                defaultTheme[level]
                            )}
                        >
                            <Grid.Cell
                                mode="strict"
                                lg={14}
                                md={14}
                                sm={23}
                                offsetLg={2}
                                offsetMd={2}
                            >
                                <div className={defaultTheme.level}>
                                    <Icon
                                        theme={statusIconTheme}
                                        name={`icon:workflow/status/${level}`}
                                        size="sm"
                                    />
                                </div>
                                <h1 className={defaultTheme.title}>{title}</h1>
                                {whatNextProps && (
                                    <StatusWhatNext
                                        {...whatNextProps}
                                        level={level}
                                    />
                                )}
                                <div className={defaultTheme.divider} />
                            </Grid.Cell>
                            <Grid.Cell
                                mode="strict"
                                lg={19}
                                md={19}
                                sm={23}
                                offsetLg={2}
                                offsetMd={2}
                            >
                                {summaryProps && (
                                    <WfContext.Consumer>
                                        {({ widgets: { WebSummary } }) => {
                                            if (WebSummary) {
                                                return <WebSummary {...summaryProps} />
                                            }

                                            return null
                                        }}
                                    </WfContext.Consumer>
                                )}
                                {productDescriptionProps && (
                                    <WfContext.Consumer>
                                        {({ widgets: { WebProductDescription } }) => {
                                            if (WebProductDescription) {
                                                return <WebProductDescription {...productDescriptionProps} />
                                            }

                                            return null
                                        }}
                                    </WfContext.Consumer>
                                )}
                            </Grid.Cell>
                        </article>
                    </Grid>
                </div>
            </Background>
            <Grid mode="strict">
                <Grid.Cell
                    mode="strict"
                    lg={27}
                    md={19}
                    sm={23}
                    offsetLg={2}
                    offsetMd={2}
                >
                    <article data-unit="additional">
                        <Tabs initialValue={additionalInfoProps.title}>
                            <Tabs.Tab title={additionalInfoProps.title}>
                                <div
                                    className={defaultTheme.additionalContainer}
                                >
                                    <Grid mode="strict">
                                        {_.map(
                                            additionalInfoProps.fields,
                                            (field) => (
                                                <Grid.Cell
                                                    mode="strict"
                                                    lg={10}
                                                    md={9}
                                                    sm={23}
                                                >
                                                    <Button
                                                        title={field.title}
                                                        colorScheme="link"
                                                        size="sm"
                                                        theme={
                                                            additionalButtonTheme
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                defaultTheme.additionalIcon
                                                            }
                                                        >
                                                            <Icon
                                                                name="icon:core/common/systemAlertSuccess"
                                                                size="self"
                                                            />
                                                        </div>
                                                        {field.title}
                                                    </Button>
                                                </Grid.Cell>
                                            )
                                        )}
                                    </Grid>
                                </div>
                            </Tabs.Tab>
                            <Tabs.Tab title="Подробности">
                                {'Something goes here'}
                            </Tabs.Tab>
                        </Tabs>
                    </article>
                </Grid.Cell>
            </Grid>
        </React.Fragment>
    )
}

Status.propTypes = {
    title: PropTypes.string.isRequired,
    properties: PropTypes.shape({
        level: PropTypes.string.isRequired,
        dedicatedStatusMessage: PropTypes.string,
        statusWidgets: PropTypes.array
    })
}
Status.defaultProps = {
    properties: {
        statusWidgets: []
    }
}

export default Status
