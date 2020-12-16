import _ from 'lodash'

class Currency {}

Currency.options = {
    symbols: {
        rub: '₽',
        usd: '$',
        gbp: '£',
        eur: '€',
        rur: '₽',
        cad: '$',
        cny: '¥',
        hkd: '$',
        sgd: '$'
    }
}

function Input() {
    return _.identity
}

Input.typeaheadFactory = () => _.identity

module.exports = {
    Input,
    Currency,
    Link: _.identity,
    Icon: _.identity,
    Button: _.identity,
    Loader: {
        Button: _.identity
    },
    Typography: {
        theme: {
            body: ''
        }
    },
    setProjectId: _.identity
}
