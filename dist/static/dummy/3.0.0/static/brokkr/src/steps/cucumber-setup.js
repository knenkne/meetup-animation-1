const path = require('path')
const fs = require('fs')

const { Before, After, AfterAll, defineStep } = require('cucumber')
const chalk = require('chalk')

const autoAccessibility = require('../utils/auto-accessibility')

const actions = require('./abstract/actions')
const checks = require('./abstract/checks')
const business = require('./business')

const steps = {
    ...actions,
    ...checks,
    ...business
}

function saveScenarioMeta (testCase) {
    if (testCase.scenario) {
        this.featureName = testCase.scenario.feature.name
        this.scenarioName = testCase.scenario.name

        console.info(chalk.blue(`[${testCase.scenario.name}](${testCase.scenario.uri}:${testCase.scenario.line})`))
    } else {
        // eslint-disable-next-line no-sync, comment: синхронно для уверенности в последовательности комментариев
        const featureText = fs.readFileSync(path.resolve(testCase.sourceLocation.uri), 'utf8')
        this.featureName = featureText.match(/Функционал: ?(.+)/)[1]
        this.scenarioName = testCase.pickle.name

        console.info(chalk.blue(`[${testCase.pickle.name}](${testCase.sourceLocation.uri}:${testCase.sourceLocation.line})`))
    }
}

function checkAccessibility ({ checkUrl = true } = {}) {
    if (autoAccessibility.allowed && !(checkUrl && this.url === browser.getUrl())) {
        this.url = browser.getUrl()
        steps.checkAccessibility.call(this)
    }
}

function addCheckAccessibility () {
    this.checkAccessibility = checkAccessibility
}

Object.keys(steps).forEach((stepName) => {
    const step = steps[stepName]
    step.r.forEach((regexp) => {
        defineStep(regexp, step)
    })
})

Before(saveScenarioMeta)
Before(addCheckAccessibility)
After('@sbol', steps.clickLogout)
After(steps.clearBlockFocus)

// Обратная совместимость со старыми кукумберами и либами
if (AfterAll) {
    AfterAll(steps.createAccessibilityReport)
} else {
    After(steps.createAccessibilityReport)
}
