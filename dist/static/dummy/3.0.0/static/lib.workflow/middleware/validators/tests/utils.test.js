const { expect } = require('chai')

const { createMessageWithValidationError } = require('../helpers')

describe('Workflow utils', () => {
    it('createMessageWithValidationError возвращает ошибку с типом VALIDATION', () => {
        const expected = {
            type: 'validation',
            title: 'title',
            text: 'text',
            code: 'abc',
            uuid: 'uuid'
        }

        const actual = createMessageWithValidationError('title', 'text', 'abc', 'uuid')

        expect(actual).to.eql(expected)
    })
})
