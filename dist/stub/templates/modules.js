/* eslint-disable */
// Больше про launcher: https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=793288054

const { version: searchVersion } = require('@sbol/region.search/package');
const {
    version: bootstrapVersion,
} = require('../../../webpage.provider.bootstrap/package');

module.exports = {
    entry: { version: '0.0.0', features: null, options: null },
    'webpage.provider.loaders' : {
        features: {
            'logo-city': {
                'value': 'logo-city'
            }
        }
    },
    // Ваш модуль
    dummy: {
        features: {
            // Сообщения-светофоры
            // "ShowPageMessage": {
            //     "value": "false",
            //     "options": {
            //         // Место показа сообщений-светофоров (условное место показа в БД ЕРИБ)
            //         "pageKey": "dummy",
            //         // Внутренний роутинг, для которого сообщения-светофоры показываются
            //         "route": "dummy"
            //     }
            // },
            // Демонстрационная фича модуля - сервис списка библиотек
            demoRequest: {
                value: '/api/dummy/init',
                // Демонстрационная опция фичи - показывать ли результат работы сервиса
                options: {
                    showResult: 'true',
                },
            },
        },
        // Демонстрационная опция модуля - показывать ли процесс Workflow 2.4 дизайна
        options: {
            showDemoFlowConfig24: 'true',
        },
    },
    // Библиотека перс.предложений
    'lib.offers': {
        features: {
            // Показывать предложения в dummy
            dummy: {
                value: 'true',
                // Место показа в dummy
                options: {
                    withProducts: 'webCatalog',
                },
            },
        },
    },
    // Для отображения region.search, обязательно зафиксировать версию в launcher
    'region.search': {
        version: searchVersion,
    },
};
