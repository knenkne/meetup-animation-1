import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import svg from 'rollup-plugin-svg'
import glob from 'glob'
import autoExternal from 'rollup-plugin-auto-external'
import external from '@yelo/rollup-node-external'
import babelrc from '@sbol/webpack-config/webpack/base/babelrc'

delete babelrc.cacheDirectory

const dirTarget = 'core'
const dirSource = 'src'

const commonPlugins = [
    autoExternal(),
    babel(babelrc),
    svg(),
    resolve({ extensions: ['.jsx', '.js'], dedupe: ['react', 'react-dom'] }),
    commonjs({
        include: /node_modules/
    })
]

const components = glob
    .sync(`./${dirSource}/**/*?(.config)?(.style).js?(x)`, {
        ignore: [`./${dirSource}/assets/*`, `./${dirSource}/tests/*`]
    })
    .reduce((memo, path) => {
        const key = path.match(/((([A-Za-z-]+)[/\\])+)([A-Za-z-]+)(.config)?(.style)?(?=\.(js(x?)$))/)
        if (key) {
            const pathMatch = key[0]
            const startIndexBaseDir = pathMatch.indexOf(dirSource) + dirSource.length + 1
            const newDir = pathMatch.substring(startIndexBaseDir, pathMatch.length)
            return {
                ...memo,
                [newDir]: path
            }
        }
        return memo
    }, {})

export default {
    input: components,
    external: external(),
    plugins: commonPlugins,
    output: {
        dir: dirTarget,
        format: 'esm',
        sourcemap: true,
        entryFileNames: '[name].js'
    },
    treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: true
    }
}
