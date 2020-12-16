const fs = require('fs')
const gulp = require('gulp')
const path = require('path')

gulp.config = {
    dest: path.resolve(__dirname, '..', './dist'),
    atDest: function (relativePath) {
        return path.resolve(__dirname, '..', './dist', relativePath)
    },
    tmp: path.resolve(__dirname, '..', './tmp'),
    atTmp: function (relativePath) {
        return path.resolve(__dirname, '..', './tmp', relativePath)
    },
    target: path.resolve(__dirname, '..', './target'),
    atTarget: function (relativePath) {
        return path.resolve(__dirname, '..', './target', relativePath)
    }
}

exports.modernizr = require('./modernizr')
exports.coreJS = require('./core-js')
exports.modules = require('./modules')
exports.copyTarget = require('./copy-target')
exports.clean = require('./clean')
exports.concat = require('./concat')
exports.uglify = require('./uglify')
exports.header = require('./header')
