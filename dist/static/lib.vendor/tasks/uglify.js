const path = require('path')
const gulp = require('gulp')
const uglify = require('gulp-uglify')

module.exports = function (qw) {
    return gulp
        .src(path.resolve(gulp.config.dest, 'vendor.dev.js'))
        .pipe(uglify())
        .pipe(gulp.dest(gulp.config.dest))
}
