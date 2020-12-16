# При миграции с версии **_1.4.8_** на **_1.4.9_** и выше

В версии 1.4.9 обновился механизм запуска тестов:

- Jest-config стал еще чуточку умнее, теперь нет необходимости указывать id проекта в скрипте запуска
(он сам забирает его из вашего package.json), но осталась возможность задать его вручную, если необходимо

- Появилась жесткая привязка к timezon'e 'Europe/Moscow', теперь тесты не будут падать в зависимости от
вашего часового пояса, больше не нужно указывать TZ при запуске тестов

После этих трансформаций скрипты запуска тестов будут выглядеть следующим образом:

```json
{
  "test": "cross-env NODE_ENV=test TESTING=true jest --ci --coverage",
  "test:update": "npm test -- -u"
}
```

# При миграции с версии **_1.3.5_** на **_1.4.x_**

---

Можно отказаться от ручного создания мока для lib.app, если ваши потребности полностью покрывает стандартный мок, содержащийся в jest-config

Т.е. из package.json можно **удалить**

```json
{
    "moduleNameMapper": {
        "@sbol/lib.app": "<rootDir>/src/__mocks__/lib.app.jsx"
    }
}
```

Второй вариант - оставить файл, но изменить его содержимое

Экспортируемая ранее по умолчанию функция генерации мока теперь экспортируется под именем **createLibAppMock**

Устаревший пример использования

```javascript
import libAppMock from '@sbol/jest-config/test/__mocks__/lib.app'

// Импортируем stub'ы проекта
const modules = require('../../stub/templates/modules')
const config = require('../../stub/templates/config')
const navigation = require('../../stub/templates/navigation')

// Экспорт с вашими stub'ами без переопределения мока
module.exports = libAppMock({ modules, config, navigation })

```

Пример как он теперь может выглядеть

```javascript
import { createLibAppMock } from '@sbol/jest-config/test/__mocks__/lib.app'

const mockLauncherModules = {
    settings: {
        mock1: {
            value: 'true',
            options: null
        }
    }
}

module.exports = createLibAppMock({ modules: mockLauncherModules })
```
