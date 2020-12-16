module.exports = {
    type: 'CoreFieldset',
    title: 'CoreFieldset',
    description: 'Базовый виджет, готовый нас выручить в любую минуту',
    fields: [
        {
            id: 'primitive:text',
            type: 'text',
            title: 'Текстовое поле',
            description: 'Самый простой тип поля в Fieldset',
            tooltip: {
                title: 'Текст подсказки (тултипа)',
                contents: 'Содержимое тултипа',
            }
        },
        {
            id: 'primitive:checkbox',
            type: 'checkbox',
            title: 'Среди типов бывают чекбоксы'
        },
        {
            id: 'primitive:select',
            type: 'select',
            title: 'И выбор из списка',
            referenceId: 'selectOptions',
            description: 'Выбор из списка ссылается на справочник (статический)'
        },
        {
            id: 'primitive:multiselect',
            values: [],
            type: 'multiselect',
            referenceId: 'selectOptions',
            title: 'Во второй версии протокола мы добавили мультивыбор из списка',
            description: 'Можно выбрать несколько значений'
        }
    ]
}
