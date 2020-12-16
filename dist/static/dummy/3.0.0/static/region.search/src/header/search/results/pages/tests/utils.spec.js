import _ from 'lodash'

import {
    getOperationIconName,
    select
} from '../utils'
import { PAGES_CHAT_UID } from '../../../constants'
import { iconDictionary } from '../dictionaries'

import data from './data.json'

describe('Тестирование модуля utils:', () => {
    it('getOperationIconName default', () => {
        const result = getOperationIconName({ id: 'unExitsUid' })

        expect(result).toBe('payandtrasfOtherbank')
    })

    it('getOperationIconName chat', () => {
        const result = getOperationIconName({ id: PAGES_CHAT_UID })

        expect(result).toBe('chat')
    })

    it('getOperationIconName all', () => {
        const testDict = { ...data.pictures }

        expect(Object.keys(testDict).length).toBe(Object.keys(iconDictionary).length)
        _.forEach(testDict, (value, key) => expect(value).toBe(iconDictionary[key]))
    })

    it('select Page', () => {
        const result = select({ id: 'not_special_case_id' })

        expect(result).not.toBe(true)
    })

    it('select Chat', () => {
        const result = select({ id: PAGES_CHAT_UID })

        expect(result).toBe(PAGES_CHAT_UID)
    })
})
