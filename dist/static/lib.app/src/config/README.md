# Взаимодействие с конфигурацией

## Описание

Стандартизированные методы получения значений из конфигурации.
* getConfig() - получение всего конфига,
* getConfigValue(key: String, defaultValue: String) - получение значения из конфига по ключу с fallback параметром,
* getNavigation() - получение всей навигации,
* getNavigationValue(key: String, defaultValue: String) - получение значения из навигации по ключу с fallback параметром,
* getMessages() - получение всех значений из серверных текстовых констант,
* getMessagesValue(key: String, defaultValue: String) - получение значения из серверных текстовых констант по ключу с fallback параметром,

* getAllLauncher(pkg: String) - получение всего объекта launcher по названию проекта,
* getAllFeatures(pkg: String) - получение всех фич по названию проекта,
* getFeature(id: String, pkg: String) - получение фичи по названию проекта и названию фичи,
* getFeatureValue(id: String, pkg: String) - получение значения фичи по названию проекта и названию фичи,
* getFeatureOption(id: String, option: String, pkg: String) - получение значения опции по названию проекта, названию фичи и названию опции,
* getAllOptions(pkg: String) - получение всех опций по названию проекта,
* getOption(id: String, pkg: String) - получение опции по названию проекта и названию опции
* getLauncherConfig() - получение объекта опций всего приложения WEB SBOL
* getLauncherConfigValue(id: String) - получение опции всего приложения WEB SBOL

Также проксируются остальные методы из виртуального модуля `webpage.provider.bootstrap`.

## Применение
   
```jsx
import { Field } from 'redux-form'
import { getConfigValue } from '@sbol/lib.app'

getConfigValue('base.url', '/sbtsbol')
```

## Управление лоадером страницы:
* getAppStartLoader - возвращает функцию для запуска глобального лоадера, функция принимает {longRequest: Boolean}, если аргумент передан, лоадер выставляется на меньший прогресс, чем без него. Рекомендуется применять для долгих запросов
* getAppStopLoader - возвращает функцию для остановки глобального лоадера 

## Применение
   
   ```jsx
   import { getAppStartLoader, getAppStopLoader } from '@sbol/lib.app'
   
    const getData = async () => {
        getAppStartLoader()
        await loadAllEntities()
        getAppStopLoader()
    }
   ```
