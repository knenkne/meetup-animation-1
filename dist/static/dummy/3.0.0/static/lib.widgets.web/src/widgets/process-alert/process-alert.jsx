import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import _ from 'lodash'
import { selectors as workflowSelectors } from '@sbol/lib.workflow'
import { Markdown, Alert } from '@sbol/lib.ui'
import { WorkflowPropTypes } from '@sbol/utils'

import { AlertAction } from './components'
import style from './style.css'
import { isExistsIndent } from './selectors'

const descriptionTheme = {
    ...Markdown.theme,
    container: classnames(Markdown.theme.container, style.markdown)
}

export const ProcessAlert = ({
    title,
    description,
    properties: { level },
    hasStatus,
    noIndent,
    structurePosition,
    actionsReference
}) => {
    const wrapperClass = useMemo(() => {
        if (hasStatus) {
            return style.statusScreen
        }
        if (structurePosition === 'header') {
            return style.inHeader
        }
        if (structurePosition === 'body') {
            return style.inBody
        }
        return ''
    }, [hasStatus, structurePosition])

    const { items = [] } = actionsReference

    return (
        <div className={classnames(style.wrapper, wrapperClass, noIndent && style.noIndent)}>
            <Alert.Process
                mode={level}
                title={title}
                a11y={{ title }}
            >
                {description && (
                    <Alert.Description>
                        <Markdown.Short content={description} theme={descriptionTheme} />
                    </Alert.Description>
                )}

                {!_.isEmpty(items) && (
                    <Alert.Actions>
                        {items.map((item) => <AlertAction key={title} level={level} {...item} />)}
                    </Alert.Actions>
                )}
            </Alert.Process>
        </div>
    )
}

ProcessAlert.propTypes = {
    description: PropTypes.string,
    properties: PropTypes.object,
    title: PropTypes.string,
    hasStatus: PropTypes.bool,
    noIndent: PropTypes.bool,
    structurePosition: PropTypes.oneOf(['header', 'body', 'footer', '']),
    actionsReference: WorkflowPropTypes.Reference
}

ProcessAlert.defaultProps = {
    description: void 0,
    properties: {
        level: void 0
    },
    title: void 0,
    hasStatus: void 0,
    noIndent: void 0,
    structurePosition: '',
    actionsReference: {}
}

ProcessAlert.displayName = 'WebProcessAlert'

const mapStateToProps = (state, props) => ({
    hasStatus: !!workflowSelectors.getStatusLevel(state),
    actionsReference: workflowSelectors.getReferenceByReferenceId(
        state, props.properties.actionsReferenceId
    ),
    noIndent: !isExistsIndent(state, props),
})

export default connect(mapStateToProps)(ProcessAlert)
