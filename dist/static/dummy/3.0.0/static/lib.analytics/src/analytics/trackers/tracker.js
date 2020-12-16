import { getHistory } from '@sbol/lib.app/src/config'
import { getApps } from '@sbol/webpage.provider.bootstrap'

import { EVENT_TYPES, LEVELS } from '../utils'

const defaultCleanUpParams = ['documentId', 'srcDocumentId', 'templateId', 'srcTemplateId']

const noOperations = () => {}

// Абстрактный класс
export class Tracker {
    /* eslint-disable class-methods-use-this, comment: методы абстрактного класса для имплементации поведения */
    /* eslint-disable no-unused-vars, comment: методы абстрактного класса для имплементации поведения */
    /**
     * Метод должен быть расширен в конкретной метрике
     * Выполняет регистрацию метрики в приложении
     * @return {*} - создает экземпляр метрики
     */
    register () {}

    /**
     * Метод должен быть расширен в конкретной метрике
     * Является адаптером с общего API на API вендора
     *
     * @param {String} eventType - тип события
     * @param {Object} options - дополнительные параметры к событию
     * @param {Function} resolveTracker - колбэк, что ивент отработал
     * @return {*} - возвращает промис
     */
    event (eventType, options = {}, resolveTracker = noOperations) {}
    /* eslint-enable no-unused-vars */
    /* eslint-enable class-methods-use-this */

    /**
     * @type {string} - название вендора, необходимо для создания уникального ключа
     */
    trackerName = 'AbstractTracker'

    /**
     * @type {Boolean} - автоматическое отслеживание переходов
     */
    static autoTrackTransitions = true

    /**
     * @type {string[]} - дефолтные query-параметры для зануления
     */
    static defaultCleanUpParams = defaultCleanUpParams

    /**
     * @type {string[]} - query-параметры для зануления
     */
    static cleanUpParams = defaultCleanUpParams

    /**
     * Создание трекера
     *
     * @param {String} id - id трекера
     * @param {String} level - уровень работы
     * @param {String} userId - хэш id клиента
     */
    constructor ({ id, level, userId } = {}) {
        this.id = id
        this.level = level
        this.userId = userId
        this.register()
        this.autoTransition()
    }

    isSilentLevel = () => this.level === LEVELS.silent
    isVisitAction = (eventType) => this.level === LEVELS.visit && eventType !== EVENT_TYPES.transition

    /**
     * Метод вызова событий с применением фильтрации по eventType и level
     *
     * @param {String} eventType - тип события
     * @param {Object} options - дополнительные параметры к событию
     * @param {Function} resolveTracker - колбэк, что ивент отработал
     * @return {*} - возвращает промис
     */
    invokeEvent (eventType, options, resolveTracker = noOperations) {
        if (this.isVisitAction(eventType) || this.isSilentLevel()) {
            return false
        }
        return this.event(eventType, options, resolveTracker)
    }

    /**
     * Автоматическая отправка события перехода
     * @return {*} - обработчик события изменения состояния документа
     */
    autoTransition () {
        // Отправка события при попадании на страницу
        this.handleAutoTransition(getHistory().location)
        getHistory().listen((location) => {
            this.handleAutoTransition(location)
        })
    }

    handleAutoTransition (location) {
        if (Tracker.autoTrackTransitions && !this.isLegacy(location.pathname)) {
            this.invokeEvent(
                EVENT_TYPES.transition,
                {
                    url: `${location.pathname}${location.search}${location.hash}`,
                    modifier: (arg) => arg
                }
            )
        }
    }

    /**
     *
     * Автотрекинг переходов отслеживается только в новых модулях, старые модули трекают себя сами
     * @param {String} pathname - нынешний путь, который надо затрекать
     * @return {Boolean} - обработчик события изменения состояния документа
     */
    isLegacy = (pathname) => {
        if (!getApps) {
            return false
        }
        const app = getApps().findApp(pathname)
        return app?.vendorVersion
    }

    /**
     * Метод для обнуления query-параметров в url
     * @param {String} url - url, в котором необходимо обнулить параметры
     * @return {String} - возвращает url с вычищенными query-параметрами
     */
    static cleanUpParamsFromUrl = (url) => {
        if (Tracker.cleanUpParams.length) {
            return url.replace(new RegExp(`(${Tracker.cleanUpParams.join('|')})=.*?(&|$|#)`, 'g'), '$1=0$2')
        }

        return url
    }

    /**
     * Метод установки query-параметров для зануления
     * @param {String[]} nextCleanUpParams - query-параметры для зануления
     * @return {*} - query-параметры для зануления
     */
    static setCleanUpParams = (nextCleanUpParams = []) => {
        Tracker.cleanUpParams = nextCleanUpParams
    }

    /**
     * Метод для отключения автоматического отслеживания событий перехода
     * @return {*} - автоматическое отслеживания событий перехода отключено
     */
    static stopAutoTrackTransitions = () => {
        Tracker.autoTrackTransitions = false
    }

    /**
     * Метод для включения автоматического отслеживания событий перехода
     * @return {*} - автоматическое отслеживания событий перехода включено
     */
    static startAutoTrackTransitions = () => {
        Tracker.autoTrackTransitions = true
    }
}
