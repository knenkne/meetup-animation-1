const ConcatSource = require("webpack-sources").ConcatSource

module.exports = class {
	constructor(options) {
		this.options = options;
	}
	apply(compiler) {
		compiler.plugin("compilation", (compilation) => {
			compilation.plugin("optimize-chunk-assets", (chunks, callback) => {
				chunks.forEach((chunk) => {
					if(!chunk.isInitial()) return;
					chunk.files
						.forEach((file) => {
							const source = `(function () {\nvar ___ = ${compilation.assets[file].source()}\__sd__("${chunk.name}", ___)\n})();`
							return compilation.assets[file] = new ConcatSource(source);
						})
				})
				callback()
			})
		})

	}
}
