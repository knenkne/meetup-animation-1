import axiosDefault from 'axios'
import { axiosConfig } from '@sbol/lib.app'

const eribAxios = axiosDefault.create()
const cmsAxios = axiosDefault.create()

axiosConfig.useMultipleInterceptors(eribAxios, [
    ...axiosConfig.rq.mapiInterceptors,
    ...axiosConfig.rs.mapiInterceptors
])

export { eribAxios, cmsAxios }

