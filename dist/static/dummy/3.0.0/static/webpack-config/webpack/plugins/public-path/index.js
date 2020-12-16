module.exports = class PublicPath {
    constructor (opts) {
        this.opts = opts
    }
    apply (compiler) {
        compiler.plugin('compilation', (compilation) => {
            compilation.mainTemplate.plugin('startup', (source) => [
                `
if (window.bootstrap && window.bootstrap.config && window.bootstrap.config['res.url']) {
    var baseUrl = window.bootstrap.config['res.url'].replace(/\\/?$/, '');
    __webpack_require__.p = baseUrl + __webpack_require__.p;
}
`,
                source
            ].join('\n'))
        })
    }
}
