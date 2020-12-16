import axiosDefault from 'axios'
import { axiosConfig } from '@sbol/lib.app/src/axios-config'

const eribAxios = axiosDefault.create()
const cmsAxios = axiosDefault.create()

axiosConfig.useMultipleInterceptors(eribAxios, [
    ...axiosConfig.rq.mapiInterceptors,
    ...axiosConfig.rs.mapiInterceptors
])

export { eribAxios, cmsAxios }

