    {
        var initialValues = {
            counter: '0'
        }

        var translations = {
            minWarning: 'Минимальное значение 1',
            maxWarning: 'Максимальное значение 151'
        }
    }

    <Demo.Form initialValues={initialValues}>
        <Demo.Titled title="Компонент является растяжимым по горизонтали по содержимому">
            <Demo.StoreField
                name="counter"
                component={Input.Counter}
                min={1}
                max={151}
                step={2}
                translations={translations}
                allowDecimal
                suffix=" шт"
                title="Штуки"
                withoutOmit
                colorScheme="green"
            />
            <br />
            <Demo.LabeledField
                name="counter"
                component={Input.Counter}
                min={1}
                max={15}
                step={2}
                disabled
                title="Люди"
                withoutOmit
            />
            <br />
            <Demo.LabeledField
                name="counter"
                component={Input.Counter}
                min={1}
                max={15}
                step={2}
                readonly
                title="Люди"
                withoutOmit
            />
        </Demo.Titled>
    </Demo.Form>
