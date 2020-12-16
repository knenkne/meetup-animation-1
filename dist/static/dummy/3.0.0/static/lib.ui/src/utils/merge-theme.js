import _ from 'lodash'
import classnames from 'classnames'

const mergeRule = (objValue, srcValue) => classnames(objValue, srcValue)
export const mergeTheme = (...args) => _.mergeWith({}, ...args, mergeRule)
