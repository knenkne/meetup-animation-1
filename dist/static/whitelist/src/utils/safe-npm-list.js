const { execSync } = require('child_process') /* Дабы не грузить весь npm ради исполнения известной команды */

/**
 * Получение дерева зависимостей любой ценой
 * @param {String} pathToProject - путь до проекта
 * @return {Object} - дерево зависимостей
 */
module.exports = (pathToProject) => {
    try {
        return JSON.parse(execSync(`cd ${pathToProject} && npm list --json`, { encoding: 'utf-8' }))
    } catch (error) {
        return JSON.parse(error.output[1])
    }
}
