const DEFAULT_NAMESPACE = 'icon:core/products'

const iconDictionary = {
    appliance: `${DEFAULT_NAMESPACE}/targetAppliance`,
    auto: `${DEFAULT_NAMESPACE}/targetAuto`,
    business: `${DEFAULT_NAMESPACE}/targetBusiness`,
    education: `${DEFAULT_NAMESPACE}/targetEducation`,
    estate: `${DEFAULT_NAMESPACE}/targetEstate`,
    furniture: `${DEFAULT_NAMESPACE}/targetFurniture`,
    ghost: `${DEFAULT_NAMESPACE}/ghostTarget`,
    holidays: `${DEFAULT_NAMESPACE}/targetHolidays`,
    other: `${DEFAULT_NAMESPACE}/targetOther`,
    renovation: `${DEFAULT_NAMESPACE}/targetRenovation`,
    reserve: `${DEFAULT_NAMESPACE}/targetReserve`,
    vacation: `${DEFAULT_NAMESPACE}/targetVacation`,
}

export const getTargetIcon = ({ type }) => iconDictionary[String(type).toLowerCase()] || iconDictionary.ghost
