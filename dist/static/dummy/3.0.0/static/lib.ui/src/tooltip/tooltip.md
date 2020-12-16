```jsx
<Demo.Titled title="Типы тултипов">
    <Tooltip.Hover>
        {'Тултип с ошибкой'}
        <Tooltip.Tip mode="error">
            {'mode error'}
        </Tooltip.Tip>
    </Tooltip.Hover>
    <hr />
    <Tooltip.Hover>
        {'Информационный тултип'}
        <Tooltip.Tip mode="info">
            {'mode info'}
        </Tooltip.Tip>
    </Tooltip.Hover>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Режимы работы тултипов">
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Tooltip.Hover>
            <Button title="Hover" />
            <Tooltip.Tip>
                {'Tooltip.Hover'}
            </Tooltip.Tip>
        </Tooltip.Hover>
        <Tooltip.Click>
            <Button title="Click" />
            <Tooltip.Tip>
                {'Tooltip.Click'}
            </Tooltip.Tip>
        </Tooltip.Click>
        <Tooltip forceOpened>
            <Button title="JS" />
            <Tooltip.Tip>
                {'Разработчик самостоятельно определяет раскрытие Tooltip, передавая ему prop "forceOpened"'}
            </Tooltip.Tip>
        </Tooltip>
    </div>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Позиции тултипов">
    <Tooltip.Hover>
        {'Позция topLeft тултипов вокруг элемента.'}
        <Tooltip.Tip direction="topLeft">
            {'direction top left'}
        </Tooltip.Tip>
    </Tooltip.Hover>
    {' '}
    <Tooltip.Hover>
        {'Позция topCenter тултипов вокруг элемента.'}
        <Tooltip.Tip direction="topCenter">
            {'direction top center'}
        </Tooltip.Tip>
    </Tooltip.Hover>
    {' '}
    <Tooltip.Hover>
        {'Позция topRight тултипов вокруг элемента.'}
        <Tooltip.Tip direction="topRight">
            {'direction top right'}
        </Tooltip.Tip>
    </Tooltip.Hover>
    {' '}
    <Tooltip.Hover>
        {'Позция bottomLeft тултипов вокруг элемента.'}
        <Tooltip.Tip direction="bottomLeft">
            {'direction bottom left'}
        </Tooltip.Tip>
    </Tooltip.Hover>
    {' '}
    <Tooltip.Hover>
        {'Позция bottomCenter тултипов вокруг элемента.'}
        <Tooltip.Tip direction="bottomCenter">
            {'direction bottom center'}
        </Tooltip.Tip>
    </Tooltip.Hover>
    {' '}
    <Tooltip.Hover>
        {'Позция bottomRight тултипов вокруг элемента.'}
        <Tooltip.Tip direction="bottomRight">
            {'direction bottom right'}
        </Tooltip.Tip>
    </Tooltip.Hover>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Необходимость растяжения по содержимому через mode='fullWidth'">
    <Tooltip.Hover>
        <Button title="Данная кнопка не должна тянуться" colorScheme="secondary" />
        <Tooltip.Tip>
            {'Ребенок растянется на необходимую ширину'}
        </Tooltip.Tip>
    </Tooltip.Hover>
    <hr />
    <Tooltip.Hover mode="fullWidth">
        <Button title="Данная кнопка должна тянуться" colorScheme="secondary" />
        <Tooltip.Tip>
            {'Ребенок растянется на 100% родителя'}
        </Tooltip.Tip>
    </Tooltip.Hover>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Кастомная верстка в тултипах">
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Tooltip.Hover>
            {"Upgrading To Microsoft Windows Vista Tips"}
            <Tooltip.Tip>
                {"Очень важное сообщение. Может быть в несколько строк"}
            </Tooltip.Tip>
        </Tooltip.Hover>

        <Tooltip.Hover>
            {"Where Can You Find Unique Myspace Layouts Nowadays"}
            <Tooltip.Tip>
                <Typography.Description>{"Еще одно сообщение"}</Typography.Description>
            </Tooltip.Tip>
        </Tooltip.Hover>

        <div>
            <Tooltip.Hover>
                <div style={{textDecoration: "underline dashed"}} >{"Other systems"}</div>
                <Tooltip.Tip>
                    <Typography.Subheader>
                        {"Важное сообщение с заголовком"}
                    </Typography.Subheader>
                    <Typography.Description>
                        {"Описание. Может быть очень длинным. Но не забываем про то, что краткость – сестра таланта"}
                    </Typography.Description>
                </Tooltip.Tip>
            </Tooltip.Hover>

            {" – religion, nationalism, paranoid ideation, or art – are based on personal experiences (faith, inspiration, paranoia, etc.)."}
        </div>

    </div>
</Demo.Titled>
```
