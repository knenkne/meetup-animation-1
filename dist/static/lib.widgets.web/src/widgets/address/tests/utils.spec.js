import {
    getTruthyValue,
    getFullContext,
    createQuery,
    getItems,
    getInitialQuery,
    getPropertiesOfCountry,

    isEmptyInput,
    isDisabledRegion,
    isDisabledDistrict,
    isDisabledSettlement,
    isDisabledStreet,
    isDisabledStreetCheckbox,
    isDisabledBuilding,
    isDisabledBuildingCheckbox,
    isDisabledQuarters,
    isDisabledQuartersCheckbox
} from '../utils'

describe('Widget <WebAddress /> -> utils', () => {
    it('getTruthyValue возвращает либо == true значение, либо void 0', () => {
        expect(getTruthyValue({ a: 'a' }, 'a')).toBe('a')
        expect(getTruthyValue({}, 'a')).toBeUndefined()
        expect(getTruthyValue({ a: false }, 'a')).toBeUndefined()
        expect(getTruthyValue({ a: '' }, 'a')).toBeUndefined()
    })

    it('getFullContext собирает максимально возможный контекст для поиска', () => {
        expect(getFullContext({
            regionField: 'a',
            districtField: 'b',
            settlementField: 'c',
            streetField: 'd',
            buildingField: 'e'
        }, {
            region: { id: 'regionField' },
            district: { id: 'districtField' },
            settlement: { id: 'settlementField' },
            street: { id: 'streetField' },
            building: { id: 'buildingField' }
        })).toEqual({
            region: 'a',
            district: 'b',
            settlement: 'c',
            street: 'd',
            building: 'e'
        })
        expect(getFullContext({
            regionField: 'a',
            districtField: '',
            settlementField: 'c',
            streetField: void 0,
            buildingField: 'e'
        }, {
            region: { id: 'regionField' },
            district: { id: 'districtField' },
            settlement: { id: 'settlementField' },
            street: { id: 'streetField' },
            building: { id: 'buildingField' }
        })).toEqual({
            region: 'a',
            district: void 0,
            settlement: 'c',
            street: void 0,
            building: 'e'
        })
    })

    it('createQuery собирает максимально возможный объект из переданных свойств, причем ниже переданного контекста поиска', () => {
        expect(createQuery('settlement', {
            regionField: 'a',
            districtField: 'b',
            settlementField: 'c',
            streetField: 'd',
            buildingField: 'e'
        }, {
            region: { id: 'regionField' },
            district: { id: 'districtField' },
            settlement: { id: 'settlementField' },
            street: { id: 'streetField' },
            building: { id: 'buildingField' }
        }, '1')).toEqual({
            region: 'a',
            district: 'b',
            context: 'settlement',
            pid: '1',
            limit: 10
        })
    })


    it('getItems тянет items из references по указаному referenceId', () => {
        const items = []
        expect(getItems({ reference: { items } }, 'reference')).toBe(items)
    })

    it('getInitialQuery предоставляет начальные значения для отображения', () => {
        const items = [{
            value: '1',
            title: 'foo'
        }]
        expect(getInitialQuery({ reference: { items } }, { referenceId: 'reference', value: '1' })).toBe('foo')
        expect(getInitialQuery({ reference: { items } }, { referenceId: 'reference', value: '2' })).toBe('')
        expect(getInitialQuery({ reference: { items } }, { referenceId: 'reference2', value: '1' })).toBe('')
    })

    it('getPropertiesOfCountry предоставляет suggestUrl (если есть) по имеющимся значениям из имеющихся справочников', () => {
        const items = [{
            value: '1',
            title: 'foo',
            properties: {
                suggestUrl: 'bar'
            }
        }]
        expect(getPropertiesOfCountry({ reference: { items } }, 'reference', '1').suggestUrl).toBe('bar')
        expect(getPropertiesOfCountry({ reference: { items } }, 'reference', '2')).toBeUndefined()
        expect(getPropertiesOfCountry({ reference: { items } }, 'reference2', '1')).toBeUndefined()
    })

    it('isEmptyInput возвращает true, если есть поле ввода и оно пустое', () => {
        expect(isEmptyInput('foo', { bar: '' }, { 'foo': { id: 'bar', readonly: false } })).toBe(true)
        expect(isEmptyInput('foo', { bar: 'baz' }, { 'foo': { id: 'bar', readonly: false } })).toBe(false)
        expect(isEmptyInput('foo', { bar: 'baz' }, { 'foo': { id: 'bar', readonly: true } })).toBe(false)
    })
    it('isDisabledRegion зависимо от отображения вышестоящих полей', () => {
        expect(isDisabledRegion({ country: '' }, {
            country: { id: 'country', readonly: false }
        })).toBe(true)
        expect(isDisabledRegion({ country: 'foo' }, {
            country: { id: 'country', readonly: false }
        })).toBe(false)
        expect(isDisabledRegion({ country: 'foo' }, {
            country: { id: 'country', readonly: true }
        })).toBe(false)
    })

    it('isDisabledDistrict зависимо от отображения вышестоящих полей', () => {
        expect(isDisabledDistrict({ country: '', region: '' }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false }
        })).toBe(true)
        expect(isDisabledDistrict({ country: 'foo', region: 'foo' }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false }
        })).toBe(false)
        expect(isDisabledDistrict({ country: 'foo', region: 'foo' }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: true }
        })).toBe(false)
    })

    it('isDisabledSettlement зависимо от отображения вышестоящих полей', () => {
        expect(isDisabledSettlement({ country: '', region: '', district: '' }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false }
        })).toBe(true)
        expect(isDisabledSettlement({ country: 'foo', region: 'foo', district: 'foo' }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false }
        })).toBe(false)
        expect(isDisabledSettlement({ country: 'foo', region: 'foo', district: 'foo' }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: true }
        })).toBe(false)
    })

    it('isDisabledStreet зависимо от отображения вышестоящих полей', () => {
        expect(isDisabledStreet({
            country: 'foo',
            region: 'foo',
            district: 'foo',
            settlement: '',
            streetCheckbox: false
        }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false },
            settlement: { id: 'settlement', readonly: false },
            streetCheckbox: { id: 'streetCheckbox', readonly: false }
        })).toBe(true)
        expect(isDisabledStreet({
            country: 'foo',
            region: 'foo',
            district: 'foo',
            settlement: 'foo',
            streetCheckbox: false
        }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false },
            settlement: { id: 'settlement', readonly: false },
            streetCheckbox: { id: 'streetCheckbox', readonly: false }
        })).toBe(false)
        expect(isDisabledStreet({
            country: 'foo',
            region: 'foo',
            district: 'foo',
            settlement: 'foo',
            streetCheckbox: false
        }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false },
            settlement: { id: 'settlement', readonly: true },
            streetCheckbox: { id: 'streetCheckbox', readonly: false }
        })).toBe(false)
    })

    it('isDisabledBuilding зависимо от отображения вышестоящих полей', () => {
        expect(isDisabledBuilding({
            country: 'foo',
            region: 'foo',
            district: 'foo',
            settlement: 'foo',
            streetCheckbox: false,
            street: '',
            buildingCheckbox: false
        }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false },
            settlement: { id: 'settlement', readonly: false },
            streetCheckbox: { id: 'streetCheckbox', readonly: false },
            street: { id: 'street', readonly: false },
            buildingCheckbox: { id: 'buildingCheckbox', readonly: false }
        })).toBe(true)
        expect(isDisabledBuilding({
            country: 'foo',
            region: 'foo',
            district: 'foo',
            settlement: 'foo',
            streetCheckbox: false,
            street: 'foo',
            buildingCheckbox: false
        }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false },
            settlement: { id: 'settlement', readonly: false },
            streetCheckbox: { id: 'streetCheckbox', readonly: false },
            street: { id: 'street', readonly: false },
            buildingCheckbox: { id: 'buildingCheckbox', readonly: false }
        })).toBe(false)
        expect(isDisabledBuilding({
            country: 'foo',
            region: 'foo',
            district: 'foo',
            settlement: 'foo',
            streetCheckbox: false,
            street: 'foo',
            buildingCheckbox: false
        }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false },
            settlement: { id: 'settlement', readonly: false },
            streetCheckbox: { id: 'streetCheckbox', readonly: false },
            street: { id: 'street', readonly: true },
            buildingCheckbox: { id: 'buildingCheckbox', readonly: false }
        })).toBe(false)
    })

    it('isDisabledQuarters зависимо от отображения вышестоящих полей', () => {
        expect(isDisabledQuarters({
            country: 'foo',
            region: 'foo',
            district: 'foo',
            settlement: 'foo',
            streetCheckbox: false,
            street: 'foo',
            buildingCheckbox: false,
            building: '',
            quartersCheckbox: false
        }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false },
            settlement: { id: 'settlement', readonly: false },
            streetCheckbox: { id: 'streetCheckbox', readonly: false },
            street: { id: 'street', readonly: false },
            buildingCheckbox: { id: 'buildingCheckbox', readonly: false },
            building: { id: 'building', readonly: false },
            quartersCheckbox: { id: 'quartersCheckbox', readonly: false }
        })).toBe(true)
        expect(isDisabledQuarters({
            country: 'foo',
            region: 'foo',
            district: 'foo',
            settlement: 'foo',
            streetCheckbox: false,
            street: 'foo',
            buildingCheckbox: false,
            building: 'foo',
            quartersCheckbox: false
        }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false },
            settlement: { id: 'settlement', readonly: false },
            streetCheckbox: { id: 'streetCheckbox', readonly: false },
            street: { id: 'street', readonly: false },
            buildingCheckbox: { id: 'buildingCheckbox', readonly: false },
            building: { id: 'building', readonly: false },
            quartersCheckbox: { id: 'quartersCheckbox', readonly: false }
        })).toBe(false)
        expect(isDisabledQuarters({
            country: 'foo',
            region: 'foo',
            district: 'foo',
            settlement: 'foo',
            streetCheckbox: false,
            street: 'foo',
            buildingCheckbox: false,
            building: 'foo',
            quartersCheckbox: false
        }, {
            country: { id: 'country', readonly: false },
            region: { id: 'region', readonly: false },
            district: { id: 'district', readonly: false },
            settlement: { id: 'settlement', readonly: false },
            streetCheckbox: { id: 'streetCheckbox', readonly: false },
            street: { id: 'street', readonly: false },
            buildingCheckbox: { id: 'buildingCheckbox', readonly: false },
            building: { id: 'building', readonly: true },
            quartersCheckbox: { id: 'quartersCheckbox', readonly: false }
        })).toBe(false)
    })
})
