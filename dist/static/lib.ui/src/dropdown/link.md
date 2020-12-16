```jsx
{
    var DemoTarget = ({ isOpened, onClick, onBlur }) => <Button size="sm" title={isOpened ? 'Close Dropdown' : 'Open Dropdown'} onClick={onClick} onBlur={onBlur} />
}

<Demo.Titled title="Dropdown.Link">
    <Dropdown>
        <DemoTarget />
        <Dropdown.Contents style={{ width: 'auto' }}>
            <Dropdown.Link
                value="/loans/car"
                title="Ссылка на loans.car"
                description="Описание"
            />
            <Dropdown.Link
                value="/"
                title="Ссылка на главную"
                description="Описание"
            />
            <Dropdown.Link
                value="http://ya.ru"
                title="Внешняя ссылка"
                description="Описание"
            />
        </Dropdown.Contents>
    </Dropdown>
</Demo.Titled>
```