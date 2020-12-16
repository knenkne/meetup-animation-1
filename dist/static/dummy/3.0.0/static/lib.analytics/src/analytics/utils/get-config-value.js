import { getConfigValue as getAppConfigValue } from '@sbol/lib.app/src/config'
import { getLauncherConfigValue } from '@sbol/webpage.provider.bootstrap'

export const getConfigValue = (id, fallback) => {
    if (getLauncherConfigValue) {
        return getLauncherConfigValue(id) || getAppConfigValue(id) || fallback
    }
    return getAppConfigValue(id) || fallback
}
