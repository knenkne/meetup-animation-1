import { log } from '..'

jest.mock('@sbol/webpage.provider.bootstrap')

describe('Logging ::', () => {
    const callAllMethods = (logger, ...args) => {
        logger.trace('trace', ...args)
        logger.debug('debug', ...args)
        logger.info('info', ...args)
        logger.warn('warn', ...args)
        logger.error('error', ...args)
    }

    beforeAll(() => {
        console.trace = jest.fn()
        console.debug = jest.fn()
        console.info = jest.fn()
        console.warn = jest.fn()
        console.error = jest.fn()
        console.log = jest.fn()
    })
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('is available', () => {
        expect(log).toBeDefined()
    })

    it('has all required methods', () => {
        expect(log.trace).toBeDefined()
        expect(log.debug).toBeDefined()
        expect(log.info).toBeDefined()
        expect(log.warn).toBeDefined()
        expect(log.error).toBeDefined()
    })

    it('calls nothing if level is silent', () => {
        log.setLevel('SILENT')

        callAllMethods(log)

        expect(console.trace).not.toHaveBeenCalled()
        expect(console.debug).not.toHaveBeenCalled()
        expect(console.info).not.toHaveBeenCalled()
        expect(console.warn).not.toHaveBeenCalled()
        expect(console.error).not.toHaveBeenCalled()
        expect(console.log).not.toHaveBeenCalled()
    })

    it('calls console with respect to level setting', () => {
        log.setLevel('INFO')

        callAllMethods(log, 1, 2, 3)

        expect(log.getLevel()).toBe(log.levels.INFO)
        expect(console.trace).not.toHaveBeenCalled()
        expect(console.debug).not.toHaveBeenCalled()
        expect(console.info).toHaveBeenCalledWith({ __moduleId: void 0 }, 'info', 1, 2, 3)
        expect(console.warn).toHaveBeenCalledWith({ __moduleId: void 0 }, 'warn', 1, 2, 3)
        expect(console.error).toHaveBeenCalledWith({ __moduleId: void 0 }, 'error', 1, 2, 3)
        expect(console.log).not.toHaveBeenCalled()
    })

    it('calls console with circular value', () => {
        log.setLevel('TRACE')
        const circular = { value: 'any value' }
        circular.cycle = circular

        callAllMethods(log, circular)

        expect(console.info).toHaveBeenCalledWith({ __moduleId: void 0 }, 'info', circular)
    })
})
