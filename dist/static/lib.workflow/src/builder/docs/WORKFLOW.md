# `<Workflow />`

[Исходный код](../workflow.jsx)

Основной контейнер  *SBOL UI Workflow*. Представляет из себя микроприложение,
в зону ответственности которого входит отрисовка состояний flow, элементов управления
и взаимодействие с шлюзом Workflow.

## Импорт
```javascript
import { Workflow } from '@sbol/lib.workflow'
```

## Props

### Обязательные

* `name : String`

  Название процесса, необходимо для создания замыкания в redux store

* `url : String`

  Относительный адрес workflow-шлюза

### Опциональные

* `widgets : WidgetObjectType`

  Соответствие типа виджета его реализации в виде react-компонента
  ```javascript
  WidgetObjectType = {
      // lib.widgets.web
      WebSummary: ReactComponent,
      // lib.widgets.core
      CoreTotal: ReactComponent,
      // Реализация в прикладном модуле
      LoansCalculator: ReactComponent
      ...
  }
  ```

* `startWithParameters : func => object`

  Callback для добавления опциональных свойств в тело запроса при старте процесса.
  Свойства попадут в контейнер document.
  В качестве аргумента callback получит query параметры.

* `fieldStyles : string`

  В дизайне 3.0 не требуется, будет выводиться

* `onFinish : () => void`

  Callback завершения процесса.
  Вызывается единоразово при завершении процесса.
  `Result=END`

* `appLoaderControl.start : () => void`

  Callback начала загрузки.
  Вызывается при инициализации процесса.

* `appLoaderControl.stop : () => void`

  Callback окончания загрузки.
  Вызывается при завершении процесса.

* `analytics.stopAutoTrackTransitions : () => void`

  Callback остановки автослежения за переходами.
  Вызывается при инициализации процесса.

* `analytics.startAutoTrackTransitions : () => void`

  Callback начала автослежения за переходами.
  Вызывается при завершении процесса.

* `analytics.transition : (screens, messages) => void`

  Callback перехода по форме, вызывается после получения ответа от сервера.
  1 аргумент - скрины
  2 аргумент - сообщения серверной валидации, ошибки

* `analytics.event : (eventId, params) => void`

  Callback обработки событий.
  Вызывается при возникновении внутреннего события Workflow
  1 аргумент - идентификатор события
  2 аргумент - дополнительные параметры
  
* `withCatch : Boolean`

  Флаг отображения критической ошибки

### Advanced props (Использование с согласования)

* `__components.Header : ReactComponent`

  Переопределение рендера подложки виджетов из области header.
  Компонент получает виджеты из header.
  Компонент получает флаг загрузки.

* `__components.Body : ReactComponent`

  Переопределение рендера подложки виджетов из области widgets.
  Компонент получает скрины с виджетами из widgets.
  Компонент получает флаг загрузки.

* `__components.Footer : ReactComponent`

  Переопределение рендера подложки виджетов из области footer.
  Компонент получает виджеты из footer.
  Компонент получает флаг загрузки.

* `__components.Loader : ReactComponent`

  Определение рендера состояния загрузки формы.

* `__components.FatalError : ReactComponent`

  Переопределение рендера ошибки формы
  (сервер вернул ошибки, но не вернул скрины).
  Компонент получает callbacks:
  * onBackClick - возврат по browser history
  * onRetryClick - перезагрузка окна браузера

* `__components.EventError : ReactComponent`

  Переопределение рендера ошибки формы
  (сервер вернул ошибки и вернул скрины)

* `axiosInterceptors.rq : [rqConfig => Promise(rqConfig)]`

  Дополнительные axios-интерцепторы запроса, например,
  для отправки на сервер шифрованных данных

* `axiosInterceptors.rs : [{ handleSuccess: response => Promise(response), handleError: error => Promise(error) }]`

  Дополнительные axios-интерцепторы ответа, например,
  для преобразования данных на основании backend-ответа от дизайна 2.4

* `ignoreDocumentIdUrl : Boolean`

  Не включать documentId в URL запроса к GW.
  Данный параметр позволяет устранить __дублирование__ значения в URL и в body.
  За переходом к этому параметру светлое будущее и его отключение
