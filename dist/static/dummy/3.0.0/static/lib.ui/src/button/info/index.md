```jsx
<Demo.Titled title="Информационные кнопки, отображающие Tooltip">
    <table cellSpacing="16">
        <thead>
            <tr>
                <th>
                Состояния
                </th>
                <th>
                Размер lg
                </th>
                <th>
                Размер sm
                </th>
                <th>
                Кастомная верстка
                </th>
                <th>
                Без текста
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>icon=info;mode=info</td>
                <td>
                    <Button.Info
                        size="lg"
                        title="Кнопка, не совершающая действие"
                        mode="info"
                        icon="info"
                    >
                        some my special node
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        size="sm"
                        title="Кнопка, не совершающая действие"
                        mode="info"
                        icon="info"
                    >
                        some my special node
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        size="sm"
                        title="Кнопка, не совершающая действие"
                        mode="info"
                        icon="info"
                    >
                        <Typography.Subheader style={{marginBottom: "8px"}}>
                            {"Важное сообщение с заголовком"}
                        </Typography.Subheader>
                        <Typography.Description>
                            {"Описание. Может быть длинным"}
                        </Typography.Description>
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        mode="info"
                        icon="info"
                    >
                        some my special node
                    </Button.Info>
                </td>
            </tr>

            <tr>
                <td>icon=warning;mode=info</td>
                <td>
                    <Button.Info
                        size="lg"
                        title="Кнопка, не совершающая действие"
                        mode="info"
                        icon="warning"
                    >
                        some my special node
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        size="sm"
                        title="Кнопка, не совершающая действие"
                        mode="info"
                        icon="warning"
                    >
                        some my special node
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        size="sm"
                        title="Кнопка, не совершающая действие"
                        mode="info"
                        icon="info"
                    >
                        <Typography.Description>
                            {"Описание кнопки, не совершающей действие"}
                        </Typography.Description>
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        mode="info"
                        icon="warning"
                    >
                        some my special node
                    </Button.Info>
                </td>
            </tr>

            <tr>
                <td>icon=warning;mode=error</td>
                <td>
                    <Button.Info
                        size="lg"
                        title="Кнопка, не совершающая действие"
                        mode="error"
                        icon="warning"
                    >
                        some my special node
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        size="sm"
                        title="Кнопка, не совершающая действие"
                        mode="error"
                        icon="warning"
                    >
                        some my special node
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        size="sm"
                        title="Кнопка, не совершающая действие"
                        mode="error"
                        icon="warning"
                    >
                        <Typography.Subheader colorScheme="orange">
                            {"Важное сообщение с заголовком"}
                        </Typography.Subheader>
                        <Typography.Description colorScheme="orange">
                            {"Описание. Может быть длинным"}
                        </Typography.Description>
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        mode="error"
                        icon="warning"
                    >
                        some my special node
                    </Button.Info>
                </td>
            </tr>

            <tr>
                <td>mode=info</td>
                <td>
                    <Button.Info
                        size="lg"
                        title="Кнопка, не совершающая действие"
                        mode="info"
                    >
                        some my special node
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        size="sm"
                        title="Кнопка, не совершающая действие"
                        mode="info"
                    >
                        some my special node
                    </Button.Info>
                </td>
                <td>
                    <Button.Info
                        size="sm"
                        title="Кнопка, не совершающая действие"
                        mode="info"
                    >
                        <Typography.Description>
                            {"Описание кнопки, не совершающей действие"}
                        </Typography.Description>
                    </Button.Info>
                </td>
                <td>
                </td>
            </tr>
        </tbody>
    </table>
</Demo.Titled>
```
