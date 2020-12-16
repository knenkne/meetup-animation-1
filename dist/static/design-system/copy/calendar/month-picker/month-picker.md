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
    <Demo.LabeledField title="Выбор года и месяца" name="date1" component={Calendar.MonthYear} />
    <br />
    <Demo.StoreField title="Выбор года и месяца с маской" name="dateMasked" component={Calendar.MonthYear} />
    <br />
    <Demo.LabeledField title="Выбор года и месяца ограничены" name="date2" component={Calendar.MonthYear} restriction={validate} />
    <br />
    <Demo.StoreField title="Выбор года и месяца недоступен" name="date3" component={Calendar.MonthYear} disabled />
    <hr />
    <Demo.StoreField title="Выбор года и месяца с ошибкой" name="date4" component={Calendar.MonthYear} validate={Demo.errorValidator} />
</Demo.Form>
```
