const path = require('path')

const webpackConfig = require('./webpack.config')
const sections = require('./styleguide-sections')
const PATH_TEMPLATE = require('./styleguide/index.js')

const COMPONENT_PATH_REG_EXP = /(\w+)\.\w+$/

function getComponentPathLine (componentPath) {
    const matches = componentPath.match(COMPONENT_PATH_REG_EXP)
    return `import { ${matches[1]} } from '${process.env.PKG_ID}'`
}

function getExampleFilename (componentPath) {
    return componentPath.replace(/\.jsx?$/, '.md')
}

module.exports = {
    title: 'Презентационный слой СБОЛ',
    styleguideDir: 'target/temp',
    editorConfig: {
        theme: 'ttcn'
    },
    styleguideComponents: {
        StyleGuideRenderer: path.join('./styleguide/components/style-guide'),
        ReactComponentRenderer: path.join('./styleguide/components/react-component'),
        PlaygroundRenderer: path.join('./styleguide/components/playground-renderer'),
    },
    require: [
        path.resolve(__dirname, 'node_modules/@sbol/webpage.provider.bootstrap/src/polyfills/index.js'),
        path.resolve(__dirname, 'styleguide/window.js'),
        path.resolve(__dirname, 'styleguide/setup.js'),
    ],
    getComponentPathLine,
    getExampleFilename,
    usageMode: 'expand',
    pagePerSection: process.env.PER_SECTION !== 'false',
    sections,
    webpackConfig,
    template: PATH_TEMPLATE
}
