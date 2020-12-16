const styleTemplateFullWidth = ({ outerHash, innerHash, outerTabsHash, innerTabsHash }) => `
@media (min-width:992px) and (max-width:1311.98px){
${outerHash}{margin-left:calc(464px - 50vw);margin-right:calc(464px - 50vw)}
${outerTabsHash}{margin:0}
${innerHash}{padding-left:calc(50vw - 464px);padding-right:calc(50vw - 464px)}
${innerTabsHash}{padding:0}
}
@media (min-width:1440px){
${outerHash}{margin-left:-96px;margin-right:calc(968px + 96px + 320px - 100vw)}
${outerTabsHash}{margin:0}
${innerHash}{padding-left:96px;padding-right:calc(100vw - 968px - 96px - 320px)}
${innerTabsHash}{padding:0}
}
`

const MAX_WIDTH_MD_PREVIOUS = '(max-width:1055.98px)'
const MIN_WIDTH_LG_PREVIOUS = '(min-width:1056px)'
const MAX_WIDTH_MD_CORRECT = '(max-width:1311.98px)'
const MIN_WIDTH_LG_CORRECT = '(min-width:1312px)'

const includesBreakPoints = (value) =>
    value.includes(MAX_WIDTH_MD_PREVIOUS) || value.includes(MIN_WIDTH_LG_PREVIOUS)

const replaceBreakPoints = (value) => value
    .replaceAll(MAX_WIDTH_MD_PREVIOUS, MAX_WIDTH_MD_CORRECT)
    .replaceAll(MIN_WIDTH_LG_PREVIOUS, MIN_WIDTH_LG_CORRECT)

export const cssClearFixPlugin = ({ launcher }) => (bootstrap) => {
    bootstrap.hooks.start.tapPromise('cssClearFixPlugin', async () => {
        try {
            let outerHash = ''
            let innerHash = ''

            /* eslint-disable global-require, comment: для различия prod и dev */
            if (process.env.NODE_ENV === 'production') {
                outerHash = require('./full-width-outer-hash.json')
                innerHash = require('./full-width-inner-hash.json')
            } else {
                outerHash = require('./full-width-outer-hash.dev.json')
                innerHash = require('./full-width-inner-hash.dev.json')
            }
            /* eslint-enable */

            const styleTag = document.createElement('style')

            styleTag.innerHTML = styleTemplateFullWidth({
                outerHash: `.${outerHash.join(',.')}`,
                innerHash: `.${innerHash.join(',.')}`,
                outerTabsHash: `div[data-unit="tabs"] div div .${outerHash.join(',div[data-unit="tabs"] div div .')}`,
                innerTabsHash: `div[data-unit="tabs"] div div .${innerHash.join(',div[data-unit="tabs"] div div .')}`
            })

            const observer = new MutationObserver((mutationsList) => {
                mutationsList.forEach((mutation) => {
                    if (mutation.addedNodes.length) {
                        mutation.addedNodes.forEach((node) => {
                            if (node instanceof HTMLStyleElement && !node.dataset.emotion && includesBreakPoints(node.innerHTML)) {
                                node.innerHTML = replaceBreakPoints(node.innerHTML)
                            }

                            if (node instanceof Text && node.nodeValue && includesBreakPoints(node.nodeValue)) {
                                node.nodeValue = replaceBreakPoints(node.nodeValue)
                            }
                        })
                    }
                })
            })
            observer.observe(document.head, { childList: true, subtree: true })

            if (launcher?.['webpage.provider.bootstrap']?.features?.BackgroundClearFix?.value === 'true') {
                try {
                    const { default: backgroundStyles } = await import(/* webpackChunkName: "background" */ './background')

                    styleTag.innerHTML += backgroundStyles()
                } catch (error) {
                    console.error(error)
                }
            }

            document.body.appendChild(styleTag)
        } catch (error) {
            console.error(error)
        }

        return Promise.resolve()
    })

    return bootstrap
}
