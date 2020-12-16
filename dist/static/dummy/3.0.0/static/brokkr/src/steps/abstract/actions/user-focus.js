const df = require('../../../utils/define-functionality')
const { userEyesFocus } = require('../../../utils/user-eyes-focus')

const userFocus = {

    goToPreviousBlockFocus: df(
        [
            /^пользователь снова фокусируется на предыдущем блоке$/,
            /^пользователь снова зрительно фокусируется на предыдущем блоке$/,
        ],
        () => {
            userEyesFocus.setPreviousBlock()
        }
    ),

    clearBlockFocus: df(
        [
            /^пользователь зрительно фокусируется на браузере$/,
            /^пользователь фокусируется на браузере$/,
            /^пользователь отменяет зрительную фокусировку$/,
            /^пользователь отменяет фокусировку$/,
        ],
        () => {
            userEyesFocus.clearBlock()
        }
    ),

    clearBlockAndKeyboardFocus: df(
        [
            /^пользователь зрительно фокусируется на браузере с клавиатурой$/,
            /^пользователь отменяет зрительную фокусировку с клавиатурой$/,
        ],
        () => {
            userEyesFocus.clearBlock()

            if (browser.$('body').isVisible()) {
                browser.leftClick('body')
            }
        }
    ),

    clickBlockFocus: df(
        [
            /^пользователь кликает по блоку в фокусе$/,
            /^пользователь кликает по блоку в зрительном фокусе$/,
        ],
        () => {
            userEyesFocus.getBlock().click()
        }
    ),

    hoverBlockFocus: df(
        [
            /^пользователь наводит курсор на блок в фокусе$/,
            /^пользователь наводит курсор на блок в зрительном фокусе$/,
        ],
        () => {
            userEyesFocus.getBlock().moveToObject()
        }
    ),

}

module.exports = userFocus
