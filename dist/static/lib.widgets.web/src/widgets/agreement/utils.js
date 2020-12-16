import { getConfigValue } from '@sbol/lib.app'

import { getAxios } from '../../axios'

const getRootUrl = (src) => {
    if (src.startsWith('http')) {
        return ''
    }
    return `${getConfigValue('ufs.block.root.url', '')}${src.startsWith('/') ? '' : '/'}`
}

export const generateUrl = (src, { agreementId, pid, documentId, dl = '0' }) => {
    if (!src || !agreementId || !pid) {
        return null
    }
    return `${getRootUrl(src)}${src}?agreementId=${agreementId}${documentId ? `&documentId=${documentId}` : ''}&pid=${pid}&dl=${dl}`
}

export const fetchData = (url, params) => getAxios().get(url, { params })
