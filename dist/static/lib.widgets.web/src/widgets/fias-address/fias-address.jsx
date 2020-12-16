import React, { useCallback, useMemo } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field } from '@sbol/lib.app'
import { getFormValues, getFormSyncErrors, change } from 'redux-form'
import {
    DefaultWidgetWrapper,
    selectors
} from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

import { connectValidatorsWithCheckbox } from '../utils'

import { AddressCheckbox } from './address-checkbox'
import { AddressField } from './address-field'
import {
    isDisabledText,
    isDisabledCheckbox,
    getParentId,
    getInitialQuery,
    ADDRESS_KIND
} from './utils'
import style from './style.css'

const DEFAULT_SUGGEST_MODE = 'off'

const FIELDS_PARAMS = {
    region: {
        kind: ADDRESS_KIND.REGION
    },
    city: {
        kind: ADDRESS_KIND.CITY
    },
    street: {
        kind: ADDRESS_KIND.STREET
    },
    house: {
        kind: ADDRESS_KIND.HOUSE,
        halfWidth: true
    },
    apartment: {
        kind: ADDRESS_KIND.APARTMENT,
        halfWidth: true,
        disableIfPrevOmitted: true
    }
}

/**
 * @desc Виджет позволяет указать адрес используя поисковую систему ФИАС.
 * Может содержать такие поля как регион, город, улица, дом и номер квартиры.
 * Все поля за исключением номера квартиры поддерживают ФИАС поиск.
 * Заполнение полей виджета должно происходить последовательно,
 * поскольку в поисковом запросе требуется указывать идентификатор родительского адресного объекта
 * если родитель подразумевается (к примеру, для улицы это город).
 * В связи с этим, все поля кроме региона (первое поле) по умолчанию недоступны и открываются по мере заполнения формы.
 * По необходимости можно опустить такие поля как регион или номер квартиры если они не нужны.
 * Для этого достаточно не указывать их в массиве fields при конфигурации виджета.
 * 
 * @param {String} title – Заголовок виджета.
 * @param {String} description – Описание виджета.
 * @param {Array} fields - Список связанных полей, с учётом порядка. 
 * @param {Object} properties - Настройки виджета.
 * @param {Array} properties.suggest - Строковый массив, определяющий режим работы соответствующих полей.
 * Каждый элемент массива принимает следующие значения:
 * only – Поле с подсказкой. Чтобы заполнить поле корректно нужно обязательно выбрать один из вариантов в выпадающем списке.
 * off – Поле без подсказки. Обычное текстовое поле.
 * @param {String} properties.suggestMessage – Текст ошибки,
 * которая будет выведена в случае если пользователь заполнил поле с подсказкой, но не выбрал ни один из вариантов списка.
 * @param {String} properties.url – Адрес сервиса поисковой системы.
 * @param {String} properties.source – Источник данных. По-умолчанию это ФИАС, но также доступен КЛАДР.
 * @param {Number} properties.debounce – Задержка отправки запроса при печати в миллисекундах.
 * @param {Number} properties.timeout – Время через которое нужно отменить запрос.
 * @param {Number} properties.count – Максимальное число подсказок в ответе.
 * @param {Object} references – Связанные справочники. Каждому адресному полю, которое поддерживает ФИАС поиск,
 * прилагается соответствующий справочник, который может хранить инициализирующий адресный объект.
 */
export const WebFiasAddress = (props) => {
    const {
        fields,
        properties: {
            suggest = [],
            suggestMessage,
            url,
            source,
            debounce,
            timeout,
            count
        },
        references,
        formName,
        formValues,
        syncErrors,
        title,
        description,
        changeField
    } = props

    const { textFields, checkboxFields } = useMemo(() => {
        return fields.reduce((storage, field) => {
            const idParts = field.id.split(':')
            const id = idParts[idParts.length - 1]
    
            if (field.type === 'text') {
                storage.textFields.push({
                    id,
                    field,
                    params: FIELDS_PARAMS[id] || {}
                })
            } else if (field.type === 'checkbox') {
                storage.checkboxFields[id] = field
            }
    
            return storage
        }, { textFields: [], checkboxFields: {} })
    }, [fields])

    const resetFields = useCallback((startIndex) => {
        for (let i = startIndex; i < textFields.length; i += 1) {
            changeField(formName, textFields[i].field.id, '')
        }
    }, [formName, changeField, textFields])

    const handleChangeText = useCallback((query, event, value, id) => {
        const index = textFields.findIndex((textField) => textField.field.id === id)

        if (index === textFields.length - 1) {
            return
        }

        resetFields(index + 1)
    }, [textFields])

    const handleChangeCheckbox = useCallback((event, value, prevValue, id) => {
        /**
         * TODO:: Если заменить _.get() на optional chaining (?.),
         * то ломается отображение виджета в styleguide (В имени пропадает приставка Web и пропадет описание пропсов)
         * Нужно исследовать проблему и затем избавиться от lodash функции (потому что мы хотим когда-нибудь от него отказаться совсем)
         */
        const index = textFields.findIndex((textField) => _.get(checkboxFields, `${textField.id}.id`) === id)

        resetFields(index)

        if (index === textFields.length - 1) {
            return
        }

        const nextTextField = textFields[index + 1]

        if (nextTextField.params.disableIfPrevOmitted) {
            changeField(formName, checkboxFields[nextTextField.id].id, value)
        }
    }, [formName, changeField, textFields, checkboxFields])

    return (
        <DefaultWidgetWrapper title={title} description={description}>
            {textFields.map((textField, index) => (
                <AddressField
                    {...textField.field}
                    key={textField.field.id}
                    suggestMode={suggest[index] || DEFAULT_SUGGEST_MODE}
                    suggestMessage={suggestMessage}
                    debounce={debounce}
                    timeout={timeout}
                    requestParams={{
                        url,
                        kind: textField.params.kind,
                        source,
                        parentId: getParentId(textFields, index, checkboxFields, formValues),
                        count
                    }}
                    validators={
                        checkboxFields[textField.id]
                            ? connectValidatorsWithCheckbox(
                                textField.field.validators,
                                checkboxFields[textField.id].id
                            )
                            : textField.field.validators
                    }
                    disabled={isDisabledText(
                        textFields, index, checkboxFields, formValues, syncErrors, textField.params.disableIfPrevOmitted
                    )}
                    initialQuery={getInitialQuery(references, textField.field.referenceId, textField.params.kind)}
                    halfWidth={textField.params.halfWidth}
                    onChange={handleChangeText}
                >
                    {checkboxFields[textField.id] && (
                        <div className={style.checkbox}>
                            <Field
                                id={checkboxFields[textField.id].id}
                                name={checkboxFields[textField.id].id}
                                component={AddressCheckbox}
                                validate={checkboxFields[textField.id].validators}
                                type={checkboxFields[textField.id].type}
                                disabled={isDisabledCheckbox(
                                    textFields, index, checkboxFields, formValues, syncErrors, textField.params.disableIfPrevOmitted
                                )}
                                onChange={handleChangeCheckbox}
                            >
                                {checkboxFields[textField.id].title}
                            </Field>
                        </div>
                    )}
                </AddressField>
            ))}
        </DefaultWidgetWrapper>
    )
}

WebFiasAddress.propTypes = {
    fields: WorkflowPropTypes.Fields.isRequired,
    properties: PropTypes.shape({
        suggest: PropTypes.array,
        suggestMessage: PropTypes.string,
        url: PropTypes.string,
        source: PropTypes.string,
        debounce: PropTypes.number,
        timeout: PropTypes.number,
        count: PropTypes.number
    }),
    references: WorkflowPropTypes.References.isRequired,
    formName: PropTypes.string,
    formValues: PropTypes.object,
    syncErrors: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    changeField: PropTypes.func
}

WebFiasAddress.defaultProps = {
    formName: void '',
    formValues: {},
    syncErrors: {},
    properties: {},
    title: void '',
    description: void '',
    changeField: () => void '',
}

const mapStateToProps = (state) => {
    const formName = selectors.getName(state)

    return {
        formName,
        formValues: getFormValues(formName)(state),
        syncErrors: getFormSyncErrors(formName)(state)
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ changeField: change }, dispatch)

export const ConnectedFiasAddress = connect(mapStateToProps, mapDispatchToProps)(WebFiasAddress)
