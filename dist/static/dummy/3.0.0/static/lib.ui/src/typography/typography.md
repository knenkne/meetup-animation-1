```jsx
    <Demo.Titled title="Допустимые комбинации цвета текста и фона, типографики и стилей">
        <Demo.Plate colorScheme="white">
            <Demo.Plate>
                <Typography.Headline>Самый главный заголовок (Headline, h1)</Typography.Headline>
                <Typography.Headline mode="h2">Обычный заголовок (Headline, h2)</Typography.Headline>
                <Typography.Headline mode="h3">Обычный заголовок (Headline, h3)</Typography.Headline>
                <Typography.Headline mode="h4">Обычный заголовок (Headline, h4)</Typography.Headline>
                <Typography.Headline mode="h5">Обычный заголовок (Headline, h5)</Typography.Headline>

                <p className={Typography.theme.bodySemibold}>Основной текст (Body Text 1 Semibold)</p>
                <p className={Typography.theme.body}>Основной текст (Body Text 1)</p>

                <Typography.Caption>Дополнительная информация (Caption)</Typography.Caption>
                <Typography.Caption mode="captionSemibold">Дополнительная информация (Caption Semibold)</Typography.Caption>
                <Typography.Caption colorScheme="orange">Дополнительная информация (Caption orange)</Typography.Caption>

                <Typography.Headline mode="banner">Заголовок banner (Headline, banner)</Typography.Headline>

                <Typography.Uppercase>Заглавными буквами (Uppercase)</Typography.Uppercase>
            </Demo.Plate>
    </Demo.Plate>
    <hr />

    <Demo.Plate colorScheme="white">
        <Typography.Headline mode="h3">Цвета</Typography.Headline>
        <Typography.Headline mode="h4">Body (default)</Typography.Headline>

        <p className={Typography.theme.body}>Раз нет ни запада, ни востока, зачем искать север и юг? (default)</p>
        <p className={classnames(Typography.theme.body, Typography.theme.darkGray)}>Раз нет ни запада, ни востока, зачем искать север и юг? (darkGray)</p>
        <p className={classnames(Typography.theme.body, Typography.theme.gray)}>Раз нет ни запада, ни востока, зачем искать север и юг? (gray)</p>
        <p className={classnames(Typography.theme.body, Typography.theme.green)}>Раз нет ни запада, ни востока, зачем искать север и юг? (green)</p>
        <p className={classnames(Typography.theme.body, Typography.theme.orange)}>Раз нет ни запада, ни востока, зачем искать север и юг? (orange)</p>
        <p className={classnames(Typography.theme.body, Typography.theme.red)}>Раз нет ни запада, ни востока, зачем искать север и юг? (red)</p>
    </Demo.Plate>
</Demo.Titled>
```
