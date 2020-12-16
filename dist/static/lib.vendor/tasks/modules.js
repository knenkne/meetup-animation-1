const webpack = require('webpack')
const _ = require('lodash')
const gulp = require('gulp')

const modulesFromVendor = require('../vendor.modules.json')

const WrapModules = require('./utils/wrap-modules')

module.exports = function (cb) {
    webpack({
        node: {
            fs: 'empty'
        },
        entry: _.zipObject(_.map(modulesFromVendor, (module) => _.camelCase(module)), modulesFromVendor),
        output: {
            path: gulp.config.tmp,
            filename: `[name].js`
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({ name: 'common' }),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru|en/),
            new WrapModules(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': process.env.NODE_ENV === 'development' ?
                    JSON.stringify('development') : JSON.stringify('production')
            })
        ]
    }).run(cb)
}
