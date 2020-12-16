# Управление методами WebView SBOL.PRO

## Описание

Универсальный метод обращения к методам МРМ.
Метод принимает объект конфигурации и возвращает Promise.
Если метод МРМ недоступен, возвращается ошибка
"No "<method>" method presented in SBOL.PRO API".
Если был передан таймаут, то будет вызвана ответная функция
с результатом работы метода МРМ за отведенное время или вернется ошибка
"Timeout <timeout>ms exceeded for "<method>" method SBOL.PRO API".
Сам методм МРМ может вернуть любую свою ошибку для детального разбора на фронте.
После выполнения функции по таймауту возвратная функция удаляется.
При timeout равном нулю Promise не вовзвращает ничего.

* method - string, имя метода МРМ
* args - Array(any), массив аргументов для передачи в метод МРМ
* timeout - number, время, за которое МРМ может успеть
вернуть результат работы,
default: значение из настройки sbol.pro.timeout или 5000

## Применение

```jsx
import _ from 'lodash'
import { useSbolPro } from '@sbol/lib.app'

const async qr = () => {
    try {
        const result = await useSbolPro({
            method: 'parseQRCode',
            args: ['simple'],
            timeout: 5000
        })

        handleResult(result)
    } catch (error) {
        // handle error
    }
}
```
