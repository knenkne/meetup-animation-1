const prolongERIBSession = () => {}
const disableCache = () => {}
const addRequestType = () => {}
const antifraudHeaders = () => {}
const checkSession = () => {}
const useApiRoot = () => {}
const useMapiRoot = () => {}
const useUfsBlockRoot = () => {}

export {
    prolongERIBSession,
    disableCache,
    addRequestType,
    antifraudHeaders,
    checkSession,
    useApiRoot,
    useMapiRoot,
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
