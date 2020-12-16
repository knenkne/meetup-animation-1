import { getConfigValue } from '@sbol/lib.app'
import _ from 'lodash'

import { checkFeature } from './check-feature'
import { calcPlUrl } from './links'

export const getLogoutApiUrl = _.memoize(() => {
    if (checkFeature('ApiLogoutAccess', 'region.scaffold')) {
        return calcPlUrl('/api/logout')
    }

    return `${getConfigValue('erib.url')}/PhizIC/logoff.do`
})
