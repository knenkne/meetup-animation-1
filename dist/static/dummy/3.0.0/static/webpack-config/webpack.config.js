require('./webpack/utils/default-envs')

if (process.env.MODE === 'testing') {
    module.exports = require('./testing')
} else if (process.env.NODE_ENV === 'development') {
    module.exports = require('./development')
} else if (process.env.NODE_ENV === 'production') {
    module.exports = require('./production')
} else {
    throw new Error(
        'There is no way to build the application. Use the correct NODE_ENV'
    )
}
