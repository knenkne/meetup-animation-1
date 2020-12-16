```jsx
{
    var DemoTarget = ({ isOpened, onClick, onBlur }) => <Button size="sm" title={isOpened ? 'Close Dropdown' : 'Open Dropdown'} onClick={onClick} onBlur={onBlur} />
}

<Demo.Titled title="Возможности Dropdown.Group">
    <Dropdown>
        <DemoTarget />
        <Dropdown.Contents style={{ width: 'auto' }}>
            <Dropdown.Group>
                <Dropdown.Option
                    value="1"
                    title="Заголовок"
                    description="Описание"
                    checked
                />
            </Dropdown.Group>
            <Dropdown.Group title="Very huge and disgusting group title">
                <Dropdown.Option
                    value="2"
                    title="Заголовок"
                    description="Описание"
                />
            </Dropdown.Group>
            <Dropdown.Group title="Заголовок">
                <Dropdown.Option
                    value="3"
                    title="Заголовок"
                    description="Описание"
                    checked
                />
            </Dropdown.Group>
            <Dropdown.Group>
                <Dropdown.Option
                    value="4"
                    title="Заголовок"
                    description="Описание"
                />
            </Dropdown.Group>
            <Dropdown.Group>
                <Dropdown.Option
                    value="5"
                    title="Заголовок"
                    description="Описание"
                />
            </Dropdown.Group>
        </Dropdown.Contents>
    </Dropdown>
</Demo.Titled>
```