
##### Стандартизированные переменные стилей
Имеющиеся конфигурационные файлы:
* `colors.config.css`
* `offsets.config.css`
* `font-sizes.config.css`

```js static
import colors from '@sbol/lib.ui/src/utils/styles/colors.config.css'

const MyColoredBlock = ({ backgroundColor }) => <div style={{ backgroundColor }} />

render(<MyColoredBlock backgroundColor={colors.gray5} />)
```

```css
@import "@sbol/lib.ui/src/styles/colors.config.css";
@import "@sbol/lib.ui/src/utils/styles/offsets.config.css";

:root {
    --main-color: var(--green-4);
}

.my-component {
    color: var(--main-color);
    margin: var(--offset-md);
    border: 1px solid var(--main-color);
}
```

### Рекомендации по использованию градиентов

На данный момент есть два стандартизированных градиента:

* `narnia-head-gradient` (состоит из цветов cool-gray-plus-15 и narnia-bottom)
* `head-gradient` (состоит из цветов cool-gray-plus-15 и white)

Для стандартных кейсов на всю высоту блока можно использовать переменные:

* `narnia-head-gradient`
* `head-gradient`

```css
@import "@sbol/lib.ui/src/styles/colors.config.css";

.my-component {
    background-image: var(--narnia-head-gradient)
}
```

Для более тонкой настройки градиентов нужно использовать цветовые переменные

```css
@import "@sbol/lib.ui/src/styles/colors.config.css";

.my-component {
    background-image: linear-gradient(to bottom, var(--cool-gray-plus-15) 400px, var(--narnia-bottom) 600px)
}
```

### Рекомендации по миграции старых цветовых решений на новую палитру

Если вы использовали палитру в 2.4, то для быстрой миграции с деградацией UI замените переменные следующим образом:

* Если вы использовали цветовую переменную без цифры на конце (--red или --blue), скорее всего теперь там появилась 5 или 6 (--red-5, --blue-6) 
* Если число на конце было кратно 10 (--orange-80), то сейчас оно используется без нуля (--orange-8)


```jsx
{
    var buttonStyle = { margin: offsets.offsetSm }
    var backgroundImage = 'linear-gradient(to right,' +
        'rgba(255, 255, 255, 1),' +
        'rgba(0, 255, 255, 1),' +
        'rgba(255, 0, 255, 1),' +
        'rgba(255, 255, 0, 1),' +
        'rgba(0, 0, 255, 1),' +
        'rgba(0, 255, 0, 1),' +
        'rgba(255, 0, 0, 1),' +
        'rgba(0, 0, 0, 1))'


    var wrapperStyle = {
        backgroundImage,
        display: state.isOpened ? 'block' : 'none'
    }
    var onClick = () => setState({ isOpened: !state.isOpened })
    var initialState = { isOpened: false }
}

<div>
    <button
        onClick={onClick}
        style={buttonStyle}
    >
        {state.isOpened ? 'Скрыть палитру' : 'Раскрыть палитру'}
    </button>
    <div style={wrapperStyle}>
        {_.map(Object.keys(colors), (key) => (
            <div
                key={key}
                style={{
                    backgroundColor: colors[key],
                    padding: offsets.offsetXs
                }}
            >
                {key}
            </div>
        ))}
    </div>
</div>
```
