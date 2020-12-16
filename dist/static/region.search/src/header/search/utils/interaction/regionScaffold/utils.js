import _ from 'lodash'
import { getFeatureValue, getAllFeatures } from '@sbol/lib.app'

import { LOADING } from '../../../constants'

// Проверяем, есть ли лончер и фича в лончере.
// Нет фичи и лончера - отображаем, нет фичи и есть лончер  - не отображаем
// фича должна также иметь true или "true"
export const checkFeature = (name) =>
    getFeatureValue(name, 'region.scaffold') === 'true' ||
    getFeatureValue(name, 'region.scaffold') === true ||
    _.isEmpty(getAllFeatures('region.scaffold'))

export const isStatusLoading = (status) => status === LOADING

export const filterListByFeature = ({ feature }) => !feature || checkFeature(feature)
