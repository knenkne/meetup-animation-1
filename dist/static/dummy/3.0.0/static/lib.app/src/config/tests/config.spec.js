import { getOptions, getInitOptions } from '@sbol/webpage.provider.bootstrap'

import {
    getAllFeatures,
    getFeature,
    getAllOptions,
    getOption,
    getFeatureValue,
    getFeatureOption
} from '..'

jest.mock('@sbol/webpage.provider.bootstrap')

// TODO: написать нормальные тесты
xdescribe('Config', () => {
    it('Feature & options', () => {
        getOptions.mockImplementation((...args) => args)
        getInitOptions.mockImplementation((...args) => args)

        expect(getOption('foo', 'lib.app')).toEqual([
            'lib.app',
            ['options', 'foo']
        ])
        expect(getAllOptions('lib.app')).toEqual(['lib.app', ['options']])
        expect(getAllFeatures('lib.app')).toEqual(['lib.app', ['features']])
        expect(getFeature('foo', 'lib.app')).toEqual([
            'lib.app',
            ['features', 'foo']
        ])
        expect(getFeatureValue('foo', 'lib.app')).toEqual([
            'lib.app',
            ['features', 'foo', 'value']
        ])
        expect(getFeatureOption('foo', 'bar', 'lib.app')).toEqual([
            'lib.app',
            ['features', 'foo', 'options', 'bar']
        ])
    })
})
