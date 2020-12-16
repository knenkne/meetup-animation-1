const styleTemplateBackground = ({
    narniaSelector,
    headSelector,
    waitingSelector,
    successSelector,
    errorSelector,
    infoSelector,
    insuranceSelector
}) => `
${narniaSelector}{background:linear-gradient(#fafafa,#f3f4f8 225px)}
${headSelector}{background:#fff}
${waitingSelector}{background:linear-gradient(#fafafa 160px,#fafafa 640px)}
${successSelector}{background:linear-gradient(#fafafa 160px,#effcf0 640px)}
${errorSelector}{background:linear-gradient(#fafafa 160px,#fcf3ef 640px)}
${infoSelector}{background:linear-gradient(#fafafa 160px,#f8f6fb 640px)}
${insuranceSelector}{background:linear-gradient(#fafafa,#f3fafd 226px)}

@media (max-width:731.98px){
${narniaSelector}{background:linear-gradient(#fafafa,#f3f4f8 112px)}
${waitingSelector}{background:linear-gradient(#fafafa 80px,#fafafa 320px)}
${successSelector}{background:linear-gradient(#fafafa 80px,#effcf0 320px)}
${errorSelector}{background:linear-gradient(#fafafa 80px,#fcf3ef 320px)}
${infoSelector}{background:linear-gradient(#fafafa 80px,#f8f6fb 320px)}
}`

export default () => {
    // basic, basicWrapper, narnia, narniaWrapper
    let narniaSelector = ''
    // head, headWrapper
    let headSelector = ''
    // waiting, waitingWrapper
    let waitingSelector = ''
    // success, successWrapper
    let successSelector = ''
    // error, errorWrapper
    let errorSelector = ''
    // info, infoWrapper
    let infoSelector = ''
    // insurance, insuranceWrapper
    let insuranceSelector = ''

    /* eslint-disable global-require, comment: для различия prod и dev */
    if (process.env.NODE_ENV === 'production') {
        narniaSelector = require('./narnia-hash.json')
        headSelector = require('./head-hash.json')
        waitingSelector = require('./waiting-hash.json')
        successSelector = require('./success-hash.json')
        errorSelector = require('./error-hash.json')
        infoSelector = require('./info-hash.json')
        insuranceSelector = require('./insurance-hash.json')
    } else {
        narniaSelector = require('./narnia-hash.dev.json')
        headSelector = require('./head-hash.dev.json')
        waitingSelector = require('./waiting-hash.dev.json')
        successSelector = require('./success-hash.dev.json')
        errorSelector = require('./error-hash.dev.json')
        infoSelector = require('./info-hash.dev.json')
        insuranceSelector = require('./insurance-hash.dev.json')
    }
    /* eslint-enable */

    return styleTemplateBackground({
        narniaSelector: `.${narniaSelector.join(',.')}`,
        headSelector: `.${headSelector.join(',.')}`,
        waitingSelector: `.${waitingSelector.join(',.')}`,
        successSelector: `.${successSelector.join(',.')}`,
        errorSelector: `.${errorSelector.join(',.')}`,
        infoSelector: `.${infoSelector.join(',.')}`,
        insuranceSelector: `.${insuranceSelector.join(',.')}`
    })
}
