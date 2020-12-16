## Loader (default size="sm")

#### Смена типа происходит по таймауту = 25 сек.

#### Чтобы не было мельканий лоадеров при переходах, рендер происходит с задержкой 300 мс

```jsx
<div>
    <Loader />
</div>
```

### Маленький лоадер (size="xs")
```jsx
<div>
    <Loader size="xs" />
</div>
```

### Большой лоадер (size="lg")
```jsx
<div>
    <Loader size="lg" />
</div>
```

### Светлый лоадер
```jsx
<div style={{ backgroundColor: "#08a652", padding: "20px"}}>
    <Loader colorScheme="light" />
</div>
```

### Позиционирование
```jsx
{
    const Wrapper = ({ children, title }) => (
        <div
            style={{
                position: "relative",
                width: "300px",
                height: "200px",
                padding: '0 10px',
                marginRight: "10px",
                border: "1px solid black"
            }}
        >
        <p>{title}</p>
            {children}
        </div>
    )
}

<div style={{display: "flex"}}>
    <Wrapper title={"Позиционирование внутри контйнера (mode='fill')"}>
        <Loader mode="fill"/>
    </Wrapper>

    <Wrapper title={"Маленький лоадер в контйнере (size='xs')"}>
        <Loader mode="fill" size="xs"/>
    </Wrapper>

    <Wrapper title={"Большой лоадер с позиционированием в контейнере"}>
        <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Loader size="lg" />
        </div>
    </Wrapper>
</div>
```
