import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import getDisplayName from 'react-display-name'

/**
 * @desc HOC позволяет настроить виджет для регистрации полей в redux-form с идентификаторами,
 * полученными в коллекции fields ответа workflow.
 * @param {Component} WidgetComponent - компонента виджета
 * @param {Object} map - объект конфигурации, в котором ключ - имя propa, передающегося в виджет,
 * а значение - индекс поля в коллекции fields (значение известно на этапе разработки).
 * @return {Component} WidgetComponent
 */
export const fieldsMapperHOC = (WidgetComponent, map = {}) => {
    const Wrapped = ({ fields, ...restProps }) => {
        if (process.env.NODE_ENV !== 'production') {
            throw new Error('Не используйте данный HOC! Используйте вместо него стандартную декомпозицию [foo, bar, baz]')
        }

        const mappedFields = _.mapValues(map, (fieldIndex) => _.get(fields, fieldIndex))

        return <WidgetComponent fields={mappedFields} {...restProps} />
    }

    Wrapped.propTypes = {
        fields: PropTypes.arrayOf(PropTypes.object)
    }

    Wrapped.defaultProps = {
        fields: []
    }

    Wrapped.displayName = `${getDisplayName(WidgetComponent)}WithMappedFields`

    return Wrapped
}

const swapObject = (initialObject) => {
    const swapped = {}
    _.forEach(initialObject, (value, key) => {
        swapped[value] = key
    })
    return swapped
}

export const fieldsMapper = (names) => (Component) => fieldsMapperHOC(Component, swapObject(names))
