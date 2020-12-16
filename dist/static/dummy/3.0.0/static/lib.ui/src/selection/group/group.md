```jsx
    {
    var initialValues = {
        radio: '1',
        radioSm: '1',
        cb5: false,
        cb6: false,
        cb7: false,
        cb8: false,
        cb9: false,
        cb10: false,
        cb11: false
    }
}
<Demo.Form initialValues={initialValues} style={{ display: 'flex' }}>
    <Selection.Group mode="column" title="Колонка без отступов">
        <Field name="radio" value="1" type="radio" component={Selection.Radio}>1</Field>
        <Field name="radio" value="2" type="radio" component={Selection.Radio}>2</Field>
        <Field name="radio" value="3" type="radio" component={Selection.Radio}>3</Field>
        <Field name="radio" value="4" type="radio" component={Selection.Radio}>4</Field>
    </Selection.Group>
    <hr />
    <Selection.Group mode="column" size="sm" title="Колонка, плотная (size='sm')">
        <Field name="radioSm" value="1" type="radio" component={Selection.Radio}>1</Field>
        <Field name="radioSm" value="2" type="radio" component={Selection.Radio}>2</Field>
        <Field name="radioSm" value="3" type="radio" component={Selection.Radio}>3</Field>
        <Field name="radioSm" value="4" type="radio" component={Selection.Radio}>4</Field>
    </Selection.Group>
    <hr />
    <Selection.Group mode="column" size="md" title="Колонка с большими отступами (size='md')">
        <Field name="cb5" type="checkbox" component={Selection.Checkbox}>1</Field>
        <Field name="cb6" type="checkbox" component={Selection.Checkbox}>2</Field>
        <Field name="cb7" type="checkbox" component={Selection.Checkbox}>3</Field>
        <Field name="cb8" type="checkbox" component={Selection.Checkbox}>4</Field>
    </Selection.Group>
    <hr />
    <Selection.Group mode="row" size="md" title="Ряд">
        <Field name="cb9" type="checkbox" component={Selection.Checkbox}>1</Field>
        <Field name="cb10" type="checkbox" component={Selection.Checkbox}>2 2 2<br />2 2 2</Field>
        <Field name="cb11" type="checkbox" component={Selection.Checkbox}>3</Field>
    </Selection.Group>
</Demo.Form>
```
