# language: ru
@important
Функционал: Ввести букву "п" и кликнуть по "24.04.2019"

  Предыстория:
    Дано пользователь авторизуется в СБОЛ по id "Иван Иванович - успешный клиент"
    И пользователь переходит в проект с id "region.search"
    И пользователь ждет окончания загрузки

  Сценарий: ввод, клик
    Дано установить фокус в строке поиска
    И пользователь ждет
    И ввести букву "п"
    И пользователь ждет
    И пользователь ждет
    И клик по продукту "24.04.2019", когда в строке поиска "п"
    И пользователь ждет
