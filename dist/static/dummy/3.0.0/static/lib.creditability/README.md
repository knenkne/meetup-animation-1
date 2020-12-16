# Общие компоненты проекта «Кредитный Потенциал»

## Подключение библиотеки

1. Подключить в зависимости (заменив версию на актуальную):
    ```json
    "@sbol/lib.creditability": "2.2.2"
    ```
2. Обновить node_modules
    ```bash
    npm i
    ```
3. Импортировать
    ```javascript
    import { CapacityScale, CapacityInfo, CapacityProduct } from '@sbol/lib.creditability'
    ```
  
## Демо

[http://sbt-okdbo-0078.sigma.sbrf.ru/builds/sbol/lib.creditability/2.2.2/temp/](http://sbt-okdbo-0078.sigma.sbrf.ru/builds/sbol/lib.creditability/2.2.2/temp/)
    
## Запуск примера

1. Выполнить:
    ```bash
    git clone ssh://git@10.21.25.60:8878/plsbol-apps/lib.creditability.git
    cd lib.creditability/
    npm i
    npm run dev
    ```
2. Открыть: [http://localhost:6060/](http://localhost:6060/).

## Компоненты

### [Eslint config](./eslint-rules/README.md)

### CapacityScale

Шкала Кредитного потенциала для процесса расчёта.

![img](images/capacity-scale.png)

#### Свойства

- ```used``` **Number** – сумма занятой части *КП*, в процентах
- ```color``` **String** – цвет шкалы
- ```background``` **String** – цвет фона шкалы
- ```theme``` **String** – тема оформления

#### Пример

```
<CapacityScale used={100} color="#cc0000" background="#f9e5e5" />
```

### CapacityHellScale

Градиентная Шкала Кредитного потенциала для процесса расчёта.

![img](images/capacity-hell-scale.png)

#### Свойства

- ```used``` **Number** – сумма занятой части *КП*, в процентах
- ```reserved``` **Number** – сумма зарезервированной части *КП*, в процентах
- ```limits``` **Object** – лимиты для градиента, в процентах

#### Пример

```
<CapacityScale used={100} reserved={50} />
```

### CapacityInfo

Компонент отображения Кредитного потенциала, с указанием вероятности одобрения.

![img](images/capacity-info.png)

#### Свойства

- ```total``` **Number** – общая сумма *КП*
- ```used``` **Number** – сумма занятой части *КП*
- ```reserved``` **Number** – сумма зарезервированной части *КП*, например при выборе суммы кредита в калькулятора
- ```limits``` **Object** – суммы лимитов одобрения, [подробнее](#правила-задания-лимитов)
- ```decisionHighKey``` **String** – ключ ```i18next``` для текста решения об одобрении при высоком шансе
- ```adviceHighKey``` **String** – ключ ```i18next``` для текста совета при высоком шансе
- ```decisionMediumKey``` **String** – ключ ```i18next``` для текста решения об одобрении при среднем шансе
- ```adviceMediumKey``` **String** – ключ ```i18next``` для текста совета при среднем шансе
- ```decisionLowKey``` **String** – ключ ```i18next``` для текста решения об одобрении при низком шансе
- ```adviceLowKey``` **String** – ключ ```i18next``` для текста совета при низком шансе

#### Правила задания лимитов

| Зоны одобрения           | medium      | low         |
|--------------------------|-------------|-------------|
| Зелёная, желтая, красная | Number      | Number      |
| Зелёная, желтая          | Number      | null        |
| Зелёная, красная         | null        | Number      |
| Жёлтая, красная          | 0           | Number      |
| Зелёная                  | null        | null        |
| Жёлтая                   | 0           | null        |
| Красная                  | null        | 0           |
| Красная                  | 0           | 0           |

#### Пример

```
<CapacityInfo total={1000} used={300} reserved={100} limits={{ medium: 500, low: 900 }} />
```

### CapacityProduct

Компонент отображения карточки продукта Кредитный потенциал для перехода в него.

![img](images/capacity-product.png)

#### Свойства

- ```axios``` **Object** – экземпляр `axios` приложения

#### Пример

```
<CapacityProduct axios={axios} />
```

#### Конфигурация Launcher

Компонент ожидает наличие в Launcher потребителя своей фичи:

```json
"CapacityStatus": {
  "value": "loans.creditability",
  "options": {
    "endpointUrl": "/person-credit/v7/ib/banking/products/loans/lending-capacity/creditability/summary"
  }
}
```

## Утилиты и константы

- ```calculatePercents``` – расчёт целового числа процентов использования *КП*, округление вверх
- ```AnalyticEvent``` - класс инкаплусирующий логику сбора данных и форматирования события для отправки в аналитику
- ```COLORS``` – цвета шкалы для всех шансов одобрения
- ```CHANCES``` – перечисление шансов одобрения
