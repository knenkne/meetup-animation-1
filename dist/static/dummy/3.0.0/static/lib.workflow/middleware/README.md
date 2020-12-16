# Workflow middleware # 

Конфигурируемая мидлвара фреймворка Express для эмуляции ответов ЕФС Workflow и протокола обмена СБОЛ UI Workflow.

В терминах Express данная мидлвара является промежуточным обработчиком уровня маршрутизатора.
[Документация Express на русском языке](http://expressjs.com/ru/guide/using-middleware.html)

Мидлвару можно использовать как в стандартном stub - сервере sbtsbol, так и в любом Express приложении.

Каждый ответ и запрос проходит валидацию модулем [@sbol/schemas](https://sbtatlas.sigma.sbrf.ru/stash/projects/PLSBOL/repos/schemas/browse)
и в случае несоответствия - сервер возвращает ответ с кодом 500, содержащим в теле информацию о причинах непрохождения валидации.
По умолчанию используются схемы для протокола версии 1.0. Если у проекта существует потребность,возможно использования других
версий схем, доступных в модуле. Для этого необходимо указать версию в свойстве protocolVersion файла конфигурации.


## УСТАНОВКА ##
Процесс установки состоит из двух простых этапов:
  
1.  создание конфигурации с описанием шагов процесса
2. подключение в проект

  
### 1. Конфигурация ###
  
Файл конфигурации представляет из себя объект, состоящий
* states: <object>    - описание шагов
* start: <string>     - имя начального шага
* end: ?Array<string> - массив из имен шагов. Обычно состоит из одного элемента. Если указан элемент, заглушечный сервер отправит ответ result: END с output (если шаг содержит информацию).
* protocolVersion: ?<string>  - версия протокола, например '1.0'

```javascript 
states: {
    step1: {                    --- имя шага
        events: {               --- события, доступные на шаге 1 
            next: {             --- имя события
                to: 'step2',    --- имя следующего состояния 
                validate        --- [опционально] - функция валидации запроса (описание ниже)
            }
        },                          
        data: { 
            screens: [ ScreenType ],
            events: [ EventType ]
        }               
    },
    
}
start: 'step1'
```
* validate - опциональная функция, позволяющая настроить серверную валидацию сервера.
Функция вызывается с переданным в теле запроса объектом fields и должна возвратить массив ошибок типа MessageType
    Пример:
    ```javascript
    const validate = (fields) => ([
        { type: 'ERROR', title: 'Имя не передано', code: 'transfer:fullName:firstName' },
        { type: 'WARNING', title: 'Фамилия должна состоять минимум из двух символоы' , code: 'transfer:fullName:lastName' }
    ])
    ```
    Для создания ошибок рекомендуется использовать утилиту createValidationMessage. Утилита создает объект MessageType валидной формы,
    добавляя уникальный идентификатор ошибки.
    
```javascript
        const { middlewareUtils: {  createValidationMessage } } = require('@sbol/lib.workflow/middleware')
        
        const validate = (fields) => ([
                createValidationMessage({ type: 'ERROR', title: 'Имя не передано', code: 'transfer:fullName:firstName' }),
                createValidationMessage({ type: 'WARNING', title: 'Фамилия должна состоять минимум из двух символоы' , code: 'transfer:fullName:lastName' })
            ])
```

* [ScreenType](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-ScreenType)
* [EventType](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-FormNavigationType)
### 2. Подключение в проект ###

1. установка модуля
    ```bash
    npm install lib.workflow --save-dev
    ```
2. в файле _stub/api/index.js_ подключаем мидлвару

    Пример файла _stub/api/index.js_ с комментариями:
    ```javascript
    const router = require('express').Router()
            // импорт Express Router
            
            const { getMiddleware } = require('@sbol/lib.workflow/middleware')
            // импорт фабрики middleware
                
            const flow = require('./flow')
            // импортируем файл конфигурации, созданный на шаге 1
                
            const middleware = getMiddleware(flow)
            // создаём экземпляр мидлвары
            
            router.use('/workflow-gate', middleware)
            // uri подключения
            
            module.exports = router
            // экспорт роутера
    ```
        


3. Запускаем stub сервер стандартным путём.
    
    Теперь можно обращаться к локальному воркфлоу-серверу согласно
    [документации](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=101866205)
