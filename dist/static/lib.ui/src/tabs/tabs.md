```jsx
{
    initialState = {
        additionalTab: true
    }

    var handleClick = () => setState({ additionalTab: !state.additionalTab })
    var buttonLabel = state.additionalTab ? 'Скрыть дополнительный таб' : 'Показать дополнительный таб'
}

<Demo.Titled title="Стандартный кейс с табами с опциональным табом">
    <Button
        title={buttonLabel}
        onClick={handleClick}
    />
    <Tabs initialValue="Карты">
        <Tabs.Tab title="Вклады">
            <h3>Открывайте премиальные вклады</h3>
            <p>Вклады - это новые деньги!</p>
            <p>Вклады - это имидж!</p>
            <p>Вклады - это возможности!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Карты">
            <h3>Расплачивайтесь премиальными картами</h3>
            <p>Быстро и удобно!</p>
            <p>Легко и беззаботно!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Priority Pass" forceOpened>
            <h3>Путешествуйте с комфортом</h3>
            <p>Карта в подарок! (не топографическая)</p>
        </Tabs.Tab>
        {state.additionalTab &&
        <Tabs.Tab title="Дополнительный таб">
            <h3>Я скрываюсь и показываюсь</h3>
            <p>И все по вашему желанию</p>
        </Tabs.Tab>
        }
    </Tabs>
</Demo.Titled>
```

```jsx
{
    initialState = {
        items: [
            {
                id: 1,
                title: 'Вклады',
                contentTitle: 'Открывайте премиальные вклады',
                contentText: 'Вклады - это новые деньги!'
            },
            {
                id: 2,
                title: 'Карты',
                contentTitle: 'Расплачивайтесь премиальными картами',
                contentText: 'Быстро и удобно!'
            },
            {
                id: 3,
                title: 'Страховые программы',
                contentTitle: 'Страхование путешествующих',
                contentText: 'Мы о вас позаботимся'
            },
            {
                id: 4,
                title: 'Скидки и привилегии',
                contentTitle: 'Почувствуйте выгоду',
                contentText: 'Например, льготные курсы валют'
            }
        ],
        selectedItem: 'Карты'
    }

    var setSelectedItem = (value) => setState({selectedItem: value})
    var handleClick = () => setState({selectedItem: 'Страховые программы'})

}

<Demo.Titled title="Табы с управлением состоянием из родителя">
    <Button
        colorScheme="aqua"
        title="Переключить на третью вкладку"
        onClick={handleClick}
    />

    <Tabs
        selectedItem={state.selectedItem}
        onSelect={setSelectedItem}
    >
        {state.items.map(({id, title, contentTitle, contentText}) => (
            <Tabs.Tab key={id} title={title}>
                <h3>{contentTitle}</h3>
                <p>{contentText}</p>
            </Tabs.Tab>)
        )}
    </Tabs>
</Demo.Titled>
```

```jsx
<Demo.Titled 
    title="Доступны цвета: base (основной корпоративный), aqua, black, blue, gold, green, purple, skyblue "
    description="Также тут представлен mode=[sticky, fullwidth]"
>
    <Tabs colorScheme="aqua" initialValue="Вклады" mode={['sticky', 'fullwidth']}>
        <Tabs.Tab title="Вклады">
            <h3>Открывайте премиальные вклады</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Карты">
            <h3>Расплачивайтесь премиальными картами</h3>
            <p>Быстро и удобно!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Priority Pass">
            <h3>Путешествуйте с комфортом</h3>
            <p>Карта в подарок! (не топографическая)</p>
        </Tabs.Tab>
        <Tabs.Tab title="Страховые программы">
            <h3>Страхование путешествующих</h3>
            <p>Мы о вас позаботимся</p>
        </Tabs.Tab>
        <Tabs.Tab title="Скидки и привилегии">
            <h3>Почувствуйте выгоду</h3>
            <p>Например, льготные курсы валют</p>
        </Tabs.Tab>
        <Tabs.Tab title="Условия обслуживания">
            <h3>Пользуйтесь пакетом услуг бесплатно</h3>
            <p>Первый два месяца</p>
        </Tabs.Tab>
    </Tabs>
</Demo.Titled>
```

```jsx
{
    var consoleTabSelect = function (title) {
        console.log(title)
    }
}

<Demo.Titled
    title="С помощью mode у Tabs.Tab можно перезаписать цвет таба"
    description="Также тут представлен скроллинг и mode = fullwidth"
>
    <Tabs mode="fullwidth" colorScheme="gold" initialValue="Второй очень длинный раздел" onChange={consoleTabSelect}>
        <Tabs.Tab title="Первый раздел" mode="success">
            <h3>Открывайте премиальные вклады 1</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Второй очень длинный раздел" mode="error">
            <h3>Открывайте премиальные вклады 2</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Третий еще гораздо длиннее раздел" mode="default">
            <h3>Открывайте премиальные вклады 3</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Четвертый длинно названный раздел" mode="success">
            <h3>Открывайте премиальные вклады 4</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Пятый раздел о чем-то очень хорошем" mode="error">
            <h3>Открывайте премиальные вклады 5</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Шестой раздел, который расширит понимание" mode="default">
            <h3>Открывайте премиальные вклады 6</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Седьмой раздел" mode="success">
            <h3>Открывайте премиальные вклады 7</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
    </Tabs>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Табы с размером sm">
    <div style={{ width:'360px' }}>
    <Tabs size="sm" colorScheme="gold" initialValue="Первый раздел">
        <Tabs.Tab title="Первый раздел">
            <h3>Открывайте премиальные вклады 1</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Название второе">
            <h3>Открывайте премиальные вклады 2</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
    </Tabs>
    </div>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Табы без подчеркивающей линии">
    <Tabs mode="borderless" size="sm">
        <Tabs.Tab title="Первый раздел">
            <h3>Открывайте премиальные вклады 1</h3>
            <p>Вклады - это новые деньги!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Название второе">
            <h3>Открывайте премиальные вклады 2</h3>
            <p>Вклады - это имидж!</p>
        </Tabs.Tab>
        <Tabs.Tab title="Название третье">
            <h3>Открывайте премиальные вклады 3</h3>
            <p>Вклады - это возможности!</p>
        </Tabs.Tab>
    </Tabs>
</Demo.Titled>
```
