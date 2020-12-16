import _ from 'lodash';

var BLOCKED = 'blocked';
var DEFAULT_NAMESPACE = 'icon:core/products';
var iconDictionary = {
  cm: "".concat(DEFAULT_NAMESPACE, "/mc36MaestroClassic"),
  mg: "".concat(DEFAULT_NAMESPACE, "/mc36MastercardGold"),
  mp: "".concat(DEFAULT_NAMESPACE, "/mc36MastercardPlatinum"),
  ms: "".concat(DEFAULT_NAMESPACE, "/mc36Mastercard"),
  mpb: "".concat(DEFAULT_NAMESPACE, "/mc36MastercardBlackEdition"),
  mcwe: "".concat(DEFAULT_NAMESPACE, "/mc36MastercardWeliteSbercard"),
  vg: "".concat(DEFAULT_NAMESPACE, "/mc36VisaGold"),
  vc: "".concat(DEFAULT_NAMESPACE, "/mc36Visa"),
  vd: "".concat(DEFAULT_NAMESPACE, "/mc36VisaDigital"),
  vis: "".concat(DEFAULT_NAMESPACE, "/mc36VisaInfinitySbercard"),
  vi: "".concat(DEFAULT_NAMESPACE, "/mc36VisaBigBonusCredit"),
  ve: "".concat(DEFAULT_NAMESPACE, "/mc36VisaElectron"),
  vp: "".concat(DEFAULT_NAMESPACE, "/mc36VisaPlatinum"),
  vpp: "".concat(DEFAULT_NAMESPACE, "/mc36VisaPremium"),
  vs: "".concat(DEFAULT_NAMESPACE, "/mc36VisaPremium"),
  mir: "".concat(DEFAULT_NAMESPACE, "/mc36Mir"),
  wg: "".concat(DEFAULT_NAMESPACE, "/mc36VisaGold"),
  wm: "".concat(DEFAULT_NAMESPACE, "/mc36MirMomentum"),
  wp: "".concat(DEFAULT_NAMESPACE, "/mc36MirPlatinum"),
  vb: "".concat(DEFAULT_NAMESPACE, "/mc36VisaBusiness"),
  mb: "".concat(DEFAULT_NAMESPACE, "/mc36MastercardBusiness"),
  vm: "".concat(DEFAULT_NAMESPACE, "/mc36VisaMomentumBusiness"),
  mm: "".concat(DEFAULT_NAMESPACE, "/mc36MastercardMomentumBusiness"),
  vk: "".concat(DEFAULT_NAMESPACE, "/mc36VisaBusinessCredit"),
  mk: "".concat(DEFAULT_NAMESPACE, "/mc36MastercardBusinessCredit"),
  mdcc: "".concat(DEFAULT_NAMESPACE, "/mc36MastercardDigitalCredit"),
  vdcc: "".concat(DEFAULT_NAMESPACE, "/mc36VisaDigitalCredit"),
  blocked: "".concat(DEFAULT_NAMESPACE, "/mc36CardLock"),
  ghost: "".concat(DEFAULT_NAMESPACE, "/mc36Default"),
  default: "".concat(DEFAULT_NAMESPACE, "/mc36Visa")
};
var getCardIcon = function getCardIcon(_ref) {
  var state = _ref.state,
      arrested = _ref.arrested,
      imageCode = _ref.imageCode;

  if (state === BLOCKED || arrested) {
    return iconDictionary.blocked;
  }

  return _.get(iconDictionary, String(imageCode), iconDictionary.default);
};

export { getCardIcon };
//# sourceMappingURL=get-card-icon.js.map
