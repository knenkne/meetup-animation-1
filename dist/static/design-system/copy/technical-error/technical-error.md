```jsx
{
    // mock lib.app getConfigValue
    var config = {
        'res.url': 'http://10.36.9.21/builds/sbol',
        'common.version': 'master'
    }
    var getConfigValue = (key) => config[key]
    // Собственная функция по формированию нужного урла
    const PATH = `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/errors/`
    var getImageUrl = (name) => `${PATH}${name}.png`
    var getSrcSet = (name) => `${PATH}${name}@2x.png 2x, ${PATH}${name}@3x.png 3x`
}

<TechnicalError title="Страница не найдена" imageSrc={getImageUrl('404')} srcSet={getSrcSet('404')}>
    <TechnicalError.Description>
        <div>Сервер не может найти данные согласно запросу.</div>
        <Link external={false} href="#">Обновите страницу</Link>
    </TechnicalError.Description>

    <TechnicalError.Actions>
        <Button>Вернуться на главную</Button>
    </TechnicalError.Actions>
</TechnicalError>
```

```jsx
{
    // mock lib.app getConfigValue
    var config = {
        'res.url': 'http://10.36.9.21/builds/sbol',
        'common.version': 'master'
    }
    var getConfigValue = (key) => config[key]
    // Собственная функция по формированию нужного урла
    const PATH = `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/errors/`
    var getImageUrl = (name) => `${PATH}${name}.png`
    var getSrcSet = (name) => `${PATH}${name}@2x.png 2x, ${PATH}${name}@3x.png 3x`
}

<TechnicalError title="Ошибка 500. Текст пояснения ошибки" imageSrc={getImageUrl('500')} srcSet={getSrcSet('500')}>
    <TechnicalError.Description>
        <div>Внутренняя ошибка сервера.</div>
        <Link external={false} href="#">Обновите страницу</Link>
        <div>или попробуйте зайти позже.</div>
    </TechnicalError.Description>

    <TechnicalError.Actions>
        <Button>Вернуться на главную</Button>
    </TechnicalError.Actions>
</TechnicalError>
```

```jsx
{
    // mock lib.app getConfigValue
    var config = {
        'res.url': 'http://10.36.9.21/builds/sbol',
        'common.version': 'master'
    }
    var getConfigValue = (key) => config[key]
    // Собственная функция по формированию нужного урла
    const PATH = `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/errors/`
    var getImageUrl = (name) => `${PATH}${name}.png`
    var getSrcSet = (name) => `${PATH}${name}@2x.png 2x, ${PATH}${name}@3x.png 3x`
}

<TechnicalError title="Технические работы. Сервис временно недоступен" imageSrc={getImageUrl('error')} srcSet={getSrcSet('error')}>
    <TechnicalError.Description>Воспользуйтесь сервисом позже. Приносим свои извинения за доставленные неудобства.</TechnicalError.Description>

    <TechnicalError.Actions>
        <Button>Вернуться на главную</Button>
    </TechnicalError.Actions>
</TechnicalError>
```

```jsx
{
    // mock lib.app getConfigValue
    var config = {
        'res.url': 'http://10.36.9.21/builds/sbol',
        'common.version': 'master'
    }
    var getConfigValue = (key) => config[key]
    // Собственная функция по формированию нужного урла
    const PATH = `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/errors/`
    var getImageUrl = (name) => `${PATH}${name}.png`
    var getSrcSet = (name) => `${PATH}${name}@2x.png 2x, ${PATH}${name}@3x.png 3x`
}

<TechnicalError title="Технические работы. Сервис временно недоступен" imageSrc={getImageUrl('disabled')} srcSet={getSrcSet('disabled')}>
    <TechnicalError.Description>Воспользуйтесь сервисом после XX:XX YY.YY.YYYY по московскому времени. Приносим свои извинения за доставленные неудобства.</TechnicalError.Description>
    <TechnicalError.Actions>
        <Button>Вернуться на главную</Button>
    </TechnicalError.Actions>
</TechnicalError>
```

```jsx
{
    // mock lib.app getConfigValue
    var config = {
        'res.url': 'http://10.36.9.21/builds/sbol',
        'common.version': 'master'
    }
    var getConfigValue = (key) => config[key]
    // Собственная функция по формированию нужного урла
    const PATH = `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/errors/`
    var getImageUrl = (name) => `${PATH}${name}.png`
    var getSrcSet = (name) => `${PATH}${name}@2x.png 2x, ${PATH}${name}@3x.png 3x`
}

<TechnicalError title="СМС-банк не подключен" imageSrc={getImageUrl('disabled')} srcSet={getSrcSet('disabled')}>
    <TechnicalError.Description>Для продолжения процесса вам необходимо подключить СМС-банк, полный или экономный пакет в контактном центре Сбербанка по номеру 900 или +7 (495) 555-55-50.</TechnicalError.Description>
</TechnicalError>
```

```jsx
{
    // mock lib.app getConfigValue
    var config = {
        'res.url': 'http://10.36.9.21/builds/sbol',
        'common.version': 'master'
    }
    var getConfigValue = (key) => config[key]
    // Собственная функция по формированию нужного урла
    const PATH = `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/errors/`
    var getImageUrl = (name) => `${PATH}${name}.png`
    var getSrcSet = (name) => `${PATH}${name}@2x.png 2x, ${PATH}${name}@3x.png 3x`
}

<TechnicalError title="Ошибка с изображением" imageSrc={getImageUrl('error')} srcSet={getSrcSet('error')}>
    <TechnicalError.Description>Описание ошибки.</TechnicalError.Description>
</TechnicalError>
```
