module.exports = (hbs, { messages, logger }) => {
    function getMessage (name) {
        const message = messages[name]
        if (message === void 0) {
            logger.error(`message by key "${name}" not found`)
        }
        return message || ''
    }
    function ifNotEq (a, b, context) {
        if (a === b) {
            return ''
        }
        return context.fn(this)
    }
    function ifEq (a, b, context) {
        if (a === b) {
            return context.fn(this)
        }
        return ''
    }
    function toJSON (obj) {
        if (typeof obj === 'object') {
            return JSON.stringify(obj)
        }
        return obj
    }

    hbs.registerHelper('message', getMessage)
    hbs.registerHelper('ifNotEq', ifNotEq)
    hbs.registerHelper('ifEq', ifEq)
    hbs.registerHelper('toJSON', toJSON)
}
