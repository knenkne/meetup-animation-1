# SBOL UI Widgets WEB 

---

**Библиотека состоит из базовых виджетов канала WEB**

[Спецификация](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=101848587)

* WebFullName
* WebSearchSelect
* WebAddress
* WebFiasAddress
* WebTotal
* WebAgreement
* WebSummary
* WebStatusHeadline
* WebUpcomingStep
* WebProductDescription
* WebPersonalDataSummary
* WebComingNext
* WebHeadline
* WebFastActions


## Установка
```bash
npm install @sbol/lib.widgets.web --save
или
yarn add @sbol/lib.widgets.web
```

## Использование в приложении
```javascript
import { Workflow } from '@sbol/lib.workflow'
import { WebFullName, WebUpcomingStep } from '@sbol/lib.widgets.web'

<Workflow
        name="someFlow"
        url="/workflow-gate"
        widgets={{ WebFullName, WebUpcomingStep }}
/>

```


