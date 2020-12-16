import { Application } from './application'
import promise from './run-all-callbacks-once'

// App - провайдер приложения (предварительная настройка, локали, etc)
export { Application as App }
// Axios интерцепторы
export { axiosConfig } from './axios-config'
// Сервис логирования
export { log } from './log'
// Адаптер от redux-form к стандартному API компонентов
export { fieldAdapter, Field } from './field'
// Link для переходов между страницами без перезагрузки
export { Link } from './link'
// Компонент рендера 404й страницы
export { NotFound } from './not-found'
// Компонент рендера страницы ошибки соединения
export { NetworkError } from './network-error'
// Прокси-методы для получения данных от bootstrap
export {
    getHistory,
    getConfig,
    getConfigValue,
    getNavigation,
    getNavigationValue,
    getMessages,
    getMessagesValue,
    getAllFeatures,
    getFeature,
    getFeatureValue,
    getFeatureOption,
    getAllOptions,
    getOption,
    getNotFound,
    getNetworkError,
    getInitOptions,
    getBroker,
    getPrefetch,
    getAppStartLoader,
    getAppStopLoader,
    getLauncherConfig,
    getLauncherConfigValue
} from './config'
// Хранение в локальном хранилище нечувствительных данных
export { storage } from './storage'
// Метод для использования SBOL.PRO сервисов
export { useSbolPro } from './sbol-pro'
export { i18nextInit } from './i18next'
export { promise }

export { Region } from './region'

export { default as encodeToWindows1251 } from './encode-to-windows-1251'
