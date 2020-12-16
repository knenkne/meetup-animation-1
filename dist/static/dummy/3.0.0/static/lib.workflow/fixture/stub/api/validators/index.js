const required = (value) => value ? '' : 'Поле обязательно к заполнению'
const minLength = (min) => (value) =>
    value && value.length < min
        ? `Должно быть минимум ${min} буквы или больше`
        : ''
const min = (minValue) => (value) =>
    value && Number(value) < minValue
        ? `Должно быть минимум ${minValue} или больше`
        : ''
const max = (maxValue) => (value) =>
    value && Number(value) > maxValue
        ? `Должно быть максимум ${maxValue} или меньше`
        : ''
const match = (matchValue) => (value) =>
    value && Number(value) === matchValue ? 'Угадал' : ''

module.exports = {
    required,
    minLength,
    min,
    max,
    match
}
