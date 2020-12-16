module.exports = {
    hooks: {
        'pre-commit': 'npm run eslint && npm run whitelist:dv'
    }
}
