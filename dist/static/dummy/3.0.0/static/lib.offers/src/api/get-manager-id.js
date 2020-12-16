import { log } from '@sbol/lib.app'

import { eribAxios } from './axios'

let managerId

export const getManagerId = async () => {
    if (!managerId) {
        try {
            // TODO: сперва опрашивать message bus
            const { data } = await eribAxios({
                method: 'POST',
                url: '/private/getManagerInfo.do?type=SBOL_PRO',
                data: {}
            })

            managerId = data.response?.employees?.employee?.id
        } catch (error) {
            log.error('Failed to load manager info, getManagerInfo', error)
        }
    }

    return managerId
}
