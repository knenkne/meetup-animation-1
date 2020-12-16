```jsx
{
    var validate = (date, interval) => dateFns.areIntervalsOverlapping({
        start: new Date(2017, 6, 1),
        end: new Date(2017, 6, 1)
    }, interval)

    var initialValues = {
        date1: (new Date(2017, 9, 12, 9, 20)).toISOString(),
        date2: (new Date(2017, 9, 12, 9, 20)).toISOString(),
        date3: (new Date(2017, 9, 12, 9, 20)).toISOString(),
        date4: (new Date(2017, 9, 12, 9, 20)).toISOString(),
        date5: (new Date(2017, 9, 12, 9, 20)).toISOString(),
        dateMasked: '20••'
    }

    var initialDate = new Date(2014, 1).toISOString()
}

<Demo.Form initialValues={initialValues}>
    <Demo.LabeledField title="Выбор года" name="date1" component={Calendar.Year} />
    <br />
    <Demo.LabeledField title="Выбор года заблокирован" name="date2" component={Calendar.Year} disabled />
    <br />
    <Demo.StoreField
        title="Показан 2014 год с оффсетом таблицы годов, где нынешний год является предпоследним"
        name="date3"
        component={Calendar.Year}
        initialViewDate={initialDate}
        startingYear={new Date(new Date().getFullYear() - 10, 0).toISOString()}
    />
    <br />
    <Demo.StoreField title="Выбор года ограничен" name="date4" component={Calendar.Year} restriction={validate} />
    <hr />
    <Demo.StoreField title="Маскированный год" name="dateMasked" component={Calendar.Year} restriction={validate} />
    <hr />
    <Demo.StoreField name="date5" component={Calendar.Year} validate={Demo.errorValidator}  />
</Demo.Form>
```
