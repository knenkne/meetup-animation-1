const gulp = require("gulp")
const path = require("path")
const rimraf = require("rimraf")
const minify = require("gulp-minify")
const postcss = require("gulp-postcss")
const concat = require("gulp-concat")
const imagemin = require("gulp-imagemin")
const glob = require("glob")

const TARGET = "target"
const FILES = "files"

gulp.task("styles", () =>
  gulp
    .src(path.resolve(FILES, "css/*.css"))
    .pipe(concat("styles.css"))
    .pipe(
      postcss([
        // дубль из webpack-config
        require('postcss')(),
        require('css-mqpacker')(),
        require('postcss-import'),
        require('postcss-for'),
        require('postcss-custom-properties')({
          preserve: false
        }),
        require('postcss-custom-media')({
          preserve: false
        }),
        require('postcss-nested'),
        require('postcss-color-function'),
        require('autoprefixer')({
          browsers: ['last 2 versions', 'ie >= 11'],
          grid: true
        }),
        require('postcss-calc'),
        require('postcss-discard-comments'),
        require('cssnano')({
          preset: 'default'
        })
      ])
    )
    .pipe(gulp.dest(path.resolve(TARGET)))
)

gulp.task("copy:images", () =>
  gulp
    .src(path.resolve(FILES, "images/**/*.{png,gif,ico,svg}"))
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.mozjpeg({ progressive: true }),
      ])
    )
    .pipe(gulp.dest(path.resolve(TARGET, "img")))
)

gulp.task("copy:locales", () =>
  gulp
    .src(path.resolve(FILES, "locales/*.json"))
    .pipe(gulp.dest(path.resolve(TARGET, "locales")))
)

gulp.task("copy:config", () =>
  gulp
    .src(path.resolve(FILES, "config/*.{xml,json}"))
    .pipe(gulp.dest(path.resolve(TARGET, "cfg")))
)

gulp.task("copy:loaders", () =>
  gulp
    .src(path.resolve(FILES, "loaders/*.json"))
    .pipe(
      minify({
        noSource: true,
        ext: {
          min: ".json",
        },
      })
    )
    .pipe(gulp.dest(path.resolve(TARGET, "loaders")))
)

gulp.task("copy:scripts", () =>
  gulp
    .src(path.resolve(FILES, "scripts/*.js"))
    .pipe(
      minify({
        noSource: true,
        ext: {
          min: ".js",
        },
      })
    )
    .pipe(gulp.dest(path.resolve(TARGET, "js")))
)

gulp.task("copy:loaders", () =>
  gulp
    .src(path.resolve(FILES, "loaders/*.json"))
    .pipe(gulp.dest(path.resolve(TARGET, "loaders")))
)
/*
Требования к именованию файлов (на основании RFC3986):
* в имени можно использовать только:
  * прописные и строчные буквы Латинского алфавита
  * арабские цифры
  * символы:
    * нижнее подчёркивание «_»
    * точка «.»
    * дефис «-»
* длина имени не должна превышать 32 символа, не включая расширение
* имя файла должно начинаться с буквы
* имя файла должно быть понятно и описывать его содержимое (в случае с документами)
* текстовые файлы (json. xml, css и т.д.) должны всегда поставляться в двух видах: оригинальный и сжатый в gzip (.gz) с макисмальной степенью сжатия
Прочие требования:
* Все ссылки на статику должны быть быстроизменяемы. Никакого хардкода.
* Необновляемые файлы должны кешироваться в МП навсегда. Редкообновляемые файлы с низкой критичностью должны кешироваться на какой-то срок. Высококритичные файлы (например, условия обслуживания), должны кешироваться только в рамках текущей сессии.
* Размер файла должен быть адекватным как в пикселях, так и в мегабайтах, с учётом возможностей сетевого подключения клиентов (GPRS, EDGE и т.д.) и требований дизайна приложений.
* Текстовые файлы (конфиги, html и т.д.) должны поставляться в обычном виде и сжатом в gzip (,gz)
*/
gulp.task("validate", function (cb) {
    var nameValidator = /^[\dA-Za-z_./-]+$/
    var nameStartValidator = /^[A-Za-z]/

    var failed = false

    glob.sync(TARGET + "/**/*", { nodir: true })
        .forEach((filename) => {
            if (!nameValidator.test(filename)) {
                failed = true
                console.warn(`Путь/имя файла ${filename} содержит недопустимые символы (разрешено "${nameValidator.source}")`)
            }
            if (path.basename(filename).replace(path.extname(filename), '').length > 32) {
                failed = true
                console.warn(`Файл ${filename} превышает допустимую длину имени`)
            }
            if (!nameStartValidator.test(path.basename(filename))) {
                failed = true
                console.warn(`Файл ${filename} должен начинаться с буквы`)
            }
        })

    if (failed) {
        // throw new Error('Имена файлов не прошли валидацию')
    }

    cb()
})

gulp.task("clean", function (cb) {
  rimraf(TARGET + "/**/*", cb)
})

gulp.task(
  "build",
  gulp.series(
    "clean",
    "styles",
    "copy:images",
    "copy:locales",
    "copy:config",
    "copy:loaders",
    "copy:scripts",
    "copy:loaders",
    "validate"
  )
)
