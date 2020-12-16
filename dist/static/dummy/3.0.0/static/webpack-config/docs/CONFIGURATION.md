TODO: REWORK

# Описание конфигурации

Конфигурация для js/jsx:
- [babel](../webpack/utils/babelrc.js)

Конфигурация для css:
- [css](../webpack/base/base.rules.js)

Конфигурация для svg:
- [svg-inline-loader](../webpack/base/base.rules.js) (svg загружается как текст и очищается
  от вредных и неиспользуемых тегов)

Конфигурация для png/jpg/gif:
- [file-loader](../webpack/base/base.rules.js) (при импорте генерирует имя картинки исходя из её
  расположения в целевом хранилище)

Конфигурация для json:
- [json-loader](../webpack/base/base.rules.js) (преобразует json в js-объект)

Конфигурация для external libs:
- Все @sbol/lib, кроме @sbol/lib.app
- Все 3rd-party вендоры из списка @sbol/lib.vendor

Plugins:
- VIZUALIZER=true - прикрепляет статистику по файлам-зависимостям и размеру итогового бандла
- CSS_HASH_MAP=true - прикрепляет файл маппинга для всех потенциально используемых классов по css-modules.
Ключ словаря - путь `<lib>--<path>--<class>`, значение - хэш-класс.
Маппинг используется для функциональных тестов