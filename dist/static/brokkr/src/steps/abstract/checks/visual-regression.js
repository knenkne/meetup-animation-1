const df = require('../../../utils/define-functionality')
const { userEyesFocus } = require('../../../utils/user-eyes-focus')

const processResult = (result) => {
    if (result.some((oneResult) => !oneResult.isWithinMisMatchTolerance)) {
        console.log('Изображение в одном из разрешений не прошло минимального порога по различиям')
    }
}

const visualRegression = {

    checkDocumentRegression: df(
        /^внешний вид всего документа не должен был измениться$/,
        function checkDocumentRegression () {
            const { featureName, scenarioName } = this
            const result = browser.checkDocument({ featureName, scenarioName })
            processResult(result)
        }
    ),

    checkWorkAreaRegression: df(
        /^внешний вид рабочей области не должен был измениться$/,
        function checkDocumentRegression () {
            const { featureName, scenarioName } = this
            const result = browser.checkElement('#app', { featureName, scenarioName })
            processResult(result)
        }
    ),

    // TODO: не использовать
    checkElementRegression: df(
        /^внешний вид элемента "([^"]*)" не должен был измениться$/,
        function checkElementRegression (selector) {
            const { featureName, scenarioName } = this
            const result = browser.checkElement(selector, { featureName, scenarioName })
            processResult(result)
        }
    ),

    checkElementRegressionUEF: df(
        [
            /^внешний вид элемента в зрительном фокусе зрения не должен был измениться$/,
            /^внешний вид элемента в фокусе зрения не должен был измениться$/,
        ],
        function checkElementRegressionUEF () {
            const { featureName, scenarioName } = this
            const result = browser.checkElement(userEyesFocus.getSelector(), { featureName, scenarioName })
            processResult(result)
        }
    )
}

module.exports = visualRegression
