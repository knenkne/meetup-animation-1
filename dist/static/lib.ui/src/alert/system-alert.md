```jsx
<Demo.Titled title="Цветосхемы">
    <div>
        <Alert.System
            mode="success"
            title="Блокировка карты"
            a11y={{ title: 'Блокировка карты' }}
        >
            <Alert.Description>
                {'Вы успешно заблокировали карту'}
            </Alert.Description>
            <Alert.Actions>
                <Link external={false} href="#" colorScheme="green">{'Действие'}</Link>
                <Link external={false} href="#" colorScheme="green">{'Еще действие'}</Link>
            </Alert.Actions>
        </Alert.System>
    </div>
    <div>
        <Alert.System
            mode="info"
            title="Закрытие вклада без процентов"
            a11y={{ title: 'Закрытие вклада без процентов' }}
        >
            <Alert.Description>
                {'Вы не получите начисления по вкладу, если закроете его до окончания срока действия.'}
            </Alert.Description>
            <Alert.Actions>
                <Link external={false} href="#" colorScheme="gray">{'Действие'}</Link>
                <Link external={false} href="#" colorScheme="gray">{'Еще действие'}</Link>
            </Alert.Actions>
        </Alert.System>
    </div>
    <div>
        <Alert.System
            mode="error"
            title="Сервис геопозиции недоступен"
            a11y={{ title: 'Сервис геопозиции недоступен' }}
        >
            <Alert.Description>
                {'Разрешите браузеру доступ к определению вашего местоположения.'}
            </Alert.Description>
            <Alert.Actions>
                <Link external={false} href="#" colorScheme="button-gold">{'Действие'}</Link>
                <Link external={false} href="#" colorScheme="button-gold">{'Еще действие'}</Link>
            </Alert.Actions>
        </Alert.System>
    </div>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Варианты компоновки">
    <div>
        <Alert.System
            mode="success"
            title="Блокировка карты"
            a11y={{ title: 'Блокировка карты' }}
        />
    </div>
    <div>
        <Alert.System
            mode="success"
            title="Блокировка карты"
            a11y={{ title: 'Блокировка карты' }}
        >
            <Alert.Description>
                {'Вы успешно заблокировали карту'}
            </Alert.Description>
        </Alert.System>
    </div>
    <div>
        <Alert.System
            mode="success"
            title="Блокировка карты"
            a11y={{ title: 'Блокировка карты' }}
        >
            <Alert.Description>
                {'Вы успешно заблокировали карту'}
            </Alert.Description>
            <Alert.Actions>
                <Link external={false} href="#" colorScheme="green">{'Действие'}</Link>
                <Link external={false} href="#" colorScheme="green">{'Еще действие'}</Link>
            </Alert.Actions>
        </Alert.System>
    </div>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Совмещение нескольких системных предупреждений">
    <Alert.System
        mode="success"
        title="Блокировка карты"
        a11y={{ title: 'Блокировка карты' }}
    />
    <Alert.System
        mode="success"
        title="Блокировка карты"
        a11y={{ title: 'Блокировка карты' }}
    >
        <Alert.Description>
            {'Вы успешно заблокировали карту'}
        </Alert.Description>
    </Alert.System>
    <Alert.System
        mode="success"
        title="Блокировка карты"
        a11y={{ title: 'Блокировка карты' }}
    >
        <Alert.Description>
            {'Вы успешно заблокировали карту'}
        </Alert.Description>
        <Alert.Actions>
            <Link external={false} href="#" colorScheme="green">{'Действие'}</Link>
            <Link external={false} href="#" colorScheme="green">{'Еще действие'}</Link>
        </Alert.Actions>
    </Alert.System>
</Demo.Titled>
```
