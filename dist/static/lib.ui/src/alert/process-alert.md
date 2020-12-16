```jsx
<Alert.Process
    mode="success"
    title="Заголовок success"
    a11y={{ title: 'Блокировка карты', close: 'Закрыть уведомление о блокировке карты' }}
>
    <Alert.Description>
        Мы зафиксировали подозрительную активность по вашей карте и заблокировали ее для сохранности ваших средств.
    </Alert.Description>
</Alert.Process>
```

```jsx
<Alert.Process
    mode="success"
    title="Учётная запись заблокирована"
    a11y={{ title: 'Блокировка карты', close: 'Закрыть уведомление о блокировке карты' }}
/>
```

```jsx
<Alert.Process
    mode="info"
    title="Заголовок info"
    a11y={{ title: 'Блокировка карты', close: 'Закрыть уведомление о блокировке карты' }}
>
    <Alert.Description>
        Мы зафиксировали подозрительную активность по вашей карте и заблокировали ее для сохранности ваших средств.
    </Alert.Description>
</Alert.Process>
```

```jsx
<Alert.Process
    mode="error"
    a11y={{ title: 'Блокировка карты' }}
>
    <Alert.Description>
        Мы зафиксировали подозрительную активность по вашей карте и заблокировали ее для сохранности ваших средств. Для восстановления вашей учётной записи обратитесь к администратору безопасности или руководителю отделения. Если ошибка не исчезнет - перезагрузите компьютер
    </Alert.Description>
</Alert.Process>
```

```jsx
<Alert.Process
    mode="error"
    title="ОШИБКА!"
    a11y={{ title: 'Блокировка карты' }}
/>
```

```jsx
<Alert.Process
    mode="draft"
    title="Серия обычных сообщений"
    a11y={{ }}
>
    <Alert.Description>
        Для восстановления вашей учётной записи обратитесь к администратору безопасности или руководителю отделения. Если ошибка не исчезнет - перезагрузите компьютер
    </Alert.Description>
</Alert.Process>
```

```jsx
{
    initialState = {
        mode: 'success',
        modes: ['success', 'info', 'warning', 'error'],
        colorScheme: 'green'
    }

    var linkLevelMap = {
        warning: 'gray',
        info: 'purple',
        error: 'orange',
        success: 'green'
    }

    var handleChangeMode = (event) => {
        const mode = event.target.value
        setState({
             mode,
             colorScheme: linkLevelMap[mode]
        })
    }
}
<Demo.Titled title="Возможные комбинации алертов и ссылок">
    <Selection.Group mode="row">
        {initialState.modes.map((mode) => (
            <Selection.Radio
                key={mode}
                size="sm"
                checked={state.mode === mode}
                onChange={handleChangeMode}
                value={mode}
                name="mode"
            >
                {mode}
            </Selection.Radio>
        ))}
    </Selection.Group>
    <br/>
    <Alert.Process
        mode={state.mode}
        title="Обычное сообщение"
        a11y={{ }}
    >
        <Alert.Description>
            {"Мы зафиксировали подозрительную активность по вашей карте и заблокировали ее для сохранности ваших средств."}
        </Alert.Description>
        <Alert.Actions>
            <Link href="#" colorScheme={state.colorScheme} size="sm" bold>{'Подробнее'}</Link>
            <Link href="#" colorScheme={state.colorScheme} size="sm" bold external >{'Найти отделение'}</Link>
        </Alert.Actions>
    </Alert.Process>
</Demo.Titled>
```
