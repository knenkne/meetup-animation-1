import _ from 'lodash'

const BLOCKED = 'blocked'
const DEFAULT_NAMESPACE = 'icon:core/products'

const iconDictionary = {
    cm: `${DEFAULT_NAMESPACE}/mc36MaestroClassic`,
    mg: `${DEFAULT_NAMESPACE}/mc36MastercardGold`,
    mp: `${DEFAULT_NAMESPACE}/mc36MastercardPlatinum`,
    ms: `${DEFAULT_NAMESPACE}/mc36Mastercard`,
    mpb: `${DEFAULT_NAMESPACE}/mc36MastercardBlackEdition`,
    mcwe: `${DEFAULT_NAMESPACE}/mc36MastercardWeliteSbercard`,
    vg: `${DEFAULT_NAMESPACE}/mc36VisaGold`,
    vc: `${DEFAULT_NAMESPACE}/mc36Visa`,
    vd: `${DEFAULT_NAMESPACE}/mc36VisaDigital`,
    vis: `${DEFAULT_NAMESPACE}/mc36VisaInfinitySbercard`,
    vi: `${DEFAULT_NAMESPACE}/mc36VisaBigBonusCredit`,
    ve: `${DEFAULT_NAMESPACE}/mc36VisaElectron`,
    vp: `${DEFAULT_NAMESPACE}/mc36VisaPlatinum`,
    vpp: `${DEFAULT_NAMESPACE}/mc36VisaPremium`,
    vs: `${DEFAULT_NAMESPACE}/mc36VisaPremium`,
    mir: `${DEFAULT_NAMESPACE}/mc36Mir`,
    wg: `${DEFAULT_NAMESPACE}/mc36VisaGold`,
    wm: `${DEFAULT_NAMESPACE}/mc36MirMomentum`,
    wp: `${DEFAULT_NAMESPACE}/mc36MirPlatinum`,
    vb: `${DEFAULT_NAMESPACE}/mc36VisaBusiness`,
    mb: `${DEFAULT_NAMESPACE}/mc36MastercardBusiness`,
    vm: `${DEFAULT_NAMESPACE}/mc36VisaMomentumBusiness`,
    mm: `${DEFAULT_NAMESPACE}/mc36MastercardMomentumBusiness`,
    vk: `${DEFAULT_NAMESPACE}/mc36VisaBusinessCredit`,
    mk: `${DEFAULT_NAMESPACE}/mc36MastercardBusinessCredit`,
    mdcc: `${DEFAULT_NAMESPACE}/mc36MastercardDigitalCredit`,
    vdcc: `${DEFAULT_NAMESPACE}/mc36VisaDigitalCredit`,
    blocked: `${DEFAULT_NAMESPACE}/mc36CardLock`,
    ghost: `${DEFAULT_NAMESPACE}/mc36Default`,
    default: `${DEFAULT_NAMESPACE}/mc36Visa`
}

export const getCardIcon = ({ state, arrested, imageCode }) => {
    if (state === BLOCKED || arrested) {
        return iconDictionary.blocked
    }
    return _.get(iconDictionary, String(imageCode), iconDictionary.default)
}
