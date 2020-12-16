```jsx
{
    var icons = {
        pay: "icon:core/operations/payandtrasfOtherbank",
        move: "icon:core/operations/betweenAccounts"
    }
}
<Demo.Titled title="Кнопка с иконкой">
    <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{width: "160px"}}>
            <h4>Обычный размер</h4>
            <Button.Icon title="Title" icon={icons.pay} />
            <Button.Icon title="Title" colorScheme="green" icon={icons.move} />
            <Button.Icon title="Title" icon={icons.move} disabled />
            <Button.Icon title="Title" icon={icons.move} mode='loading' />
        </div>

        <div style={{width: "160px"}}>
            <h4>Size="sm"</h4>
            <Button.Icon title="Title" icon={icons.pay} size="sm" />
            <Button.Icon title="Title" colorScheme="green" size="sm" icon={icons.move} />
            <Button.Icon title="Title" icon={icons.move} size="sm" disabled />
            <Button.Icon title="Title" icon={icons.move} size="sm" mode='loading' />
        </div>

        <div style={{width: "160px"}}>
            <h4>long title</h4>
            <Button.Icon title="Very very very long title " icon={icons.pay} size="sm" />
            <Button.Icon title="Very very very long title " colorScheme="green" size="sm" icon={icons.move} />
            <Button.Icon title="Very very very long title " icon={icons.move} size="sm" disabled />
            <Button.Icon title="Very very very long title " icon={icons.move} size="sm" mode='loading' />
        </div>

        <div style={{width: "160px"}}>
            <h4>Icon only</h4>
            <Button.Icon icon={icons.pay} />
            <Button.Icon icon={icons.move} />
            <Button.Icon icon={icons.move} disabled />
            <Button.Icon icon={icons.move} mode='loading' />
        </div>
    </div>
</Demo.Titled>
```

```jsx
{
    var initialState = { mode: void 0 }
    var icons = {
        move: "icon:core/operations/betweenAccounts"
    }
    var handleClick = () => {
        setState({ mode: "loading" },
        () => setTimeout(() => setState({ mode: void 0 }), 5000)
    )
    }
}

<Demo.Titled title='Интерактивый пример c лоадером'>
    <Button.Icon title="Title" icon={icons.move} mode={state.mode} onClick={handleClick}/>
</Demo.Titled>
```

``` jsx
{
    var icon="icon:core/operations/payandtrasfOtherbank"
    var colors = [
            "black",
            "green",
            "purple",
            "blue",
            "goals",
            "skyblue",
            "aqua",
            "gold",
            "metal",
            "orange"
        ]
}
<Demo.Titled title='Доступные цвета текста кнопки'>
    {colors.map((color) =>
        <Button.Icon title="Title" icon={icon} colorScheme={color} key={color} />
    )}
</Demo.Titled>
```
