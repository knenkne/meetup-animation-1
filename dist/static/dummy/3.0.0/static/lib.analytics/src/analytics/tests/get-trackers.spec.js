import { getTrackers } from '../get-trackers'
import { trackersMeta } from '../trackers-meta'
import { Tracker } from '../trackers/tracker'
import { YandexTracker } from '../trackers/yandex'
import { GoogleTracker } from '../trackers/google'
import { RutargetTracker } from '../trackers/rutarget'
import { SberbankAnalyticsTracker } from '../trackers/sberbank-analytics'

describe('Модуль аналитики :: получение трекеров', () => {
    it('Создались и существуют трекеры', () => {
        const trackers = getTrackers(trackersMeta)

        expect(Object.keys(trackers).length).toBe(4)
        expect(Object.keys(trackers)).toEqual([
            'yandex39830850',
            'googleUA-102688153-1',
            'rutargetSEGMENTO',
            'sberbankAnalyticsSBERBANK'
        ])

        expect(trackers.yandex39830850 instanceof Tracker)
        expect(trackers.yandex39830850 instanceof YandexTracker)

        expect(trackers['googleUA-102688153-1'] instanceof Tracker)
        expect(trackers['googleUA-102688153-1'] instanceof GoogleTracker)

        expect(trackers.rutargetSEGMENTO instanceof Tracker)
        expect(trackers.rutargetSEGMENTO instanceof RutargetTracker)

        expect(trackers.sberbankAnalyticsSBERBANK instanceof Tracker)
        expect(trackers.sberbankAnalyticsSBERBANK instanceof SberbankAnalyticsTracker)
    })
})
