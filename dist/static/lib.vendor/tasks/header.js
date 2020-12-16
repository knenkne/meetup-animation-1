const path = require('path')
const gulp = require('gulp')
const _ = require('lodash')

const header = require('gulp-header')
const git = require('git-rev-sync')

const pkg = require('../package.json')
const modulesFromVendor = require('../vendor.modules.json')

const banner = ['/**',
    ' * <%= id %>',
    ' * <%= gitCommit %>',
    ' * @version v<%= pkg.version %>',
    ' *']
    .concat(modulesFromVendor.map((module) => ` * ${module}: ${pkg.dependencies[module.split('/')[0]]}`))
    .concat([' */', '\n'])
    .join('\n')
const id = _.replace(pkg.name, '@sbol/', '')
const gitCommit = git.long()


module.exports = function (qw) {
    return gulp
        .src(path.resolve(gulp.config.dest, 'vendor.dev.js'))
        .pipe(header(banner, { id, pkg, gitCommit }))
        .pipe(gulp.dest(gulp.config.dest))
}
