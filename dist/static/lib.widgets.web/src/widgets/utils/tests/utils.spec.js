import  { connectValidatorsWithCheckbox } from '../connect-validators-with-checkbox'

it('connectValidatorsWithCheckbox дополняет валидаторы значениями по чекбоксам и запоминает новые валидаторы', () => {
    const validators = [
        jest.fn()
    ]

    const connectedCheckbox = 'foo'

    const mapped = connectValidatorsWithCheckbox(validators, connectedCheckbox)
    expect(mapped.length).toBe(1)
    expect(mapped[0]('something', { foo: true }, 'something')).toBeUndefined()

    expect(validators[0]).not.toHaveBeenCalled()
    mapped[0]('something', { foo: false }, 'something')
    expect(validators[0]).toHaveBeenCalledWith('something', { foo: false }, 'something')

    const mapped2 = connectValidatorsWithCheckbox(validators, connectedCheckbox)
    expect(mapped).toBe(mapped2)
})
