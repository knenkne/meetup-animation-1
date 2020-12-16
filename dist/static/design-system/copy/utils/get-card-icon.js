import _ from 'lodash'

const BLOCKED = 'blocked'
const DEFAULT_NAMESPACE = 'icon:core/products'

const iconDictionary = {
    cm: `${DEFAULT_NAMESPACE}/cmMaestro`,
    mg: `${DEFAULT_NAMESPACE}/mgMasterCard`,
    mp: `${DEFAULT_NAMESPACE}/mpMasterCard`,
    ms: `${DEFAULT_NAMESPACE}/msMasterCard`,
    mpb: `${DEFAULT_NAMESPACE}/mpMasterCard`,
    mcwe: `${DEFAULT_NAMESPACE}/msMasterCard`,
    vg: `${DEFAULT_NAMESPACE}/vgVisa`,
    vc: `${DEFAULT_NAMESPACE}/visaClassic`,
    vd: `${DEFAULT_NAMESPACE}/vdVisa`,
    vis: `${DEFAULT_NAMESPACE}/visVisa`,
    vi: `${DEFAULT_NAMESPACE}/viVisa`,
    ve: `${DEFAULT_NAMESPACE}/veVisa`,
    vp: `${DEFAULT_NAMESPACE}/vpVisa`,
    vpp: `${DEFAULT_NAMESPACE}/vpVisa`,
    vs: `${DEFAULT_NAMESPACE}/viVisa`,
    mir: `${DEFAULT_NAMESPACE}/mir`,
    wg: `${DEFAULT_NAMESPACE}/wgMir`,
    wm: `${DEFAULT_NAMESPACE}/momentum`,
    wp: `${DEFAULT_NAMESPACE}/wpMir`,
    vb: `${DEFAULT_NAMESPACE}/visaBusiness`,
    mb: `${DEFAULT_NAMESPACE}/masterCardBusiness`,
    vm: `${DEFAULT_NAMESPACE}/visaBusinessMoment`,
    mm: `${DEFAULT_NAMESPACE}/masterCardBusinessMoment`,
    vk: `${DEFAULT_NAMESPACE}/visaBusinessMoment`,
    mk: `${DEFAULT_NAMESPACE}/masterCardBusinessMoment`,
    blocked: 'icon:core/product-status/cardBlocked',
    ghost: `${DEFAULT_NAMESPACE}/ghostCard`,
    default: `${DEFAULT_NAMESPACE}/visaClassic`
}

export const getCardIcon = ({ state, arrested, imageCode }) => {
    if (state === BLOCKED || arrested) {
        return _.get(iconDictionary, 'blocked')
    }
    return _.get(iconDictionary, String(imageCode), iconDictionary.default)
}
