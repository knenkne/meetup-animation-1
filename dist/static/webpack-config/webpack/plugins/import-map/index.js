module.exports = class ImportMap {
    constructor (opts) {
        this.opts = opts
    }
    apply (compiler) {
        compiler.plugin('compilation', (compilation) => {
            compilation.mainTemplate.plugin('renderWithEntry', (source) => {
                const importMapString = JSON.stringify(this.opts.map, null, 4)
                const importMapAppend = `window.bootstrap.appsDependencies['${this.opts.app}'] = ${importMapString}`
                const condition = 'window.bootstrap && window.bootstrap.appsDependencies'
                source.children.unshift(`if (${condition}) ${importMapAppend};`)
                return source
            })
        })
    }
}
