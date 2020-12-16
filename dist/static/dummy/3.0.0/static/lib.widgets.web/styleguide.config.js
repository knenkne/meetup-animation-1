const path = require('path')
const fs = require('fs')

const _ = require('lodash')

const webpackConfig = require('./webpack-config')
const sections = require('./styleguide-sections')
const template = require('./styleguide/index.js')

const PATH_STYLEGUIDIST = 'styleguide'
const COMPONENT_PATH_REG_EXP = /src[\\/](\w+)[\\/]/

const mainIndex = fs.readFileSync(path.resolve(__dirname, 'src/index.js'), { encoding: 'utf-8' }) // eslint-disable-line no-sync, comment: синхронно читать лучше

module.exports = {
    title: 'Platform widgets',
    styleguideDir: 'target',
    editorConfig: {
        theme: 'ttcn'
    },
    require: [
        path.resolve(__dirname, 'node_modules/@sbol/webpage.provider.bootstrap/src/polyfills/index.js')
    ],
    styleguideComponents: {
        StyleGuideRenderer: path.join(__dirname, PATH_STYLEGUIDIST, 'components/style-guide'),
        ReactComponentRenderer: path.join(__dirname, PATH_STYLEGUIDIST, 'components/react-component'),
        PlaygroundRenderer: path.join(__dirname, PATH_STYLEGUIDIST, 'components/playground-renderer'),
    },
    contextDependencies: [
        path.resolve(__dirname, 'provider'),
    ],
    getComponentPathLine (componentPath) {
        const matches = componentPath.match(COMPONENT_PATH_REG_EXP)
        if (matches && _.includes(mainIndex, matches[1])) {
            return `import { ${_.upperFirst(_.camelCase(matches[1]))} } from '${process.env.PKG_ID}'`
        }

        return componentPath
    },
    getExampleFilename (componentPath) {
        return componentPath.replace(/\.jsx?$/, '.md')
    },
    usageMode: 'expand',
    pagePerSection: true,
    sections,
    webpackConfig,
    template
}
