    {
        var initialValues = {
            'password': '',
        }
         var translations = {
            showPassword: 'Показать пароль'
        }
    }

    <Demo.Form initialValues={initialValues}>
        <Demo.LabeledField
            name="password"
            component={Input.Password}
            translations={translations}
            title="mode=hideOnEmpty [default]"
        />
        <br />
        <Demo.LabeledField
            name="password"
            component={Input.Password}
            translations={translations}
            mode="noEye"
            title="mode=noEye"
        />
        <br />
        <Demo.LabeledField
            name="password"
            component={Input.Password}
            translations={translations}
            title="mode=showOnEmpty"
            mode="showOnEmpty"
            direction="bottomRight"
        />
        <br />
        <Demo.StoreField
            name="password"
            component={Input.Password}
            disabled
            translations={translations}
            title="disabled"
        />
    </Demo.Form>