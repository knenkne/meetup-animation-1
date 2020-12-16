# language: ru
@important
Функционал: Установить фокус на поле ввода и проверить количество элементов в попапе, когда не было ничего выбрано.

  Предыстория:
    Дано пользователь авторизуется в СБОЛ по id "Иван Иванович - успешный клиент"
    И пользователь переходит в проект с id "region.search"
    И пользователь ждет окончания загрузки

  Сценарий: проверит число элементов в левой и правой колонках
    Дано установить фокус в строке поиска
    И пользователь ждет
    И проверить количество элементов в левой колонке, когда нет истории

