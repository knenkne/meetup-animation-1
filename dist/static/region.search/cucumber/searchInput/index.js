const { defineStep } = require('cucumber')
const assert = require('assert')

defineStep(
    /^ввести букву "п"$/,
    () => {
        const elem = $('#global-search')

        elem.setValue('п')
    }
)

defineStep(
    /^ввести буквы "кре"$/,
    () => {
        const elem = $('#global-search')

        elem.setValue('кре')
    }
)

defineStep(
    /^проверить, что поисковая выдача содержит 4 блока по 4 элемента$/,
    () => {
        const elem_1 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[1]')
        const elem_2 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[2]')
        const elem_3 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[3]')
        const elem_4 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]')
        const elem_5 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[5]')

        if (process.env.CHROME_DRIVER_VERSION === '2.36') {
            assert.equal(elem_1.state, undefined)
            assert.equal(elem_1._status, 0)
            assert.equal(elem_2.state, undefined)
            assert.equal(elem_2._status, 0)
            assert.equal(elem_3.state, undefined)
            assert.equal(elem_3._status, 0)
            assert.equal(elem_4.state, undefined)
            assert.equal(elem_4._status, 0)
        } else {
            assert.equal(elem_1.state, 'success')
            assert.equal(elem_2.state, 'success')
            assert.equal(elem_3.state, 'success')
            assert.equal(elem_4.state, 'success')
        }

        assert.equal(elem_5.state, 'failure')
    }
)

defineStep(
    /^проверить, что блок функций содержит еще 48 функций после ввода "п"$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[1]/button/span[1]')

        assert.equal(elem.getText(), 'Показать еще 48 функций')
    }
)

defineStep(
    /^проверить, что блок продукты содержит еще N продуктов после ввода "п"$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]/button/span[1]')

        //TODO: Переделать, когда getFeatureValue('useSearchWithConvertedQuery', 'region.search') вернёт true
        //assert.equal(elem.getText(), 'Показать еще 8 продуктов')
        assert.equal(elem.getText(), 'Показать еще 3 продукта')

    }
)

defineStep(
    /^проверить, что блок истории содержит кнопку "Показать все" после ввода "п"$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[2]/h3/a')

        assert.equal(elem.getText(), 'Показать все')
    }
)

defineStep(
    /^проверить, что блок организации содержит кнопку "Показать все" после ввода "п"$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[3]/h3/a')

        assert.equal(elem.getText(), 'Показать все')
    }
)

defineStep(
    /^пользователь нажимает Tab$/,
    () => {
        const result = browser.elementActive()
        const activeElement = result.value[Object.keys(result.value)[0]]

        browser.elementIdValue(activeElement, ['Tab'])
    }
)

defineStep(
    /^пользователь нажимает Enter$/,
    () => {
        const result = browser.elementActive()
        const activeElement = result.value[Object.keys(result.value)[0]]

        browser.elementIdValue(activeElement, ['Enter'])
    }
)

defineStep(
    /^проверить появление результатов поиска$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div')
        assert.equal(elem.isVisible(), true)
    }
)
