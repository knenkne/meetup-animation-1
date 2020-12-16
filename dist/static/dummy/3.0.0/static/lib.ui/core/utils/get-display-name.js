var getDisplayName = function getDisplayName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown';
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : fallback);
};

export { getDisplayName };
//# sourceMappingURL=get-display-name.js.map
