# SBOL UI Workflow

## Adapter - адаптер данных

средства взаимодействия с Workflow http-API, селекторы данных, утилитарные функции, парсеры

---

## API

### getReducerWorkflow
[Исходный код](https://sbtatlas.sigma.sbrf.ru/stash/projects/PLSBOL-LIBS/repos/lib.workflow/browse/src/index.js)
Фабрика, создающая слайс Workflow для подключения в redux store

#### Импорт
```javascript
import { getReducerWorkflow } from '@sbol/lib.workflow'
```

#### Установка

```javascript
combineReducers({
  ...myProductProjectReducers,
  form: formReducer,
  ...getReducerWorkflow()
})
```

### Action Creators
[Исходный код](https://sbtatlas.sigma.sbrf.ru/stash/projects/PLSBOL-LIBS/repos/lib.workflow/browse/src/adapter/actions/index.js)
Набор функций для управления состоянием Workflow

#### Импорт
```javascript
import { actionsWorkflow } from '@sbol/lib.workflow'
```

* `updateReference(referenceId: String, items: Array, [properties: Object])`
  
  Добавление элементов справочника к существующим записям. Если передан 3-й аргумент, свойства справочного сервиса будут смёржены. 
  
  `referenceId` - имя справочника

  `items` - массив элементов справочника [ReferenceItemType](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-ReferenceItemType)

  `properties` - свойства справочного сервиса [ReferenceType.properties](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-ReferenceType)


* `updateReferences(references: Object)`

  Добавление новых записей  в объект данных информационного сервиса

  `references` - [ReferenceType.properties](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-ReferenceType)


* `replaceReference(referenceId: String, [items = []])`

  Полная замена элементов справочника. Properties справочника не изменяются
  `referenceId` - имя справочника
  `items` - массив элементов справочника [ReferenceItemType](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-ReferenceItemType)

## Стандартные интерцепторы

* antifraudHeadersWorkflow - установка заголовков antifraud
* designVersions - установка заголовка версии дизайна X-Workflow-Options
* prolongERIBSession - продление сессии ЕРИБ с каждым запросом к БХ
* useUfsBlockRoot - использование ufs.block.root.url в корне запросов
* platformErrorCheck - проверка наличия ошибок в ответе с платформенной оберткой ЕФС
* authCheck - проверка сессии согласно платформе ЕФС 6.9 (кандидат на удаление)
* protocolMapper - мягкое преобразование ответа от протокола 1.0 к 2.0
* apiLinks - замена `api:` в ответе сервера на `ufs.block.root.url` или `base.url`

## Дополнительные заголовки

* `X-Workflow-Options`

  Заголовок доп. информации о фронтальном модуле (браузер -> сервер).
  На данный момент в нем передается признак дизайна. Значение равно `3.0`.

* `X-GW-Redirect`

  Заголовок смены URL шлюза при переходах между процессом и подпроцессом (сервер -> браузер).
  В нем передается URL, необходимый для дальнейшей работы. С ним возвращается обновленный ответ сервера.
  Повторые запросы в рамках того же перехода по новому адресу делаются.
  Дополнительноо о заголовке [тут](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=566526404).
