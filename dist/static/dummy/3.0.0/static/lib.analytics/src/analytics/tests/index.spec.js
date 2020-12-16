import { analytics } from '..'

import { trackers } from '../common-event'

const stubTrackers = {
    reservedTracks: {},
    install () {
        this.reservedTracks = {
            yandex39830850: trackers.yandex39830850.track,
            'googleUA-102688153-1': window.ga,
            rutarget999999: window._rutarget
        }

        trackers.yandex39830850.track = {
            hit: jasmine
                .createSpy('yandex hit')
                .and
                .callFake((value, { callback }) => callback()),
            reachGoal: jasmine
                .createSpy('yandex reachGoal')
                .and
                .callFake((value, options, cb) => cb())
        }
        window.ga = jasmine
            .createSpy('google track')
            .and
            .callFake((type, value, { hitCallback }) => hitCallback())
        window._rutarget = {
            push: jasmine
                .createSpy('rutarget push')
        }
    },
    uninstall () {
        trackers.yandex39830850.track = this.reservedTracks.yandex39830850
        window.ga = this.reservedTracks['googleUA-102688153-1']
        window._rutarget = this.reservedTracks.rutarget999999
    }
}

describe('Модуль аналитики', () => {
    it('Присутствуют все методы', () => {
        expect(analytics.transition).toBeDefined()
        expect(analytics.event).toBeDefined()
        expect(analytics.stage).toBeDefined()
        expect(analytics.finish).toBeDefined()
    })

    beforeAll(() => {
        stubTrackers.install()
    })

    afterAll(() => {
        stubTrackers.uninstall()
    })

    describe('transition', () => {
        it('Отмечаем факт перехода', (done) => {
            analytics.transition({
                url: 'url',
                title: 'title'
            }).then(() => {
                expect(trackers.yandex39830850.track.hit).toHaveBeenCalledWith('url', jasmine.objectContaining({ title: 'title' }))
                expect(window.ga).toHaveBeenCalledWith('ua1026881531.send', 'pageview', jasmine.objectContaining({
                    title: 'title',
                    page: 'url'
                }))
                expect(window._rutarget.push).toHaveBeenCalledWith({
                    event: 'otherPage',
                    __title: 'title',
                    __location: 'https://online.sberbank.ru/url'
                })

                done()
            }, fail)
        })


        it('Автоматическое отслеживание', (done) => {
            window.location.hash = 'documentId=2345'
            const url = `${window.location.pathname}#documentId=0`

            setTimeout(() => {
                expect(trackers.yandex39830850.track.hit).toHaveBeenCalledWith(url, jasmine.objectContaining({ title: void 0 }))
                expect(window.ga).toHaveBeenCalledWith('ua1026881531.send', 'pageview', jasmine.objectContaining({
                    title: void 0,
                    page: url
                }))
                expect(window._rutarget.push).toHaveBeenCalledWith({
                    event: 'otherPage',
                    __title: void 0,
                    __location: `https://online.sberbank.ru/${url.replace(/^\//, '')}`
                })

                window.location.hash = ''

                done()
            }, 100)
        })
    })

    describe('event', () => {
        it('Отмечаем событие', (done) => {
            analytics.event({
                channel: 'channel',
                application: 'application',
                action: 'action',
                label: 'label'
            }).then(() => {
                expect(trackers.yandex39830850.track.reachGoal.calls.mostRecent().args).toEqual(['application_-_action_-_label', {
                    channel: {
                        application: {
                            action: 'label'
                        }
                    }
                }, jasmine.any(Function)])
                expect(window.ga.calls.mostRecent().args).toEqual(['ua1026881531.send', 'event', jasmine.objectContaining({
                    eventCategory: 'channel_application',
                    eventAction: 'action',
                    eventLabel: 'label'
                })])
                expect(window._rutarget.push.calls.mostRecent().args).toEqual([{
                    event: 'otherPage',
                    __title: 'action/label',
                    __location: 'https://online.sberbank.ru/application'
                }])

                done()
            }, fail)
        })
    })

    describe('stage', () => {
        it('Отмечаем достижение', (done) => {
            analytics.stage({
                channel: 'channel',
                application: 'application',
                action: 'action',
                label: 'label'
            }).then(() => {
                expect(trackers.yandex39830850.track.reachGoal.calls.mostRecent().args).toEqual(['application_-_action_-_label', {
                    channel: {
                        application: {
                            action: 'label'
                        }
                    }
                }, jasmine.any(Function)])
                expect(window.ga.calls.mostRecent().args).toEqual(['ua1026881531.send', 'event', jasmine.objectContaining({
                    eventCategory: 'channel_application',
                    eventAction: 'action',
                    eventLabel: 'label'
                })])
                expect(window._rutarget.push.calls.mostRecent().args).toEqual([{
                    event: 'otherPage',
                    __title: 'action/label',
                    __location: 'https://online.sberbank.ru/application'
                }])

                done()
            }, fail)
        })
    })

    describe('finish', () => {
        it('Отмечаем окончание', (done) => {
            analytics.finish({
                channel: 'channel',
                application: 'application',
                action: 'action',
                label: 'label'
            }).then(() => {
                expect(trackers.yandex39830850.track.reachGoal.calls.mostRecent().args).toEqual(['application_-_action_-_label', {
                    channel: {
                        application: {
                            action: 'label'
                        }
                    }
                }, jasmine.any(Function)])
                expect(window.ga.calls.mostRecent().args).toEqual(['ua1026881531.send', 'event', jasmine.objectContaining({
                    eventCategory: 'channel_application',
                    eventAction: 'action',
                    eventLabel: 'label'
                })])
                expect(window._rutarget.push.calls.mostRecent().args).toEqual([{
                    event: 'thankYou',
                    conv_id: 'label_application', // eslint-disable-line camelcase, comment: вендоры не наши
                    __location: 'https://online.sberbank.ru/application'
                }])

                done()
            }, fail)
        })
    })
})
