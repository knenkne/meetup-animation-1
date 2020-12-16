# lib.vendor

Конкатенация переиспользуемых модулей.

```
[
    "modernizr",
    "core-js",

    "axios",
    "bignumber.js",
    "classnames",
    "immutable",
    "lodash",
    "moment",
    "react",
    "react-dom",
    "react-redux",
    "react-router",
    "react-router-dom",
    "redux",
    "redux-form",
    "redux-form/immutable",
    "redux-thunk",
    "reselect"
]

```

В `vendor.modules.json` хранится список список модулей в ведоре. Версии модулей прописаны в `package.json`

## Сборка вендора

```
npm i gulp -g
```

Сборка продакшн версии:
```
gulp
```

## Описание gulp тасков

#### modernizr

Сборка скриптов modernizr с опциями (см. build-tools/modernizr/config.json)

#### build:core-js

Сборка полифилов для es6

#### build:modules

Сборка модулей из списка `vendor.module.json`


#### build:production

Конкатенация(concat), аглификация(uglify) всех собранных модулей. Добавляеется шапка с версией вендора, хэш гит коммита и списка модулей. dist/vendor.dev.js

#### copy:target

vendor.dev.js переносится в target c именем index.js

#### clean

Чистим директории tmp, dest, target
