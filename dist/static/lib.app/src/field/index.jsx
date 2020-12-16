import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Field as ReduxFormField } from 'redux-form'

const getDisplayName = (Component, fallback) => Component.displayName ||
    Component.name ||
    (typeof Component === 'string' && Component.length > 0
        ? Component
        : fallback)

/**
 * @desc адаптер для spread-парсинга свойств input и meta формата shape и проброса их в исходный компонент
 * @param {Function} InputComponent - стандартизированный компонент ввода
 * @return {function(*=)} - компонент ввода со стандартный для redux-form интерфейсом
 * */
export const fieldAdapter = _.memoize((Component) => {
    const FieldAdapter = ({ input, meta, ...otherProps }) => {
        const passedProps = Object.assign(
            otherProps,
            input,
            meta,
            {
                formName: meta.form,
                initialValue: meta.initial
            }
        )

        return <Component {...passedProps} />
    }

    FieldAdapter.propTypes = {
        input: PropTypes.object,
        meta: PropTypes.shape({
            form: PropTypes.string,
            initial: PropTypes.any,
        })
    }

    FieldAdapter.defaultProps = {
        input: {},
        meta: {}
    }

    FieldAdapter.displayName = getDisplayName(Component, 'FieldAdapter')
    FieldAdapter.WrappedComponent = Component

    return FieldAdapter
})

/**
 * @desc компонент, аналогичный Field из redux-form, для работы с компонентами с плоским интерфейсом
 * @param {Object} props - свойства компонента в формате redux-form
 * @param {Function} props.component - компонент с плоским интерфейсом
 * @return {Object} - экземпляр поля ввода, связанный с redux-form
 * */

const checkbox = 'checkbox'
const defaultNormalizeCheckbox = (value) => !!value
export const Field = ({ as: RFField, ...props }) => {
    const defaultNormalize = props.type === checkbox ? defaultNormalizeCheckbox : _.identity

    return (<RFField
        {...props}
        component={fieldAdapter(props.component)}
        normalize={props.normalize || defaultNormalize}
    />)
}

Field.propTypes = {
    type: PropTypes.string,
    component: PropTypes.func.isRequired,
    normalize: PropTypes.func,
    as: PropTypes.func
}

Field.defaultProps = {
    type: void 0,
    normalize: void 0,
    as: ReduxFormField
}
Field.displayName = 'Field'
