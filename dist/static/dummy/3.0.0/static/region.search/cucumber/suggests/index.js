const { defineStep } = require('cucumber')
const assert = require('assert')

defineStep(
    /^проверить количество элементов в левой колонке, когда нет истории$/,
    () => {
        const elem_7 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/ul[1]/li[7]')
        const elem_8 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/ul[1]/li[8]')

        if (process.env.CHROME_DRIVER_VERSION === '2.36') {
            assert.equal(elem_7.state, undefined)
            assert.equal(elem_7._status, 0)
        } else {
            assert.equal(elem_7.state, 'success')
        }

        assert.equal(elem_8.state, 'failure')
    }
)

defineStep(
    /^выбрать первый пример поиска из списка$/,
    () => {
        const elem_1 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/ul[1]/li[1]')

        elem_1.click()
    }
)

defineStep(
    /^проверить количество элементов в левой колонке, когда есть история$/,
    () => {
        const elem_1 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/ul[1]/li[1]')
        const elem_2 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/ul[1]/li[2]')

        if (process.env.CHROME_DRIVER_VERSION === '2.36') {
            assert.equal(elem_1.state, undefined)
            assert.equal(elem_1._status, 0)
        } else {
            assert.equal(elem_1.state, 'success')
        }

        assert.equal(elem_2.state, 'failure')
    }
)

defineStep(
    /^выбрать suggest стрелкой вправо$/,
    () => {
        const result = browser.elementActive()
        const activeElement = result.value[Object.keys(result.value)[0]]

        browser.elementIdValue(activeElement, ['Right arrow'])
    }
)
