### Полезные ссылки

[Стандартные форматы изображений](https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=135550218)

### SVG
Перед началом использования иконки убедитесь, что она:

* может быть минифицирована без деградации с помощью стандартного набора плагинов svgo
* если после минификации остается набор defs, то он должен быть предварительно раскрыт и устранен по id
* если деградация иконки при этом неизбежна, то должен быть переделан дизайн иконки или оптимизирована ее выгрузка:
* градиенты должны отсутствовать (они не могут быть без деградации устранены из defs)
* слои должны быть схлопнуты (должно устранить переиспользуемые элементы из defs)
* проверьте набор иконок с помощью библиотеки svglint@^0.0.0-alpha.4 (библиотека поддерживается нашими силами) для выявления недостатков разметки svg

### Icon-chunks

Как создавать и использовать icon-chunk (требуется @sbol/webpack-config@>=11):
```jsx static
import { Icon, setProjectId } from '@sbol/lib.ui'

// указываем идентификатор проекта, чтобы обеспечить динамическую генерацию уникальных id иконок.

setProjectId(process.env.PKG_ID)

// указываем имя нового чанка и делаем callback на динамический импорт индекса этих иконок
// индекс должен экспортировать default объект из пар `camelCase имя иконки: ее inline-реализация`
Icon.addIcons('icon:my/space/there', () => import('./there-are-imports-from-all-svg-files.js'))
...

const MyIcon = () => <Icon name="icon:my/space/there/icon-from-my-icon-set" />
```

Все иконки содержат префикс `icon:` (для отличая от `image:` в API front-back).
Далее путь до иконки определяется по "директориям". Например, библиотечные иконки располагаются в `icon:core/<icon_set>/<icon>`.
Примеры:
* `icon:core/common/alert-info` или `icon:core/common/alertInfo`
* `icon:core/countries/rus`
* `icon:cards/credit/request/info`

Далее при первом упоминании в рендерах icon-chunk'а будет произведен запрос на скрипт, содержащий svg-набор (набор загрузится единожды)

```jsx
<Demo.Titled title={`Доступ к иконке по name="icon:core/common/<name>"`}>
    <Demo.IconSet exports={require('./common')}>
        {(value) => (
            <Icon
                name={`icon:core/common/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

```jsx
<Demo.Titled title={`Актуальные иконки продуктов. Доступ к иконке по name="icon:core/products/<name>"`}>
    <Demo.IconSet exports={require('./products')}>
        {(value) => (
            <Icon
                name={`icon:core/products/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

```jsx
<Demo.Titled title={`Актуальные иконки статусов продуктов. Доступ к иконке по name="icon:core/product-status/<name>"`}>
    <Demo.IconSet exports={require('./product-status')}>
        {(value) => (
            <Icon
                name={`icon:core/product-status/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

```jsx
<Demo.Titled title={`Доступ к иконке по name="icon:core/resource/<name>"`}>
    <Demo.IconSet exports={require('./resource')}>
        {(value) => (
            <Icon
                name={`icon:core/resource/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

```jsx
<Demo.Titled  title={`Доступ к иконке по name="icon:core/countries/<name>"`} description="[Коды стран в алфавитном порядке](https://en.wikipedia.org/wiki/ISO_3166-1)\n\n[Коды стран с государственными флагами](https://ru.wikipedia.org/wiki/ISO_3166-1)">
    <Demo.IconSet exports={require('./countries')}>
        {(value) => (
            <Icon
                name={`icon:core/countries/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

```jsx
<Demo.Titled title={`Доступ к иконке по name="icon:core/cards/<name>"`}>
    <Demo.IconSet exports={require('./cards')}>
        {(value) => (
            <Icon
                name={`icon:core/cards/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

```jsx
<Demo.Titled title={`Доступ к иконке по name="icon:core/cars/<name>"`}>
    <Demo.IconSet exports={require('./cars')}>
        {(value) => (
            <Icon
                name={`icon:core/cars/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

```jsx
<Demo.Titled title={`Доступ к иконке по name="icon:core/social/<name>"`}>
    <Demo.IconSet exports={require('./social')}>
        {(value) => (
            <Icon
                name={`icon:core/social/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

```jsx
<Demo.Titled title={`Доступ к иконке по name="icon:core/pics-display/<name>"`}>
    <Demo.IconSet exports={require('./pics-display')}>
        {(value) => (
            <Icon
                name={`icon:core/pics-display/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

```jsx
<Demo.Titled title={`Доступ к иконке по name="icon:core/operations/<name>"`}>
    <Demo.IconSet exports={require('./operations')}>
        {(value) => (
            <Icon
                name={`icon:core/operations/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

<style>
    .repainted .icon__background {
        fill: #A2D4A8;
    }
    .repainted .icon__shadow {
        fill: #FBD2A1;
    }
</style>

```jsx
<Demo.Titled title={`Доступ к иконке по name="icon:core/pics-display/<name>" (с перекрашиванием)`}>
    Используя классы <b>icon__background</b> и <b>icon__shadow</b> можно перекрашивать эти иконки.

    <div className="repainted">
        <Demo.IconSet exports={require('./pics-display')}>
            {(value) => (
                <Icon
                    name={`icon:core/pics-display/${value}`}
                    size="self"
                />
            )}
        </Demo.IconSet>
    </div>
</Demo.Titled>
```

```jsx
<Demo.Titled title={`Доступ к иконке по name="icon:core/pics-simple/<name>"`}>
    <Demo.IconSet exports={require('./pics-simple')}>
        {(value) => (
            <Icon
                name={`icon:core/pics-simple/${value}`}
                size="self"
            />
        )}
    </Demo.IconSet>
</Demo.Titled>
```

```jsx
{
    var IconDemo = ({ children, size }) => (
        <div>
            {'В тексте иконка будет выглядеть так: "'}
            {children}
            {'"; размер иконки: '}
            <strong>
                {size}
            </strong>
        </div>
    )
}

<div>
    <IconDemo size="void 0">
        <Icon name="icon:core/common/alertBlock" />
    </IconDemo>
    <IconDemo size="xs">
        <Icon name="icon:core/common/alertBlock" size="xs" />
    </IconDemo>
    <IconDemo size="sm">
        <Icon name="icon:core/common/alertBlock" size="sm" />
    </IconDemo>
    <IconDemo size="md">
        <Icon name="icon:core/common/alertBlock" size="md" />
    </IconDemo>
    <IconDemo size="lg">
        <Icon name="icon:core/common/alertBlock" size="lg" />
    </IconDemo>
    <IconDemo size="xl">
        <Icon name="icon:core/common/alertBlock" size="xl" />
    </IconDemo>
    <IconDemo size="self">
        <Icon name="icon:core/common/alertBlock" size="self" />
    </IconDemo>
</div>
```
