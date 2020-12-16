const MINUTES_IN_HOUR = 60
const MS_IN_MINUTE = 60000

const formatOffset = (offset) => {
    const sign = offset < 0 ? '+' : '-'
    let hours = Math.abs(offset / MINUTES_IN_HOUR)
    hours = String(hours).length === 1 ? `0${hours}` : hours
    let minutes = Math.abs(offset % MINUTES_IN_HOUR)
    minutes = String(minutes).length === 1 ? `0${minutes}` : minutes

    return `${sign}${hours}${minutes}`
}

export default () => {
    const date = new Date()
    const correctedDate = new Date(date.valueOf() - (date.getTimezoneOffset() * MS_IN_MINUTE))
    const [correctedShortDate] = correctedDate.toISOString().split('Z')
    return `${correctedShortDate}${formatOffset(correctedDate.getTimezoneOffset())}`
}
