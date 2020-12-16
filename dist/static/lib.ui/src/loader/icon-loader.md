## IconLoader (default size="lg")

```jsx
<div>
    <Loader.Icon />
</div>
```

### Маленький лоадер (size="sm")
```jsx
<div>
    <Loader.Icon size="sm" />
</div>
```

### Светлый лоадер
```jsx
<div style={{ backgroundColor: "#000", padding: "20px"}}>
    <Loader.Icon colorScheme="light" />
</div>
```

### Светлый маленький лоадер (size="sm")
```jsx
<div style={{ backgroundColor: "#000", padding: "20px"}}>
    <Loader.Icon colorScheme="light" size="sm"/>
</div>
```

### Интерактивный пример при клике на иконку
```jsx
{
    var initialState = { isShowed: false }
}

var showLoader = () => {
        setState({ isShowed: true })
        setTimeout(() => {
            setState({ isShowed: false })
            }, 5000)
}

<>
    {state.isShowed ? (
        <Loader.Icon />
    ) : (
        <Icon
            name={"icon:core/operations/autopay"}
            size="self"
            onClick={showLoader}
        />
    )}
</>
```