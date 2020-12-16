```jsx
{
    var validate = (date, interval) => dateFns.areIntervalsOverlapping({
        start: new Date(2017, 6, 1),
        end: new Date(2017, 11, 30)
    }, interval)

    var initialValues = {
        date1: (new Date(2017, 9, 12, 9, 20)).toISOString(),
        date2: (new Date(2017, 9, 12, 9, 20)).toISOString(),
        date3: (new Date(2017, 9, 12, 9, 20)).toISOString(),
        date4: (new Date(2017, 9, 12, 9, 20)).toISOString(),
        dateMasked: '2017-••-••'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.LabeledField title="Выбор квартала" name="date1" component={Calendar.Quarter} />
    <br />
    <Demo.StoreField title="Выбор квартала с маской" name="dateMasked" component={Calendar.Quarter} />
    <br />
    <Demo.LabeledField title="Выбор квартала заблокирован" name="date2" component={Calendar.Quarter} disabled />
    <br />
    <Demo.StoreField title="Выбор квартала ограничен" name="date3" component={Calendar.Quarter} restriction={validate} />
    <hr />
    <Demo.StoreField title="Выбор квартала" name="date4" component={Calendar.Quarter} />
</Demo.Form>
```
