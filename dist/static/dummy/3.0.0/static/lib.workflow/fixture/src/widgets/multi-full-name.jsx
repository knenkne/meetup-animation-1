import React from 'react'
import { WebFullName } from '@sbol/lib.widgets.web'

import { MultiWidget } from '../../../src'

const getShortTitle = (values) => {
    const [lastName, firstName, middleName, noMiddleName] = Object.values(values)

    if (!lastName && !firstName && !middleName) {
        return 'Заполните поля в данном блоке'
    }

    return noMiddleName ? `${lastName} ${firstName}` : `${lastName} ${firstName} ${middleName}`
}

const getShortDescription = (values) => {
    const [,,, noMiddleName] = Object.values(values)

    return noMiddleName ? 'Без отчества' : ''
}

const getAddTitle = () => 'Добавить участника вклада'
const getAddDescription = (values, errors, statuses) => {
    const widgetsLeft = statuses.reduce((memo, active) => {
        if (active) {
            return memo
        }

        return memo + 1
    }, 0)

    return `Осталось указать не более ${widgetsLeft} участников вклада`
}

export const MultiFullName = (props) => (
    <MultiWidget
        /**
        * Какой компонент-виджет рендерить в основе
        */
        widget={WebFullName}
        /**
        * Заголовок кнопки добавления (может приходить, например, в properties.addButtonTitle)
        */
        addButtonTitle="Добавить бывших"
        /**
        * Сколько полей в виджете
        */
        fieldsPerWidget={4}
        /**
        * Как из полей виджета получить краткий заголовок,
        * принимает объект { id поля - значение }
        */
        getShortTitle={getShortTitle}
        /**
        * Как из полей виджета получить краткое описание,
        * принимает объект { id поля - значение }
        */
        getShortDescription={getShortDescription}
        /**
        * Как из полей виджета получить заголовок кнопки добавить,
        * принимает объект { id поля - значение } и массив с состоянием отображения блоков
        */
        getAddTitle={getAddTitle}
        /**
        * Как из полей виджета получить описание кнопки добавить,
        * принимает объект { id поля - значение } и массив с состоянием отображения блоков
        */
        getAddDescription={getAddDescription}
        /**
        * Опционально для демонстрации управляем через свойства удаляемостью блоков
        */
        removable={props?.properties.removable}
        /**
        * Опционально для демонстрации управляем через свойства очищаемостью блоков
        */
        cleanable={props?.properties.cleanable}
        /**
        * Временный параметр для использования новой версии враппера
        */
        mode="strict"

        {...props}
    />
)
