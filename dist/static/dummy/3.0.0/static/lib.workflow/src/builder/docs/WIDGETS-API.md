# API виджетов

* `title : String`

  название виджета

* `description : String`

  описание виджета

* `properties : Object`

  свойства виджета [WidgetType.properties](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-WidgetType)

* `references : Object`

  данные информационных сервисов [WorkflowOutputType.references](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-WorkflowOutputType)
  
* `readonly : Boolean`

  свойство меняет, при возможности, отображение виджета на режим readonly,
  при отсутствии такого режима виджет будет заменен на ReadonlyCoreFieldset.
  
  Предположим, у нас есть три виджета: A, B и Fieldset.
  Для A не определён режим readonly, поэтому он отображает Fieldset в режиме readonly.
  Для B определён режим readonly, поэтому он отображает ReadonlyB.
  Виджет должен иметь префикс Readonly: 'ReadonlyWidgetName'.
  Для Fieldset даже нельзя переопределить режим readonly.
  
* `events: [{ cmd: String, name: String, type: String, title: String, description: String, uri: String }]`

  массив событий [EventType](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=124912257#id-%D0%92%D0%B5%D1%80%D1%81%D0%B8%D1%8F2.0(beta)-EventType),
  которые могут быть отправлены виджетом. Каждый элемент массива -
  объект мета-информации события.

* `eventsActions: { event: Func, rollback: Func, exit: Func, abort: Func }`

  Забинденные экшены, доступные на данном шаге процесса.
  Включает в себя стандартные обработчики (event, rollback, exit, abort).

* `fields: Array`

  Массив полей
  [WidgetType.fields](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-WidgetType)
  для виджета, полученный от Workflow шлюза

* `history: Array`

  Контейнер сведений об истории движения по процессу, содержащий только
  элементы истории с шагами, доступными для
  [отображения и отката](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=101866205)

* `state : String`

  Текущее состояние процесса (state) Workflow

* `screenIndex : Integer`

  Индекс скрина, на котором находится виджет

* `widgetIndex : Integer`

  Индекс виджета
