# no-includes

Правило запрещает использовать методы *Array.includes* и *String.includes* из-за того, что это приводит к падению *Internet Explorer*'а.

Вместо них предлагается использовать *_.includes* или *indexOf*.

### Примеры

Следующий код приведёт к появлению ошибки:

```js
someArray.includes(someValue)
```

Следующий код **не** приведёт к появлению ошибки:

```js
someArray.indexOf(someValue) >= 0

_.includes(someArray, someValue)
```

### Опции

```json
{
  "rules": {
    "@sbol/loans-creditability/no-includes": [<level>, { "acceptedObjects": <string[]> }]
  }
}
```

#### acceptedObjects

Список имён объектов, для которых допустимо вызывать метод *includes*.

Значение по умолчанию: **['_']**.
