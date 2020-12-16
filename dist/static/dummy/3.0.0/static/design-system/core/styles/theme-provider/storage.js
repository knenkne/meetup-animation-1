/**
 * Parse from localStorage
 * @param  {String} name - name of localStorage field
 * @param {String|Boolean|Number} fallback - value if localStorage is empty
 * @return {String|Boolean|Number} - value from localStorage
 */
var getFromStorage = function getFromStorage(name, fallback) {
  var parsedField = localStorage.getItem(name);
  return parsedField !== null ? parsedField : fallback;
};
var setToStorage = function setToStorage(name, value) {
  if (name) {
    localStorage.setItem(name, value);
  }
};

export { getFromStorage, setToStorage };
//# sourceMappingURL=storage.js.map
