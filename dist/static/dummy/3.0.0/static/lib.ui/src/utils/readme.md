# Higher Order Components

## errorAdapterFactory(errorCondition)(Component)
Данный адаптер позволяет изменить ошибку для поля ввода, если не выполнены определенные условия redux-form или поля

Стандартное условие: `fn = (props) => props.touched ? props.error : ''`

Третий аргумент необходим для компонентов, которые ещё придерживаются API поля redux-form.

    {
        var initialValues = {
            'textbox1': '',
            'textbox2': ''
        }

        var TouchInput = errorAdapterFactory()(Input)
        var TenInput = errorAdapterFactory((props) => Number(props.value) % 10 ? '' : props.error)(Input)
    }

    <Demo.Form initialValues={initialValues}>
        <Demo.LabeledField
            name="textbox1"
            component={TouchInput}
            validate={Demo.errorValidator}
            title="При валидации ошибки поле не любит, когда его потрогали и больше не трогают (default)"
        />
        <hr />
        <Demo.LabeledField
            name="textbox2"
            component={TenInput}
            validate={Demo.errorValidator}
            title="При валидации ошибки поле не любит кратные 10 числа и всё, что не является числом"
        />
    </Demo.Form>

## Input.autoSizeFactory({ minHeight, minWidth, maxHeight, maxWidth })(Component)
Данный декоратор при заданных значениях minWidth и/или minHeight автоматически размеривает компонент по содержимому.
Применимо к полям ввода (input без заданных границ, например, в ```position: absolute```; textarea).
Реализации с применением этого HOC: Input.Text, Slider, Input.Counter

## Input.tooltipedFactory(getTooltipProps, widthMode = void 0, tooltipType = 'default', omitSameProps = true)(Component)
Данный декоратор обвешивает компонент тултипом с заданной логикой.
Дефолтное значение ```getTooltipProps = (props) => ({ direction: props.direction, mode: props.mode, forceOpened: props.forceOpened, tooltip: props.tooltip })```
* direction: направление тултипа;
* mode: цвет тултипа, его семантическое значение;
* forceOpened: признак отображения;
* tooltip: содержимое подсказки.

## Input.labeledFactory(getLabelProps = labeledFactory.getLabelProps, mode = labeledFactory.mode)(Component)
Данный декоратор дополняет компонент версткой с заголовком и подсказкой/описанием.
Итоговый компонент обязательно преобретает prop title и опционально - prop description.

## a11yRelocation(Component, { destinationSelector: 'body', rootSelector: '#application' })
Декоратор a11yRelocation позволяет улучшить доступность для скринридеров. Необходимо обернуть компонент

```jsx static
<Router history={hashHistory}>
    <Route path="/">
        <IndexRoute component={Main} />
        <Route
            path="fieldset10"
            component={a11yRelocation(Fieldset10)}
            title="Простая форма на виджете CoreFieldset"
            a11y={{}}
        />
    </Route>
</Router>
```

# Служебные функции
## pluralize(plurals, quantity)

```js static
plurals {Array}
```
> массив длины 3 с формами множественного числа.
> Соответствие элементов формам: 0 = много, 1 = один, 2 = два

```js static
quantity {Number}
```
> количество, в соответствии с которым нужно выбрать форму

```js static
import { pluralize } from '@sbol/lib.ui'

console.log(pluralize(['рублей', 'рубль', 'рубля'], 456456121))

// will log 'рубль'
```
## mergeTheme(Something.theme, style)

```js static
Something.theme {Shape(String)}
```
> как правило, тема компонента, с которой мы хотим провести модификации

```js static
style {Shape(String)}
```
> наши стили, которые мы хотим добавить к оригинальной теме
> (функция также заставляет писать корректные ключи (читай "классы"), соответствующие ключам оригинальной темы)

```js static
import { mergeTheme } from '@sbol/lib.ui'

mergeTheme({ foo: 'hash1' }, { foo: 'hash2', qux: 'hash3' })

// returns { foo: 'hash1 hash2', qux: 'hash3' }
```
## scrollToElement(node, options, onFinishedCb)
```js static
@param {DOMNode} node
```
> элемент DOM-дерева, к которому нужно выполнить скролл. Для React получить нужный элемент можно с помощью `ref`

```js static
@param {String} [options.easing = 'sineIn']
```
> функция сглаживания из пакета `easing`

```js static
@param {Number} [options.duration = 1000]
```
> длительность скролла

```js static
@param {Number} [options.offset = 0]
```
> отступ от верхней части элемента, к которому будет осуществляться скролл,
> после завершения скролла

```js static
@param {DOMNode} [options.wrapper = body]
```
> элемент, в котором будет осуществляться прокрутка

```js static
@param {Function} [onFinishedCb]
```
> callback который выполнится после завершения прокрутки

```js static
import { scrollToElement } from '@sbol/lib.ui'

scrollToElement(document.getElementById('app'))
```

## phoneNumber(phone) - deprecated

##### Форматирует вывод номера телефона согласно корпоративному стандарту
```js static
@param {Object} phone
@param {String} phone.prefix
@param {String} phone.code
@param {String} phone.number
```
> Номер телефона в виде объекта со свойствами prefix, code, number

```js static
import { phoneNumber } from '@sbol/lib.ui'

phone = {
    prefix: '+7',
    code: '915',
    number: '•••4567'
}
phoneNumber(phone)
```

## handlers

* `disableHandler(handler, isDisabled)` - блокировка действий обработчика события и стандартного поведения события в зависимости от параметра isDisabled
* `preventHandler(handler)` - отмена стандартного поведения события
* `stopPropagationHandler(handler)` - отмена всплытия события
* `selectAllHandler(handler)` - при срабатывании события выделяет все содержимое target
* `handlePreventDefault` - обработчик события, отменяющий стандартное поведения события и не совершающий никакой дополнительной логики

## memoizeFuncWithArgs

##### Фабричная функция, которая кеширует саму функцию её аргументы. Мемоизация позволяет избежать перерендеринга, если и функция, и аргументы поменялись
```js static
@param {Function} func - функция, которая будет закэширована по ссылке
@param {...any} args - параметры, которые будут закеширован по ссылке или значению; привязываются к результирующей функции
```
> `Вернется закешированная функция c привязанным аргументом. Функция будет содержать в себе переданные для кэширования аргументы, соответственно, повторные вызовы можно делать без аргументов

```js static
import { memoizeFuncWithArgs } from '@sbol/lib.ui'

memoizeFuncWithArgs(props.onChange, props.id)
```

## showError

#### Функция вычисляет необходимость показа ошибки валидации

```js static
@param {bool} touched - поле тачнуто
@param {bool} active - поле в фокусе
@param {bool} submitFailed - форма засабмичена, но есть ошибки валидации
@param {string} error - текст ошибки валидации
@param {any} value - значение в инпуте
@return {string}
```

>`Применять например так:`
```js static
    <Labeled {...props} tooltip={tooltip} error={showError(props)} >
        <Input {...props} error={showError(props)} />
    </Labeled>
```
>`Ошибка показывается в следующих случаях:`
* поле изначально заполнено невалидными данными
* при заполнении поля пользователем, ошибка показывется по блуру
* после сабмита формы ошибка валидации показывается все время пока пользователь не изменит ранее введенные переданные
