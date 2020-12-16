    {
        var InputMasked = omittere(['inputComponent', 'fallbackIcon', 'iconFromCode', 'forceOpened', 'withOptions'])(Input.Masked)
    }

    <Demo.Form>
        <Demo.LabeledField
            name="input"
            component={Input.Suggest.TargetInput}
            title="Обычное поведение"
        />
        <br />
        <Demo.LabeledField
            name="input"
            component={Input.Suggest.TargetInput}
            mode="search"
            title="Search"
        />
        <br />
        <Demo.LabeledField
            name="input"
            component={Input.Suggest.TargetInput}
            icon="icon:core/common/moreInfo"
            iconFromCode
            title="С svg-иконкой"
        />
        <br />
        <Demo.LabeledField
            name="input"
            component={Input.Suggest.TargetInput}
            title="С растровой иконкой"
            icon="http://www.sberbank.ru/portalserver/content/atom/contentRepository/content?id=35f8876c-36fe-48b6-83d0-1ec3388a22f3"
        />
        <br />
        <Demo.LabeledField
            name="input"
            component={Input.Suggest.TargetInput}
            inputComponent={InputMasked}
            mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            title="С кастомным полем ввода (Input.Masked для кода подразделения)"
        />
        <br />
        <Demo.StoreField
            name="input"
            component={Input.Suggest.TargetInput}
            disabled
        />
        <hr />
        <Demo.StoreField
            name="inputError"
            component={Input.Suggest.TargetInput}
            validate={Demo.errorValidator}
        />
    </Demo.Form>
    