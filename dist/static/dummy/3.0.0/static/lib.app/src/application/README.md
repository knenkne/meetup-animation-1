# Базовый компонент

## Описание

* Компонент загружает локали, после чего рендерит компонент-promise.
* В случае возникновения неотловленной ошибки в приложении
или неудачной загрузки локалей,
компонент сформирует редирект на temporary_unavailable.
* Компонент содержит глобальный логгер на ошибки,
если они не были обработаны раньше.
* Для корректной инициализации локалей, в компонент передается экземлпяр i18next

## Применение

```jsx
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import i18next from 'i18next'
import { Application } from '@sbol/lib.app'

const getApplication = () => import('./app')

export default (args) => (
    <Application
        name={process.env.PKG_ID}
        version={process.env.VERSION}
        libs={process.env.LIBS}
        locales={process.env.LOCALES}
        i18next={i18next}
        getComponentPromise={getApplication}
    />
)

export const mount = () => {
    // ...
}

export const unmount = () => {
    // ...
}
```
