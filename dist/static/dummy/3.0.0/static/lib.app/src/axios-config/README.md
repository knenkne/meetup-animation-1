# Обработчики axios

## Описание

Для конфигурации работы приложения по умолчанию необходимо
выполнить первоначальную настройку перехватчиков запросов
axios.

__Примечание__: порядок следования перехватиков __важен__!

## Применение

```js
import axios from 'axios'
import { axiosConfig } from '@sbol/lib.app'

const {
    useMultipleInterceptors,
    rq,
    rs
} = axiosConfig

export const ufsAxios = axios.create()

useMultipleInterceptors(
    ufsAxios,
    [
        ...rq.ufsInterceptors,
        ...rs.ufsInterceptors,
        rs.logErrors
    ]
)
```

## Существующие перехватчики

### Для запроса:

- `rq.useUfsBlockRoot`: установка корня запроса
в параметр `ufs.block.root.url` и организация CORS,
- `rq.prolongERIBSession`: продление сессии ЕРИБ, если есть настройка `ping.url`,
- `rq.disableCache`: отключение кэширования get-запросов через уникальный query-параметр,
- `rq.addRequestType`: добавление типа запроса для различения на PL Middle,
- `rq.checkSession`: вызов метода PL Middle warmUpSession по запросам к БХ,
- `rq.antifraudHeaders`: к запросу добавляются заголовки
антифрод-системы,
- `rq.useApiRoot`: добавление корректного адреса сервера из конфигурации
к началу адреса запроса при запросах к PL Middle,
- `rq.useMapiRoot`: добавление корректного адреса сервера из конфигурации
к началу адреса запроса при запросах к clientapi ЕРИБ

__Примечание__: помимо прочего `rq.checkSession` подключает
слушатели событий по настройке `session.autorenew.events` с таймаутом
`session.autorenew.debounce`.

### Для ответа:

- `rs.loggerModifyFactory({ modifyRq, modifyRs, modifyRqUrl })`: модификатор
логируемых данных для запроса и ответа. Позволяет исключить
из платформенного логирования чувствительные данные.
`modifyRqUrl` - этот параметр служит для модификации query параметров
`modifyRq` и `modifyRs`  принимают на вход JSON запроса и ответа
соответственно. Возвращают JSON, отправляемый в логи.
```
const patternModifierReqUrl = (responseURL) => responseURL.substr(0, responseURL.indexOf('oldPassword'))
const patternModifier = (body) => body.replace(/[a-zA-Z]/g, 'A').replace(/\d/g, '1')
export const getAxiosInstance = () => {
    const changePasswdAxios = axios.create()

    axiosConfig.useMultipleInterceptors(changePasswdAxios, [
        axiosConfig.rs.loggerModifyFactory({
            modifyRqUrl: patternModifierReqUrl,
            modifyRq: patternModifier,
            modifyRs: patternModifier
        })
    ])

    return changePasswdAxios
}
```
- `rs.authCheck`: проверка авторизации -- если пользователь
неавторизован (401, 403), страница перезагружается.
Действует только при отсутствии настройки `ufs.block.root.url`.
(данный интерцептор выводится из `defaultInterceptors`).
- `rs.eribAuthCheck`: проверка авторизации -- если пользователь
неавторизован (401, 403), страница переводится на ЕСА.
- `rs.reopenSession`: проверка авторизации -- если пользователь
неавторизован (401, 403), производится вызов сервиса PL Middle
по настройке `session.create.url`. По возможности обновляется
настройка `ufs.block.root.url`.
Если ответ сессии 401 или 403, то производится редирект на аутентификацию.
Если ответ сессии 200, то производится повторный запрос к БХ.
Если повтор к БХ или сессия вернули ошибку, то производится редирект на страницу ошибки.
- `rs.logError`: логирование ошибок запросов
- `rs.addResponsePlatformDataExtraction`: перераспределение шейпа
платформенного ответа ЕФС:
```
axios(config)
    .then((response) => {
        // Содержимое response.data.body
        log(response.data)
        // Содержимое response.data.success, response.data.messages, response.data.error
        log(response.ufs)
    })
    .catch((error) => {
        // Содержимое response.data.body
        log(error.data)
        // Содержимое response.data.success, response.data.messages, response.data.error
        log(error.ufs)
    })
```
При успехе и `success=false` интерцептор переведет запрос в состояние `reject`.

Список перехватчиков можно изменять самостоятельно, в случае
если их функционал не соответствует требованиям проекта.

Важно использовать готовые списки перехватчиков,
поскольку их состав может меняться в соответствии
с требованиями безопасности и канала в целом и при этом не требовать
вашего внимания. Списки перехватчиков сформированы для каждой АС свои:
* `ufsInterceptors` - ЕФС
    * `rq.useUfsBlockRoot`
    * `rq.prolongERIBSession`
    * `rq.disableCache`
    * `rq.addRequestType`
    * `rq.checkSession`
    * `rs.reopenSession`
    * `rs.authCheck` - не относится к `ufsInterceptors`,
    но наследственно остается в `defaultInterceptors`
* `mapiInterceptors` - ЕРИБ clientapi/mapi
    * `rq.useMapiRoot`
    * `rq.disableCache`
    * `rq.addRequestType`
    * `rq.checkSession`
    * `rs.eribAuthCheck`
* `sbolInterceptors` - PL middle
    * `rq.useApiRoot`
    * `rq.prolongERIBSession`
    * `rq.disableCache`
    * `rq.addRequestType`
    * `rq.checkSession`
    * `rs.authCheck`

Отключение перехватчиков необходимо согласовывать с
[платформой](
mailto:Kuznetsov.D.Mikhaylo@sberbank.ru,Tupitskiy.I.Ni@sberbank.ru?subject=[lib.app]%20Отключение%20axios-перехватчика
).
