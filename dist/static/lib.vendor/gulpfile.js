/* eslint-disable */
const gulp = require('gulp')
const sequence = require('run-sequence')

/**/
const {
    modernizr,
    coreJS,
    modules,
    buildProduction,
    copyTarget,
    clean,
    concat,
    uglify,
    header
 } = require('./tasks')
/**/

gulp.task('modernizr', modernizr)
gulp.task('build:core-js', coreJS)

gulp.task('build:modules', modules)
gulp.task('build:concat', concat)
gulp.task('build:uglify', uglify)
gulp.task('build:header', header)

gulp.task('copy:target', copyTarget)
gulp.task('clean', clean)


gulp.task('prebuild', function (cb) {
    sequence(
        'clean',
        'build:modules',
        'modernizr',
        'build:core-js',
        'build:modules',
        'build:concat',
        cb
    )
})

gulp.task('default', function (cb) {
    sequence(
        'prebuild',
        'build:header',
        cb
    )
})

gulp.task('production', function (cb) {
    sequence(
        'prebuild',
        'build:uglify',
        'build:header',
        'copy:target',
        cb
    )
})
