module.exports = (link) => {
    if (!link) {
        return void 0
    }

    const matches = link.match(/\.git#(master|develop|dev|release\/.+|hotfix\/.+)/)

    if (matches) {
        const [, version] = matches

        if (version.includes('/')) {
            const [snapshot, realVersion] = version.split('/')
            return `${snapshot[0]}-${realVersion}`
        }

        return version
    }

    return void 0
}
