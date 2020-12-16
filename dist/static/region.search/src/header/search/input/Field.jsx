import _ from 'lodash'
import { Input } from '@sbol/lib.ui'

/**
 * Преобразование свойств для реального поля ввода
 * @param {Object} props - свойства
 * @return {Object} модифицированные свойства
 */
export const handleFront = (props) => _.omit(props, ['search'])

/**
 * Преобразование свойств для фейкового (typeahead) поля ввода
 * @param {Object} props - свойства
 * @return {Object} модифицированные свойства
 */
export const handleBack = (props) => _({})
    .extend(props)
    .omit(['search'])
    .extend({ value: props.search })
    .value()

export default Input.typeaheadFactory(
    handleFront,
    handleBack
)(Input)
