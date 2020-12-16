TODO: REWORK

# Запуск тестов

Запустить тесты с помощью karma один раз:
```
npx cross-env NODE_ENV=development MODE=testing karma start karma.config.js --browsers ChromeHeadless --single-run
```

Запустить тесты с помощью karma и измерением покрытия:
```
npx cross-env NODE_ENV=development MODE=testing TESTING_COVERAGE=true karma start karma.config.js --browsers ChromeHeadless
```


При использовании 16 реакта необходимо добавить в зависимости проекта "enzyme-adapter-react-16"
и сконфигурировать Enzyme для использования адаптера.

Это можно сделать следующим образом:
В корень проекта добавляем файл (например test.setup.js) с таким содержимым:
```
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
    adapter: new Adapter()
})
```
далее есть 2 варианта использовать этот файл при прогоне тестов:

I. Расширяем config в karma.config.js 
```
module.exports = (config) => {

    config.set({
        testSetup: 'test.setup.js'
    })

    require('@sbol/webpack-config/karma.config')(config)
}
```

II. Передать через строку запуска параметр testSetup и в значении передать имя файла
 ```
--testSetup=test.setup.js
 ```