```js
{
    var initialValues = {
        'textbox:error': '123',
        'textbox1': '',
        'textbox2': '123',
        'textbox3': '123'
    }
    
    var SuperLabeledField = Input.labeledFactory()(Input)
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Простое поле ввода Input">
        <Field
            title="Заполни поле и я стану серым :) как волк"
            id="simple-input-1"
            name="textbox1"
            component={SuperLabeledField}
        />
        <br />
        <Field
            title="Ошибочка вышла!"
            id="simple-input-2"
            name="textbox:error"
            component={SuperLabeledField}
            validate={() => "Ну зачем же ты так ?"}
        />
        <br />
        <Field
            title="А я заблокирован, со мной уже ничего нельзя сделать"
            id="simple-input-3"
            name="textbox2"
            component={SuperLabeledField}
            disabled
        />
        <br />
         <Field
            title="А я вообще read-only, даже border не solid"
            id="simple-input-4"
            name="textbox2"
            component={SuperLabeledField}
            readOnly
        />
    </Demo.Titled>
</Demo.Form>
```

```js
<Demo.Titled title="С иконками">
    <Input value="Текст" icon="icon:core/common/alert-info" aria-label="Демонстрационное поле" />
    <br />
    <Input value="Текст" icon="icon:core/resource/maestroCard" aria-label="Демонстрационное поле" />
</Demo.Titled>
```

```js
{
    var handleIconClick = (e) => {
        const awesomeColor = '#9156e6'
        const input = e.currentTarget.previousSibling

        input.style.borderColor = awesomeColor
        input.style.boxShadow = `inset 0 0 0 1px ${awesomeColor}`
    }
}

<Demo.Titled title="С кликабельной иконкой">
    <Input value="Выполняем колбек, например, красим инпут" onClick={handleIconClick} icon="icon:core/common/systemAlertInfo" aria-label="Демонстрационное поле" />
</Demo.Titled>
```


```js
{
    var dictionary = ['Москва', 'Санкт-Петербург']

    var SearchTypeahead = Input.typeaheadFactory(
        // Преобразование свойств для реального поля ввода
        (props) => _.omit(props, ['search']),
        // Преобразование свойств для фейкового (typeahead) поля ввода
        (props) => ({ ..._.omit(props, ['search', 'placeholder']), value: props.search }),
        // Имя компонента для react dev tools
        'SearchTypeahead'
    )(Input)


    class SearchControlledTypeahead extends React.Component {
        constructor () {
            this.state = {
                value: '',
                search: ''
            }

            this.handleChange = this.handleChange.bind(this)
        }

        handleChange (event) {
            const preset = dictionary.find((item) => item.startsWith(event.target.value))

            this.setState({
                search: event.target.value && preset ? preset : '',
                value: event.target.value
            })
        }

        render () {
            return (
                <SearchTypeahead
                    onChange={this.handleChange}
                    value={this.state.value}
                    search={this.state.search}
                />
            )
        }
    }
}

<Demo.Titled
    title="Input.typeaheadFactory"
    description="ADVANCED. Кастомный typeahead. См. код примера."
>
    <SearchControlledTypeahead />
</Demo.Titled>
```

```js
{
    var ErrorHandledInput = Input.inputErrorHandler(Input)
    var validator = (value) => parseInt(value, 10) ? 'Числа под запретом' : ''
}

<Demo.Form>
    <Demo.Titled
        title="Input.inputErrorHandler"
        description="ADVANCED. Поле ввода с обработкой и выводом ошибок (в демо запрещены числа)"
    >
        <Field
            component={ErrorHandledInput}
            name="error:handled:input"
            validate={validator}
            aria-label="Демонстрационное поле"
            title="Страшная ошибка"
            description="Описание поля"
        />
    </Demo.Titled>
</Demo.Form>
```

```js
{
    var defaultLabeledInput = Input.labeledFactory()
    var defaultLabeledOutput = Input.labeledFactory(Input.labeledFactory.getLabelProps, 'output')
    var omitted = omittere(['description', 'hint'])
    var DescriptionInputComponent = defaultLabeledInput(omitted(Input))
    var InputComponent = defaultLabeledInput(omitted(Input))
    var OutputComponent = defaultLabeledOutput(omitted(Markdown.Full))

    var initialValues = {
        'input': 'А под окном, рядом с осколками глиняного кувшина (Хорезм, XI век) сидел Калям...'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled
        title="Input.labeledFactory"
        description="ADVANCED. Labeled в виде HOC. Старайтесь использовать компонент вместо HOC."
    >
        <Field
            name="input"
            component={InputComponent}
            title="Заголовок поля должен быть кратким"
            description="А под окном, рядом с осколками глиняного кувшина (Хорезм, XI век) сидел Калям..."
            icon="icon:core/resource/education"
            id="input-1"
        />
        <Field
            name="input"
            component={InputComponent}
            title="Заголовок поля должен быть кратким"
            id="input-2"
        />
        <Field
            name="input"
            component={InputComponent}
            title="Заголовок поля должен быть кратким"
            description="А под окном, рядом с осколками глиняного кувшина (Хорезм, XI век) сидел Калям..."
            id="input-3"
        />
        <Field
            name="inputError"
            component={InputComponent}
            title="Заголовок поля должен быть кратким"
            description="А под окном, рядом с осколками глиняного кувшина (Хорезм, XI век) сидел Калям..."
            id="input-4"
            validate={(value) => /\D/.test(value) ? 'Можно только числа' : ''}
        />
        <OutputComponent title="Заголовок" description="Описание" content="Привет :)" />
    </Demo.Titled>
</Demo.Form>
```