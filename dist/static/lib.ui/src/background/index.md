### Компонент, реализующий градиентные спуски от region.header

Должен применяться от левого верхнего края контентной части.

#### __Суффиксы__

__gradient(-color)[-wrapper]__ - модификаторы расцветки градиента

Например: __gradient-narnia-wrapper__ сделает градиентную обертку для формы Workflow

#### __Суффиксы colorScheme для расцветки__

##### Базовые градиенты
* __-head__ -белый цвет без градиента; используется в общих случаях
* __-narnia__ -спуск в серый цвет; используется в формах
* __-basic__ -alias __-narnia__
##### Статусные градиенты
* __-waiting__ -спуск в желтый цвет; используется для заявок на рассмотрении в статусах
* __-success__ -спуск в зеленый цвет; используется для одобренных заявок в статусах
* __-error__ -спуск в красный цвет; используется для отклоненных заявок в статусах
* __-info__ -спуск в фиолетовый цвет; используется для информационных сообщений в статусах
##### Продуктовые градиенты
* __-cards__ -используется для отображения в картах
* __-deposits__ -используется для отображения во вкладах
* __-insurance__ -используется для отображения в страховках
* __-investments__ -используется для отображения в инвестициях
* __-credits__ -используется для отображения в кредитах
* __-gold__ -спуск в желтый цвет
* __-silver__ -спуск в светло-серый цвет

#### __Суффиксы colorScheme для дополнительных свойств__

* __wrapper` - дополнительная отбивка градиента снизу

##### mode - дополнительная картинка для усиления статуса заявки

* `done` успех
* `waiting` ожидание
* `error` ошибка
* `info` информация

### Примеры

```jsx static
import { Background } from '@sbol/lib.ui'

export default ({ isForm }) => (
    <Background colorScheme={isForm ? 'gradient-narnia' : 'gradient-head'}>
        <MyFormOrLanding />
    </Background>
)
```
Градиенты

```jsx
{
    initialState = {
        currentGradient: "gradient-head",
        gradients: [
            "gradient-head",
            "gradient-narnia",
            "gradient-waiting",
            "gradient-success",
            "gradient-error",
            "gradient-info",
            "gradient-cards",
            "gradient-deposits",
            "gradient-insurance",
            "gradient-investments",
            "gradient-credits",
            "gradient-gold",
            "gradient-silver",
        ]
    }

    var handleChangeGradient = (event) => {
        setState({ currentGradient: event.target.value })
    }
}

<div>
    <Selection.Group title="Возможные градиенты">
        {initialState.gradients.map((gradient) => (
            <Selection.Radio
                key={gradient}
                size="sm"
                checked={state.currentGradient === gradient}
                onChange={handleChangeGradient}
                value={gradient}
                name="gradient"
            >
                {gradient}
            </Selection.Radio>
        ))}
    </Selection.Group>
    <Background
        /* инлайним стили только для примера в styleguidist */
        style={{ zIndex: 0, margin: 0, padding: 0, minHeight: "500px" }}
        colorScheme={state.currentGradient}
    >
        <Grid>
            <Grid.Cell lg={17} md={12} sm={14}>
                <Typography.Headline>Фон c картинками</Typography.Headline>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                delectus eveniet harum quisquam sunt vero! Accusantium aspernatur commodi
                est facere illo ipsam molestias obcaecati quaerat soluta? Cumque deleniti
                quisquam reiciendis.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur delectus eveniet harum quisquam sunt vero! Accusantium
                aspernatur commodi est facere illo ipsam molestias obcaecati quaerat
                soluta? Cumque deleniti quisquam reiciendis.
                <br />
                <br />
                <Button>Продолжить</Button>
            </Grid.Cell>
        </Grid>
    </Background>
</div>
```
