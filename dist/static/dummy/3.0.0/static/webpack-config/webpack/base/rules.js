const ExtractClassMapPlugin = require('../plugins/extract-class-map-plugin')
const getProjectPackage = require('../utils/get-project-package')

const babelOptions = require('./babelrc')

const fullName = `${getProjectPackage().__.cleanName}@${process.env.VERSION}`

module.exports = [
    // для совместимости с systemjs
    { parser: { system: false } },
    {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [
            // Чтобы не парсить тесты в node_modules/@sbol
            /\.spec\.jsx?$/,
            // Чтобы не парсить 3rd-party библиотеки, но под прямыми импортами парсить @sbol
            /node_modules[\\/](?!((@sbol).*)[\\/]).*/
        ],
        options: babelOptions
    },
    {
        test: /\/package\.json$|\/package-lock\.json$/,
        loader: 'package-json-loader'
    },
    {
        test: /\.config\.css$/,
        use: [
            'babel-loader',
            'postcss-variables-loader?es5=1',
        ]
    },
    {
        test: /\.css$/,
        exclude: /\.config\.css$/,
        use: [
            {
                loader: 'style-loader',
                options: {
                    // Рендер всех стилей данной библиотеки единым тегом
                    injectType: 'singletonStyleTag',
                    // Метка стилей в связке с данной версией данной библиотекой
                    attributes: {
                        'data-style': fullName
                    },
                    // IE10 compatible функция, которая определяет место вставки стилей и вставляет их, если необходимо
                    // Notice: к моменту вставки содержимого стилей еще нет, поэтому происходит проверка по data-style
                    insert: function insertAtBottom (element) {
                        if (!Array.prototype.slice.call(document.head.getElementsByTagName('style')).find(function (style) {
                            return style.getAttribute('data-style') === element.getAttribute('data-style')
                        })) document.head.appendChild(element)
                    }
                }
            },
            {
                loader: 'css-loader',
                options: {
                    // css-modules используются для изоляции классов
                    modules: true,
                    // Впереди лоадера есть еще 1 лоадер
                    importLoaders: 1,
                    // Также импортировать идентификаторы классов в виде camelCase (помимо kebab-case)
                    camelCase: true,
                    // Формат преобразованных ключей классов
                    localIdentName:
                        process.env.NODE_ENV === 'development'
                            ? `${fullName}--[path][name]--[local]--[hash:base64:4]`
                            : '[hash:base64:8]',
                    // Дополняем исходную строку для хэширования названием пакета и версией
                    hashPrefix: `${fullName}+`,
                    // Декоратор, который получит соответствие расположения класса в модуле и его хэша (для автотестов)
                    getLocalIdent: ExtractClassMapPlugin.getLocalIdentDecorator(
                        {
                            // Кого декорируем
                            getLocalIdent: require('css-loader/dist/utils')
                                .getLocalIdent,
                            // Выбираем статичный ключ в css-hash-map
                            originalIdentName: `${fullName}--[path][name]--[local]`
                        }
                    )
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        // @import "path/to/my.css";
                        require('postcss-import'),
                        // for () {}
                        require('postcss-for'),
                        // TODO: устарело
                        require('postcss-simple-vars'),
                        // :root { --my-var: 0 } ... div { padding: var(--my-var) }
                        require('postcss-custom-properties')({
                            // Не оставлять переменную
                            preserve: false
                        }),
                        // @custom-media --media (min-width: 1281px) ... @media (--media-xl) {}
                        require('postcss-custom-media')({
                            // Не оставлять переменную
                            preserve: false
                        }),
                        // div { div {} }
                        require('postcss-nested'),
                        // color(#fff a(90%));
                        require('postcss-color-function'),
                        // Лучшее не нуждается в комментариях
                        require('autoprefixer')({
                            browsers: ['last 2 versions', 'ie >= 9'],
                            // Добавляем префиксы и для гридов, за ними будущее
                            grid: true
                        }),
                        // calc(2 * 50px) -> 100px
                        require('postcss-calc'),
                        // Удаляем колмментарии из CSS
                        require('postcss-discard-comments'),
                        // Минификация css (удаление пустых :root {}, отступов, переносов строк и т.д.)
                        require('cssnano')({
                            preset: 'default'
                        })
                    ]
                }
            }
        ]
    },
    {
        test: /\.svg$/,
        // import icon from './icon.svg' // icon === '<svg><path /></svg>'
        loader: 'svg-inline-loader',
        options: {
            // Удалять пустые теги
            removeTags: true,
            // Всегда удалять эти теги
            removingTags: ['title', 'desc'],
            // Удалять атрибуты с тэга svg
            removeSVGTagAttrs: false
        }
    },
    {
        test: /\.(?:jpg|png|gif)$/,
        // import file from './file.jpg' // file === 'dummy/1.0.0/img/file--f83a2.jpg
        loader: 'file-loader',
        options: {
            // Итоговое имя файла, расположенного рядом с бандлом
            name: 'img/[name]--[hash:base64:5].[ext]'
        }
    }
]
