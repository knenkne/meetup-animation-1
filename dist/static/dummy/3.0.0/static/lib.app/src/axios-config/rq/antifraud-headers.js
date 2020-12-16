/* eslint-disable no-param-reassign, comment: используется для мутирования конфигурации запроса */
import _ from 'lodash'

const getDomDataCollection = () => {
    try {
        const { DomDataCollection } = window
        const domDataCollection = new DomDataCollection()
        domDataCollection.startInspection()

        return domDataCollection
    } catch (err) {
    // eslint-disable-next-line @sbol/common/no-cyrillic-outside-cms
        return new Error('Ошибка запуска сбора данных антифрода')
    }
}

/**
 * Enhance request with antifraud headers
 * @param {Object} rqConfig - request configuration
 * @return {Object} - enhanced rqConfig
 */
export default (rqConfig) => {
    if (typeof window === 'object') {
        const domDataCollection = getDomDataCollection()
        rqConfig.headers['RSA-Antifraud-Device-Print'] = _.result(
            window,
            'encode_deviceprint',
            ''
        )
        rqConfig.headers['RSA-Antifraud-Page-ID'] = _.replace(
            window.location.href,
            window.location.origin,
            ''
        )
        rqConfig.headers['RSA-Antifraud-DOM-Elements'] = _.result(
            domDataCollection,
            'domDataAsJSON',
            ''
        )
        rqConfig.headers['RSA-Antifraud-JS-Events'] = _.result(
            window,
            'UIEventCollector.serialize',
            ''
        )
    }

    return rqConfig
}
