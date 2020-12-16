const _ = require('lodash')

const df = require('../../../utils/define-functionality')
const { userEyesFocus } = require('../../../utils/user-eyes-focus')

const titledClicker = (selector, title) => _.find(
    userEyesFocus.findElements(selector),
    (element) => element.getText() === title
).click()

const textActions = {

    clickButtonByTitle: df(
        /^пользователь кликает по кнопке с текстом "([^"]*)?"$/,
        function clickButtonByTitle (title) {
            titledClicker('button, input[type="button"], input[type="submit"], [role="button"]', title)

            this.checkAccessibility()
        }
    ),

    clickLinkByTitle: df(
        /^пользователь кликает по ссылке с текстом "([^"]*)?"$/,
        function clickLinkByTitle (title) {
            titledClicker('a', title)

            this.checkAccessibility()
        }
    ),
}

module.exports = textActions
