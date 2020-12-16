/* eslint-disable no-param-reassign */

const Ajv = require('ajv')

const ajv = new Ajv()
ajv.removeSchema('draft-04')
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'), 'draft-04')

const HTTP_INTERNAL_SERVER_ERROR = 500
const noop = () => void 0

module.exports = (rsSchema = null, rqSchema = null) =>
    (req, res, next) => {
        if (req.method !== 'POST') {
            return res
                .status(HTTP_INTERNAL_SERVER_ERROR)
                .send({
                    DEVELOPMENT_USE_ONLY: 'Такой ответ никогда не придёт в production и нужен исключительно для целей отладки',
                    title: 'Запрос к SBOL UI Workflow должен выполняться методом POST',
                    errors: []
                })
        }

        res.validateAndSend = rsSchema ?
            (body) => {
                const rsValidator = ajv.compile(rsSchema)

                return rsValidator(body) ?
                    res.send(body) :
                    res
                        .status(HTTP_INTERNAL_SERVER_ERROR)
                        .send({
                            DEVELOPMENT_USE_ONLY: 'Такой ответ никогда не придёт в production и нужен исключительно для целей отладки',
                            title: 'Ответ не прошёл валидацию по схеме',
                            errors: rsValidator.errors,
                            original: body
                        })
            } :
            noop

        if (rqSchema) {
            const rqValidator = ajv.compile(rqSchema)

            if (rqValidator(req.body)) {
                return next()
            }

            return res
                .status(HTTP_INTERNAL_SERVER_ERROR)
                .send({
                    DEVELOPMENT_USE_ONLY: 'Такой ответ никогда не придёт в production и нужен исключительно для целей отладки',
                    title: 'Запрос не прошёл валидацию по схеме',
                    errors: rqValidator.errors
                })
        }

        return next()
    }
