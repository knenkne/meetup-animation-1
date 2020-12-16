# @sbol/whitelist

## DOCS

[Документация в confluence](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=688130132)

### INSTALL

Если вы не хотите разрешать в белых списках сам whitelist и его зависимости,
ставьте пакет глобально:
```
npm install -g @sbol/whitelist
```
Если вам достаточно держать whitelist в проекте для совместной разработки,
ставьте его локально:
```
npm install @sbol/whitelist
```

### USAGE

#### CLI
```
whitelist [--root] [--check-list license,require] [--quiet] [--force]
```

* `--root (-r)` - проверять только корневые зависимости проекта (без транзитивных)
* `--check-list (-l) [list of comma separated actions]` - перечень проверок
  * `depVersions` - проверка актуальности версий зависимостей (рекомендуется флаг root)
  * `license` - проверка лицензирования зависимостей (флаг root по желанию)
  * `npmAudit` - проверка npm audit на случай,
  если вы хотите разделять критичность замечаний аудита по своим правилам
  или если у вас нет доступа к интернету в некоторых случаях;
  (рекомендуется без флага root)
  * `require` - проверка обязательно установленных зависимостей
  (флаг root не применяется)
* `--quiet (-q)` - показывать только ошибки
* `--force (-f)` - предупреждения равносильны ошибкам
* `--registry [NPM registry]` - репозиторий npm-пакетов, куда может обращаться
whitelist за информацией
* `--userconfig [Path to npmrc]` - полезно для DevOps, абсолютный путь до npmrc файла
* `--fix` - обновление зависимостей в package.json.
На данный момент доступен фикс только версий по `depVersions`.
* `--fix-force` - обновление зависимостей в package.json и node_modules.
Данные флаги в достаточной мере эквивалентны принципу работы `ncu`.
* `--lists-path [whitelist-config/lists or ./whitelist]` - путь до белых списков,
может быть названием пакета или относительным путем

#### Node.js
```javascript
const whitelist = require('@sbol/whitelist')

whitelist({
    pathToProject: process.cwd(), // путь до проверяемого проекта
    root: false, // проверять только корневые зависимости проекта (без транзитивных)
    quiet: false, // показывать только ошибки
    checkList: [], // перечень проверок
    printToConsole: false, // дублировать сообщения в консоль
    cli: false, // если true, то при ошибке будет выброшено process.exit(1)
    withDependencyPath: false, // указывает все пути импортов до транзитивной зависимости
    force: false // предупреждения равносильны ошибкам
})
    .then((result) => {
        console.log('result', {
            warnings: result.warnings.length,
            errors: result.errors.length
        }, result)
    })
    .catch(console.error)
```

### Whitelists

В скобках указаны относительные от флага `--lists-path` пути до файлов.

##### depVersions (black/dependency)
Перечень запрещенных зависимостей конкретных версий (только в этом примере)
```json
[
    // react данной версии запрещен!
    "react@16.1.0",
    // ramda запрещена полностью!
    "ramda",
    ...
]
```

##### depVersions (white/dependency)
Перечень разрешенных зависимостей конкретных версий (только в этом примере).
Обратите внимание, что синтиксис версионирования semver дополнен нотациями
`-2.-2` и `-2.-2.-2` (числа могут быть другими).
`-2.-2` - последние два патча/минора в последних двух мажорах.
`-2.-2.-2` - последние два патча в последних двух минорах в последних двух мажорах.
Например, при версиях `[1.0.0, 1.0.1, 1.0.2, 2.0.0, 2.0.1, 2.0.2, 2.1.0]`
проверка `-1.-2` отберет только `[2.0.2, 2.1.0]`.
Например, при версиях `[1.0.0, 1.0.1, 1.0.2, 2.0.0, 2.0.1, 2.0.2, 2.1.0]`
проверка `-1.-2.-2` отберет только `[2.0.1, 2.0.2, 2.1.0]`.

Пример

```json
{
    // Разрешен react только выше 16 major
    "react": ">=16.0.0",
    // Разрешен @sbol/stylelint-config только данной версии
    "@sbol/stylelint-config": "1.0.0",
    // Разрешена @sbol/lib.ui последних
    // 2 majors, последних 3 minors, последних 3 patches
    // (обновляйтесь, пожалуйста!)
    "@sbol/lib.ui": "-2.-3.-3",
    ...
}
```

##### license (black/dependency и white/dependency)
Перечень разрешенных/запрещенных лицензий в зависимостях
```json
[
    "MIT",
    "My License Name",
    ...
]
```

##### npmAudit (black/audit и white/audit)
Перечень зарегистрированных уязвимостей с уникальным id, встречаемых по пути импортов path
```json
[
    {
        "id": 0,
        "path" : ["package.name@version.range", "sub.package.name@version.range"]
    }
    ...
]
```

##### required (required)
Перечень пакетов или вариантов пакетов, наличие которых в зависимостях необходимо
```json
[
    "required dependency",
    ["one of required dependency", "or another one of required dependency"],
    ...
]
```

### NPM audit

Способ получения всего списка npm audit для локальной работы см. [тут](./scripts/save-npm-advisories.js)

Размещается файл аудита относительно `--lists-path` по пути: `support/npm-advisories`.
