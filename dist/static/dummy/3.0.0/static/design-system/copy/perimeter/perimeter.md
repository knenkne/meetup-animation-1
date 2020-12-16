```jsx
{
    var perimeter
    var setRef = (component) => {
        if (!perimeter) {
            perimeter = component
        }
    }
    var handleClickOutside = () => {
        console.log('Клик снаружи', event)
        perimeter.disableOnClickOutside()
        setState({ active: false })
    }
    var handleClick = () => {
        console.log('Клик внутри', event)
        perimeter.enableOnClickOutside()
        setState({ active: true })
    }

    var initialState = { active: false }
}

<Perimeter
    ref={setRef}
    onClickOutside={handleClickOutside}
    disableOnClickOutside
>
    <Button
        onClick={handleClick}
        title={state.active ? 'Деактивировать Perimeter - клик снаружи' : 'Активировать Perimeter - клик внутри'}
    />
</Perimeter>
```
