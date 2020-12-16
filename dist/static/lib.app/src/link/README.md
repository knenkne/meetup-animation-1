# Ссылка бесшовного перехода

## `Link`

Компонент, позволяющий совершить переход по browser history
без перезагрузки страницы, если переданный href является
относительным. Абсолютный путь будет обработан стандартно.
```
import { Link } from '@sbol/lib.app'

const loansHref = Link.createUrl('loans.consumer', '?amount=100500')

{loansHref &&
<Link href={loansHref}>
    {'Перейти к заявке на потребительский кредит с предвыбранной суммой'}
</Link>
}
```

## `Link.createUrl(id, additional?)`

Данная утилита возвращает ссылку, если она будет найдена
в объекте навигации по переданному аргументу id.
В противном случае вернется undefined.
Функция принимает опциональный второй аргумент с объектом значений,
которые будут подставлены в deeplink в местах, отделенных двойными
фигурными скобками.

Пример:
```
const result = Link.createUrl('loans.dashboard.claim', { id: '123', 'erib.id': '456' })

// Если getNavigationValue('loans.dashboard.claim') === '/loans/claim/{{id}}'
// result === '/loans/claim/123'

// Если getNavigationValue('loans.dashboard.claim') === 'https://node1.online.sberbank.ru/PhizIC/private/loans/claims?id={{erib.id}}'
// result === 'https://node1.online.sberbank.ru/PhizIC/private/loans/claims?id=456'

<Link href={result}>
    {'Перейти в заявку'}
</Link>
```
