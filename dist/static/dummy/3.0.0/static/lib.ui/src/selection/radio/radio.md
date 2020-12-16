```jsx
{
    var initialValues = {
        sampleRadio: "4"
    }
}

<Demo.Form initialValues={initialValues}>
    <Selection.Group mode="column" title="Выбор опций">
        <Field
            name="sampleRadio"
            type="radio"
            component={Selection.Radio}
            value="1"
        >
            {
                "Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 Опция 1 "
            }
        </Field>
        <Field
            name="sampleRadio"
            type="radio"
            component={Selection.Radio}
            value="2"
        >
            {"Опция 2"}
        </Field>
        <Field
            name="sampleRadio"
            type="radio"
            component={Selection.Radio}
            value="3"
        >
            {"Опция 3"}
        </Field>
        <Field
            name="sampleRadio"
            type="radio"
            component={Selection.Radio}
            value="4"
            disabled
        >
            {"Опция 4, заблокированная, изначально выбранная"}
        </Field>
        <Field
            name="sampleRadio"
            type="radio"
            component={Selection.Radio}
            value="5"
            disabled
        >
            {"Опция 3, заблокированная"}
        </Field>
    </Selection.Group>
</Demo.Form>
```

```jsx
{
    var initialValues = {
        sampleRadioError: "1"
    }

    var ErrorRadio = (props) => (
        <Tooltip.Hover style={{ display: "block" }}>
            <Tooltip.Tip direction="topLeft" mode="error">
                {props.error}
            </Tooltip.Tip>
            <Selection.Radio {...props} />
        </Tooltip.Hover>
    )
}

<Demo.Form initialValues={initialValues}>
    <Selection.Group mode="column" title="Выбор с ошибкой (Оборачиваем  Radio в Tooltip.Hover)">
        <Field
            name="sampleRadioError"
            type="radio"
            component={ErrorRadio}
            value="1"
            validate={Demo.errorValidator}
        >
            {"Остаться внутри"}
        </Field>
        <Field
            name="sampleRadioError"
            type="radio"
            component={ErrorRadio}
            value="2"
            validate={Demo.errorValidator}
        >
            {"Остаться за границей"}
        </Field>
    </Selection.Group>
</Demo.Form>
```

```jsx
{
    var initialValues = {
        smallRadio: "3"
    }
}

<Demo.Form initialValues={initialValues}>
    <Selection.Group mode="column" title="Выбор подчиненных опций (size='sm')">
        <Field name="smallRadio" type="radio" component={Selection.Radio} value="1" size="sm">
            {"Остаться внутри"}
        </Field>
        <Field name="smallRadio" type="radio" component={Selection.Radio} value="2" size="sm">
            {"Остаться за границей"}
        </Field>
        <Field name="smallRadio" type="radio" component={Selection.Radio} value="3" size="sm">
            {"Остаться дома"}
        </Field>
    </Selection.Group>
</Demo.Form>
```

```jsx
{
    var initialValues = {
        products: "1"
    }
}

<Demo.Form initialValues={initialValues}>
    <Selection.Group mode="column" title="На продуктовых страницах">
        <Field name="products" type="radio" component={Selection.Radio} value="1" colorScheme="purple">Инвестиции</Field>
        <Field name="products" type="radio" component={Selection.Radio} value="2" colorScheme="blue">Потреб</Field>
        <Field name="products" type="radio" component={Selection.Radio} value="3" colorScheme="green">Цели</Field>
        <Field name="products" type="radio" component={Selection.Radio} value="4" colorScheme="sky-blue">Страховки</Field>
        <Field name="products" type="radio" component={Selection.Radio} value="5" colorScheme="aqua">Вклады</Field>
        <Field name="products" type="radio" component={Selection.Radio} value="6" colorScheme="gold">Золото</Field>
        <Field name="products" type="radio" component={Selection.Radio} value="7" colorScheme="metal">Металлы</Field>
    </Selection.Group>
</Demo.Form>
```
