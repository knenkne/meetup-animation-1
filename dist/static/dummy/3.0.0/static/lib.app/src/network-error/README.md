# Компонент network error

Данный компонент реализует переиспользуемую страницу network error.
Используйте его когда вы готовы заменить весь экран ошибкой соединения,
если дальнейшая работа без сети становится невозможной (например, при xhr).

```
import React from 'react'
import { NetworkError } from '@sbol/lib.app'

export default ({ onLine }) => {
    if (!onLine) {
        return <NetworkError />
    }

    return <MyApplication />
}
```
