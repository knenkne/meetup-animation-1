```jsx
{
    initialState = { calculatorValue: 100 }
    function handleSliderChange (value) {
        setState({ calculatorValue: parseInt(value, 10) })
    }
}

<div>
    <Grid mode="strict">
        <Grid.Cell mode="strict" lg={19} md={19} sm={23}>
            <CapacityInfo
                total={1000}
                used={300}
                reserved={state.calculatorValue}
                limits={{
                    medium: 600,
                    low: 900
                }}
            />
            <hr />
            <Slider
                title="Калькулятор"
                value={state.calculatorValue.toString()}
                min={0}
                max={700}
                step={1}
                onChange={handleSliderChange}
            />
        </Grid.Cell>
    </Grid>
</div>
```
