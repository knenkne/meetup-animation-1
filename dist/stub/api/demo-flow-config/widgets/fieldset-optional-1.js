module.exports = {
    type: 'CoreFieldset',
    title: 'Во второй версии протокола была добавлена механика отображения виджетов',
    description: 'Она зависит от значения, вводимого в других полях',
    fields: [
        {
            id: 'visible:widget:value1',
            type: 'text',
            title: 'Дополнительное поле 1'
        }
    ],
    visible: {
        id: 'primitive:select',
        regexp: 'value1'
    }
}
