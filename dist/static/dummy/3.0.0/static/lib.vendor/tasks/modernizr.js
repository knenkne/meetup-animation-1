const fs = require('fs')
const modernizr = require('modernizr')
const gulp = require('gulp')

module.exports = function (cb) {
    modernizr.build(require('../build-tools/modernizr/config.json'), function (modernizrCode) {
        fs.writeFileSync(gulp.config.atTmp('modernizr.js'), modernizrCode)
        cb()
    })
}
