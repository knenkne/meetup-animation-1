const nestingNext = (result, root) => ({ [root]: result })

export const pathToObject = (value = '') => {
    const objectNesting = value.split('/').reverse()

    return objectNesting.reduce(nestingNext, objectNesting.shift())
}
