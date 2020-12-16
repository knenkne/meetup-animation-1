# Отображение персональных предложений и работа с ними

## Документация

* CMS
    * [Сервисы PhizPFM](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=390660215)
    * [Аналитика](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=1166940306)
* CRM
    * [Общая информация](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=1025578157)
* Launcher
    * [Добавление фич на показ](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=1478007097)

Для работоспособности библиотеки необходимо наличие сессии PhizPFM в схеме сессий прикладного модуля.

## API

### OffersBlocks
Компонент для отрисовки барабана предложений в конце процесса

**Props:**

* app (String) - Название модуля, по имени которого баннеры, будут брать свои настройки из launcher
* contentId (String) - Код участника кампании, которая оформляется прямо сейчас в этом процессе. Нужно для фильтрации уже оформленного продукта
* withFallback (Boolean) Default: true - Параметр управления fallback'ом на доп.запрос к webCatalog

### OffersCarousel
Компонент для отрисовки карусели предложений в каталоге

**Props:**

* app (String) - Название модуля, по имени которого баннеры, будут брать свои настройки из launcher
* contentId (String) - Код участника кампании, которая оформляется прямо сейчас в этом процессе. Нужно для фильтрации уже оформленного продукта
* withFallback (Boolean) Default: true - Параметр управления fallback'ом на доп.запрос к webCatalog


### feedback (Object)
Совокупность методов для отправки откликов
* feedback.shown (Function) - внутренний отклик, в общем случае не требуется
* feedback.started (Function) - внутренний отклик, в общем случае не требуется
* feedback.close (Function) - внутренний отклик, в общем случае не требуется
* feedback.opened (Function) - отклик, который надо вызвать при переходе с витрины к оформлению продукта.
Параметры берутся из query или передаются из UFS в виде объекта
`{ campaignId, campaignCode, contentId, templateId, placeName }`
* feedback.done (Function) - отклик, который надо вызвать при завершении заявки.
Параметры берутся из query или передаются из UFS в виде объекта
`{ campaignId, campaignCode, contentId, templateId, placeName }`

### init (Function)
Разогрев сессии для баннеров

**Аргументы**
* app (String) - Фича lib.offers, отправляется в запросе к content-broker как places

### reject (Function)
Функция, которая принимает массив из contentId для возможности скрывать
свои предложения в течение сессии

**Аргументы**
* contentIds (Array) - Список кодов участника кампании


### Пример работы
```jsx
import { OffersBlocks } from '@sbol/lib.offers'

...

// Тип компонента баннеров
<OffersBlocks
    // Название модуля, по имени которого баннеры
    // будут брать свои настройки из launcher
    app={process.env.PKG_ID}
    // Код участника кампании, которая оформляется прямо сейчас в этом процессе
    // Нужно для фильтрации уже оформленного продукта
    contentId="123456"
    // Параметр управления fallback'ом на доп.запрос к webCatalog
    // Используется false в витринах для показа лучших предложений
    // Используется true в cross-sales в конце процессов
    withFallback
/>

```

## Сервисные настройки

* pfm.block.root.url - путь до сервиса вплоть до версии
* offers.max.offers.pro - максимальное количество ПП в SBOL.PRO, default: 30
* offers.max.offers - максимальное количество ПП в SBOL.WEB, default: 5
* offers.close.details - варианты отказа от ПП, default: intrusive,nonInterested,error
* offers.feedback.timeout - таймаут отправки событий, default: 5000ms

## Настройки Launcher

* [см. документацию](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=1478007097)

```
'lib.offers': {
    features: {
        catalog: {
            value: 'true',
            options: {
                withProducts: 'webCatalog',
                apiVersion: '1'
            }
        },
        'loans.consumer': {
            value: 'true',
            options: {
                withProducts: 'webLoans',
                apiVersion: '1'
            }
        }
    }
}
```

## Настройки banners

Ссылки banners настраиваются в PL-ADMIN поверх стандартной навигации
и разбиваются по ролям, после чего попадают вместо блока navigation в
блок config.banners.

Для локальной разработки в большинстве случаев достаточно продублировать
templates/navigation в templates/config/banners.

## Deep links

Переход из компонента к заявке осуществляется по deep links,
для которых в URL записываются параметры персонального предложения
для способности сохранить их в заявку и передать отклики в последующем.

В числе этих параметров:
* contentId - код участника кампании
* campaignCode - код кампании
* placeName - место показа
* campaignId - идентификатор кампании
* templateId - идентификатор шаблона
