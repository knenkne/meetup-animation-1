var DEFAULT_NAMESPACE = 'icon:core/products';
var iconDictionary = {
  appliance: "".concat(DEFAULT_NAMESPACE, "/targetAppliance"),
  auto: "".concat(DEFAULT_NAMESPACE, "/targetAuto"),
  business: "".concat(DEFAULT_NAMESPACE, "/targetBusiness"),
  education: "".concat(DEFAULT_NAMESPACE, "/targetEducation"),
  estate: "".concat(DEFAULT_NAMESPACE, "/targetEstate"),
  furniture: "".concat(DEFAULT_NAMESPACE, "/targetFurniture"),
  ghost: "".concat(DEFAULT_NAMESPACE, "/ghostTarget"),
  holidays: "".concat(DEFAULT_NAMESPACE, "/targetHolidays"),
  other: "".concat(DEFAULT_NAMESPACE, "/targetOther"),
  renovation: "".concat(DEFAULT_NAMESPACE, "/targetRenovation"),
  reserve: "".concat(DEFAULT_NAMESPACE, "/targetReserve"),
  vacation: "".concat(DEFAULT_NAMESPACE, "/targetVacation")
};
var getTargetIcon = function getTargetIcon(_ref) {
  var type = _ref.type;
  return iconDictionary[String(type).toLowerCase()] || iconDictionary.ghost;
};

export { getTargetIcon };
//# sourceMappingURL=get-target-icon.js.map
