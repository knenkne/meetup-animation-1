import { getIconName } from '../utils'

it('getIconName возвращает корректные иконки карт', () => {
    expect(getIconName('blocked', 'card')).toBe('card')
    expect(getIconName('anything', 'card')).toBe('card')
    expect(getIconName('visaMir', 'card')).toBe('visaCardMir')
    expect(getIconName('mastercardMir', 'card')).toBe('masterCardMir')
    expect(getIconName('$', 'card')).toBe('card')
})

it('getIconName возвращает корректные иконки платёжных счетов', () => {
    expect(getIconName('blocked', 'ctaccount')).toBe('ctaccountBlocked')
    expect(getIconName('rub', 'ctaccount')).toBe('ctaccountRub')
    expect(getIconName('bla-bla-bla', 'ctaccount')).toBe('box')
    expect(getIconName('$', 'ctaccount')).toBe('box')
})

it('getIconName возвращает корректные иконки кредитов', () => {
    expect(getIconName('mortgage', 'loan')).toBe('wallet')
    expect(getIconName('$', 'loan')).toBe('wallet')
})

it('getIconName возвращает корректные иконки металлов', () => {
    expect(getIconName('ag', 'metal')).toBe('box')
    expect(getIconName('$', 'metal')).toBe('box')
})

it('getIconName возвращает корректные иконки целей', () => {
    expect(getIconName('other', 'goal')).toBe('other')
    expect(getIconName('business', 'goal')).toBe('other')
    expect(getIconName('$', 'goal')).toBe('other')
})

it('getIconName возвращает корректные иконки счетов и офферов', () => {
    expect(getIconName('$', 'account')).toBe('box')
    expect(getIconName('$', 'offer')).toBe('box')
})

it('getIconName возвращает корректные иконки при неверно переданных параметрах', () => {
    expect(getIconName('invalid-parameter', 'invalid-parameter')).toBe('box')
})
