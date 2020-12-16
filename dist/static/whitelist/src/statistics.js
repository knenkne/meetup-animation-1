const chalk = require('chalk')

const getRequiredByPath = require('./utils/get-required-by-path')

const recommendationMessage = `
Для устранения ошибок и предупреждений воспользуйтесь одной из двух стратегий:
  * Замена или отказ от уязвимой версии зависимости (через package.json, package-lock.json)
    или добавление требуемой зависимости
  * Обращение к платформе WEB SBOL по добавлению исключений в whitelist соответствующей проверки
    с предоставлением результатов собственного анализа проблемы
Подробнее смотрите в документации @sbol/whitelist.`

class Statistics {
    constructor () {
        this.warnings = []
        this.errors = []
    }

    addWarning (message, options = {}) {
        const { pkg, quiet, root, pathToProject, withDependencyPath, force } = options

        if (force) {
            this.addError(message, options)
        } else if (!quiet) {
            if (!root && pkg && withDependencyPath) {
                message += getRequiredByPath(pkg, pathToProject) // eslint-disable-line no-param-reassign, comment: это осознанное мутирование
            }

            this.warnings.push(message)
        }
    }

    addError (message, options = {}) {
        const { pkg, root, pathToProject, withDependencyPath } = options

        if (!root && pkg && withDependencyPath) {
            message += getRequiredByPath(pkg, pathToProject) // eslint-disable-line no-param-reassign, comment: это осознанное мутирование
        }

        this.errors.push(message)
    }

    printResult ({ root, cli, printToConsole } = {}) {
        let message = ''

        if (this.warnings.length && printToConsole) {
            message += this.warnings.map((m) => chalk.yellow(`⚠ warning: ${m}\n`)).join('')
        }
        if (this.errors.length && printToConsole) {
            message += this.errors.map((m) => chalk.red(`☒ error: ${m}\n`)).join('')
        }

        message += 'Итого:'

        if (this.warnings.length) {
            message += chalk.yellow(`\n    Предупреждений: ${this.warnings.length}`)
        }
        if (this.errors.length) {
            message += chalk.red(`\n    Ошибок: ${this.errors.length}`)
        }

        if (!this.warnings.length && !this.errors.length) {
            const result = root ?
                'Корневые зависимости приложения полностью валидны.' :
                'Все зависимости приложения полностью валидны.'
            message += chalk.green(`\n    Нет ошибок и предупреждений. ${result}`)
        } else {
            message += chalk.yellow(recommendationMessage)
        }

        if (printToConsole) {
            console.log(message)
        }

        if (this.errors.length && cli) {
            process.exit(1) // eslint-disable-line no-process-exit, comment: для CLI такой выход - норма
        }
    }

    result () {
        return {
            warnings: this.warnings,
            errors: this.errors
        }
    }
}

module.exports = Statistics
