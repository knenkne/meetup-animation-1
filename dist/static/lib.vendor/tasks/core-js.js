const fs = require('fs')
const gulp = require('gulp')

module.exports = function (cb) {
    require('core-js-builder')({
        modules: ['es6'],
        blacklist: ['es6.promise', 'es6.reflect', 'es6.typed'],
        library: false,
        umd: false
    }).then(function (code) {
        fs.writeFileSync(gulp.config.atTmp('core-js.js'), code)
        cb()
    }).catch(function (error) {
        throw error
    })
}
