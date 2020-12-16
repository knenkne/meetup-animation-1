# SBOL UI Widgets CORE 

---

**Библиотека состоит из платформенных CORE виджетов**

[Спецификация](https://sbtatlas.sigma.sbrf.ru/wiki/display/DBSDD/Platform+widgets)

* CoreMoney
* [Confirmation](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=127053318)

## Установка
```bash
npm install @sbol/lib.widgets.core --save
или
yarn add @sbol/lib.widgets.core
```

## Использование в приложении
```javascript
import { Workflow } from '@sbol/lib.workflow'
import { CoreMoney, Confirmation } from '@sbol/lib.widgets.core'

<Workflow
        name="someFlow"
        url="/workflow-gate"
        widgets={{ CoreMoney, Confirmation }}
/>

```
