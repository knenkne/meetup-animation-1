```jsx
<Demo.Titled title="Состояния">
    <Button title="Активная нопка" />
    <hr />
    <Button title="Заблокированная кнопка" disabled />
    <hr />
    <Button title="Кнопка в процессе загрузки" mode="loading" />
</Demo.Titled>
```

```jsx
{
    initialState = {
        mode: void 0
    }

var handleClick = () => setState({ mode: "loading" },
        () => setTimeout(() => setState({ mode: void 0 }), 2000)
    )
}

<Demo.Titled title="Интерактивный пример с загрузкой 2 сек.">
    <Button title="Сделать запрос"
        onClick={handleClick}
        mode={state.mode}
    />
</Demo.Titled>
```

```jsx
<Demo.Titled title="Цветовые схемы и загрузка">
    <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flexGrow: 1 }}>
            <Button title="Base" colorScheme="base" />
            <hr />
            <Button title="Secondary" colorScheme="secondary" />
            <hr />
            <Button title="Link" colorScheme="link" />
            <hr />
            <Button title="Purple" colorScheme="purple" />
            <hr />
            <Button title="Blue" colorScheme="blue" />
            <hr />
            <Button title="Skyblue" colorScheme="skyblue" />
            <hr />
            <Button title="Green" colorScheme="green" />
            <hr />
            <Button title="Black" colorScheme="black" />
            <hr />
            <Button title="Gold" colorScheme="gold" />
            <hr />
            <Button title="Aqua" colorScheme="aqua" />
        </div>
        <div style={{ marginLeft: '16px', flexGrow: 1 }}>
            <Button title="Base" colorScheme="base" mode="loading" />
            <hr />
            <Button title="Secondary" colorScheme="secondary" mode="loading" />
            <hr />
            <Button title="Link" colorScheme="link" mode="loading" />
            <hr />
            <Button title="Purple" colorScheme="purple" mode="loading" />
            <hr />
            <Button title="Blue" colorScheme="blue" mode="loading" />
            <hr />
            <Button title="Skyblue" colorScheme="skyblue" mode="loading" />
            <hr />
            <Button title="Green" colorScheme="green" mode="loading" />
            <hr />
            <Button title="Black" colorScheme="black" mode="loading" />
            <hr />
            <Button title="Gold" colorScheme="gold" mode="loading" />
            <hr />
            <Button title="Aqua" colorScheme="aqua" mode="loading" />
        </div>
        <div style={{ marginLeft: '16px', flexGrow: 1 }}>
            <Button title="Base" colorScheme="base" disabled />
            <hr />
            <Button title="Secondary" colorScheme="secondary" disabled />
            <hr />
            <Button title="Link" colorScheme="link" disabled />
            <hr />
            <Button title="Purple" colorScheme="purple" disabled />
            <hr />
            <Button title="Blue" colorScheme="blue" disabled />
            <hr />
            <Button title="Skyblue" colorScheme="skyblue" disabled />
            <hr />
            <Button title="Green" colorScheme="green" disabled />
            <hr />
            <Button title="Black" colorScheme="black" disabled />
            <hr />
            <Button title="Gold" colorScheme="gold" disabled />
            <hr />
            <Button title="Aqua" colorScheme="aqua" disabled />
        </div>
    </div>
</Demo.Titled>
```
