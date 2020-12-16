const df = require('../../../utils/define-functionality')
const { userEyesFocus } = require('../../../utils/user-eyes-focus')
const keyboard = require('../../../utils/dictionaries/keyboard')
const selectors = require('../../../utils/dictionaries/selectors')
const config = require('../../../utils/config')

const semantic = {

    pressKeyButton: df(
        /^пользователь нажимает клавишу "([^"]*)"$/,
        (keyName) => {
            browser.pause(config.userKeyboardTimeout)
            browser.keys(keyboard[keyName])
        }
    ),

    pressKeyButtons: df(
        /^пользователь нажимает клавиши "([^"]+)", "([^"]+)"(?:, "([^"]+)")?(?:, "([^"]+)")?$/,
        (...args) => {
            browser.pause(config.userKeyboardTimeout)
            browser.keys(
                args
                    .filter((key) => key)
                    .map((keyName) => keyboard[keyName])
            )
        }
    ),

    waitLoadingStop: df(
        /^пользователь ждет окончания загрузки$/,
        function waitLoadingStop () {
            browser.waitUntil(
                () => !browser.$('.loader,[data-unit="loader"]').isVisible(),
                config.loadTimeout,
                `Загрузка страницы ${config.loadTimeout} миллисекунд`
            )

            this.checkAccessibility({ checkUrl: false })
        }
    ),

    waitForVisible: df(
        /^пользователь ждет появления блока "([^"]*)"$/,
        (word) => {
            browser.waitForVisible(selectors[word], config.waitForTimeout)
        }
    ),

    waitForExist: df(
        /^пользователь ждет добавления блока "([^"]*)"$/,
        (word) => {
            browser.waitForExist(selectors[word], config.waitForTimeout)
        }
    ),

    waitForVisibleFalse: df(
        /^пользователь ждет исчезновения блока "([^"]*)"$/,
        (word) => {
            browser.waitForVisible(selectors[word], config.waitForTimeout, true)
        }
    ),

    waitForExistFalse: df(
        /^пользователь ждет удаления блока "([^"]*)"$/,
        (word) => {
            browser.waitForExist(selectors[word], config.waitForTimeout, true)
        }
    ),

    clickSemanticButton: df(
        /^пользователь нажимает (?:"(\d*)" )?"([^"]*)"$/,
        function clickSemanticButton (index, word) {
            userEyesFocus
                .getElementBySelector(selectors[word], index)
                .click()

            this.checkAccessibility()
        }
    ),

    inputSemantic: df(
        /^пользователь вводит в (?:"(\d*)" )?блок "([^"]*)" значение "([^"]*)"$/,
        function inputSemantic (index, word, value) {
            userEyesFocus
                .getElementBySelector(selectors[word], index)
                .addValue(value)

            this.checkAccessibility()
        }
    ),

    clearSemantic: df(
        /^пользователь удаляет значение в (?:"(\d*)" )?блок "([^"]*)"$/,
        function clearSemantic (index, word) {
            userEyesFocus
                .getElementBySelector(selectors[word], index)
                .clearElement()

            this.checkAccessibility()
        }
    ),

    hoverSemanticBlock: df(
        /^пользователь наводит курсор на (?:"(\d*)" )?"([^"]*)"$/,
        function hoverSemanticBlock (index, word) {
            userEyesFocus
                .getElementBySelector(selectors[word], index)
                .moveToObject()

            this.checkAccessibility()
        }
    ),

    hoverSemanticBlockWithText: df(
        /^пользователь наводит курсор на (?:"(\d*)" )?"([^"]*)" с текстом "([^"]*)"$/,
        function hoverSemanticBlockWithText (index, word, expectedText) {
            userEyesFocus
                .getElementBySelectorAndText(selectors[word], expectedText, index)
                .moveToObject()

            this.checkAccessibility()
        }
    ),

    clickSemanticButtonWithText: df(
        /^пользователь нажимает (?:"(\d*)" )?"([^"]*)" с текстом "([^"]*)"$/,
        function clickSemanticButtonWithText (index, word, expectedText) {
            userEyesFocus
                .getElementBySelectorAndText(selectors[word], expectedText, index)
                .click()

            this.checkAccessibility()
        }
    ),

    saveSemanticBlock: df(
        [
            /^пользователь зрительно фокусируется на (?:"(\d*)" )?блок "([^"]*)"$/,
            /^пользователь фокусируется на (?:"(\d*)" )?блок "([^"]*)"$/,
        ],
        (index, word) => {
            userEyesFocus.setBlock(userEyesFocus.getElementBySelector(selectors[word], index))
        }
    ),

    saveSemanticBlockWithText: df(
        [
            /^пользователь зрительно фокусируется на (?:"(\d*)" )?блок "([^"]*)" с текстом "([^"]*)"$/,
            /^пользователь фокусируется на (?:"(\d*)" )?блок "([^"]*)" с текстом "([^"]*)"$/,
        ],
        (index, word, expectedText) => {
            userEyesFocus.setBlock(userEyesFocus.getElementBySelectorAndText(selectors[word], expectedText, index))
        }
    ),

}

module.exports = semantic
