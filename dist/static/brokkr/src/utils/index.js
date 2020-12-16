/**
 * Базовый функционал библиотеки
 * df - функция генерации шага АФТ для применения его к Cucumber-framework
 * getElementByText - утилита получения элемента по переданному тексту в переданном узле HTML
 * UserEyesFocus - класс фокусировки пользователем
 * userEyesFocus - экземпляр фокусировки пользователем для использования в библиотеки
 * config - конфигурационные свойства АФТ
 * autoAccessibility - включение/отключение автоматической проверки доступности страниц, встроенной в шаги
 */
const df = require('./define-functionality')
const getElementByText = require('./get-by-text')
const { UEF, userEyesFocus } = require('./user-eyes-focus')
const config = require('./config')
const cssHashMap = require('./css-hash-map')
const autoAccessibility = require('./auto-accessibility')
/**
 * Управление авторизацией и навигацией
 * getAuthUrl - конфигурируемая функция получения url авторизации
 * getProjectUrlByCode - конфигурируемая функция получения url проекта по id в history
 * getCssHashMapUrl - конфигурируемая функция получения url для заливки css-hash-map
 * loginBase - база login/password пользователей на DEV/IFT
 */
const getAuthUrl = require('./get-auth-url')
const getProjectUrlByCode = require('./get-project-url-by-code')
const getCssHashMapUrl = require('./get-css-hash-map-url')
const loginBase = require('./login-base')
/**
 * Словари соответствия селекторов/атрибутов/свойств
 * dictionaries = {
 *   keyboard - словарь клавиш
 *   attributes - словарь атрибутов (всплывающая подсказка = title)
 *   cssProperties - словарь css-свойств и возможных значений (размер шрифта = { name: font-size, availableValues: { белый: #ffffff,... } })
 *   buttons - словарь селекторов кликабельных элементов
 *   views - словарь селекторов элементов вывода
 *   allSelectors - объединение словарей buttons, view
 *   getFromDictionary - функция безопасного получения (с warning) значения из словаря
 * }
 */
const dictionaries = require('./dictionaries')

module.exports = {
    df,
    getElementByText,
    UEF,
    userEyesFocus,
    config,
    cssHashMap,
    autoAccessibility,

    getAuthUrl,
    getProjectUrlByCode,
    getCssHashMapUrl,
    loginBase,

    dictionaries
}
