const assert = require('assert')

const df = require('../../../utils/define-functionality')
const { userEyesFocus } = require('../../../utils/user-eyes-focus')
const selectors = require('../../../utils/dictionaries/selectors')
const attributes = require('../../../utils/dictionaries/attributes')
const cssProperties = require('../../../utils/dictionaries/css-properties')

const getBlock = (word, index) => userEyesFocus.getElementBySelector(selectors[word], index)
const getAllBlock = (word) => userEyesFocus.getAllElementsBySelector(selectors[word])
const isSelected = (word) => getBlock(word).isSelected()
const isEnabled = (word) => getBlock(word).isEnabled()
const isFocused = (word) => getBlock(word).hasFocus()

const semantic = {

    checkVisibleByBlock: df(
        /^(?:присутствует|отображается) блок "([^"]*)"$/,
        (word) => {
            assert(getBlock(word))
        }
    ),

    checkSelectedByBlock: df(
        /^блок "([^"]*)" выбран$/,
        (word) => {
            assert(isSelected(word))
        }
    ),

    checkNotSelectedByBlock: df(
        /^блок "([^"]*)" не выбран$/,
        (word) => {
            assert(!isSelected(word))
        }
    ),

    checkEnabledByBlock: df(
        /^блок "([^"]*)" доступен для ввода$/,
        (word) => {
            assert(isEnabled(word))
        }
    ),

    checkNotEnabledByBlock: df(
        /^блок "([^"]*)" заблокирован$/,
        (word) => {
            assert(!isEnabled(word))
        }
    ),

    checkFocusByBlock: df(
        [
            /^блок "([^"]*)" в фокусе$/,
            /^блок "([^"]*)" в фокусе ввода$/,
        ],
        (word) => {
            assert(isFocused(word))
        }
    ),

    checkBlurByBlock: df(
        [
            /^блок "([^"]*)" не в фокусе$/,
            /^блок "([^"]*)" не в фокусе ввода$/,
        ],
        (word) => {
            assert(!isFocused(word))
        }
    ),

    checkCountByBlock: df(
        /^(?:присутствует|отображается) "([^"]*)" блок(?:а|ов)? "([^"]*)"$/,
        (count, word) => {
            assert.equal(
                getAllBlock(word).length,
                Number(count)
            )
        }
    ),

    checkMissingByBlock: df(
        /^(?:отсутствует|не отображается) блок "([^"]*)"$/,
        (word) => {
            assert.equal(
                getAllBlock(word).length,
                0
            )
        }
    ),

    checkValueByField: df(
        /^(?:"(\d*)" )?поле ввода "([^"]*)" содержит значение "([^"]*)"$/,
        (index, word, expectedText) => {
            assert.equal(
                getBlock(word, index).getValue(),
                expectedText
            )
        }
    ),

    checkTextByBlock: df(
        /^(?:"(\d*)" )?блок "([^"]*)" содержит текст "([^"]*)"$/,
        (index, word, expectedText) => {
            assert.equal(
                getBlock(word, index).getText(),
                expectedText
            )
        }
    ),

    checkTextWithoutBreaksByBlock: df(
        /^(?:"(\d*)" )?блок "([^"]*)" содержит текст без переводов строки "([^"]*)"$/,
        (index, word, expectedText) => {
            const currentText = getBlock(word, index)
                .getText()
                .replace(/(\r\n\t|\n|\r\t)/gm, ' ')

            assert.equal(currentText, expectedText, ` currentText: "${currentText}"\nexpectedText: "${expectedText}"`)
        }
    ),

    checkAttributeByBlock: df(
        /^у (?:"(\d*)" )?блока "([^"]*)" атрибут "([^"]*)" равен "([^"]*)"$/,
        (index, word, attribute, attributeValue) => {
            assert.equal(
                getBlock(word, index).getAttribute(attributes[attribute]),
                attributeValue
            )
        }
    ),

    checkCSSByBlock: df(
        /^у (?:"(\d*)" )?блока "([^"]*)" свойство "([^"]*)" равно "([^"]*)"$/,
        (index, word, cssName, expectedCssValueName) => {
            const { name, availableValues } = cssProperties[cssName]

            assert.equal(
                getBlock(word, index).getCssProperty(name).value,
                availableValues[expectedCssValueName]
            )
        }
    ),

    checkAttributeByBlockInFocus: df(
        [
            /^у блока в фокусе атрибут "([^"]*)" равен "([^"]*)"$/,
            /^у блока в зрительном фокусе атрибут "([^"]*)" равен "([^"]*)"$/,
        ],
        (attribute, attributeValue) => {
            assert.equal(
                userEyesFocus
                    .getBlock()
                    .getAttribute(attributes[attribute]),
                attributeValue
            )
        }
    ),

    checkCSSByBlockInFocus: df(
        [
            /^у блока в фокусе свойство "([^"]*)" равно "([^"]*)"$/,
            /^у блока в зрительном фокусе свойство "([^"]*)" равно "([^"]*)"$/,
        ],
        (cssName, expectedCssValueName) => {
            // TODO: не сравнивать в упор! Например, цвета
            assert.equal(
                userEyesFocus
                    .getBlock()
                    .getCssProperty(cssProperties[cssName].name)
                    .value,
                cssProperties[cssName]
                    .availableValues[expectedCssValueName]
            )
        }
    ),

    checkBlockText: df(
        [
            /^пользователь проверяет текст блока в фокусе равный "([^"]*)"$/,
            /^пользователь проверяет текст блока в зрительном фокусе равный "([^"]*)"$/,
        ],
        (expectedText) => {
            const blockText = userEyesFocus.getBlock().getText()
            assert.equal(blockText, expectedText, `Блок в зрительном фокусе имеет текст ${blockText} !== ожидаемому ${expectedText}`)
        }
    ),

}

module.exports = semantic
