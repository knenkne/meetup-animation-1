import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Styled from 'react-styleguidist/lib/rsg-components/Styled'

export const styles = ({ space, color, borderRadius }) => ({
    root: {
        marginBottom: space[4] // eslint-disable-line no-magic-numbers, comment: копипаста стилей с оригинала
    },
    preview: {
        padding: space[2], // eslint-disable-line no-magic-numbers, comment: копипаста стилей с оригинала
        border: [[1, color.border, 'solid']],
        borderRadius,
        width: '100%',
        display: 'inline-block'
    },
    controls: {
        display: 'flex',
        alignItems: 'center'
    },
    toolbar: {
        marginLeft: 'auto'
    },
    tab: {}
})

export const PlaygroundRenderer = ({ classes, name, preview, previewProps, tabButtons, tabBody, toolbar }, { styleguidist }) => {
    if (!styleguidist.getShowInterface()) {
        return (
            <div data-preview={name}>
                {preview}
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <div {...previewProps} className={cx(classes.preview, previewProps.className)} data-preview={name}>
                {preview}
            </div>
            <div className={classes.controls}>
                <div className={classes.tabs}>
                    {tabButtons}
                </div>
                <div className={classes.toolbar}>
                    {toolbar}
                </div>
            </div>
            <div className={classes.tab}>
                {tabBody}
            </div>
        </div>
    )
}

PlaygroundRenderer.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    preview: PropTypes.node.isRequired,
    previewProps: PropTypes.object.isRequired,
    tabButtons: PropTypes.node.isRequired,
    tabBody: PropTypes.node.isRequired,
    toolbar: PropTypes.node.isRequired
}


PlaygroundRenderer.contextTypes = {
    styleguidist: PropTypes.shape({
        getShowInterface: PropTypes.func
    })
}

export default Styled(styles)(PlaygroundRenderer)
