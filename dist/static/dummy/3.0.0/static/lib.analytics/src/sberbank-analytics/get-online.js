import { get } from '../analytics/utils'

export default () => get(window.navigator, 'onLine')
