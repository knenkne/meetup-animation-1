```jsx
{
    var initialValues = {
        base: '15',
        purple: '15',
        blue: '15',
        green: '15',
        skyblue: '15',
        black: '15',
        gold: '15',
        aqua: '15'
    }

    var defaultProps = {
        component: Slider,
        min: 0,
        max: 100,
        step: 1
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Colors">
        <Field {...defaultProps} name="base" colorScheme="base" />
        <Field {...defaultProps} name="purple" colorScheme="purple" />
        <Field {...defaultProps} name="blue" colorScheme="blue" />
        <Field {...defaultProps} name="green" colorScheme="green" />
        <Field {...defaultProps} name="skyblue" colorScheme="skyblue" />
        <Field {...defaultProps} name="black" colorScheme="black" />
        <Field {...defaultProps} name="gold" colorScheme="gold" />
        <Field {...defaultProps} name="aqua" colorScheme="aqua" />
    </Demo.Titled>
</Demo.Form>
```

```jsx
{
    var initialValues = {
        sliderInputGreen: '15',
        sliderInputOrange: '750000',
        sliderInputDisabled: '5000',
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Slider">
        <Demo.StoreField
            title="Rate percent"
            name="sliderInputGreen"
            component={Slider}
            min={4}
            max={26}
            suffix="%"
            withoutOmit
        />
        <hr />
        <Demo.StoreField
            title="Car price"
            name="sliderInputOrange"
            component={Slider}
            min={1250}
            max={1500000}
            step={5000}
            suffix=" руб."
            withoutOmit
        />
        <hr />
        <Demo.StoreField
            title="Client cash"
            name="sliderInputDisabled"
            component={Slider}
            colorScheme="green"
            min={1750}
            max={10250}
            step={1000}
            prefix="$ "
            disabled
            withoutOmit
        />
    </Demo.Titled>
</Demo.Form>
```

```jsx
{
    var initialValues = {
        sliderInputSegmentedGreen: '15',
        sliderInputSegmentedOrange: '750000',
        sliderInputSegmentedDisabled: '5000',
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Сегментированный Slider">
        <Demo.StoreField
            title="Rate percent"
            name="sliderInputSegmentedGreen"
            component={Slider}
            min={4}
            max={26}
            suffix="%"

            mode="segmented"
            withoutOmit
        />
        <hr />
        <Demo.StoreField
            title="Car price"
            name="sliderInputSegmentedOrange"
            component={Slider}
            min={25001}
            max={1525001}
            step={(1525001 - 25001) / 50}
            digits={[1, 2, 5, 10]}
            suffix=" руб."

            mode="segmented"
            withoutOmit
        />
        <hr />
        <Demo.StoreField
            title="Client cash"
            name="sliderInputSegmentedDisabled"
            component={Slider}
            min={1750}
            max={10250}
            step={1000}
            prefix="$ "

            mode="segmented"
            disabled
            withoutOmit
        />
    </Demo.Titled>
</Demo.Form>
```

```jsx
{
    var initialValues = {
        gridSlider: '400000'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Slider по сетке">
        <Demo.StoreField
            title="Car price"
            name="gridSlider"
            component={Slider}
            grid={[
                50000,
                100000,
                150000,
                200000,
                300000,
                400000,
                500000,
                1000000,
                1500000,
                2000000,
                2500000,
                5000000,
                10000000
            ]}
            suffix=" руб."

            mode="segmented"
            withoutOmit
        />
    </Demo.Titled>
</Demo.Form>
```

```jsx
{
    var initialValues = {
        gridSlider: '5'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Slider по сетке с десятичными">
        <Demo.StoreField
            title=""
            name="gridSlider"
            component={Slider}

            grid={[1, 2, 5, 10]}
            min={1}
            max={10}
            digits={[1]}

            allowDecimal={true}

            mode="segmented"
            withoutOmit
        />
    </Demo.Titled>
</Demo.Form>
```


```jsx
{
    var initialValues = {
        optionsSlider: '$ 15'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Slider с опциями выбора">
        <Demo.StoreField
            title="Tariffs"
            name="optionsSlider"
            component={Slider}
            options={[
                { title: 'Четыре', value: '$ 4' },
                { title: 'Восемь', value: '$ 8' },
                { title: 'Пятнадцать', value: '$ 15' },
                { title: 'Шестнадцать', value: '$ 16' },
                { title: 'Двадцать три', value: '$ 23' },
                { title: 'Сорок два', value: '$ 42' }
            ]}
            mode="segmented"
            withoutOmit
        />
    </Demo.Titled>
</Demo.Form>
```

```jsx
{
    var initialValues = {
        'Slider:Error': '2000'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Ошибки в Slider'e">
        <Demo.LabeledField
            name="Slider:Error"
            title="Client cash"
            component={Slider}
            min={1750}
            max={10250}
            step={1000}
            validate={Demo.errorValidator}
            withoutOmit
        />
        <hr />
        <Demo.LabeledField
            name="Slider:Error"
            title="Client cash"
            component={Slider}
            min={1750}
            max={10250}
            step={1000}
            validate={Demo.errorValidator}
            mode="segmented"
            withoutOmit
        />
        <hr />
        <Demo.StoreField
            name="Slider:Error"
            title="Client cash"
            component={Slider}
            min={1750}
            max={10250}
            step={1000}
            validate={Demo.errorValidator}
            withoutOmit
        />
    </Demo.Titled>
</Demo.Form>
```

```jsx
{
    var initialValues = {
        sliderBasicOrange: '750000'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Анимационная transitionDuration">
        <Demo.LabeledField
            title="Car price"
            name="sliderBasicOrange"
            component={Slider}
            min={1250}
            max={1500000}
            step={5000}
            suffix=" руб."
            withoutOmit
        />
        <br />
        <Demo.LabeledField
            title="Car price"
            name="sliderBasicOrange"
            component={Slider}
            min={1250}
            max={1500000}
            step={5000}
            suffix=" руб."
            transitionDuration={0.5}
            withoutOmit
        />
        <br />
        <Demo.StoreField
            title="Car price"
            name="sliderBasicOrange"
            component={Slider}
            min={1250}
            max={1500000}
            step={5000}
            suffix=" руб."
            transitionDuration={1}
            withoutOmit
        />
    </Demo.Titled>
</Demo.Form>
```
