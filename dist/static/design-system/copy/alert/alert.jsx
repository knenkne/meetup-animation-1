import React from 'react'

import { ProcessAlert } from './process-alert'
import { SystemAlert } from './system-alert'
import { Description } from './description'
import { Actions } from './actions'

export const Alert = (props) => <ProcessAlert {...props} />

Alert.propTypes = ProcessAlert.propTypes
Alert.defaultProps = ProcessAlert.defaultProps

Alert.Process = ProcessAlert
Alert.System = SystemAlert
Alert.Description = Description
Alert.Actions = Actions

export default Alert
