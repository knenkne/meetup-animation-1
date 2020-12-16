```jsx
<Alert.Input
    mode="info"
    title="Упс, у вас что-то произошло"
    a11y={{ title: 'Блокирующая ошибка' }}
>
    <Alert.Description>
        Содержание блокирующей ошибки
        не более 4 строк, учимся писать стройные и информативне тексты
        на благо пользователя.
    </Alert.Description>
</Alert.Input>
```

```jsx
<Alert.Input
    mode="error"
    onClose={() => console.log('Закрыть!')}
    a11y={{ title: 'Блокирующая ошибка', close: 'Закрыть ошибку, она не блокирует' }}
>
    <Alert.Description>
        Содержание блокирующей ошибки
        не более 4 строк, учимся писать стройные и информативне тексты
        на благо пользователя.
    </Alert.Description>
    <Alert.Actions>
        <Link external={false} href="#">Действие</Link>
    </Alert.Actions>
</Alert.Input>
```

```jsx
<Alert.Input
    mode="error"
    title="ОШИБКА!"
    a11y={{ title: 'Блокирующая ошибка' }}
>
    <Alert.Description>
        Содержание блокирующей ошибки
        не более 4 строк, учимся писать стройные и информативне тексты
        на благо пользователя.
    </Alert.Description>
    <Alert.Actions>
        <Link external={false} href="#">Действие</Link>
    </Alert.Actions>
</Alert.Input>
```
