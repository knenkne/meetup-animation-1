# Запускать Promise.all один раз

## Описание

Метод `allOnce` исполняется один раз при первом монтировании, флаг о исполнении сохраняется в память компьютера.

Метод принимает `массив промисов` и запускает их параллельно единожды и возращает промис, с массивом результатов.

Если любой из промисов завершится с ошибкой, то промис, возвращённый `allOnce`, немедленно завершается с этой ошибкой.

## Применение

```jsx
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import i18next from 'i18next'
import { i18nextInit, promise } from '@sbol/lib.app'

const i18nextPromise = i18nextInit({
    i18next,
    name: process.env.PKG_ID,
    libs: process.env.LIBS,
    locales: process.env.LOCALES,
    version: process.env.VERSION
})

export default () => (
   <AnyComponent />
)

export const mount = async (element, { region }) => {
    await promise.allOnce([i18nextPromise])

    render(element, region)
}

export const unmount = ({ region }) => {
    // ...
}
```
