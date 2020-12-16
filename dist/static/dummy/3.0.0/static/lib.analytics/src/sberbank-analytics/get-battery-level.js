import { get } from '../analytics/utils'

export default () => {
    const api = get(window.navigator, 'battery')
        || get(window.navigator, 'webkitBattery')
        || get(window.navigator, 'mozBattery')

    const level = get(api, 'level')

    if (level) {
        return 100 * level
    }

    return void 0
}
