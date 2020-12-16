
### Лоадер для активных элементов ввода

Смена типа происходит по таймауту = 25 сек.
Позиционирование по центру контейнера (необходимо задать родителю position: "relative").

```jsx
<div style={{position: "relative", width: "300px", height: "100px", border: "1px solid black"}}>
    <Loader.Button colorScheme="secondary"/>
</div>

<div style={{position: "relative", width: "300px", height: "100px", border: "1px solid black", backgroundColor: "#08a652"}}>
    <Loader.Button colorScheme="base"/>
</div>
```
