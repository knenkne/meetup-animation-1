const ALIGNMENT = 10
const MINUTES_IN_HOUR = 60
const MS_IN_MINUTE = 60000

const padStart = (value) => value < ALIGNMENT ? `0${value}` : value

const formatOffset = (offset) => `${
    offset < 0 ? '+' : '-'
}${
    padStart(Math.abs(offset / MINUTES_IN_HOUR))
}:${
    padStart(Math.abs(offset % MINUTES_IN_HOUR))
}`

export default () => {
    const date = new Date()
    const correctedDate = new Date(date.valueOf() - (date.getTimezoneOffset() * MS_IN_MINUTE))
    const [correctedShortDate] = correctedDate.toISOString().split('Z')
    return `${correctedShortDate}${formatOffset(correctedDate.getTimezoneOffset())}`
}
