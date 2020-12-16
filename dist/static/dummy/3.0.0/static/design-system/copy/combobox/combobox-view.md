```jsx
{
    var options = [{
           value: '1',
           title: 'А'
       }, {
           value: '2',
           title: 'Аа'
       }, {
           value: '3',
           title: 'Ааа'
       }, {
           value: '4',
           title: 'Аааа'
       }, {
           value: '5',
           title: 'Ааааа'
       }, {
           value: '6',
           title: 'Аааааа'
       }, {
           value: '7',
           title: 'Ааааааа'
       }]

    var getFiltered = (options, value) => {
        if (!value) {
            return []
        }
        return _.filter(options, (option) => _.startsWith(option.title.toLowerCase(), value.toLowerCase()))
    }

    initialState = {
        value: '',
        filtered: getFiltered(options, '')
    }

    var handleChangeInput = (query) => {
        setState({
            filtered: getFiltered(options, query)
        })
    }  
}

<Demo.Form>
    <Demo.Titled
        title="Обычный комбобокс для поиска"
    >
        <Demo.StoreField
            name="combobox"
            component={Combobox.View}
            options={state.filtered}
            onChangeInput={handleChangeInput}
            placeholder="Вводите русскую букву А для поиска опций"
            a11y={{ optionsLabel: "Показать опции" }}
        />
    </Demo.Titled>
</Demo.Form>
```


```jsx

{
   var options = [{
              value: '1',
              title: 'А'
          }, {
              value: '2',
              title: 'Аа'
          }, {
              value: '3',
              title: 'Ааа'
          }, {
              value: '4',
              title: 'Аааа'
          }, {
              value: '5',
              title: 'Ааааа'
          }, {
              value: '6',
              title: 'Аааааа'
          }, {
              value: '7',
              title: 'Ааааааа'
          }]
       
    var getFiltered = (options, value) => {
        if (!value) {
            return []
        }
        return _.filter(options, (option) => _.startsWith(option.title.toLowerCase(), value.toLowerCase()))
    }

    initialState = {
        value: '',
        filtered: getFiltered(options, '')
    }

    var handleChangeInput = (query) => {
        setState({
            filtered: getFiltered(options, query)
        })
    }  
    
    var handleChangeOption = (value) => {           
        setState({ value })
        
    }
    
    var normalize = (value) => {
        var option = _.find(options, (option) => option.value == value)
        return option && value
    }
}

<Demo.Form>
    <Demo.Titled
        title="Комбобокс для поиска только из справочника"
    >
        <Demo.StoreField
            normalize={normalize}
            name="combobox"
            component={Combobox.View}
            options={state.filtered}
            onChangeInput={handleChangeInput}
            onChangeOption={handleChangeOption}
            placeholder="Введите!"
            a11y={{ optionsLabel: "Показать опции" }}
        />
    </Demo.Titled>
</Demo.Form>
```
