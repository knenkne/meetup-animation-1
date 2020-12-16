const _ = require('lodash')
const gulp = require('gulp')
const concat = require('gulp-concat')
const header = require('gulp-header')

const modulesFromVendor = require('../vendor.modules.json')

const dependencies = `function __d__ (module) {
    return __d__.__modules[module]
}
__d__.__modules = {}

function __sd__ (module, code) {
    __d__.__modules[module] = code
}`

module.exports = function (qw) {
    return gulp
        .src([
            './tmp/modernizr.js',
            './tmp/core-js.js',
            './node_modules/classlist-polyfill/src/index.js',
            './node_modules/bluebird/js/browser/bluebird.js',
            './tmp/common.js'
        ].concat(modulesFromVendor.map((module) => gulp.config.atTmp(_.camelCase(module) + '.js'))))
        .pipe(concat('vendor.dev.js'))
        .pipe(header(dependencies))
        .pipe(gulp.dest(gulp.config.dest))
}
