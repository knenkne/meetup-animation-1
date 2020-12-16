# Базовая dev-конфигурация сервера PL SBOL WEB

## Опции

- --mode (Enum:['production', 'development'], default: development) -
Устанавливает значение process.env.NODE_ENV
- --port (Number default: 4242) - Порт дев сервера
- --with-open-browser - После запуска открывется браузер
- --without-webpack - Сервер запускается без webpack сборки

## Конфигурация

Данный пакет ориентирован на использование .serverrc конфига,
чтобы дополнять заглушку проектными элементами.

Пример:

```json
{
    "api": "stub/api",
    "templates": "stub/templates",
    "proxy": [
        {
            "context": "",
            "options": {}
        },
        {
            "context": [],
            "options": {}
        }
    ]
}
```

### Параметры

#### api - путь до заглушки

По данному пути размещается express router.

Обратите внимание, что заглушка более не монтируется к `/api`.
Новая точка монирования - `/`.

#### hbs - путь к шаблонам обвязки приложения

По данному пути размещается объект шаблонов основного layout.
По дефолту путь направляет в `node_modules/@sbol/webpage.provider.templates`.

#### templates - путь до модели hbs

По данному пути размещается функция, получающая аргументы
запроса html-страницы `(req, res, next)`.

Обратите внимание, что функция будет вызвана в первый раз без аргументов
для определения, например, точки размещения статики.

Модель состоит из нескольких составляющих:
```
const model = {
    ...hbs, // перечень настроек, влияющих на html
    regions, // объект регионов
    apps, // объект приложений
    config, // объект конфигурации
    data, // объект предзаполненных данных (например, профиль клиента)
    navigation, // объект навигации
    messages, // объект текстовых констант из PL Admin
    launcher // объект всех фич и опций
}
```

* hbs - версии bootstrap, common, размещение скриптов antifraud и т.д.
* regions - `{ node_id: { name, version }, ... }`
* apps - `{ module_context: { name, version, vendorVersion }, ... }`,
vendorVersion присутствует только у модулей 2.4
* config - `{ key: value, ... }`
* data - `{ module_id: { profile: {}, products: {}, ... }, ... }`
* navigation - `{ module_id: module_context, ... }`
* messages - `{ key: message, ... }`
* launcher - modules.json из 2.4

Реализация дефолтного конфига [тут](./src/templates/index.js).

Какие задачи может решить это расширение конфига:
* Добавление соседних приложений для интеграции между ними и возможности провести связку UI-тестов;
* Переключение между конфигурациями для эмуляции разных пользователей;
* Эмуляция предзагрузки данных.

```js
// Пример с запросами статики с ПРОМ
module.exports = () => ({
    ...require('@sbol/dev.server')
        .getDefaultConfig(),
    resourcesUrl: 'https://stat.online.sberbank.ru'
})
```

#### proxy - проксирование

Представляет собой массив объектов. Каждый объект является настройкой отдельного проксирования и содержит два параметра:
* context - строка с путем или массив путей для проксирования ([подробнее](https://www.npmjs.com/package/http-proxy-middleware#context-matching));
* options - опции проксирования ([подробнее](https://www.npmjs.com/package/http-proxy-middleware#options)).

#### locales - путь до локалей к модели hbs

По данному пути размещается объект локалей, заглушка локалей из @sbol/common.

#### webpackConfig - путь до конфигурации webpack

По данному пути размещается объект конфигурации сборки webpack.
По дефолту путь направляет в `node_modules/@sbol/webpack-config`.

#### html - путь до hbs-шаблона в движке handlebars

По данному пути размещается hbs-шаблон для рендера страницы.
По дефолту путь направляет в `3.0/index.hbs`.

#### additionalStaticRoots - входные точки для дополнительных стат.ресурсов

Данный параметр очень удобен, если необходимо в новой обвязке запустить старый модуль.
Указывайте в `additionalStaticRoots` массив со всеми дополнительными точками,
путь до которых формируется относительно `process.cwd()`.
Например: `additionalStaticRoots: ['../brokerage', '../loans.dashboard']`.
Когда вы подключили дополнительную статику, остается только подключить заглушку.
Как правило, достаточно:
* `templates/modules.json` - добавить фичи проверяемых модулей
* `templates/apps.js` - добавить модуль, например:
    ```
    '/brokerage': {
        name: 'brokerage',
        version: '7.0.9',
        vendorVersion: '4.1.0'
    }
    ```
* `templates/navigation.js` - добавить id и ссылку на модуль
* `stub/api/index.js` - добавить express router дополнительной заглушки, например:
`.use('/UFS', require('../../../brokerage/stub/api'))`

PS: не забудьте предварительно собрать проект!
