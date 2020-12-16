# SBOL UI Workflow

Библиотека состоит из 3-х основных элементов:

1. Adapter - адаптер данных

    средства взаимодействия с Workflow http-API, селекторы данных, утилитарные функции, парсеры

    [подробнее](src/adapter/README.md)

2. Builder - построитель форм

    набор компонентов для отрисовки шаблонов экранных форм, виджетов и форматированных полей (не используется без Adapter)

    [подробнее](src/builder/README.md)

3. Middleware - утилиты для эмуляции серверного шлюза

    функция-конструктор middleware express.js, используемая для создания заглушки flow-процесса на локальном сервере

    [подробнее](middleware/README.md)
    
    
## Стратегии
Для обеспечения возможности более гибкого связывания виджетов воркфлоу разработаны стратегии 
 
   [подробнее](src/builder/strategies/README.md)

## ВАЖНО

1. Перед началом разработки проекта на Workflow, читаем
[спецификацию универсального протокола](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382)

2. После ознакомления с протоколом рекомендуется посмотреть и запустить [демо-приложение здесь](fixture/src/main.jsx) или
[в dummy](https://sbtatlas.sigma.sbrf.ru/stash/projects/PLSBOL/repos/dummy/browse/src/pages/workflow-demo/index.jsx)
  
3. Ответы на типовые вопросы можно найти в комментариях на
[странице универсального протокола](https://sbtatlas.sigm.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382),
в разделе [Решения типовых задач](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=112540560),
а так же презентации
[Workflow на практике](https://sbtatlas.sigma.sbrf.ru/wiki/download/attachments/112540560/Workflow%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B5.pptx?api=v2).

## Быстрый старт

1. Устанавливаем библиотеку в проект
```bash
npm install @sbol/lib.workflow
```

2. Подключаем reducer redux-form и lib.workflow
```javascript
import { reducer as formReducer } from 'redux-form'

import { getReducerWorkflow } from '@sbol/lib.workflow'

combineReducers({
    ...myProductProjectReducers,
    form: formReducer,
    ...getReducerWorkflow()
})
```

3. Подключаем [Builder](src/builder/README.md) (компонент Workflow) в код проекта

```javascript

import { reducer as formReducer } from 'redux-form'

import { Workflow } from '@sbol/lib.workflow'

export const MyApp = () => (
    <Workflow
        name="any-name"
        url="/api/url-to-workflow-gate"
    />
)

```

4. Для разработки на локальной машине используем [Middleware](middleware/README.md)

## API библиотеки

* [См. src export файл](./src/index.js)
* [См. middleware export файл](./middleware/index.js)
