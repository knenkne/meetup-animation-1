    {
        var translations = {
            requestTimeout: 'Пожалуйста, подождите или повторите запрос еще раз',
            noMatches: 'Совпадений не найдено',
            repeat: 'Повторить',
            requestError: 'Ошибка запроса'
        }
        
        var options = [{
            value: 'abrakadabra1',
            title: 'Первый',
            description: 'Первая опция',
            icon: 'icon:core/common/alert-info'
        }, {
            value: 'abrakadabra2',
            title: 'Второй',
            description: 'Вторая опция'
        }, {
            value: 'abrakadabra3',
            title: 'Третий',
            description: 'Третья опция'
        }, {
            value: 'abrakadabra4',
            title: '4-й',
            icon: 'icon:core/common/alert-error'
        }, {
            value: 'abrakadabra5',
            title: '5-й'
        }, {
            value: 'abrakadabra6',
            title: '6-й'
        }, {
            value: 'abrakadabra7',
            title: '7-й'
        }, {
            value: 'abrakadabra8',
            title: '8-й'
        }, {
            value: 'abrakadabra9',
            title: '9-й'
        }]
        
        var consoleScroll = (event) => console.log(`Осталось скроллить вниз "${event.target.event.target.contentHeight - event.target.scrollTop}"`)
        var consoleInput = (value) => console.log(`Ввели значение "${value}"`)
        var consoleOption = (value) => console.log(`Выбрали опцию "${value}"`)
        var consoleRetry = () => console.log('Нажали повторить')
        var consoleFocus = () => console.log('Фокус')
        var consoleBlur = () => console.log('Блюр')
    }

    <Demo.Form>
        <Demo.LabeledField
            name="combobox"
            component={Input.Suggest}
            options={options}
            onScroll={consoleScroll}
            onChangeInput={consoleInput}
            onChangeOption={consoleOption}
            onRetry={consoleRetry}
            onFocus={consoleFocus}
            onBlur={consoleBlur}
            translations={translations}
            title="Стандартная работа (например, справочник загружен) + проверьте консоль"
        />
        <br />
        <Demo.LabeledField
            name="combobox"
            component={Input.Suggest}
            options={options}
            isSearch
            translations={translations}
            placeholder="Поиск"
            title="Стандартная работа (поиск)"
        />
        <br />
        <Demo.LabeledField
            name="combobox"
            component={Input.Suggest}
            isLoading
            translations={translations}
            title="Гружусь без опций (например, выполняется свежий request)"
        />
        <br />
        <Demo.LabeledField
            name="combobox"
            component={Input.Suggest}
            options={options}
            isLoading
            translations={translations}
            title="Гружусь с опциями (например, догрузка по scroll)"
        />
        <br />
        <Demo.LabeledField
            name="combobox"
            component={Input.Suggest}
            options={options}
            mode="long"
            translations={translations}
            title="Долго гружусь (например, индексирую по базе)"
        />
        <br />
        <Demo.LabeledField
            name="combobox"
            component={Input.Suggest}
            options={options}
            mode="error"
            translations={translations}
            title="Ошибка запроса (например, сервер упал, но это не критично)"
        />
        <br />
        <Demo.LabeledField
            name="combobox"
            component={Input.Suggest}
            options={options}
            mode="noMatches"
            translations={translations}
            title="Нет совпадений (например, запрос сделали, а поиск неудовлетворителен)"
        />
        <br />
        <Demo.StoreField
            name="combobox"
            component={Input.Suggest}
            translations={translations}
            options={options}
            disabled
            title="Заблокирован"
        />
        <hr />
        <Demo.StoreField
            name="combobox2"
            component={Input.Suggest}
            translations={translations}
            options={options}
            validate={Demo.errorValidator}
            title="Ошибка валидации"
        />
    </Demo.Form>
    