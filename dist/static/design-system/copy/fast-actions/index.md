```jsx
<FastActions>
    <FastActions.FastAction
        title="Заголовок"
        description="Описание"
        onClick={() => alert('click')}
        icon="icon:core/products/depo"
    />
    <FastActions.FastAction
        title="Заголовок"
        description="Описание очень длинное"
        onClick={() => alert('click')}
        icon="icon:core/products/loan-auto"
    />
    <FastActions.FastAction
        title="Заголовок две строки"
        onClick={() => alert('click')}
        icon="icon:core/products/ghost-insurance"
    />
    <FastActions.FastAction
        title="Заголовок две строки"
        description="Описание длинное очень длинное"
        onClick={() => alert('click')}
        icon="icon:core/products/ghost-insurance"
    />
</FastActions>
```

```jsx
<FastActions>
    <FastActions.TimerAction
        title="Обновить"
        timerTitle="Подождите"
        description="Стартует сразу"
        onClick={() => alert('dispatch message bus')}
        icon="icon:core/product-status/reload"
        initialValue={5}
        value={10}
    />
    <FastActions.TimerAction
        title="Обновить"
        timerTitle="Подождите"
        description="Надо нажать"
        onClick={() => alert('dispatch message bus')}
        icon="icon:core/product-status/reload"
        value={10}
    />
    <FastActions.FastAction
        title="Неактивная"
        icon="icon:core/products/loan-auto"
    />
    <FastActions.FastAction
        title="Внутренняя ссылка"
        href="/foo"
        icon="icon:core/products/loan-auto"
    />
    <FastActions.FastAction
        title="Внешняя ссылка"
        external
        href="/foo"
        icon="icon:core/products/loan-auto"
    />
</FastActions>
```

```jsx
<FastActions>
    <FastActions.FastAction
        title="Default"
        icon="icon:core/products/loan-auto"
    />
    <FastActions.FastAction
        title="colorScheme done"
        icon="icon:core/products/loan-auto"
        colorScheme="done"
    />
    <FastActions.FastAction
        title="colorScheme waiting"
        icon="icon:core/products/loan-auto"
        colorScheme="waiting"
    />
    <FastActions.FastAction
        title="colorScheme error"
        icon="icon:core/products/loan-auto"
        colorScheme="error"
    />
    <FastActions.FastAction
        title="colorScheme info"
        icon="icon:core/products/loan-auto"
        colorScheme="info"
    />
</FastActions>
```