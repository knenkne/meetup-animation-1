module.exports = {
    process: (src) =>
        `module.exports = "${src.replace(/"/g, '\\"').replace(/\n/g, '')}";`,
}
