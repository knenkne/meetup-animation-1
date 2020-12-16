import { storage } from '@sbol/lib.app/src/storage'
import { getConfigValue } from '@sbol/lib.app/src/config'

const cookieRegExp = new RegExp(`(?:^|; )${getConfigValue('session.cookie.name')}=([^;]*)`)
const sessionCookie = document.cookie.match(cookieRegExp)
const storageSessionName = sessionCookie ? `rejectedOffers::${decodeURIComponent(sessionCookie[1])}` : 'rejectedOffers'

const getRejectedOffers = () =>
    (storage.local.get(storageSessionName, process.env.PKG_ID) || '')
        .split(',')
        .filter((contentId) => contentId)

export const reject = (contentIds = []) => {
    const rejectedOffers = getRejectedOffers()
        .concat(contentIds)
        .join(',')

    storage.local.set(storageSessionName, rejectedOffers, process.env.PKG_ID)
}

export const isRejected = (offer) => getRejectedOffers().includes(String(offer.contentId))
