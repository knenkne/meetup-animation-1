import _ from 'lodash'

export const exportCheck = (exports, mandatoryExports) => {
    if (_.size(exports) !== _.size(mandatoryExports)) {
        fail(`Количество экспортируемых элементов ${_.size(exports)} не соответствует
         величине эталонного экспорта ${_.size(mandatoryExports)}`)
    }
    _.forEach(mandatoryExports, (mandatoryExportItem) => {
        if (!_.has(exports, mandatoryExportItem)) {
            exportCheck.warnList.push(mandatoryExportItem)
        }
    })

    if (exportCheck.warnList.length) {
        fail(`Test Error: Отсутствуют обязательные экспорты:
    ${exportCheck.warnList.join('\n    ')}`)
    }
}

exportCheck.warnList = []
