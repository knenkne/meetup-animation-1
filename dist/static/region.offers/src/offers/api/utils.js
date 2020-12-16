import _ from 'lodash'

export const getUniqueId =
    ({ campaignId, templateId, placeName, contentId, campaignCode }) =>
        `${campaignId}-${templateId}-${placeName}-${contentId}-${campaignCode}`

const MINUTES_IN_HOUR = 60
const MS_IN_MINUTE = 60000
const VALUABLE_TIME_LENGTH = 2
const formatOffset = (offset) => {
    const sign = offset < 0 ? '+' : '-'
    const hours = _.padStart(Math.abs(offset / MINUTES_IN_HOUR), VALUABLE_TIME_LENGTH, '0')
    const minutes = _.padStart(Math.abs(offset % MINUTES_IN_HOUR), VALUABLE_TIME_LENGTH, '0')

    return `${sign}${hours}${minutes}`
}

export const getTimestamp = () => {
    const date = new Date()
    const correctedDate = new Date(date.valueOf() - (date.getTimezoneOffset() * MS_IN_MINUTE))
    const [correctedShortDate] = correctedDate.toISOString().split('Z')
    return `${correctedShortDate}${formatOffset(correctedDate.getTimezoneOffset())}`
}
