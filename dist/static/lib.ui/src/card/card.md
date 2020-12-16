```jsx
{
    // mock lib.app getConfigValue
    var config = {
        'res.url': 'http://10.36.9.21/builds/sbol',
        'common.version': 'master'
    }
    var getConfigValue = (key) => config[key]

    // Собственная функция по формированию нужного урла
    const PATH = `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/banners/`
    var getImageSrc = (name) => `${PATH}${name}.png`
    var getSrcSet = (name) => `${PATH}${name}_2x.png 2x`
    var getMobileSrcSet = (name) => `${PATH}${name}.png 1x, ${PATH}${name}_2x.png 2x`
}

<Grid>
    <Grid.Cell lg={19} md={19} sm={23} >
        <h2>Компонент "Card mode='banner'" с заголовком, описанием и изборажением справа</h2>
        <p>Может использоваться как информационный элемент, а так же с кнопкой или ссылкой после описания</p>
        <p>Если не нужно изображение на мобильном разрешении, можно не передавать параметр "mobileSrcSet"</p>
        <br/>

        <h3>Карточка с кнопкой</h3>
        <Card
            mode="banner"
            colorScheme="info"
            title="Ни о чём не беспокойтесь"
            imageSrc = {getImageSrc('Female-Bird-01')}
            srcSet = {getSrcSet('Female-Bird-01')}
            mobileSrcSet = {getMobileSrcSet('Female-Bird-02')}
        >
            <Card.Description>
                {"Пока вы заполняете анкету, мы вырастим за вас дерево и построим дом"}
            </Card.Description>

            <Card.Actions>
                <Button.Icon
                    title="Дайте два!"
                    icon="icon:core/operations/payandtrasfOtherbank"
                    onClick={() => alert("click")}
                />
            </Card.Actions>
        </Card>
        <br/>

        <h3>Карточка с ссылкой</h3>
        <Card
            mode="banner"
            colorScheme="error"
            title="Ни о чём не беспокойтесь"
            imageSrc = {getImageSrc('Female-Checklist-01')}
            srcSet = {getSrcSet('Female-Checklist-01')}
            mobileSrcSet = {getMobileSrcSet('Female-Checklist-02')}
        >
            <Card.Description>
                {"Пока вы заполняете анкету, мы вырастим за вас дерево и построим дом. Но с сыном придётся разбираться сами"}
            </Card.Description>

            <Card.Actions>
                <Link href="#" colorScheme="gray" icon='icon:core/resource/vacation' bold >
                    {"Дайте два!"}
                </Link>
            </Card.Actions>
        </Card>
        <br/>

        <h3>Карточка с иконкой и иноформационным текстом</h3>
        <Card
            mode="banner"
            colorScheme="success"
            title="Ни о чём не беспокойтесь"
            imageSrc = {getImageSrc('Male-Notepad-01')}
            srcSet = {getSrcSet('Male-Notepad-01')}
            mobileSrcSet = {getMobileSrcSet('Male-Notepad-02')}
        >
            <Card.Description>
                {"Пока вы заполняете анкету, мы вырастим за вас дерево и построим дом. Но с сыном придётся разбираться сами"}
            </Card.Description>

            <Card.Actions>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Icon name="icon:core/common/alert-success" size="self" />
                    <Typography.Subheader colorScheme="green" >{"Одобренно!"}</Typography.Subheader>
                </div>
            </Card.Actions>
        </Card>
        <br/>

        <h3>Просто карточка с описанием</h3>
        <Card
            mode="banner"
            colorScheme="warning"
            title="Ни о чём не беспокойтесь"
            imageSrc = {getImageSrc('Male-Watering-Can-01')}
            srcSet = {getSrcSet('Male-Watering-Can-01')}
            mobileSrcSet = {getMobileSrcSet('Male-Watering-Can-03')}
        >
            <Card.Description>
                {"Пока вы заполняете анкету, мы вырастим за вас дерево и построим дом. Но с сыном придётся разбираться сами"}
            </Card.Description>
        </Card>
    </Grid.Cell>
</Grid>
```
