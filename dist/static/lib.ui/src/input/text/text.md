    {
        var initialValues = {
            'textbox': 'Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are hereSome text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here',
            'textbox:error': 'Some text are here Some text are here Some text are here Some text are here Some text are here Some text are here'
        }
        
        var SuperLabeledField = (props) => (
            <Labeled {...props}>
                <Input.Text {...props} style={{ maxHeight:'300px' }} />
            </Labeled>
        )
    }

    <Demo.Form initialValues={initialValues}>
        <Field
            name="textbox"
            component={SuperLabeledField}
            title="Normal"
            description="Компонент является вертикально растяжимым по контенту"
        />
        <hr />
         <Field
            name="textbox"
            component={SuperLabeledField}
            title="Readonly"
            readOnly
        />
        <hr />
        <Field
            name="textbox:error"
            component={SuperLabeledField}
            title="Error"
            validate={Demo.errorValidator}
        />
        <hr />
        <Field
            name="textbox"
            component={SuperLabeledField}
            title="Disabled"
            disabled
        />
    </Demo.Form>
