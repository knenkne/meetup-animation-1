const gulp = require('gulp')
const rimraf = require('rimraf')

module.exports = function (cb) {
    rimraf.sync(gulp.config.tmp)
    rimraf.sync(gulp.config.dest)
    rimraf.sync(gulp.config.target)
    cb()
}
