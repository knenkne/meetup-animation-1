import dateFns from 'date-fns'

export const isDateEqual = (leftDate, rightDate) => dateFns.isEqual(
    leftDate,
    rightDate
)
