const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const postcss = require('gulp-postcss')

const paths = {
    styles: 'src/**/*.css',
    hbs: 'src/**/*.hbs',
    dest: './target'
}

const clean = () => del([paths.dest])

const minifyHbs = () =>
    gulp
        .src(paths.hbs)
        .pipe(
            htmlmin({
                ignoreCustomFragments: [/{{.*?}}/],
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                minifyJS: true
            })
        )
        .pipe(gulp.dest(paths.dest))

const minifyCss = () =>
    gulp
        .src(paths.styles)
        .pipe(
            postcss([
                require('autoprefixer')({
                    browsers: ['last 2 versions', 'ie >= 10'],
                    grid: true
                }),
                require('cssnano')
            ])
        )
        .pipe(gulp.dest(paths.dest))

const build = gulp.series(clean, gulp.parallel(minifyHbs, minifyCss))

exports.default = build
