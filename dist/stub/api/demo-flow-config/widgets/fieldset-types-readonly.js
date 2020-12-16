module.exports = {
    type: 'CoreFieldset',
    title: 'Типы',
    readonly: true,
    fields: [
        {
            id: 'primitive:text',
            type: 'text',
            title: 'Text',
            value: 'Значение'
        },
        {
            id: 'primitive:checkbox',
            type: 'checkbox',
            title: 'Checkbox',
            value: 'true'
        },
        {
            id: 'primitive:select',
            type: 'select',
            title: 'Select',
            referenceId: 'selectOptions',
            value: '1'
        },
        {
            id: 'primitive:multiselect',
            values: [],
            type: 'multiselect',
            referenceId: 'selectOptions',
            title: 'Multiselect'
        }
    ]
}
