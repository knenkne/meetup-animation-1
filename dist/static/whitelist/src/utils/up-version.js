const fs = require('fs')
const path = require('path')

module.exports = (pathToProject, name, nextVersion) => {
    const packageJsonPath = path.resolve(pathToProject, 'package.json')
    const packageJson = fs.readFileSync(packageJsonPath, 'utf8')

    const nextPackageJson = packageJson.replace(new RegExp(`"${name}": ?".+"`), `"${name}": "${nextVersion}"`)

    fs.writeFileSync(packageJsonPath, nextPackageJson, 'utf8')
}
