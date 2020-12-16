# Promo page

## Старт приложения осуществляется по:

* query: `?offersPlaceName=webCatalog&offersCampaignId=7777&offersTemplateId=7777`
* по роутингу из `lib.offers`

## Варианты компоновки

* https://zpl.io/boGN03o `?offersPlaceName=webCatalog&offersCampaignId=7777&offersTemplateId=7777`
* https://zpl.io/aBpGNrK `?offersPlaceName=webCatalog&offersCampaignId=8888&offersTemplateId=8888`
* https://zpl.io/agBpNw1 `?offersPlaceName=webCatalog&offersCampaignId=9999&offersTemplateId=9999`


## Отключение отклика "сервис оформлен"

Достаточно только добавить в адресную строку query параметр `noServiceIssuedButton=true`.
Например: `?offersPlaceName=webCatalog&offersCampaignId=7777&offersTemplateId=7777&noServiceIssuedButton=true`

## Принцип работы

1. Модуль запрашивает данные из getBroker (если есть) или из
/content-broker/content
2. На основе query params модуль сверяет и выбирает нужное предложение
3. Модуль парсит полученное значение в подходящую структуру
4. Модуль рендерит структуру данных по рекурсии
5. style.id определяет визуальный стиль (является css-классами) элементов
6. По клику на "Сервис оформлен" отправляется запрос с откликом done
и вызывается reject с contentId оформленного сервиса