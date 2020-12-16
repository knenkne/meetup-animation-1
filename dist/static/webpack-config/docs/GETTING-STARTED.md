TODO: REWORK

# Старт приложения

Запустить разработческий сервер:
```
node node_modules/@sbol/webpack-config/bin/run-server.js
```

Собрать бандл:
```
node node_modules/@sbol/webpack-config/bin/build.js
```

Сборка учитывает переменную окружения `NODE_ENV`. Это позволяет
собирать продакшн-бандл с включенными source-maps или отлаживать
на локальном сервере продакшн-сборку.

Для установки переменных окружения принято использовать
пакет [cross-env](https://github.com/kentcdodds/cross-env)
и писать переменные в Unix-стиле:
```
cross-env NODE_ENV=production node node_modules/@sbol/webpack-config/bin/build.js
```
