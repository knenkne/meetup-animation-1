import { connect } from 'react-redux'

import { selectors } from '../../../__data__'

import { PersonalManagerComponent } from './personal-manager'

const mapStateToProps = (state) => ({
    managerStatus: selectors.profile.managerStatus(state),
    managerList: selectors.profile.managerListSelector(state),
    managerType: selectors.profile.managerTypeSelector(state)
})

export const PersonalManager = connect(mapStateToProps)(PersonalManagerComponent)
