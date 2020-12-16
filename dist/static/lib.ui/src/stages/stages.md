```jsx
<Stages translations={{tooltip: 'Вы здесь'}}>
    <Stages.Step title="Выбор продукта" />
    <Stages.Step title="Документы заполнены" mode="progress" />
    <Stages.Step title="Все хорошо" />
</Stages>
```

```jsx
<Stages translations={{tooltip: 'Вы здесь'}}>
    <Stages.Step title="Заполнение документов" mode="progress" />
    <Stages.Step title="Статус операции" />
</Stages>
```

```jsx
<Grid>
    <Grid.Cell lg={29} md={19} sm={23}>
        <Stages translations={{tooltip: 'Вы здесь'}} avaLink="https://randomuser.me/api/portraits/thumb/men/1.jpg">
            <Stages.Step title="Выбор условий кредита" />
            <Stages.Step title="Персональные данные" />
            <Stages.Step title="Ознакомление и подтверждение" />
            <Stages.Step title="Рассмотрение заявки" mode="progress" />
            <Stages.Step title="Подтверждение условий кредита" />
            <Stages.Step title="Зачисление средств" />
        </Stages>
    </Grid.Cell>
</Grid>
```

```jsx
{
    initialState = {
        mode: 'progress',
        step: '1',
    }

    var handleChangeStep = (event) => {
        setState({ step: event.target.value })
    }
}

<Demo.Titled title="Возможные анимации и комбинации шагов">
    <Selection.Group title="Step" mode="row">
        <Selection.Radio
            checked={state.step === '1'}
            onChange={handleChangeStep}
            value="1"
            name="step"
        >
            {'1'}
        </Selection.Radio>
        <Selection.Radio
            checked={state.step === '2'}
            onChange={handleChangeStep}
            value="2"
            name="step"
        >
            {'2'}
        </Selection.Radio>
        <Selection.Radio
            checked={state.step === '3'}
            onChange={handleChangeStep}
            value="3"
            name="step"
        >
            {'3'}
        </Selection.Radio>
    </Selection.Group>
    <hr />
    <Stages translations={{tooltip: 'Вы здесь'}}>
        <Stages.Step title="Выбор продукта" mode={state.step === '1' ? "progress" : void 0} />
        <Stages.Step title="Заполнение документов" mode={state.step === '2' ? "progress" : void 0} />
        <Stages.Step title="Статус операции" mode={state.step === '3' ? "progress" : void 0} />
    </Stages>
</Demo.Titled>
```

```jsx
{
    initialState = {
        currentStep: "Подтверждение условий",
        mode: 'progress',
        steps: [
            "Выбор условий кредита",
            "Персональные данные",
            "Ознакомление и подтверждение",
            "Рассмотрение заявки",
            "Подтверждение условий",
            "Статус операции",
            "Выдача кредита",
            "Зачисление средств"
        ]
    }

    var handleChangeStep = (event) => {
        setState({ currentStep: event.target.value })
    }
}

<Demo.Titled title="Возможные комбинации шагов">
    <Selection.Group title="Step">
        {initialState.steps.map((step) => (
            <Selection.Radio
                key={step}
                size="sm"
                checked={state.currentStep === step}
                onChange={handleChangeStep}
                value={step}
                name="step1"
            >
                {step}
            </Selection.Radio>
        ))}
    </Selection.Group>
    <hr />
     <Grid>
        <Grid.Cell lg={29} md={19} sm={23}>
            <Stages translations={{tooltip: 'Вы здесь'}} avaLink="https://randomuser.me/api/portraits/thumb/men/1.jpg">
                {initialState.steps.map((step) =>
                    <Stages.Step
                        key={step}
                        title={step}
                        mode={state.currentStep === step ? state.mode : void 0}
                    />
                )}
            </Stages>
        </Grid.Cell>
    </Grid>
</Demo.Titled>
```
