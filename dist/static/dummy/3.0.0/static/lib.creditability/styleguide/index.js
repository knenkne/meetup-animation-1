/* eslint-disable */
const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(path.resolve(__dirname, 'index.hbs'), 'utf8')
const css = fs.readFileSync(path.resolve('node_modules', '@sbol', 'common', 'files', 'css', 'styles-common.css'), 'utf8')

// Mini templates
module.exports = ({ title, container, js: [mainJs] }) => {
    const data = {
        title,
        container,
        mainJs,
        css,
        favicon: 'https://stat.online.sberbank.ru/CSAFront-res/28.1/skins/sbrf/images/favicon.ico'
    }

    return html
        .match(/{{.+?}}/gm)
        .map((socket) => ({
            socket,
            variable: socket.match(/{{(.+)}}/)[1]
        }))
        .reduce((memo, { variable, socket }) => memo.replace(socket, data[variable]), html)
}
