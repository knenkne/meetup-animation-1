# Адаптер полей ввода

## Описание

Интерфейс компонента Field из redux-form имеет специфичную группировку параметров.

Данный адаптер призван стандартизировать распределение параметров.

`props.input` и `props.meta` распадаются в:
* `props.value`;
* `props.onChange`;
* `props.touched`;
* `props.formName`;
* и т.д.

Модифицируются дополнительно два параметра:
* `props.meta.form` -> `props.meta.formName`
* `props.meta.initial` -> `props.meta.initialValue`

## Применение

```jsx
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'
import { Input } from '@sbol/lib.ui'

const ConnectedInput = () => <Field component={fieldAdapter(Input)} />
```
