import React from 'react'

import WrappedRadio from './radio/radio'
import WrappedCheckbox from './checkbox/checkbox'
import { Group } from './group/group'

export const Selection = (props) => <WrappedCheckbox {...props} />
Selection.displayName = 'Selection'
Selection.propTypes = WrappedCheckbox.propTypes
Selection.defaultProps = WrappedCheckbox.defaultProps

Selection.Radio = WrappedRadio
Selection.Checkbox = WrappedCheckbox

Selection.Group = Group

export default Selection
