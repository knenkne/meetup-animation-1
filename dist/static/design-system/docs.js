const webpackConfig = require('./webpack.config.js')

module.exports = {
    port: 8080,
    entry: './src/index.js',
    demo: './docs/demo/index.js',
    polyfills: ['@sbol/webpage.provider.bootstrap/src/polyfills'],
    componentsDir: './src',
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
            link: '/design',
            title: 'Дизайн',
            img: '',
            description: '',
            tags: '',
            mdx: './design.mdx',
        },
        {
            link: '/components',
            title: 'Компоненты',
            img: '',
            description: '',
            tags: '',
            mdx: './components.mdx',
            children: [
                // {
                //     link: '/accordion',
                //     title: 'Accordion',
                //     tags: '',
                //     components: 'accordion/accordion.jsx',
                //     mdx: './accordion.mdx',
                //     children: []
                // },
                // {
                //     link: '/input',
                //     title: 'Input',
                //     tags: '',
                //     components: 'input/**/*(!spec).{js,jsx}',
                //     mdx: './input.mdx',
                //     children: []
                // },
                // {
                //     link: '/currency',
                //     title: 'Currency',
                //     tags: '',
                //     components: 'currency/*.jsx',
                //     mdx: './currency.mdx',
                //     children: []
                // },
                {
                    link: '/button',
                    title: 'Button',
                    tags: '',
                    children: [
                        {
                            link: '/button',
                            title: 'Button',

                            tags: '',
                            components: 'button/index.jsx',
                            mdx: './button/button.mdx',
                        },
                    ]
                },
                // {
                //     link: '/markdown',
                //     title: 'Markdown',
                //     tags: '',
                //     components: 'markdown/*.jsx',
                //     children: [
                //         {
                //             link: '/markdown.full',
                //             title: 'Markdown Full',
                //             tags: '',
                //             mdx: './markdown/markdown.full.mdx',
                //             children: []
                //         },
                //         {
                //             link: '/markdown.short',
                //             title: 'Markdown.Short',
                //             tags: '',
                //             mdx: './markdown/markdown.short.mdx',
                //             children: []
                //         }
                //     ]
                // },
                {
                    link: '/typography',
                    title: 'Typography',
                    tags: '',
                    components: 'typography/*.jsx',
                    children: [
                        {
                            link: '/headline',
                            title: 'Headline',
                            tags: '',
                            mdx: './typography/headline.mdx',
                        }, {
                            link: '/caption',
                            title: 'Caption',
                            tags: '',
                            mdx: './typography/caption.mdx',
                        }, {
                            link: '/body',
                            title: 'Body',
                            tags: '',
                            mdx: './typography/body.mdx',
                        }
                    ]
                },
                // {
                //     link: '/labeled',
                //     title: 'Labeled',
                //     tags: '',
                //     components: 'labeled/index.jsx',
                //     mdx: './labeled.mdx',
                // },
                {
                    link: '/selection',
                    title: 'Selection',
                    tags: '',
                    children: [
                        {
                            link: '/checkbox',
                            title: 'Checkbox',
                            tags: '',
                            components: 'selection/checkbox/*.jsx',
                            mdx: './selection/checkbox.mdx',
                        },
                        {
                            link: '/radio',
                            title: 'Radio',
                            tags: '',
                            components: 'selection/radio/*.jsx',
                            mdx: './selection/radio.mdx',
                        }
                    ]
                },
                {
                    link: '/icon',
                    title: 'Icon',
                    tags: '',
                    components: 'icon/icon.jsx',
                    mdx: './icon.mdx',
                },
                // {
                //     link: '/tabs',
                //     title: 'Tabs',
                //     tags: '',
                //     components: 'tabs/*.jsx',
                //     mdx: './tabs.mdx',
                // },
                // {
                //     link: '/tooltip',
                //     title: 'Tooltip',
                //     tags: '',
                //     components: 'tooltip/*.jsx',
                //     mdx: './tooltip.mdx',
                // }
            ]
        },

        {
            link: '/develop',
            title: 'Разработка',
            img: '',
            description: '',
            tags: '',
            mdx: './develop.mdx',
        },
        {
            link: '/resources',
            title: 'Ресурсы',
            img: '',
            description: '',
            tags: '',
            mdx: './resources.mdx',
        }
    ],
    webpackConfig
}
