import { getConfig, log } from '@sbol/lib.app'
import _ from 'lodash'

const STORAGE_KEY_PREFIX = 'region.header.search.history'

// С текущими настройками подсказки занимают в localStorage максимум по 600 символов (1.2 КБайт) на 1 пользователя
const HISTORY_RECORDS_CAPACITY = 10

const userId = _.get(getConfig(), 'user.id')
const storageKey = `${STORAGE_KEY_PREFIX}.${userId}`

const saveToStorage = (value) => {
    // Если не смогли получить id пользователя (к примеру, мы сейчас в ЕРИБ), то отключаем возможность сохранять запросы
    if (!userId) {
        return
    }
    try {
        localStorage.setItem(storageKey, JSON.stringify(value))
    } catch (e) {
        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            log.error('[region.header]: localStorage quota exceeded')
        }
    }
}

export const getSearchHistorySuggests = () => {
    // Если не смогли получить id пользователя (к примеру, мы сейчас в ЕРИБ), то не даём получать сохраненные ранее запросы
    if (!userId) {
        return []
    }
    try {
        return JSON.parse(localStorage.getItem(storageKey)) || []
    } catch (e) {
        // Данные в хранилище повреждены. Сбрасываем к начальному значению
        saveToStorage([])
        return []
    }
}

export const saveSearchHistorySuggest = (suggest) => {
    const storedSuggests = getSearchHistorySuggests()
    saveToStorage(
        _.slice([suggest, ...storedSuggests], 0, HISTORY_RECORDS_CAPACITY)
    )
}
