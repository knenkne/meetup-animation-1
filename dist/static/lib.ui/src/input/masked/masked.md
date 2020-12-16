```jsx
{
    var initialValues = {
        masked: '9161238965'
    }

    var mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
}

<Demo.Form initialValues={initialValues}>
    <Demo.LabeledField
        name="masked"
        component={Input.Masked}
        mask={mask}
        guide
        placeholderChar="_"
        type="tel"
        title="С placeholder подчеркиванием"
    />
    <br />
    <Demo.LabeledField
        name="masked"
        component={Input.Masked}
        mask={mask}
        guide
        placeholderChar="\u2000"
        type="tel"
        title="С placeholder пробелом"
    />
    <br />
    <Demo.StoreField
        name="masked"
        component={Input.Masked}
        mask={mask}
        type="tel"
        title="Без placeholder"
    />
</Demo.Form>
```

```jsx
{
    var initialValues = {
        phone: '',
        insurance: '',
        dynamicPhone: ''
    }

    var initialMask = [/[\d\+]/]
    var phoneMaskRussia = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
    var phoneMask = ['+', /\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
    var phoneMaskOneSymbolCode = ['+', /\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
    var phoneMaskTwoSymbolCode = ['+', /\d/, /\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
    var insuranceMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, ' ', /\d/, /\d/]

    var dymanicPhoneMask = (rawValue) => {
        if (!rawValue) {
            return initialMask
        }

        if (_.includes(rawValue, '+7') || rawValue === '+') {
            return phoneMaskOneSymbolCode
        }

        return phoneMaskTwoSymbolCode
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Способы примения предустановленного Input.Masked.Typeahead">
        <Demo.StoreField
            name="phone"
            component={Input.Masked.Typeahead}
            mask={phoneMaskRussia}
            placeholder="+7 (___) ___-__-__"
            title="С placeholder"
            type="tel"
            icon="icon:core/common/alert-draft"
        />
        <hr />
        <Demo.StoreField
            name="phone:error"
            component={Input.Masked.Typeahead}
            mask={phoneMaskRussia}
            title="С ошибкой"
            placeholder="+7 (___) ___-__-__"
            validate={() => 'error'}
            type="tel"
            
        />
        <hr />
        <Demo.StoreField
            name="phone:disabled"
            component={Input.Masked.Typeahead}
            mask={phoneMaskRussia}
            title="Заблокированный"
            placeholder="+7 (___) ___-__-__"
            disabled
            type="tel"
        />
        <hr />
        <Demo.StoreField
            name="insurance"
            component={Input.Masked.Typeahead}
            mask={insuranceMask}
            placeholderChar="\u2000"
            title="Без placeholder"
            type="tel"
        />
        <hr />
        <Demo.StoreField
            name="dynamicPhone"
            component={Input.Masked.Typeahead}
            mask={dymanicPhoneMask}
            placeholder="+_ (___) ___-__-__"
            title="С placeholder и функцией маски"
            description={'* Код страны +7 - из одной цифры\n\n* Код страны не +7 - из двух цифр'}
            type="tel"
        />
    </Demo.Titled>
</Demo.Form>
```
