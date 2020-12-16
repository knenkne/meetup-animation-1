```jsx
{
    var initialValues = {
        sport: true,
        safe: false,
        speicalSelected: true,
        specialUnchecked: false,
        errorSelected: true,
        errorUnchecked: false
    }

    var errorCheckbox = (props) => (
        <Tooltip.Hover>
            <Tooltip.Tip direction="topLeft" mode="error">
                checkbox error
            </Tooltip.Tip>
            <Selection.Checkbox {...props} />
        </Tooltip.Hover>
    )
}

<Demo.Form initialValues={initialValues}>
    <Selection.Group>
        <Field name="sport" type="checkbox" component={Selection.Checkbox}>Спорт</Field>
        <Field name="safe" type="checkbox" component={Selection.Checkbox}>Защита багажа (Рекомендуем вам каждый раз вместе с билетами покупать страховку на время полета. Этой страховкой никогда не пренебрегают люди, которые имеют большой опыт путешествий и предпочитают заранее предусмотреть и исключить возможные неудобства в поездке)</Field>
        <Field name="speicalSelected" type="checkbox" component={Selection.Checkbox} disabled>Особый случай вкл</Field>
        <Field name="specialUnchecked" type="checkbox" component={Selection.Checkbox} disabled>Особый случай выкл</Field>
        <Field name="errorSelected" type="checkbox" component={errorCheckbox} validate={Demo.errorValidator}>Ошибка вкл (Checkbox обернут в Tooltip.Hover)</Field>
        <Field name="errorUnchecked" type="checkbox" component={errorCheckbox} validate={Demo.errorValidator}>Ошибка выкл (Checkbox обернут в Tooltip.Hover)</Field>
    </Selection.Group>

    <Selection.Group title="Подчиненные списки (size='sm')">
        <Field name="sportSm" type="checkbox" size='sm' component={Selection.Checkbox}>Спорт</Field>
        <Field name="restSm" type="checkbox" size='sm' component={Selection.Checkbox}>Отдых</Field>
        <Field name="workSm" type="checkbox" size='sm' component={Selection.Checkbox}>Работа</Field>
    </Selection.Group>

    <Selection.Group title="На продуктовых страницах">
        <Field name="purple" type="checkbox" component={Selection.Checkbox} colorScheme="purple">Инвестиции</Field>
        <Field name="blue" type="checkbox" component={Selection.Checkbox} colorScheme="blue">Потреб</Field>
        <Field name="green" type="checkbox" component={Selection.Checkbox} colorScheme="green">Цели</Field>
        <Field name="sky-blue" type="checkbox" component={Selection.Checkbox} colorScheme="sky-blue">Страховки</Field>
        <Field name="aqua" type="checkbox" component={Selection.Checkbox} colorScheme="aqua">Вклады</Field>
        <Field name="yellow" type="checkbox" component={Selection.Checkbox} colorScheme="yellow">Золото</Field>
        <Field name="metal" type="checkbox" component={Selection.Checkbox} colorScheme="metal">Металлы</Field>
    </Selection.Group>
</Demo.Form>
```
<hr/>

```jsx
{
    var initialValues = {
        sport: true,
        safe: false,
        speicalSelected: true,
        specialUnchecked: false,
        errorSelected: true,
        errorUnchecked: false
    }

    var errorCheckbox = (props) => (
        <Tooltip.Hover>
            <Tooltip.Tip direction="topLeft" mode="error">
                switch error
            </Tooltip.Tip>
            <Selection.Checkbox {...props} />
        </Tooltip.Hover>
    )
}

<Demo.Form initialValues={initialValues}>
    <Selection.Group>
        <Field name="sport" type="checkbox" mode="switch" component={Selection.Checkbox}>Спорт</Field>
        <Field name="speicalSelected" type="checkbox" mode="switch" component={Selection.Checkbox} disabled>Особый случай вкл</Field>
        <Field name="specialUnchecked" type="checkbox" mode="switch" component={Selection.Checkbox} disabled>Особый случай выкл</Field>
        <Field name="errorSelected" type="checkbox" mode="switch" component={errorCheckbox} validate={Demo.errorValidator}>Ошибка вкл (Switch обернут в Tooltip.Hover)</Field>
        <Field name="errorUnchecked" type="checkbox" mode="switch" component={errorCheckbox} validate={Demo.errorValidator}>Ошибка выкл (Switch обернут в Tooltip.Hover)</Field>
    </Selection.Group>

    <Selection.Group title="Подчиненные списки (size='sm')">
        <Field name="sportSm" type="checkbox" size='sm' mode="switch" component={Selection.Checkbox}>Спорт</Field>
        <Field name="restSm" type="checkbox" size='sm' mode="switch" component={Selection.Checkbox}>Отдых</Field>
        <Field name="workSm" type="checkbox" size='sm' mode="switch" component={Selection.Checkbox}>Работа</Field>
    </Selection.Group>

    <Selection.Group title="На продуктовых страницах">
        <Field name="purple" type="checkbox" mode="switch" component={Selection.Checkbox} colorScheme="purple">Инвестиции</Field>
        <Field name="blue" type="checkbox" mode="switch" component={Selection.Checkbox} colorScheme="blue">Потреб</Field>
        <Field name="green" type="checkbox" mode="switch" component={Selection.Checkbox} colorScheme="green">Цели</Field>
        <Field name="sky-blue" type="checkbox" mode="switch" component={Selection.Checkbox} colorScheme="sky-blue">Страховки</Field>
        <Field name="aqua" type="checkbox" mode="switch" component={Selection.Checkbox} colorScheme="aqua">Вклады</Field>
        <Field name="yellow" type="checkbox" mode="switch" component={Selection.Checkbox} colorScheme="yellow">Золото</Field>
        <Field name="metal" type="checkbox" mode="switch" component={Selection.Checkbox} colorScheme="metal">Металлы</Field>
    </Selection.Group>
</Demo.Form>
```
