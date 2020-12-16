    {
        var options = [
            { value: '1', title: 'First' },
            { value: '2', title: 'Second' },
            { value: '3', title: 'Third' },
            { value: '4', title: 'Fourth' },
            { value: '5', title: 'foo' },
            { value: '6', title: 'bar' },
            { value: '7', title: 'baz' },
            { value: '8', title: 'qux' },
            { value: '9', title: 'quux' },
        ]

        var initialValues = { 'select': '2', 'select:readonly': '1' }
    }

    <Demo.Form initialValues={initialValues}>
        <Demo.StoreField
            component={Dropdown.Select}
            name="select"
            options={options}
            title="Стандартный Dropdown.Select"
        />
        <hr />
        <Demo.StoreField
            component={Dropdown.Select}
            name="select:readonly"
            options={options}
            disabled
            title="Заблокированный Dropdown.Select"
        />
        <hr />
        <Demo.StoreField
            component={Dropdown.Select}
            name="select:error"
            options={options}
            validate={Demo.errorValidator}
            title="Dropdown.Select с ошибкой"
        />
    </Demo.Form>
