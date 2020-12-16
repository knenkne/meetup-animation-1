import {
    debitCardClaimsMapped,
    virtualCardClaimsMapped,
    loanCardClaimsMapped,
} from '../claims'

import {
    virtualCardClaim,
    creditCardClaim,
    debitCardClaim
} from './fixture'

describe('Заявки на карты.', () => {
    it('ссылка на заявку дебетовой карты из config.history', () => {
        expect(debitCardClaimsMapped(debitCardClaim)[0].href).toBe('/sbtsbol/private/cards/debit#?document=00p12_000300000020000742818&archive=false')
    })
    it('ссылка на заявку кредитной карты', () => {
        expect(loanCardClaimsMapped(creditCardClaim)[0].href).toBe('/cards/credit#/?id=00p12_000300000020000742818')
    })
    it('ссылка на заявку виртуальной карты которой нет в config.history и у которой есть урл', () => {
        expect(virtualCardClaimsMapped(virtualCardClaim)[0].href).toContain('/PhizIC/private/payments/default-action.do?history=true&id=795940741&ufsDocumentId=00GF_0000000000000380305&stateCode=INITIAL&objectFormName=UfsCreditCardClaim')
    })
})
