```jsx
{
    var DemoTarget = ({ isOpened, onClick, onBlur }) => <Button size="sm" title={isOpened ? 'Close Dropdown' : 'Open Dropdown'} onClick={onClick} onBlur={onBlur} />
    var DemoIcon = () => <span>{'$'}</span>
}

<Demo.Titled title="Возможности Dropdown.Option">
    <Dropdown>
        <DemoTarget />
        <Dropdown.Contents style={{ width: 'auto' }}>
            <Dropdown.Option
                value="1"
                title="Заголовок"
                description="Описание"
            />
            <Dropdown.Option
                value="2"
                title="Заголовок"
                description="Описание"
                checked
            />
            <Dropdown.Option
                value="3"
                title="Very huge and disgusting text"
                description="Описание"
            >
                <DemoIcon />
            </Dropdown.Option>
            <Dropdown.Option
                value="4"
                title="Заголовок"
                description="Описание"
                checked
            />
            <Dropdown.Option
                value="5"
                title="Заголовок"
                description="Описание"
            />
            <Dropdown.Option
                 value="one"
                 title="Карта один"
                 description="дебетовая"
                 additional="заблокирована"
                 >
                 <Icon name="icon:core/resource/card" />
            </Dropdown.Option>
            <Dropdown.Option
                 value="two"
                 title="Карта два"
                 description="кредитная"
                 additional="истекла"
                 >
                 <Icon name="icon:core/resource/card" />
                 </Dropdown.Option>
            <Dropdown.Option
                 value="three"
                 title="Карта три"
                 description="кредитная"
                 additional="актуальна"
                 >
                 <Icon name="icon:core/resource/card" />
                 </Dropdown.Option>       
        </Dropdown.Contents>
    </Dropdown>
</Demo.Titled>
```

```jsx
{
    var DemoTarget = ({ isOpened, onClick, onBlur }) => <Button size="sm" title={isOpened ? 'Close Dropdown' : 'Open Dropdown'} onClick={onClick} onBlur={onBlur} />
    var DemoIcon = () => <span>{'$'}</span>
}

<Demo.Titled title="Альтернативные символы для нативных селектов">
    <Dropdown>
        <DemoTarget />
        <Dropdown.Contents style={{ width: 'auto' }}>
            <Dropdown.Option
                value="rus"
                title="Россия"
                altSymbol="🇷🇺"
            >
                <Icon name="icon:core/countries/rus" />
            </Dropdown.Option>
            <Dropdown.Option
                value="usa"
                title="США"
                altSymbol="🇺🇸"
            >
                <Icon name="icon:core/countries/usa" />
            </Dropdown.Option>
        </Dropdown.Contents>
    </Dropdown>       
</Demo.Titled>
```
