import { get } from '../analytics/utils'

const connectionTypes = {
    bluetooth: 'BLUETOOTH',
    cellular: 'CELLULAR',
    ethernet: 'ETHERNET',
    wifi: 'WIFI',
    none: 'UNKNOWN',
    wimax: 'UNKNOWN',
    other: 'UNKNOWN',
    unknown: 'UNKNOWN'
}

export default () => connectionTypes[get(window.navigator, 'connection', 'type')]
