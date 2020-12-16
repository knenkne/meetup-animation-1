#### 1.4.9 (2020-11-10)

##### Documentation Changes

* **readme:**  DBWCA-4445 - Обновил Readme.md (6a914868)
* **migration:**  DBWCA-4445 - Обновил MIGRATION.md (2a9fd29f)
* **convention:**  DBWCA-4445 - Добавил конвенцию для разработчиков (1b49c3a2)

##### Other Changes

*  Обновил lib.analytics, добавил TimeZone, поправил скрипты запуска (0cb58299)
*  add mock localeStorage (f16d0b22)
*  обновил CHANGELOG.md (efef8bc9)
*  обновил CHANGELOG.md (da822494)
*  обновил CHANGELOG.md (23c7043e)
*  обновил CHANGELOG.md (4c23c4d6)
* **package:**  DBWCA-4445 - Добавил механизм получения PKG_ID из package.json проекта (46dd4d3f)
* **scripts:**  DBWCA-4445 - Обновил скрипт запуска тестов (3d543be8)

##### Refactors

*  DBWCA-4445 - Реструктуризация проекта, рефактор (b85f7fbc)

##### Tests

* **mock:**
  *  DBWCA-4445 - Поправил примеры тестов (7c6b3bc5)
  *  DBWCA-4445 - Обновил lib.analytics (299be8d1)
  *  DBWCA-4246 - Добавлена обработка ЭН, добавлена параметризация локалей (133d3afc)

#### 1.4.5 (2020-09-29)

##### Tests

* **mock:**  DBWCA-4246 - Добавлена обработка ЭН, добавлена параметризация локалей (133d3afc)

#### 1.4.4 (2020-08-24)

##### Tests

* **mock:**  DBWCA-4241 - Добавил мок NotFound в lib.app (41d735aa)

#### 1.4.3 (2020-08-19)

##### Other Changes

* 8878/plsbol/jest-config into feature/DBWCA-4213 (bf40af0b)
* **docs:**  DBWCA-4213 - Исправлены ошибки, добавлены комментарии (51740435)

##### Tests

* **mocks:**  DBWCA-4213 - Дополнен метод getHistory, добавлен getBroker (lib.app) (42e796e4)

#### 1.4.2 (2020-06-22)

##### Other Changes

* **docs:**
  *  DBWCA-4052 - Исправлены неточности в документации (47115ab9)
  *  DBWCA-3997 - Структурирована документация (2377437c)

#### 1.4.1 (2020-05-29)

##### Documentation Changes

* **debugger:**  DBWCA-3997 - Дополнена информация по настройке запуска (776c4461)

##### Tests

* **mocks:**  DBWCA-3997 - Добавлен метод log для мока lib.app (cbb25c93)

### 1.4.0 (2020-05-27)

##### Breaking Changes

* **lib app mock:**  DBWCA-3978 Обновил способ получения конфигов пользователя (5e4f96a4)

##### Other Changes

*  DBWCA-3986 - Добавлены примеры асинхронных тестов (938ba567)

#### 1.3.5 (2020-05-22)

##### Bug Fixes

* **preset:**  DBWCA-3969 - Поправил регулярку для расширений файлов (e0a20df1)

##### Other Changes

*  DBWCA-3969 - Добавлена поддержка абсолютного импорта package.json (2ec6d2bd)
*  DBWCA-3969 - Добавлена поддержка абсолютных импортов вида 'src/component' (38f70ebd)
*  DBWCA-3969 - Дополнил описание evn-переменной PKG_ID (18c477ee)
*  DBWCA-3969 - Обновил зависимости, добавил недостающие (de6059a6)

##### Tests

* **mocks:**
  *  DBWCA-3969 - Дополнены моки i18next и lib.app (d3055807)
  *  DBWCA-3969 - Добавил проверку modules на функцию или объект (4617d6ed)

#### 1.3.4 (2020-05-20)

##### Other Changes

*  DBWCA-3969 - Поменял адресата успешной сборки (d965bdc7)
*  DBWCA-3969 - Перенес секцию jest-junit в preset.js (01dc8a1b)

#### 1.3.3 (2020-05-19)

##### Other Changes

* **deps:**  DBWCA-3969 - Перенес prop-types в devDependencies (2466dcac)

#### 1.3.2 (2020-05-19)

##### Documentation Changes

* **scripts:**  DBWCA-3969 - Добавил push --tags для блока скриптов release (b45e906c)

#### 1.3.1 (2020-05-19)

##### Documentation Changes

*  DBWCA-3969 - Убрал из README.md информацию о версии jest, обновил пример с lib.app (d9072b4f)
*  DBWCA-3969 - Обновил README.md (b226e2e6)

##### Other Changes

* **scripts:**
  *  DBWCA-3969 - Добавил type для коммита в скриптах группы release (46165b80)
  *  DBWCA-3969 - Добавил скрипты для выпуска версий с CHANGELOG'ом (842c0ee5)
*  DBWCA-3969 - Обновил зависимости, отформатировал contributors (7fe7f43e)

##### Tests

* **mocks:**
  *  DBWCA-3969 - Поменял интерфейс использования мока lib.app (02e71cb3)
  *  DBWCA-3969 - Добавил lib.offers, убрал расширения у js-файлов в preset.js (2b02c819)
  *  DBWCA-3969 - Обновил текущие моки, добавил новые, сделал мок lib.app расширяемым (ecd6ec96)
*  DBWCA-3969 - Дополнил тесты новыми кейсами (7d8c5b7e)

