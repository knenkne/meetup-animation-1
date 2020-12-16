const gulp = require('gulp')
const rename = require('gulp-rename')

module.exports = function () {
    return gulp
        .src(gulp.config.atDest('vendor.dev.js'))
        .pipe(rename('index.js'))
        .pipe(gulp.dest(gulp.config.target))
}
