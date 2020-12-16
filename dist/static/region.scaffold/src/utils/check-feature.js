import _ from 'lodash'
import { getFeatureValue, getAllFeatures } from '@sbol/lib.app'

// Проверяем, есть ли лончер и фича в лончере.
// Нет фичи и лончера - отображаем, нет фичи и есть лончер  - не отображаем
// фича должна также иметь true или "true"
export const checkFeature = (name, pkg) =>
    getFeatureValue(name, pkg) === 'true' ||
    getFeatureValue(name, pkg) === true ||
    _.isEmpty(getAllFeatures(pkg))
