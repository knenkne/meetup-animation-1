const path = require('path')
const fs = require('fs')

const cwd = path.resolve(process.cwd())

export const getPkgId = () => {
    try {
        const { name } = require(`${cwd}/package`)
        return name.replace('@sbol/', '')
    } catch (error) {
        console.error('Ошибка при попытке получить имя проекта из package.json')
        throw error
    }
}

export const requireConfigurationFile = (filename) => {
    const config = path.resolve(cwd, `stub/${filename}.js`)
    if (fs.existsSync(config)) {
        require(config)
    }
}
