const setEnv = require('./set-env')
const getPort = require('./get-port')

module.exports = async (propertyName, retries) => {
    const nextPort = await getPort(process.env[propertyName], retries)
    setEnv(propertyName, nextPort)
    return nextPort
}
