const fs = require('fs')
const path = require('path')

const compat = require('core-js-compat')

const esnext = require('./esnext')

const { targets } = compat({
    targets: ['last 2 versions', '> 1%', 'not ie < 11']
})

const ENCODING = 'utf8'

const isOnlyIE = (feature) => Object.keys(targets[feature]).length === 1 && Object.keys(targets[feature]).includes('ie')
const isStandard = (feature) => feature.startsWith('es.')
const isWeb = (feature) => feature.startsWith('web.')
const isRequiredNext = (feature) => esnext.includes(feature)
const createImportFile = (pack) => pack.map((feature) => `import 'core-js/modules/${feature}'\n`).join('')

const ieCompatible = []
const commonCompatible = []
const excludeCompatible = []
Object.keys(targets).forEach((feature) => {
    if (isOnlyIE(feature)) {
        ieCompatible.push(feature)
    } else if (isStandard(feature) || isWeb(feature) || isRequiredNext(feature)) {
        commonCompatible.push(feature)
    } else {
        excludeCompatible.push(feature)
    }
})

fs.writeFileSync(path.resolve('scripts/targets.json'), JSON.stringify(targets, null, 2), ENCODING)

fs.writeFileSync(path.resolve('src/polyfills/core-ie.js'), createImportFile(ieCompatible), ENCODING)
fs.writeFileSync(path.resolve('src/polyfills/core-common.js'), createImportFile(commonCompatible), ENCODING)
fs.writeFileSync(path.resolve('src/polyfills/core-exclude.js'), createImportFile(excludeCompatible), ENCODING)
