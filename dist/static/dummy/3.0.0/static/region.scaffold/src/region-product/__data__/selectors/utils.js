import _ from 'lodash'

export const makeArray = (data = []) => _.isArray(data) ? data : [data]
