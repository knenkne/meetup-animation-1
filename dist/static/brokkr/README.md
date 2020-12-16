# Brokkr

> In Norse mythology, Brokkr (Old Norse "the one who works with metal
fragments; blacksmith", anglicized Brokk) is a dwarf, who worked
the bellows so that the fire would not cool down nor get too
hot for the magic to make the hammer Mjöllnir.

-- from [Wikipedia](https://en.wikipedia.org/wiki/Brokkr)

----

__BDD test runner__


## Установка
```
npm i @sbol/brokkr@latest --save-dev
```

## `@sbol/brokkr` как надстройка

Важно помнить, что brokkr является некоторой надстройкой, стандартизацией
над общеупотребимыми opensource решениями.

Основные и обязательные к изучению инструменты, используемые в brokkr:
* [webdriverio](https://webdriver.io/) -
библиотека для отправки команд в браузер
* [cucumber](https://github.com/cucumber/cucumber-js) -
фреймворк объявления шагов и движения по сценариям
* [gheerkin](https://docs.cucumber.io/gherkin/reference/) -
BDD-язык вызова шагов в логической последовательности
* [axe](https://www.deque.com/axe/) -
инструмент по статическому анализу доступности страницы


## Как использовать?

1. Добавьте свои шаги и настройки в `<root>/cucumber/index.js`
    (см. примеры в `plsbol/dummy`)
2. Напишите некоторое количество сценариев в `<root>/cucumber/*.feature`
    с использованием наших и своих шагов
3. Если вы используете brokkr для приложений СБОЛ,
    то соберите приложение или воспользуйтесь дев сервером для него
4. Выполните команду `brokkr` или `npx brokkr`
    (с флагом `--target`, если вы собрали приложение)
5. Работает!


## Опции

### Все доступные опции
```
npx brokkr -h
```


## Как отказаться от модульных и узловых опорных точек (data-unit, data-node)?

1. Устанавливаем последнюю версию `@sbol/webpack-config`
2. Устанавливаем последние версии `@sbol/lib.*`
(там должны быть свои `temp/css-hash-map.json`)
3. Собираем проект с флагом `CSS_HASH_MAP=true`
4. На основе полученной `temp/css-hash-map.json` формируем свой словарь
([пример](src/utils/dictionaries/css-selectors.json))
5. Выпиливаем из кода свои опорные точки

### Как это работает

1. Когда вы используете шаг `пользователь переходит в проект с id "..."`,
brokkr запрашивает `css-hash-map.json` данного проекта и сохраняет в кэш.
Если данный шаг не используется,
можно воспользоваться методом `cssHashMap.updateByUrl(url)`.
2. Далее шаги с `dictionaries.selectors` преобразуют `:hash(path)`
в валидный селектор по хэшированному классу,
который уже используется `webdriver.io`
3. Для использования своей `css-hash-map.json` вам достаточно
расширить `dictionaries.selectors` словарем из названий своих элементов
в селекторы с наличием `:hash(path)`. Далее все преобразования сделает brokkr
4. Если у вас довольно изменчивая версия приложения и версии зависимостей,
то вы можете использовать вместо указания версий в ключах `css-hash-map.json`
символ `*`. Он подберет в селекторы все доступные хэши классов по любой версии
приложения или библиотеки
([specification](src/utils/dictionaries/selectors/tests/get-selector.spec.js))

## Золотые правила brokkr

### fibers

В зависимостях brokkr присутствует wdio-cucumber-framework, который
использует пакет fibers для возможности сделать асинхронный код синхронным.
Согласно [документации](https://github.com/laverdet/node-fibers#supported-platforms)
пакета fibers следует, что для корректной
работы необходимы только четные версии node.js.
Также может потребоваться компилирование fibers,
если версия node.js не сопоставима с версией fibers:
* node@4 - fibers@1
* node@6 - fibers@2
* node@8-10 - fibers@3
* node@10-12 - fibers@4

На данный момент в проекте используется fibers@3.

### О chromedriver
Скорее всего вы разрабатывает тесты UI в Chrome,
скорее всего он обновляется автоматически.
И если вдруг вам попадается ошибка
`call function result missing 'value'` - знайте, что
ваш Chrome обновился и теперь нужен новый chromedriver.
* Попробуйте установить флаг `--chrome-driver-version` с наиболее
актуальным значением со статических ресурсов:
`http://sbt-okdbo-0078.sigma.sbrf.ru/wdio`
Например: `npx brokkr --chrome-driver-version 2.36`
* Если данное решение не помогает, проверьте, обновился ли Chrome
до последней версии и повторите процедуру с обновленным Chrome
* Проверьте наличие chromedriver наиболее актуальной версии
в интернете
* Если таковой есть в интернете, но он отсутствует на зеркале
`http://sbt-okdbo-0078.sigma.sbrf.ru/wdio`, сообщайте платформе СБОЛ
о добавлении данной версии драйвера
* В общем случае при доступности интернета использование зеркала
`http://sbt-okdbo-0078.sigma.sbrf.ru/wdio` не требуется.
Однако, если драйверы при разработке блокируются политиками компании,
необходимо указать флаг
`--drivers-mirror http://sbt-okdbo-0078.sigma.sbrf.ru/wdio`.
Аналогично данное зеркало используется в CI.

### О совместимости selenium, drivers and browsers
Если случилась ошибка такого рода:
```
ERROR: Timed out waiting for driver server to start.
Build info: version: '3.6.0', revision: '6fbf3ec767', time: '2017-09-27T16:15:40.131Z'
System info: host: 'MacBook-Pro.local', ip: '10.9.49.71', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.14', java.version: '1.8.0_151'
Driver info: driver.version: unknown
```
то наиболее вероятная причина такой ошибки заключается
в несовместимоси драйверов с selenium standalone server.
Проверьте следующие параметры на логическое совпадение:
* Версия вашего браузера
* Версия устанавливаемого chromedriver
(или другого драйвера вашего браузера)
* Версия устанавливаемого selenium standalone server
* Версия selenium standalone server по адресу
http://localhost:4444/wd/hub/static/resource/hub.html
Если логическая цепочка обрывается
на несовпадении версий последних двух пунктов,
и если ссылка открывается в любой момент времени,
когда тесты даже не запускались,
то данный сервер необходимо остановить.
* Команда для macOS: `lsof -ti:4444 | xargs kill`
* Команда для Windows: `kill $(lsof -t -i :4444)`

### О новых шагах
Не стесняйтесь писать новые шаги, пробовать различные варианты,
в том числе с применением механик, реализованных в данном пакете.
Авторы наиболее полезных шагов попадут в список contributors
фреймворка, а их разработка перекочует в `@sbol/brokkr`

### О гибкости
Не стесняйтесь расширять словари
и конфигурировать вспомогательные механики
* Пример расширения словаря:
```
const brokkr = require('@sbol/brokkr')
Object.assign(brokkr.dictionaries.selectors, {
     'строка снилс': ':hash(project--src-components-snils-style-wrapper)'
     'поле снилс': ':hash(project--src-components-snils-style-wrapper) [name="loans:request:snils"]'
})
```
* Пример изменения ссылки для аутентификации:
```
const brokkr = require('@sbol/brokkr')
brokkr
  .getAuthUrl
  .options
  .getIftAuthUrl = () => 'https://stage.minor.sberbank.ru:4456/CSAFront/index.do'
```

### О выборках
Нет нужды прогонять все автотесты каждый раз. Для этого
в brokkr реализован флаг `--tag-expression`, который позволит
управлять списком запускаемых фич и сценариев с помощью
заранее установленных тегов

### Об умных заглушках
При разработке управляйте данными, которые возвращают заглушки
через установку клиента в `process.env.STUB_CLIENT`. В `--env dev`
с этим поможет шаг `пользователь авторизуется в СБОЛ по id "..."`

### Тестируем в Safari
Драйвер для Safari поставляется вместе с ОС и браузером.
Изначально драйвер выключен, для его включения используйте команду:
`safaridriver --enable`.
Также вам потребуется включить настройку
"Allow Remote Automation" ("Разрешить удаленную автоматизацию")
в меню разработчика Safari.


## Справочник фреймворка

[Справочник фреймворка](src/steps/README.md)
