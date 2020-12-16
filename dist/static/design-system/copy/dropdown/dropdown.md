```jsx static
<Dropdown disabled={boolean} onOpen={function} onClose={function} forceOpened={boolean} mode={'click'|'focus'|'none'}>
    {<MyTargetComponent /> || <Dropdown.TargetButton />}
    <Dropdown.Contents align={'left'|'right'|function} verticalAlign={'top'|'bottom'|function}>
        <MyContentsComponent1 />
        <MyContentsComponent2 />
        ... or
        <Dropdown.Option value={string} title={string} />
        <Dropdown.Group title={string}>
            <Dropdown.Option value={string} title={string} />
        </Dropdown.Group>
    </Dropdown.Contents>
</Dropdown>
```

MyTargetComponent и Dropdown.Contents получают из Dropdown дополнительные props:
* forceOpened - boolean значение открытого Dropdown
* target - element Perimeter
* onClick (только для Dropdown.Contents)

```jsx
{
    var DemoTargetButton = ({ forceOpened, onClick, onBlur }, { dropdown }) => {
        var title = `No value selected | ${forceOpened ? '^' : 'v'}`

        if (dropdown.getValue()) {
            title = `Selected value: ${dropdown.getValue()} | ${forceOpened ? '^' : 'v'}`
        }

        return <Button size="sm" onClick={onClick} onBlur={onBlur} title={title} />
    }

    DemoTargetButton.contextTypes = {
        dropdown: PropTypes.object
    }
}

<Demo.Form>
    <Demo.Titled
        title="Dropdown может быть полем ввода"
        description="Реже он может быть использован как свернутый список действий"
    >
        <Demo.LabeledField
            name="custom:dropdown"
            component={Dropdown}
            title="Dropdown с кастомным Target"
        >
            <DemoTargetButton />
            <Dropdown.Contents>
                <Dropdown.Group title="Выберите валюту">
                    <Dropdown.Option
                        value="RUB"
                        title="Рубль"
                    />
                    <Dropdown.Option
                        value="USD"
                        title="Доллар"
                    />
                    <Dropdown.Option
                        value="WOW"
                        title="Третья опция"
                    />
                </Dropdown.Group>
            </Dropdown.Contents>
        </Demo.LabeledField>
        
    </Demo.Titled>
</Demo.Form>
```

```jsx
{
    var consoleClickDemoChild = () => console.log('Клик по DemoChildren')
    var consoleOpen = () => console.log('Открытие')
    var consoleClose = () => console.log('Закрытие')

    var DemoTargetButton = ({ isOpened, onClick, onBlur }) => <Button size="sm" title={isOpened ? 'Close Dropdown' : 'Open Dropdown'} onClick={onClick} onBlur={onBlur} />
    var DemoTargetInput = ({ onFocus, onBlur }) => <Input type="text" aria-label="Демонстрационное поле" onFocus={onFocus} onBlur={onBlur} />
    var DemoChildren = ({ label, nowrap }) => <span style={{ whiteSpace: nowrap ? 'nowrap' : void 0 }} onClick={consoleClickDemoChild}>{label}</span>

    var consoleClick = (result) => {
        console.log('Нажали на:', result)
    }
}

<Demo.Titled title="Режимы работы Dropdown" description="Принимает слушателей событий на открытие и закрытие">
    Дефолтный режим работы - click, применяется для всех нажимных выпадающих списков:
    <Dropdown onOpen={consoleOpen} onClose={consoleClose}>
        <DemoTargetButton />
        <Dropdown.Contents>
            <DemoChildren label="Здесь может быть размещена любая верстка" />
        </Dropdown.Contents>
    </Dropdown>
    <hr />
    Контент подстраивается по ширине под Target (для изменения поведения на растяжение по содержимому необходимо дополнить тему width=auto):
    <Dropdown>
        <DemoTargetButton />
        <Dropdown.Contents style={{ width: 'auto' }}>
            <Dropdown.Group title="Выберите вариант из списка">
                <Dropdown.Option
                    value="1"
                    title="Заголовок"
                    onClick={consoleClick}
                />
                <Dropdown.Option
                    value="2"
                    title="Заголовок"
                    onClick={consoleClick}
                />
                <Dropdown.Option
                    value="3"
                    title="Заголовок"
                    onClick={consoleClick}
                />
            </Dropdown.Group>
        </Dropdown.Contents>
    </Dropdown>
    <hr />
    Режим работы - focus, применяется для всех текстовых полей ввода:
    <Dropdown mode="focus" onOpen={consoleOpen} onClose={consoleClose}>
        <DemoTargetInput />
        <Dropdown.Contents>
            <Dropdown.Option
                value="1"
                title="Заголовок"
                onClick={consoleClick}
            />
            <Dropdown.Option
                value="2"
                title="Заголовок"
                onClick={consoleClick}
            />
            <Dropdown.Option
                value="3"
                title="Заголовок"
                onClick={consoleClick}
            />
        </Dropdown.Contents>
    </Dropdown>
</Demo.Titled>
```

```jsx
{
    var consoleClickDemoChild = () => console.log('Клик по DemoChildren')

    var DemoTargetButton = ({ isOpened, onClick, onBlur }) => <Button size="sm" title={isOpened ? 'Close Dropdown' : 'Open Dropdown'} onClick={onClick} onBlur={onBlur} />
    var DemoChildren = ({ label, nowrap }) => <span style={{ whiteSpace: nowrap ? 'nowrap' : void 0 }} onClick={consoleClickDemoChild}>{label}</span>
}

<Demo.Titled title="Программное поведение">
    Dropdown.Contents не содержит дочерних компонентов:
    <Dropdown>
        <DemoTargetButton />
        <Dropdown.Contents />
    </Dropdown>
    <hr />
    Dropdown disabled:
    <Dropdown disabled>
        <DemoTargetButton />
        <Dropdown.Contents>
            <DemoChildren label="Здесь может быть размещена любая верстка" />
        </Dropdown.Contents>
    </Dropdown>
    <hr />
    forceOpened = false (работает с отключенным режжимом):
    <Dropdown forceOpened={false} mode="none">
        <DemoTargetButton />
        <Dropdown.Contents>
            <DemoChildren label="Здесь может быть размещена любая верстка" />
        </Dropdown.Contents>
    </Dropdown>
    <hr />
    forceOpened = true (работает с отключенным режжимом):
    <Dropdown forceOpened mode="none">
        <DemoTargetButton />
        <Dropdown.Contents>
            <DemoChildren label="Здесь может быть размещена любая верстка" />
        </Dropdown.Contents>
    </Dropdown>
</Demo.Titled>
```
