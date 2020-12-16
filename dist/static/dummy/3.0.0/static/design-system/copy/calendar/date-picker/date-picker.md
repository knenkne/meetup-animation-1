```jsx
{
    var validate = (date, interval) => interval && dateFns.areIntervalsOverlapping({
        start: new Date(2017, 10, 10),
        end: new Date(2017, 10, 16)
    }, interval)

    var initialValues = {
        default: (new Date(2017, 10, 11)).toISOString(),
        validate: (new Date(2017, 10, 11)).toISOString(),
        blocked: (new Date(2016, 10, 11)).toISOString(),
        maskedDate: (new Date(2017, 10, 11)).toISOString().replace('11-', '••-')
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.LabeledField
        name="default"
        component={Calendar}
        title="Стандартный календарь"
    />
    <hr />
    <Demo.LabeledField
        name="validate"
        component={Calendar}
        restriction={validate}
        title="Календарь с ограничением выбора"
    />
    <hr />
    <Demo.StoreField
        name="blocked"
        component={Calendar}
        disabled
        title="Заблокированный календарь"
    />
    <hr />
    <Demo.StoreField
        name="maskedDate"
        component={Calendar}
        title="Маскированная дата"
    />
    <hr />
    <Demo.StoreField
        name="errorDate"
        component={Calendar}
        validate={Demo.errorValidator}
        title="Календарь с ошибкой"
    />
    <hr />
    <Demo.StoreField
        name="initialViewDate"
        component={Calendar}
        title="Показан июнь 1991го с оффсетом таблицы годов, где нынешний год является стартовым"
        initialViewDate={new Date(1991, 5).toISOString()}
        startingYear={new Date(new Date().getFullYear(), 0).toISOString()}
    />
</Demo.Form>
```
