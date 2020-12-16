```jsx
        <Calendar.Range 
            names={["demo:range-picker:from", "demo:range-picker:to"]}
        />
```
```jsx
    <Calendar.Range
        names={["range-picker:from", "range-picker:to"]}
        title="Стандартный Range"
        from={new Date(1991, 5, 5).toISOString()}
        to={new Date(1991, 7, 7).toISOString()}
    />
```
```jsx
{
    var validate = (date, interval) => interval && dateFns.areIntervalsOverlapping({
        start: new Date(2017, 10, 10),
        end: new Date(2017, 10, 17)
    }, interval)

    var required = value => value ? undefined : 'Required'
}

    <Calendar.Range
        names={["range:from", "range:to"]}
        restriction={validate}
        description="Свой текст"
        title="Стандартный Range c валидацией"
        from={new Date(2017, 10, 11).toISOString()}
        to={new Date(2017, 10, 16).toISOString()}
    />
```
