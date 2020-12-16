module.exports = {
    type: 'CoreFieldset',
    title: 'Во второй версии протокола была добавлена механика отображения виджетов',
    description: 'Она зависит от значения, вводимого в других полях',
    fields: [
        {
            id: 'visible:widget:value2',
            type: 'text',
            title: 'Дополнительное поле 2'
        }
    ],
    visible: {
        id: 'primitive:select',
        regexp: 'value2'
    }
}
