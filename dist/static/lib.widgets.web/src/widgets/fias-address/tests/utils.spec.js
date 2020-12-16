import {
    isDisabledText,
    isDisabledCheckbox,
    getOption,
    getParentId,
    getInitialQuery
} from '../utils'

const textFields = [
    {
        id: 'region',
        field: { id: 'widget:region' },
        params: { kind: 'REGION', disableIfPrevOmitted: false }
    },
    {
        id: 'city',
        field: { id: 'widget:city' },
        params: { kind: 'CITY', disableIfPrevOmitted: false }
    },
    {
        id: 'street',
        field: { id: 'widget:street' },
        params: { kind: 'STREET', disableIfPrevOmitted: false }
    },
    {
        id: 'house',
        field: { id: 'widget:house' },
        params: { kind: 'HOUSE', disableIfPrevOmitted: false }
    },
    {
        id: 'apartment',
        field: { id: 'widget:apartment' },
        params: { kind: 'APARTMENT', disableIfPrevOmitted: true }
    }
]

const checkboxFields = {
    street: { id: 'widget:checkbox:street' },
    house: { id: 'widget:checkbox:house' },
    apartment: { id: 'widget:checkbox:apartment' }
}

const formValues = {
    'widget:region': '',
    'widget:city': '',
    'widget:street': '',
    'widget:checkbox:street': false,
    'widget:house': '',
    'widget:checkbox:house': false,
    'widget:apartment': '',
    'widget:checkbox:apartment': false
}

describe('Widget <WebFiasAddress /> -> utils -> isDisabledText()', () => {
    it('Возвращает false для региона', () => {
        expect(
            isDisabledText(textFields, 0, checkboxFields, formValues, {}, textFields[0].params.disableIfPrevOmitted)
        ).toBe(false)
    })

    it('Возвращает true для города, улицы, дома и квартиры если регион не указан', () => {
        expect(isDisabledText(textFields, 1, checkboxFields, formValues, {}, textFields[1].params.disableIfPrevOmitted)).toBe(true)
        expect(isDisabledText(textFields, 2, checkboxFields, formValues, {}, textFields[2].params.disableIfPrevOmitted)).toBe(true)
        expect(isDisabledText(textFields, 3, checkboxFields, formValues, {}, textFields[3].params.disableIfPrevOmitted)).toBe(true)
        expect(isDisabledText(textFields, 4, checkboxFields, formValues, {}, textFields[4].params.disableIfPrevOmitted)).toBe(true)
    })

    it('Возвращает true для города если регион указан некорректно', () => {
        const syncErrors = { 'widget:region': 'Error' }
        const patchedFormValues = { ...formValues, 'widget:region': 'Hello World' }

        expect(isDisabledText(textFields, 0, checkboxFields, patchedFormValues, syncErrors, textFields[1].params.disableIfPrevOmitted)).toBe(false)

    })

    it('Возвращает false для города и true для улицы, дома и квартиры если указан регион', () => {
        const patchedFormValues = { ...formValues, 'widget:region': 'Hello World' }

        expect(isDisabledText(textFields, 0, checkboxFields, patchedFormValues, {}, textFields[0].params.disableIfPrevOmitted)).toBe(false)
        expect(isDisabledText(textFields, 1, checkboxFields, patchedFormValues, {}, textFields[1].params.disableIfPrevOmitted)).toBe(false)
        expect(isDisabledText(textFields, 2, checkboxFields, patchedFormValues, {}, textFields[2].params.disableIfPrevOmitted)).toBe(true)
        expect(isDisabledText(textFields, 3, checkboxFields, patchedFormValues, {}, textFields[3].params.disableIfPrevOmitted)).toBe(true)
        expect(isDisabledText(textFields, 4, checkboxFields, patchedFormValues, {}, textFields[4].params.disableIfPrevOmitted)).toBe(true)
    })

    it('Возвращает true только для улицы если указано все кроме дома', () => {
        const patchedFormValues = {
            ...formValues,
            'widget:region': 'Hello World',
            'widget:city': 'Hello World',
            'widget:street': 'Hello World',
        }

        expect(isDisabledText(textFields, 0, checkboxFields, patchedFormValues, {}, textFields[1].params.disableIfPrevOmitted)).toBe(false)
        expect(isDisabledText(textFields, 1, checkboxFields, patchedFormValues, {}, textFields[1].params.disableIfPrevOmitted)).toBe(false)
        expect(isDisabledText(textFields, 2, checkboxFields, patchedFormValues, {}, textFields[2].params.disableIfPrevOmitted)).toBe(false)
        expect(isDisabledText(textFields, 3, checkboxFields, patchedFormValues, {}, textFields[3].params.disableIfPrevOmitted)).toBe(false)
        expect(isDisabledText(textFields, 4, checkboxFields, patchedFormValues, {}, textFields[4].params.disableIfPrevOmitted)).toBe(true)
    })
})

describe('Widget <WebFiasAddress /> -> utils -> isDisabledCheckbox()', () => {
    it('Возвращает true для улицы если не указан город', () => {
        expect(isDisabledCheckbox(textFields, 2, checkboxFields, formValues, {}, textFields[2].params.disableIfPrevOmitted)).toBe(true)
    })

    it('Возвращает false для улицы если указан город', () => {
        const patchedFormValues = {
            ...formValues,
            'widget:city': 'Hello World'
        }

        expect(isDisabledCheckbox(textFields, 2, checkboxFields, patchedFormValues, {}, textFields[2].params.disableIfPrevOmitted)).toBe(false)
    })

    it('Возвращает false для дома если улица опущена', () => {
        const patchedFormValues = {
            ...formValues,
            'widget:checkbox:street': true
        }

        expect(isDisabledCheckbox(textFields, 3, checkboxFields, patchedFormValues, {}, textFields[3].params.disableIfPrevOmitted)).toBe(false)
    })

    it('Возвращает true для квартиры если дом опущен', () => {
        const patchedFormValues = {
            ...formValues,
            'widget:checkbox:house': true
        }

        expect(isDisabledCheckbox(textFields, 4, checkboxFields, patchedFormValues, {}, textFields[4].params.disableIfPrevOmitted)).toBe(true)
    })
})

describe('Widget <WebFiasAddress /> -> utils -> getOption()', () => {
    it('Возвращает корректные заголовок и значение для улицы по ФИАС справочнику', () => {
        const option = {
            fiasId: 'f16404bb-14a0-43e5-8df6-abef067c564f',
            kladrId: '77000000000369100',
            street: 'Кутузовский',
            streetType: 'пер'
        }

        expect(getOption(option, 'STREET', 'ФИАС')).toStrictEqual({ title: 'пер Кутузовский', value: 'f16404bb-14a0-43e5-8df6-abef067c564f' })
    })

    it('Возвращает корректные заголовок и значение для города по КЛАДР справочнику', () => {
        const option = {
            fiasId: '0c5b2444-70a0-4932-980c-b4dc0d3f02b5',
            kladrId: '7700000000000',
            region: 'Москва',
            regionType: 'г'
        }

        expect(getOption(option, 'CITY', 'КЛАДР')).toStrictEqual({ title: 'г Москва', value: '7700000000000' })
    })
})

describe('Widget <WebFiasAddress /> -> utils -> getParentId()', () => {
    it('У региона нет родителя', () => {
        expect(getParentId(textFields, 0, checkboxFields, formValues)).toBeUndefined()
    })

    it('Возвращает id региона в качестве родителя для города', () => {
        const patchedFormValues = {
            ...formValues,
            'widget:region': '29251dcf-00a1-4e34-98d4-5c47484a36d4'
        }

        expect(getParentId(textFields, 1, checkboxFields, patchedFormValues)).toBe(patchedFormValues['widget:region'])
    })

    it('Возвращает id города в качестве родителя для дома если улица опущена', () => {
        const patchedFormValues = {
            ...formValues,
            'widget:city': '29251dcf-00a1-4e34-98d4-5c47484a36d4',
            'widget:checkbox:street': true
        }

        expect(getParentId(textFields, 3, checkboxFields, patchedFormValues)).toBe(patchedFormValues['widget:city'])
    })
})

describe('Widget <WebFiasAddress /> -> utils -> getInitialQuery()', () => {
    const references = {
        region: {
            properties: {
                region: "Московская",
                regionType: "обл",
            }
        },
        city: {
            properties: {
                region: "Москва",
                regionType: "г"
            }
        },
        street: {
            properties: {
                street: "Кутузовский",
                streetType: "пер"
            }
        },
        house: {
            properties: {
                house: "1/8",
                houseType: ""
            }
        }
    }

    it('Возвращает корректные поисковые строки для региона, города и улицы', () => {
        expect(getInitialQuery(references, 'region', 'REGION')).toBe('обл Московская')
        expect(getInitialQuery(references, 'city', 'CITY')).toBe('г Москва')
        expect(getInitialQuery(references, 'street', 'STREET')).toBe('пер Кутузовский')
    })
})
