const { last } = require('lodash')
const chalk = require('chalk')

const selectorClarification = require('./selector-clarification')

const filterByVisibility = (elements) => elements.filter((element) => element.isVisible())
const filterByText = (elements, text) => elements.filter((element) => element.getText() === text)

const invisibleMessage = (elements, selector, uef, text) => {
    if (!elements.length) {
        console.warn(chalk.yellow(`Warning: Не было найдено ни одного видимого элемента`))
        if (text) {
            console.warn(chalk.yellow(`Текст элемента:\n    ${text}`))
        }
        if (uef === selector) {
            console.warn(chalk.red('Селекторы UEF и искомого элемента совпадают!'))
        }
        if (uef) {
            console.warn(chalk.blue('Возможно, вы забыли очистить UEF'))
            console.warn(chalk.yellow(`UEF:\n    ${uef.split(',').join(',\n   ')}`))
        }
        console.warn(chalk.yellow(`Selector:\n    ${selector.split(',').join(',\n   ')}`))
    }
}

class UEF {
    /* Основной менеджер состояния UEF */

    constructor () {
        this.clearBlock()
        this.stopFilterInvisible()

        // Обратная совместимость, выпилить
        this.getAllElementsBySelector = this.findVisibleElements
    }

    startFilterInvisible () {
        this.filterInvisible = true
    }

    stopFilterInvisible () {
        this.filterInvisible = false
    }

    clearBlock () {
        this.history = []
        this.focus = ''
        this.element = browser
    }

    setPreviousBlock () {
        const { element, focus } = this.history.pop()
        this.focus = focus
        this.element = element
    }

    setBlock (element) {
        this.history.push({
            element: this.element,
            focus: this.focus
        })
        this.focus = selectorClarification(this.focus, element.selector)
        this.element = element
    }

    getBlock () {
        return this.element
    }

    getSelector () {
        return this.focus
    }


    /* Утилитарные функции работы с блоком в фокусе */

    findElements (selector) {
        return this.getBlock().elements(selector).value
    }

    setBlockBySelector (selector, index = 1) {
        const elements = this.findElements(selector)
        invisibleMessage(elements, selector, this.focus)
        this.setBlock(elements[index - 1])
    }

    findVisibleElements (selector) {
        if (this.filterInvisible) {
            return filterByVisibility(this.findElements(selector))
        }

        return this.findElements(selector)
    }

    getElementBySelector (selector, index = 1) {
        const elements = this.findVisibleElements(selector)
        invisibleMessage(elements, selector, this.focus)
        return elements[index - 1]
    }

    getLastElementBySelector (selector) {
        const elements = this.findVisibleElements(selector)
        invisibleMessage(elements, selector, this.focus)
        return last(elements)
    }

    getElementBySelectorAndText (selector, text, index = 1) {
        const elements = filterByText(this.findVisibleElements(selector), text)
        invisibleMessage(elements, selector, this.focus, text)
        return elements[index - 1]
    }
}

module.exports = {
    UEF,
    userEyesFocus: new UEF()
}
