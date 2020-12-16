module.exports = (env, value) => {
    if (value) {
        process.env[env] = value
    }
    return value
}
