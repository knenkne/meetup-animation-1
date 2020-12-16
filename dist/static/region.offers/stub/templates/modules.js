/* eslint-disable */
// Больше про launcher: https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=793288054

const { version: searchVersion } = require('@sbol/region.search/package')

const { version: offersVersion } = require('../../package')

module.exports = {
    // Ваш модуль
    "dummy": {
        "features": {
            // Сообщения-светофоры
            "ShowPageMessage": {
                "value": "true",
                "options": {
                    // Место показа сообщений-светофоров (условное место показа в БД ЕРИБ)
                    "pageKey": "dummy",
                    // Внутренний роутинг, для которого сообщения-светофоры показываются
                    "route": "dummy"
                }
            },
            // Демонстрационная фича модуля - сервис списка библиотек
            "demoRequest": {
                "value": "/api/dummy/init",
                // Демонстрационная опция фичи - показывать ли результат работы сервиса
                "options": {
                    "showResult": "true"
                }
            }
        },
        // Демонстрационная опция модуля - показывать ли процесс Workflow 2.4 дизайна
        "options": {
            "showDemoFlowConfig24": "true"
        }
    },
    // Библиотека перс.предложений
    "region.offers": {
        "version": offersVersion,
        "options": {
            "max.offers": "10",
            "feedback.timeout": "30000",
            "close.details": "intrusive,nonInterested,error",
            "auto.transition.time": ""
        }
    },
    // Абстракная конфигурация перс.предложений
    "region.offers.config": {
        "features": {
            // Показывать предложения в region.offers/fixture
            "region.offers": {
                "value": "true",
                // Место показа в region.offers/fixture
                "options": {
                    "withProducts": "webCatalog"
                }
            }
        }
    },
    // Для отображения region.search, обязательно зафиксировать версию в launcher
    "region.search": {
        version: searchVersion
    }
}
