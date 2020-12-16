### Компонент расширения контентной части на всю допустимую ширину экрана

#### FullWidth

Расширяет контент до максимально допустимой ширины, учитывает продуктовый регион.
Данный компонент **обязательно** должен размещаться от нулевого пикселя по оси X контентной части.
Может использоваться без `FullWidth.Inner`.

#### FullWidth.Inner

Сужает контент обратно до стандартной ширины.

### Примеры

```jsx static
import { FullWidth } from '@sbol/lib.ui'

import style from './style.css'

export default () => (
    <FullWidth className={style.fullWidthUnderline}>
        <FullWidth.Inner>
            <MyGridWidthComponent />
        </FullWidth.Inner>
    </FullWidth>
)
```

```jsx static
import { FullWidth } from '@sbol/lib.ui'

import style from './style.css'

export default () => (
    <FullWidth>
        <MyMobileHorizontallScrollComponent />
    </FullWidth>
)
```
