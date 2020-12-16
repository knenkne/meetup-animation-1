import useUfsBlockRoot from './use-ufs-block-root'
import prolongERIBSession from './prolong-erib-session'
import disableCache from './disable-cache'
import addRequestType from './add-request-type'
import antifraudHeaders from './antifraud-headers'
import checkSession from './check-session'
import useApiRoot from './use-api-root'
import useMapiRoot from './use-mapi-root'

export {
    /**
     * xhr ping.url
     */
    prolongERIBSession,
    /**
     * get: ++?+new Date()
     */
    disableCache,
    /**
     * header: X-Requested-With
     */
    addRequestType,
    /**
     * headers: RSA-Antifraud
     */
    antifraudHeaders,
    /**
     * xhr warmUpSession
     */
    checkSession,
    /**
     * ++base.url
     */
    useApiRoot,
    /**
     * ++erib.url+mapi.url
     * header: json
     * CORS
     */
    useMapiRoot,
    /**
     * ++ufs.block.root.url
     * CORS
     */
    useUfsBlockRoot
}

export const defaultInterceptors = [
    useUfsBlockRoot,
    prolongERIBSession,
    disableCache,
    addRequestType,
    checkSession
]

export const ufsInterceptors = defaultInterceptors

export const mapiInterceptors = [
    useMapiRoot,
    disableCache,
    addRequestType,
    checkSession
]

export const sbolInterceptors = [
    useApiRoot,
    prolongERIBSession,
    disableCache,
    addRequestType,
    checkSession
]
