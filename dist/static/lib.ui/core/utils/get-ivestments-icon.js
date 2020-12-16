var DEFAULT_NAMESPACE = 'icon:core/products';
var brokerIcon = "".concat(DEFAULT_NAMESPACE, "/broker-investment");
var insuranceIcon = "".concat(DEFAULT_NAMESPACE, "/insurance-default");
var pensionIcon = "".concat(DEFAULT_NAMESPACE, "/pension-default");
var iconDictionary = {
  cat_isz: insuranceIcon,
  cat_nsz: insuranceIcon,
  cat_kpp: pensionIcon,
  cat_ipp: pensionIcon,
  cat_ops: pensionIcon,
  defaultIcon: brokerIcon
};
var getInvestmentIcon = function getInvestmentIcon(_ref) {
  var productCategory = _ref.productCategory;
  return iconDictionary[productCategory] || iconDictionary.defaultIcon;
};

export { getInvestmentIcon };
//# sourceMappingURL=get-ivestments-icon.js.map
