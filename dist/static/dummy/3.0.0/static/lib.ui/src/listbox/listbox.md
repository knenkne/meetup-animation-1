```jsx
{
    var options = [
        {
            value: 'v1',
            title: 'Variant number 1'
        },
        {
            value: 'v2',
            title: 'Variant number 2'
        },
        {
            value: 'v3',
            title: 'Variant number 3'
        },
        {
            value: 'v4',
            title: 'Variant number 4'
        },
        {
            value: 'v5',
            title: 'Variant number 5'
        },
        {
            value: 'v6',
            title: 'Variant number 6'
        }
    ]
}

<Demo.Form>
    <Demo.Titled title="Режимы работы Listbox">
        <Demo.StoreField
            name="select"
            component={Listbox}
            options={options}
            title="Обычный выбор из списка"
            id="demo-select"
        />
        <hr />
        <Demo.StoreField
            name="autoselect"
            component={Listbox}
            options={options}
            mode="autoselect"
            title="Выбор из списка по клавиатурному фокусу"
            id="demo-autoselect"
        />
        <hr />
        <Demo.StoreField
            name="singlselect"
            component={Listbox}
            options={options.slice(0, 1)}
            title="Список из одного элемента"
            id="demo-singleselect"
        />
        <hr />
        <Demo.StoreField
            name="multiselect"
            component={Listbox}
            options={options}
            mode="multiselect"
            title="Множественный выбор"
            id="demo-multiselect"
        />
    </Demo.Titled>
</Demo.Form>
```

```jsx
{
    var options = [
        {
            value: 'v1',
            title: 'Variant number 1'
        },
        {
            value: 'v2',
            title: 'Variant number 2'
        },
        {
            value: 'v3',
            title: 'Variant number 3'
        },
        {
            value: 'v4',
            title: 'Variant number 4'
        },
        {
            value: 'v5',
            title: 'Variant number 5'
        },
        {
            value: 'v6',
            title: 'Variant number 6'
        },
        {
            value: 'i1',
            title: 'Card 1',
            icon: 'icon:core/resource/card'
        },
        {
            value: 'r1',
            title: 'Card 1',
            description: '•• 1234',
            additional: '1234 ₽',
            icon: 'icon:core/resource/card'
        }
    ]
}

<Demo.Form>
    <Demo.Titled title="Состояния Listbox">
        <Demo.StoreField
            name="select2"
            component={Listbox}
            options={options}
            title="Стандарт"
            id="demo-listbox-2"
        />
        <hr />
        <Demo.StoreField
            name="select2"
            component={Listbox}
            options={options}
            title="Выбор заблокирован"
            id="demo-listbox-disabled"
            disabled
        />
        <hr />
        <Demo.StoreField
            name="select2"
            component={Listbox}
            options={options}
            title="Выбор readonly"
            id="demo-listbox-readonly"
            readonly
        />
        <hr />
        <Demo.StoreField
            name="error"
            component={Listbox}
            options={options}
            title="Выбор с ошибкой"
            id="demo-listbox-error"
            validate={() => "error"}
        />
        <hr />
        <Demo.StoreField
            name="emptyList"
            component={Listbox}
            options={[]}
            title="Disabled, если нет списка опций."
            id="empty-options-listbox"
            translations={{itemNotChosenText: "Нет доступных карт"}}
        />
    </Demo.Titled>
</Demo.Form>
```

```jsx
{
    var commonOptions = [
        {
            value: 'v1',
            title: 'Variant number 1'
        },
        {
            value: 'v2',
            title: 'Variant number 2'
        },
        {
            value: 'v3',
            title: 'Variant number 3'
        },
        {
            value: 'v4',
            title: 'Variant number 4'
        },
        {
            value: 'v5',
            title: 'Variant number 5'
        },
        {
            value: 'v6',
            title: 'Variant number 6'
        }
    ]

    var iconOptions = [
        {
            value: 'i1',
            title: 'Card 1',
            icon: 'icon:core/resource/card'
        },
        {
            value: 'i2',
            title: 'Card 2',
            icon: 'icon:core/resource/card'
        },
        {
            value: 'i3',
            title: 'Card 3',
            icon: 'icon:core/resource/card'
        }
    ]

    var resourceOptions = [
        {
            value: 'r1',
            title: 'Card 1',
            description: '•• 1234',
            additional: '1234 ₽',
            icon: 'icon:core/resource/card'
        },
        {
            value: 'r2',
            title:
                'Card 2 Long title Long title Long title Long title Long title Long title Long title Long title Long title',
            description: '•• 1234',
            additional: '1234 ₽',
            icon: 'icon:core/resource/card'
        },
        {
            value: 'r3',
            title: 'Card 3',
            description: '•• 1234',
            additional: '1234 ₽',
            icon: 'icon:core/resource/card'
        }
    ]

    var options3 = [
        {
            value: 'Пополняй Онл@йн',
            title: 'Пополняй Онл@йн длинный текст заголовка',
            icon: 'icon:core/products/mc36Visa',
            additional: '345 000,78 рублей',
            description: 'до 12 сентября'
        },
        {
            value: 'Пополняй Онл@йн mir',
            title: 'Пополняй Онл@йн mir',
            icon: 'icon:core/products/mc36Mir',
            additional: '345 000,78 рублей',
            description: 'Длинный текст описания продукта для проверки ',
            additionalDescription: '100 долларов'
        },
        {
            value: 'MasterCard Gold',
            title: 'MasterCard Gold',
            icon: 'icon:core/products/mc36Mastercard',
            additional: '345 000,78 рублей',
            description: '•• 1234 • кред'
        },
        {
            value: 'Feow',
            title: 'Дракон',
            icon: 'icon:core/resource/card',
            additional: '10 000 г.',
            description: 'до 12 сентября'
        },
        {
            value: 'Meow',
            title: 'Кот',
            icon: 'icon:core/resource/card',
            additional: '10 000 г.',
            description: 'до 12 сентября',
            additionalDescription: '100 долларов'
        },
        {
            value: 'Seow',
            title: 'Змея',
            icon: 'icon:core/resource/card'
        },
        {
            value: 'Aeow',
            title: 'Пес',
            icon: 'icon:core/resource/card',
            additional: '345 000,78 рублей'
        },
        {
            value: 'Blabla',
            title: 'Описание продукта',
            icon: 'icon:core/products/catalog',
            additional: '345 000,78 рублей'
        }
    ]
}

<Demo.Form>
    <Demo.Titled title="Варианты наполнения опций Listbox">
        <div style={{ width: "600px" }}>
            <Demo.StoreField
                name="select1"
                component={Listbox}
                options={commonOptions}
                title="Простая"
                id="listbox-common-options"
            />
            <hr />
            <Demo.StoreField
                name="select2"
                component={Listbox}
                options={iconOptions}
                title="С иконкой"
                id="listbox-icon-options"
            />
            <hr />
            <Demo.StoreField
                name="select3"
                component={Listbox}
                options={resourceOptions}
                title="В виде ресурсов списания"
                id="listbox-resource-options"
            />
            <hr />
            <Demo.StoreField
                name="autoselect"
                optionsType="product"
                component={Listbox}
                options={options3}
                title="Продукты"
                id="listbox-products-options"
            />
            <Demo.StoreField
                name="autoselect2"
                optionsType="product"
                component={Listbox}
                options={options3}
                mode="autoselect"
                title="Выбор заблокирован"
                id="listbox-products-disabled"
                disabled
            />
            <Demo.StoreField
                name="autoselect3"
                optionsType="product"
                component={Listbox}
                options={options3}
                mode="autoselect"
                title="Выбор заблокирован readonly"
                id="listbox-products-readonly"
                readonly
            />
        </div>
    </Demo.Titled>
</Demo.Form>
```

```jsx
{
    var options = [
        {
            value: 'v1',
            title: 'Господдержка 2020',
            additional: 'до 7 600 100 р',
            description: 'Ставка 6,1%',
            additionalDescription: 'сумма кредита'
        },
        {
            value: 'v2',
            title: 'Готовое жильё',
            additional: 'до 6 800 100 р',
            description: 'Ставка 8%',
            additionalDescription: 'сумма кредита'
        },
        {
            value: 'v3',
            title: 'Господдержка 2020',
            additional: 'до 7 600 100 р',
            description: 'Ставка 6,1%',
            additionalDescription: 'сумма кредита'
        },
        {
            value: 'v4',
            title: 'Строительство дома',
            description: 'Предолжение устарело'
        }
    ]
}

<Demo.Form>
    <Demo.Titled title="Еще варианты">
        <div style={{ width: "600px" }}>
            <Demo.StoreField
                name="moreSelect"
                component={Listbox}
                options={options}
                title="Без иконок"
                id="demo-layout-option"
            />
        </div>
    </Demo.Titled>
</Demo.Form>
```
