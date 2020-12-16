```jsx
{
    var translations = {
        requestTimeout: 'Пожалуйста, подождите или повторите запрос еще раз',
        noMatches: 'Совпадений не найдено',
        repeat: 'Повторить',
        requestError: 'Ошибка запроса'
    }

    var options = [{
        value: '1',
        title: 'Первый',
        description: 'Первая опция',
        icon: 'icon:core/common/alert-info'
    }, {
        value: '2',
        title: 'Второй',
        description: 'Вторая опция'
    }, {
        value: '3',
        title: 'Третий',
        description: 'Третья опция'
    }, {
        value: '4',
        title: '4-й',
        icon: 'icon:core/common/alert-info',
        description: 'Третья опция'
    }, {
        value: '5',
        title: '5-й',
        description: 'Третья опция'
    }, {
        value: '6',
        title: '6-й',
        description: 'Третья опция'
    }, {
        value: '7',
        title: '7-й'
    }, {
        value: '8',
        title: '8-й'
    }, {
        value: '9',
        title: '9-й'
    }, {
        value: 'a1',
        title: 'Первый',
        description: 'Первая опция',
        icon: 'alert-info'
    }, {
        value: 'a2',
        title: 'Второй',
        description: 'Вторая опция'
    }, {
        value: 'a3',
        title: 'Третий',
        description: 'Третья опция'
    }, {
        value: 'a4',
        title: '4-й',
        icon: 'icon:core/common/alert-info'
    }, {
        value: 'a5',
        title: '5-й',
        description: 'Третья опция'
    }, {
        value: 'a6',
        title: '6-й',
        description: 'Третья опция'
    }, {
        value: 'a7',
        title: '7-й',
        description: 'Третья опция'
    }, {
        value: 'a8',
        title: '8-й'
    }, {
        value: 'a9',
        title: '9-й'
    }]

    initialState = {
        keyboardTimeout: '500',
        serverResponseTimeout: '2000',
        requestTimeout: '1000'
    }

    var dynamicFetchData = (query, offset) => {
        console.log(`Введенная строка "${query}"`)
        console.log(`С какой опции хотим стартовать "${offset}"`)

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = _(options)
                    .filter(({ title, description }) =>
                        _.includes(_.lowerCase(title), _.lowerCase(query)) ||
                        _.includes(_.lowerCase(description), _.lowerCase(query))
                    )
                    .map((option) =>
                        _.merge({}, option, { value: _.uniqueId(option.value) })
                    )
                    .value()

                resolve(data)
            }, Number(state.serverResponseTimeout))
        })
    }

    var handleServerResponseTimeout = (value) => {
        setState({ serverResponseTimeout: value })
    }
    var handleKeyboardTimeout = (value) => {
        setState({ keyboardTimeout: value })
    }
    var handleRequestTimeout = (value) => {
        setState({ requestTimeout: value })
    }

    var initialValues = {
        combobox: '1'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.Titled title="Динамический справочник">
        <Grid mode="strict">
            <Grid.Cell mode="strict" lg={9} md={6} sm={6}>
                <Selection.Group title="Таймаут ввода с клавиатуры">
                    <Input.Counter
                        onChange={handleKeyboardTimeout}
                        value={state.keyboardTimeout}
                        min={0}
                        max={2000}
                        step={100}
                        title="Таймаут ввода с клавиатуры"
                     />
                </Selection.Group>
            </Grid.Cell>
            <Grid.Cell mode="strict" lg={9} md={6} sm={6} offsetLg={1} offsetMd={1} offsetSm={1}>
                <Selection.Group title="Время ответа сервера">
                    <Input.Counter
                        onChange={handleServerResponseTimeout}
                        value={state.serverResponseTimeout}
                        min={0}
                        max={10000}
                        step={1000}
                        title="Время ответа сервера"
                     />
                </Selection.Group>
            </Grid.Cell>
            <Grid.Cell mode="strict" lg={9} md={5} sm={5} offsetLg={1} offsetMd={1} offsetSm={1}>
                <Selection.Group title="Время ожидания">
                    <Input.Counter
                        onChange={handleRequestTimeout}
                        value={state.requestTimeout}
                        min={0}
                        max={10000}
                        step={1000}
                        title="Время ожидания"
                     />
                </Selection.Group>
            </Grid.Cell>
        </Grid>
        <hr />
        <Demo.StoreField
            name="combobox"
            title="Динамический справочник"
            component={Input.Suggest.Dynamic}
            translations={translations}
            onDataRequest={dynamicFetchData}
            mode="only"
            initialQuery="Первый"
            keyboardTimeout={Number(state.keyboardTimeout)}
            requestTimeout={Number(state.requestTimeout)}
        />
    </Demo.Titled>
</Demo.Form>
```
