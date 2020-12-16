var canBeRequestedByScrolling = function canBeRequestedByScrolling(event, allLoaded, loading) {
  if (!allLoaded && !loading && event.target) {
    return event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
  }

  return false;
};
var canBeRequestedByTyping = function canBeRequestedByTyping(query, masked, suggestMode, value) {
  return !masked && !!query && !(suggestMode === 'only' && value) && (suggestMode === 'on' || suggestMode === 'only');
};

export { canBeRequestedByScrolling, canBeRequestedByTyping };
//# sourceMappingURL=utils.js.map
