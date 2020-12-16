const logLevelMap = {
    OFF: 'SILENT',
    I: 'INFO',
    E: 'ERROR'
}

const langMap = {
    'ru-RU': 'ru'
}

export default (config = {}) => ({
    ...config,
    // Лечим систему логирования мидла
    'log.level': logLevelMap[config['log.level']] || config['log.level'],
    // Пустые строки лучше, чем null
    'analytics.yandex.id': config['analytics.yandex.id'] || '',
    'analytics.google.id': config['analytics.google.id'] || '',
    // Дефолтные значения
    'analytics.yandex.level': config['analytics.yandex.level'] || 'ALL',
    'analytics.google.level': config['analytics.yandex.level'] || 'ALL',
    'analytics.segmento.level': config['analytics.segmento.level'] || 'ALL',
    // Преобразование языка для локалей и прочего
    lang: langMap[config.lang] || config.lang,
    // Чистим последний слэш у настройки res.url
    'res.url': config['res.url'].replace(/\/$/, ''),
    // Лечим неправильные настройки для ЕРИБ
    isSbolPro: config.isSbolPro === 'true' || config.isSbolPro === true
})
