import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Region } from '@sbol/lib.app'

import { getMainProcessId, getSubFlowInRegionStartData, getSubFlowVisible } from '../adapter/selectors'
import { setSubFlowInRegionLoaded } from '../adapter/actions/actions'
import { handleReturnFromRegionSubFlow } from '../adapter/actions/thunks'

const SubFlowInRegion = ({ startData: { regionName, url }, showSubFlowRegion, onLoadSubFlow, onFinishSubFlowInRegion, mainProcessId }) => (
    <React.Fragment>
        {showSubFlowRegion && <Region
            props={{
                url,
                onLoadSubFlow,
                onFinishSubFlowInRegion,
                name: regionName,
                mainProcessId
            }}
            name={regionName}
        />}
    </React.Fragment>)

SubFlowInRegion.propTypes = {
    onLoadSubFlow: PropTypes.func.isRequired,
    onFinishSubFlowInRegion: PropTypes.func.isRequired,
    showSubFlowRegion: PropTypes.bool,
    startData: PropTypes.shape({
        regionName: PropTypes.string,
        url: PropTypes.string
    }),
    mainProcessId: PropTypes.string
}

SubFlowInRegion.defaultProps = {
    startData: {},
    showSubFlowRegion: false,
    mainProcessId: ''
}

const mapStateToProps = (state) => ({
    startData: getSubFlowInRegionStartData(state),
    showSubFlowRegion: getSubFlowVisible(state),
    mainProcessId: getMainProcessId(state),
})

const mapDispatchToProps = {
    onLoadSubFlow: setSubFlowInRegionLoaded,
    onFinishSubFlowInRegion: handleReturnFromRegionSubFlow,
}

export const ConnectedSubFlowInRegion = connect(mapStateToProps, mapDispatchToProps)(SubFlowInRegion)
