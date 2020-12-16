const df = require('../../utils/define-functionality')
const cssHashMap = require('../../utils/css-hash-map')
const getProjectUrlByCode = require('../../utils/get-project-url-by-code')
const { openUrl } = require('../abstract/actions/window')
const getCssHashMapUrl = require('../../utils/get-css-hash-map-url')

const navigation = {

    navigateToProjectById: df(
        /^пользователь переходит в проект с id "([^"]*)"$/,
        function navigateToProjectById (id) {
            const url = getProjectUrlByCode(id)
            openUrl.call(this, url)
            const hashMapUrl = getCssHashMapUrl(id)
            cssHashMap.updateByUrl(hashMapUrl)
            console.log('Обновил все css-hash-map')
            this.checkAccessibility({ checkUrl: false })
        }
    ),

    navigateToProjectByIdAndSubLink: df(
        /^пользователь переходит в проект с id "([^"]*)", дополняя ссылку "([^"]*)"$/,
        function navigateToProjectById (id, additional) {
            const url = `${getProjectUrlByCode(id)}${additional}`
            openUrl.call(this, url)
            const hashMapUrl = getCssHashMapUrl(id)
            cssHashMap.updateByUrl(hashMapUrl)
            console.log('Обновил все css-hash-map')
            this.checkAccessibility({ checkUrl: false })
        }
    ),

}

module.exports = navigation
