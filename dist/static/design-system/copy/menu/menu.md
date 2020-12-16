```jsx
{
    var options = [
        {
            value: "save",
            title: "Перевыпуск карты",
            type: "option",
            action: () => setState({ text: "Перевыпуск карты заказан" })
        },
        {
            value: "copy",
            title: "Заблокировать карту",
            type: "option",
            action: () => setState({ text: "Карта будет заблокирована" })
        },
        {
            value: "https://ya.ru",
            title: "Пояндексить",
            type: "linkout"
        },
        {
            value: "2rows",
            title: "Сделать что-то достаточно длинное",
            type: "option",
            action: () => setState({ text: "Сделать длинное дело" })
        }
    ]

    initialState = {
        text: "Какие действия необходимо совершить с картой?",
        isOpen: false,
        eventType: ""
    }

    var onOpen = (event = {}) => {
        setState({ isOpen: true, eventType: event.type})
    }
    var onClose = (event = {}) => {
        setState({ isOpen: false, eventType: event.type})
    }
}

<div className={Typography.theme.body}>
    <div>{state.text}</div>
    <ul
        style={{
            listStyle: "none",
            textAlign: "center",
            border: `1px solid #2d2`,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "16px"
        }}
    >
        <li>Пункт 1</li>
        <li>Что-то 2</li>

        <li>
            <Menu
                title="Операции с картой"
                options={options}
                icon="threeDots"
                onOpen={onOpen}
                onClose={onClose}
            />
        </li>

        <li>
            <Menu
                options={options}
                icon="close-small"
                onOpen={onOpen}
                onClose={onClose}
                mode="click"
            />
        </li>
    </ul>
    <div>{`Состояние меню: ${state.isOpen ? "Открыто" : "Закрыто"}, eventType: ${state.eventType}`}</div>
</div>
```
