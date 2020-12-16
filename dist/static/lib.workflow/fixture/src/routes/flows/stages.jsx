import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import { getPrefetch } from '@sbol/webpage.provider.bootstrap'
import { Stages } from '@sbol/lib.ui'

const StagesComponent = ({ position, range }) => (
    <Stages
        translations={{
            tooltip: i18next.t('lib.workflow:you.are.here')
        }}
        avaLink={_.get(getPrefetch('region.products'), [
            'profile',
            'avatarPath'
        ])}
    >
        {_.times(range, (i) => (
            <Stages.Step
                key={i}
                title={i18next.t(`lib.workflow:step.${i + 1}`)}
                mode={i + 1 === position ? 'progress' : null}
            />
        ))}
    </Stages>
)

StagesComponent.propTypes = {
    position: PropTypes.number,
    range: PropTypes.number
}

StagesComponent.defaultProps = {
    position: void 0,
    range: void 0
}

export default StagesComponent
