const FOUR_DIGITS = 4

export const getBlockedDate = (date) => {
    const dateArray = date?.split('.').map((item) => Number(item)) || []
    const [day, potentiallyMonth, potentiallyYear] = dateArray
    const year = String(potentiallyYear).length < FOUR_DIGITS ? `20${potentiallyYear}` : potentiallyYear
    return new Date(year, potentiallyMonth - 1, day)
}
