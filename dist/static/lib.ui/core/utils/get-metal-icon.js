var DEFAULT_NAMESPACE = 'icon:core/products';
var iconDictionary = {
  default: "".concat(DEFAULT_NAMESPACE, "/argentum"),
  ghost: "".concat(DEFAULT_NAMESPACE, "/ghostMetal"),
  arg: "".concat(DEFAULT_NAMESPACE, "/argentum"),
  aur: "".concat(DEFAULT_NAMESPACE, "/aurum"),
  ptr: "".concat(DEFAULT_NAMESPACE, "/platinum"),
  pdr: "".concat(DEFAULT_NAMESPACE, "/palladium")
};
var getMetalIcon = function getMetalIcon(_ref) {
  var balance = _ref.balance;
  var key = String(balance === null || balance === void 0 ? void 0 : balance.currency.code).toLowerCase();
  return iconDictionary[key] || iconDictionary.default;
};

export { getMetalIcon };
//# sourceMappingURL=get-metal-icon.js.map
