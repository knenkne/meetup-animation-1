import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { getConfigValue } from '@sbol/lib.app'
import i18next from 'i18next'

import { selectors } from '../../__data__'
import { LazyRegion } from '../lazy-region'
import {
    isStatusError,
    isStatusLoading,
} from '../utils/helpers'

import { FullProfile } from './full-profile'
import { ShortProfile } from './short-profile'

export const SkeletonProfile = document.getElementsByClassName('skeleton-profile')?.[0]?.innerHTML

const isSbolPro = getConfigValue('isSbolPro', false)

export const mapStateToProps = (state) => {
    let status = selectors.profile.profileSelector(state)
    if (isSbolPro && !isStatusError(state.employee.status)) {
        status = selectors.profile.proProfileSelector(state)
    }
    // todo: После раскатки sb1 откатить как было
    return {
        ...status,
        managerStatus: selectors.profile.managerStatus(state),
    }
}

const ProfileComponent = ({ isTablet, status, managerStatus, ...rest }) => (
    <LazyRegion
        isLoading={[status, managerStatus].some((state) => isStatusLoading(state))}
        html={SkeletonProfile}
    >
        {isTablet
            ? <ShortProfile {...rest} isSbolPro={isSbolPro} />
            : <FullProfile {...rest} isSbolPro={isSbolPro} />
        }
    </LazyRegion>
)

ProfileComponent.displayName = 'ProfileComponent'

ProfileComponent.defaultProps = {
    description: i18next.t('region.scaffold:profile.description'),
    role: null,
    status: '',
    managerStatus: '',
    isTablet: false
}

ProfileComponent.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    role: PropTypes.string,
    href: PropTypes.string.isRequired,
    links: PropTypes.object.isRequired,
    status: PropTypes.string,
    managerStatus: PropTypes.string,
    type: PropTypes.string.isRequired,
    isTablet: PropTypes.bool
}

export const Profile = connect(mapStateToProps)(ProfileComponent)
