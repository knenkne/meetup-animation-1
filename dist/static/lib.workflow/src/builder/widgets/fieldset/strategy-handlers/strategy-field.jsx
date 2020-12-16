import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { fieldAdapter } from '@sbol/lib.app'
import { Field } from 'redux-form'

/**
 * @desc компонент на лету добавляет валидаторы в соответствии со стратегиями
 *
 * @param {Array} validate - валидаторы с бх, смапленные в функции, стандратный функционал
 * @param {Array} strategyValidators - массив функций валидаторов, которые создаются в стратегии
 * @param {String} id - айдишник филда
 * @param {Function} component - компонент который заворачиваем
 * @return {XML} - RFF
 * @constructor
 */
export const StrategyField = ({
    validate,
    strategyValidators,
    id,
    component,
    ...props }) => {

    const [allValidators, setAllValidators] = useState(validate)

    useEffect(() => {
        setAllValidators([...validate, ...strategyValidators])
    }, [strategyValidators])

    return (
        <Field
            {...props}
            id={id}
            validate={allValidators}
            component={fieldAdapter(component)}
        />
    )
}

StrategyField.propTypes = {
    validate: PropTypes.arrayOf(PropTypes.func),
    strategies: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    strategyValidators: PropTypes.arrayOf(PropTypes.func)
}

StrategyField.defaultProps = {
    validate: [],
    strategyValidators: [],
    strategies: [],
}
