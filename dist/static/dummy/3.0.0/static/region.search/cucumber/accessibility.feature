# language: ru
@important
Функционал: Пример формирования A11Y-автотестов

  Предыстория:
    Дано пользователь авторизуется в СБОЛ по id "Иван Иванович - успешный клиент"
    И пользователь переходит в проект с id "region.search"
    И пользователь ждет окончания загрузки

  @testcase-a11y
  Сценарий: Синтетический сценарий a11y
    * пользователь проверяет доступность страницы
