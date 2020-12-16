const { merge } = require('webpack-merge')

const webpackConfig = require('./webpack.config.js')

module.exports = {
    port: 8080,
    entry: './docs/entry.js',
    demo: './docs/demo/index.jsx',
    polyfills: ['@sbol/webpage.provider.bootstrap/src/polyfills'],
    componentsDir: './src/region-product/personal-menu',
    docsContext: './docs',
    output: 'target/temp/docs',
    navigation: [
        {
            link: '/',
            title: 'Главная страница',
            img: '',
            description: '',
            tags: '',
            mdx: './index.mdx',
            children: [],
            hidden: true
        },
        {
            link: '/components',
            title: 'Компоненты',
            img: '',
            description: '',
            tags: '',
            mdx: './components.mdx',
            children: [
                {
                    link: '/carousel',
                    title: 'Carousel',
                    tags: '',
                    components: 'carousel/index.jsx',
                    mdx: './carousel.mdx',
                },
                {
                    link: '/name',
                    title: 'Name',
                    tags: '',
                    components: 'partials/name/index.js',
                    mdx: './name.mdx'
                },
                {
                    link: '/value',
                    title: 'Value',
                    tags: '',
                    components: 'partials/value/index.js',
                    mdx: './value.mdx'
                },
                {
                    link: '/content-row',
                    title: 'ContentRow',
                    tags: '',
                    components: 'partials/content-row/index.js',
                    mdx: './content-row.mdx'
                },
                {
                    link: '/personal-manager',
                    title: 'PersonalManagerComponent',
                    tags: '',
                    components: 'profile/personal-manager/personal-manager.jsx',
                    mdx: './manager.mdx'
                },
                {
                    link: '/products',
                    title: 'Продукты',
                    tags: '',
                    components: 'products/**/*.jsx',
                    children: [
                        {
                            link: '/debit-cards',
                            title: 'Дебетовые карты',
                            tags: '',
                            mdx: './products/cards/debit-cards.mdx',
                            children: []
                        }
                    ]
                },

            ]
        }
    ],
    webpackConfig: merge({
        resolve: {
            modules: ['docs/mock']
        }
    }, webpackConfig)
}
