# Общие статические скрипты/локали/графика/стили WEB СБОЛ

## Как получить доступ к графике

Используйте `@sbol/lib.app`:
* `getConfigValue('res.url')` - адрес статических ресурсов WEB СБОЛ
* `getConfigValue('common.version')` - версия данной библиотеки.
Она едина для всех в пределах одного блока.

URL до, например, картинки ошибки будет выглядеть следующим образом:
```
const errorUrl =
    `${
        getConfigValue('res.url')
    }/common/${
        getConfigValue('common.version')
    }/img/errors/error.png`
```


## Внешние ссылки

[Changelog библиотеки и платформенный блог](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewrecentblogposts.action?key=DBSBOLUI)
