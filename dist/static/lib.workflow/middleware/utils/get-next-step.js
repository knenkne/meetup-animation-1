const _ = require('lodash')

const getNextStep = (states, currentState, eventName) => {

    const nextState = _.get(states, [currentState, 'events', eventName, 'to'])

    if (!nextState) {
        throw Error(`Для текущего состояния не объявлен обработчик события ${eventName}.
            Убедитесь, что в секции events файла конфигурации flow-config для состояния ${currentState} объявлено
            допустимое событие с именем '${eventName}' и указан атрибут to.`)
    }

    return nextState
}

module.exports = getNextStep
