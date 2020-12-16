import babelrc from '@sbol/webpack-config/webpack/base/babelrc'

delete babelrc.cacheDirectory

export default {
    ...babelrc,
    plugins: [...babelrc.plugins, 'emotion']
}

