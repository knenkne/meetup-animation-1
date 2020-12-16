```jsx
{
    var initialValues = {
        date1: '12:30',
        date2: '15:30',
        date3: '18:30',
        dateMasked: '••-••'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.LabeledField name="date1" component={Calendar.Time.Input} />
    <br />
    <Demo.StoreField name="date2" component={Calendar.Time.Input} disabled />
    <hr />
    <Demo.StoreField name="dateMasked" component={Calendar.Time.Input} />
    <br />
    <Demo.StoreField name="date3" component={Calendar.Time.Input} validate={Demo.errorValidator}  />
</Demo.Form>
```
