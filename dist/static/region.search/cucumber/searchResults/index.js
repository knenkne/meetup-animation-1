const { defineStep } = require('cucumber')
const assert = require('assert')

defineStep(
    /^раскрыть все функции$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[1]/button')

        elem.click()
    }
)

defineStep(
    /^проверить количество функций после раскрытия всего списка$/,
    () => {
        const elem_52 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[1]/div/a[52]')
        const elem_53 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[1]/div/a[53]')

        if (process.env.CHROME_DRIVER_VERSION === '2.36') {
            assert.equal(elem_52.state, undefined)
            assert.equal(elem_52._status, 0)
        } else {
            assert.equal(elem_52.state, 'success')
        }

        assert.equal(elem_53.state, 'failure')
    }
)

defineStep(
    /^свернуть функции$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[1]/button')

        elem.click()
    }
)

defineStep(
    /^проверить количество функций после того как свернули список$/,
    () => {
        const elem_4 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[1]/div/a[4]')
        const elem_5 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[1]/div/a[5]')

        if (process.env.CHROME_DRIVER_VERSION === '2.36') {
            assert.equal(elem_4.state, undefined)
            assert.equal(elem_4._status, 0)
        } else {
            assert.equal(elem_4.state, 'success')
        }

        assert.equal(elem_5.state, 'failure')
    }
)

defineStep(
    /^проверить прокрутку страницы относительно блока Функции$/,
    () => {
        const pages = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[1]')
        const pagesYPosition = pages.getLocation('y')
        const pageYOffset = browser.execute(() => window.pageYOffset)
        assert.equal(pageYOffset.value <= pagesYPosition, true)
    }
)

defineStep(
    /^раскрыть все продукты$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]/button')

        elem.click()
    }
)

defineStep(
    /^проверить количество продуктов после раскрытия всего списка$/,
    () => {
        //TODO: Переделать, когда getFeatureValue('useSearchWithConvertedQuery', 'region.search') вернёт true
        //
        // const elem_12 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]/div/a[12]')
        // const elem_13 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]/div/a[13]')
        //
        // if (process.env.CHROME_DRIVER_VERSION === '2.36') {
        //     assert.equal(elem_12.state, undefined)
        //     assert.equal(elem_12._status, 0)
        // } else {
        //     assert.equal(elem_12.state, 'success')
        // }
        //
        // assert.equal(elem_13.state, 'failure')

            const elem_7 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]/div/a[7]')
            const elem_8 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]/div/a[8]')

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
    /^свернуть продукты$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]/button')

        elem.click()
    }
)

defineStep(
    /^проверить количество продуктов после того как свернули список$/,
    () => {
        const elem_4 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]/div/a[4]')
        const elem_5 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]/div/a[5]')

        if (process.env.CHROME_DRIVER_VERSION === '2.36') {
            assert.equal(elem_4.state, undefined)
            assert.equal(elem_4._status, 0)
        } else {
            assert.equal(elem_4.state, 'success')
        }

        assert.equal(elem_5.state, 'failure')
    }
)

defineStep(
    /^проверить прокрутку страницы относительно блока Продукты$/,
    () => {
        const products = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]')
        const productsYPosition = products.getLocation('y')
        const pageYOffset = browser.execute(() => window.pageYOffset)
        assert.equal(pageYOffset.value <= productsYPosition, true)
    }
)

defineStep(
    /^в поле ввода "петроэлектросбыт"$/,
    () => {
        const elem = $('#global-search')
        const text = elem.getValue()

        assert.equal(text, 'петроэлектросбыт')
    }
)

defineStep(
    /^проверить поисковую выдачу для "петроэлектросбыт"$/,
    () => {
        const block_4 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]')
        const block_5 = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[5]')

        if (process.env.CHROME_DRIVER_VERSION === '2.36') {
            assert.equal(block_4.state, undefined)
            assert.equal(block_4._status, 0)
        } else {
            assert.equal(block_4.state, 'success')
        }

        assert.equal(block_5.state, 'failure')
    }
)

defineStep(
    /^клик по функции "Перевод между своими счетами и картами", когда в строке поиска "п"$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[1]/div/a[1]')

        elem.click()
        assert.equal(browser.getUrl(), 'http://localhost:4242/ERIB/PhizIC/private/payments/payment.do?form=InternalPayment')
    }
)

defineStep(
    /^клик по истории "Сберегательный счет •• 7258", когда в строке поиска "п"$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[2]/div/div[1]/a')

        elem.click()
        assert.equal(browser.getUrl(), 'http://localhost:4242/ERIB/PhizIC/private/payments/default-action.do?objectFormName=InternalPayment&stateCode=EXECUTED&id=3000974820&history=true')
    }
)

defineStep(
    /^клик по организации "ООО ЭЙВОН БЬЮТИ ПРОДАКТС КОМПАНИ", когда в строке поиска "п"$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[3]/div/a[1]')

        elem.click()
        assert.equal(browser.getUrl(), 'http://localhost:4242/PhizIC/private/payments/servicesPayments/edit.do?recipient=8')
    }
)

defineStep(
    /^клик по продукту "24.04.2019", когда в строке поиска "п"$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[4]/div/a[3]')

        elem.click()
        assert.equal(browser.getUrl(), 'http://localhost:4242/ima/122847')
    }
)

defineStep(
    /^клик по кнопке повторения операции "Сберегательный счет •• 7258"$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[2]/div/div[1]/div[1]/a')

        elem.click()
        assert.equal(browser.getUrl(), 'http://localhost:4242/ERIB/PhizIC/private/payments/payment.do?copying=true&id=3000974820')
    }
)

defineStep(
    /^клик по кнопке "Показать все" в блоке Организации$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[3]/h3/a')

        elem.click()
        assert.equal(browser.getUrl(), 'http://localhost:4242/payments/main?searchProvider=%D0%BA%D1%80%D0%B5')
    }
)

defineStep(
    /^клик по кнопке "Показать все" в блоке История$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[2]/div/div[2]/h3/a')

        elem.click()
        assert.equal(browser.getUrl(), 'http://localhost:4242/operations?search=%D0%BA%D1%80%D0%B5')
    }
)

//TODO: Проверить выдачу "Ничего не найдено"
