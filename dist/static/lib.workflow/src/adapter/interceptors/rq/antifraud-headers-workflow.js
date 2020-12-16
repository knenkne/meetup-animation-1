import _ from 'lodash'

let data = {}

/**
 * Функция для обновления ссылки на объект domDataCollection, который создает lib.antifraud
 * @param {Object} configObject - объект domDataCollection
 * @return {Object} - объект domDataCollection
 * */
export const enhanceAntifraudData = (configObject) => {
    data = configObject
    return data
}

/**
 * Копия antifraudHeaders из as @sbol/lib.app, с измененной ссылкой на domDataCollection
 * Enhance request with antifraud headers
 * @param {Object} rqConfig - request configuration
 * @return {Object} - enhanced rqConfig
 */

export const antifraudHeadersWorkflow = (rqConfig) => {

    if (typeof window === 'object') {
        const { DomDataCollection } = window
        let domDataCollection
        if (DomDataCollection) { // RSA и hashtable не приходят в стабе и ломают все
            domDataCollection = new DomDataCollection()
            domDataCollection.startInspection()
        }

        rqConfig.headers['RSA-Antifraud-Device-Print'] = _.result(window, 'encode_deviceprint', '')
        rqConfig.headers['RSA-Antifraud-Page-ID'] = _.replace(window.location.href, window.location.origin, '')
        rqConfig.headers['RSA-Antifraud-DOM-Elements'] = _.result(domDataCollection, 'domDataAsJSON', '')
        rqConfig.headers['RSA-Antifraud-JS-Events'] = _.result(window, 'UIEventCollector.serialize', '')

    }
    return rqConfig
}
