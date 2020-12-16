const rawContent = require('../index.hbs')

const script = rawContent.replace(/(<script>|<\/script>)/g, '')


describe('Loader', () => {

    test('Defines global loader manipulation methods', () => {
        const loaderPlaceholder = window.document.createElement('main')
        loaderPlaceholder.classList.add('content__center')
        window.document.body.appendChild(loaderPlaceholder)

        const scriptEl = window.document.createElement('script')
        scriptEl.type = 'text/javascript'
        scriptEl.text = script
        scriptEl.addEventListener('load', () => {
            expect(window.startLoader).toBeDefined()
            expect(window.stopLoader).toBeDefined()

            window.startLoader()
            expect(loaderPlaceholder.firstElementChild.classList).not.toContain('loader--fade-out')
            window.stopLoader()
            expect(loaderPlaceholder.firstElementChild.classList).toContain('loader--fade-out')
        })
        window.document.body.appendChild(scriptEl)
    })

})
