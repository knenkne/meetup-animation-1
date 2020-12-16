import _ from 'lodash'

const DEFAULT_LIMIT = 10

export const getTruthyValue = (array, path) => _.get(array, path) || void 0

export const getFullContext = (values, fields) => ({
    region: getTruthyValue(values, fields.region.id),
    district: getTruthyValue(values, fields.district.id),
    settlement: getTruthyValue(values, fields.settlement.id),
    street: getTruthyValue(values, fields.street.id),
    building: getTruthyValue(values, fields.building.id)
})

const matrix = ['region', 'district', 'settlement', 'street', 'building']
export const createQuery = (context, values, fields, pid, limit = DEFAULT_LIMIT) => ({
    ..._.omit(getFullContext(values, fields), _.slice(matrix, _.indexOf(matrix, context))),
    pid,
    context,
    limit
})

export const getItems = (references, referenceId) => _.get(references, `${referenceId}.items`)

export const getInitialQuery = (references, field) => {
    const items = getItems(references, field.referenceId)

    if (!items) {
        return ''
    }

    return _.get(_.find(items, { value: field.value }), 'title', '')
}

export const getPropertiesOfCountry = (references, referenceId, value) =>
    _.get(_.find(getItems(references, referenceId), { value }), 'properties')


export const isEmptyInput = (key, values, fields) => !values[fields[key].id] && !fields[key].readonly

/* Matrix of disabled */
export const isDisabledRegion = (values, fields) => isEmptyInput('country', values, fields)
export const isDisabledDistrict = (values, fields) => isDisabledRegion(values, fields)
    || isEmptyInput('region', values, fields)
export const isDisabledSettlement = (values, fields) => isDisabledDistrict(values, fields)
    || isEmptyInput('district', values, fields)

export const isDisabledStreetCheckbox = (values, fields) => isDisabledSettlement(values, fields)
    || isEmptyInput('settlement', values, fields)
export const isDisabledStreet = (values, fields) => isDisabledStreetCheckbox(values, fields)
    || !!values[fields.streetCheckbox.id]

export const isDisabledBuildingCheckbox = (values, fields) => isDisabledStreetCheckbox(values, fields)
    || (isEmptyInput('street', values, fields) && !values[fields.streetCheckbox.id])
export const isDisabledBuilding = (values, fields) => isDisabledBuildingCheckbox(values, fields)
    || !!values[fields.buildingCheckbox.id]

export const isDisabledQuartersCheckbox = (values, fields) => isDisabledBuilding(values, fields)
    || isDisabledBuildingCheckbox(values, fields)
    || (isEmptyInput('building', values, fields)
        && !values[fields.buildingCheckbox.id])
export const isDisabledQuarters = (values, fields) => isDisabledQuartersCheckbox(values, fields)
    || !!values[fields.quartersCheckbox.id]

export const generateGetIcon = _.memoize((itemImgSrc) => (option) => _.get(option, ['properties', itemImgSrc]))
export const generateGetDescription = _.memoize((option) => _.get(option, ['properties', 'description']))
