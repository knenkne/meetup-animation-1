const path = require('path')
const fs = require('fs')

const _ = require('lodash')
const axeSource = require('axe-core').source
const makeDir = require('make-dir')

const df = require('../../../utils/define-functionality')
const isAccessibilityWarning = require('../../../utils/is-accessibility-warning')

const REPORT_INDENTATION = 2
const reportPath = path.resolve('reports', 'accessibility')
const reportMetaPath = path.resolve(reportPath, 'meta')
const reportJsonPath = path.resolve(reportPath, 'report.json')
const reportHtmlPath = path.resolve(reportPath, 'report.html')
const reportHtmlTemplatePath = path.resolve(__dirname, 'report.html')

const readFromFile = () => {
    if (fs.existsSync(reportJsonPath)) {
        return JSON.parse(fs.readFileSync(reportJsonPath, 'utf8'))
    }

    return {
        errors: [],
        warnings: [],
        checksTotal: 0
    }
}

const accessibilityViolations = readFromFile()

const uniqueNode = (node) => node.failureSummary + node.html

const saveViolation = (violation, nodes, severity) => {
    // Группируем по id проверки
    if (nodes.length) {
        const existsViolation = _.find(severity, { id: violation.id })

        if (existsViolation) {
            // Важны элементы, не прошедшие проверку, и субъект проверки, дубликаты можно отфильтровать
            existsViolation.nodes = _.uniqBy([...existsViolation.nodes, ...nodes], uniqueNode)
        } else {
            severity.push({ ...violation, nodes })
        }
    }
}

const accessibility = {
    checkAccessibility: df(
        /^проверяется доступность страницы$/,
        function checkAccessibility () {
            makeDir.sync(reportPath)
            const { featureName, scenarioName, url } = this
            const { checksTotal } = accessibilityViolations

            makeDir.sync(reportMetaPath)

            /* eslint-disable-next-line no-undef, comment: $ является аналогом browser */
            const html = $('html').getHTML()
                .replace(
                    'if (typeof window.initialized === \'undefined\') { ' +
                    'document.getElementById(\'unsupported\').style.display = \'block\'; stopLoader();' +
                    ' }',
                    'stopLoader();'
                )

            browser.saveScreenshot(path.resolve(reportMetaPath, `check-${checksTotal}.png`))
            fs.writeFileSync(path.resolve(reportMetaPath, `check-${checksTotal}.html`), html, 'utf8')
            accessibilityViolations.checksTotal += 1
            
            const accessibilityResult = browser.executeAsync((axeCode, done) => {
                if (!window.axe) {
                    eval(axeCode) // eslint-disable-line no-eval, comment: добавляем axe в страницу
                }
                
                window
                    .axe
                    .run(document)
                    .then(done)
            }, axeSource)
            

            const nodePolyfill = {
                url,
                featureName,
                scenarioName,
                checkNumber: checksTotal
            }

            accessibilityResult.value.violations.forEach((violation) => {
                // Состояние пригодится для исправления замечания
                violation.nodes.forEach((node) => {
                    Object.assign(node, nodePolyfill)
                })

                const [warningNodes, errorNodes] = _.partition(violation.nodes, isAccessibilityWarning)

                saveViolation(violation, errorNodes, accessibilityViolations.errors)
                saveViolation(violation, warningNodes, accessibilityViolations.warnings)
            })
        }
    ),

    createAccessibilityReport: df(
        /^составляется отчет по доступности$/,
        () => {
            makeDir.sync(reportPath)
            const jsonReport = JSON.stringify(accessibilityViolations, null, REPORT_INDENTATION)
            const htmlReport = fs.readFileSync(reportHtmlTemplatePath, 'utf8')
                .replace('<% report %>', jsonReport)

            fs.writeFileSync(reportJsonPath, jsonReport, 'utf8')
            fs.writeFileSync(reportHtmlPath, htmlReport, 'utf8')
            /* eslint-enable no-sync */
        }
    )
}

module.exports = accessibility
