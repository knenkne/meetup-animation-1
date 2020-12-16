const trimSpacesAndSeparators = (value) => value.replace(/^[ ,]*|[ ,]*$/g, '')
const splitBySeparators = (value) => value.split(',')
const compactAndUnique = (array) => array.filter((value, index, collection) => value && collection.indexOf(value) >= index)
const mapTrimSpaces = (value) => value.map((item) => item.replace(/ /g, ''))


const compose = (...handlers) => (result) => handlers.reduce((f, g) => g(f), result)

export const getIdsList = compose(
    trimSpacesAndSeparators,
    splitBySeparators,
    compactAndUnique,
    mapTrimSpaces
)
