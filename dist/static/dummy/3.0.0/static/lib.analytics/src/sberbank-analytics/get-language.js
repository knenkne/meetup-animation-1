import { get } from '../analytics/utils'

export default () =>
    get(window.navigator, 'browserLanguage')
        || get(window.navigator, 'userLanguage')
        || get(window.navigator, 'systemLanguage')
        || get(window.navigator, 'language')
