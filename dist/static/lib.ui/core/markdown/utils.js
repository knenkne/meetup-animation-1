import _ from 'lodash';
import { e as externalIcon } from '../external-969f6c5f.js';
import Remarkable from 'remarkable';
import { escapeHtml, replaceEntities } from 'remarkable/lib/common/utils';

/* eslint-disable camelcase, comment: кейсинг предоставляет Remarkable */
var options = {
  html: false,
  xhtmlOut: false,
  breaks: false,
  langPrefix: 'language-',
  linkify: false,
  typographer: true,
  quotes: '«»‘’'
};
var internalTestRegExp = /^[#./]/;
var lastWorldRegExp = /[^\s]*$/;
var nbspRegExp = /\u00a0/g;
var nbspHtmlEntity = '&nbsp;';
var isExternalUrl = function isExternalUrl() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return !!url && !internalTestRegExp.test(url);
};
var emOpen = function emOpen() {
  return '<strong>';
};
var emClose = function emClose() {
  return '</strong>';
};
var linkOpen = function linkOpen(tokens, idx) {
  var href = escapeHtml(tokens[idx].href);
  var isExternal = isExternalUrl(href);
  var title = tokens[idx].title ? " title=\"".concat(escapeHtml(replaceEntities(tokens[idx].title)), "\"") : '';

  if (!isExternal) {
    return "<a href=\"".concat(href, "\"").concat(title, "><span>");
  }

  var externals = ' target="_blank" rel="noopener noreferrer"';
  var content = escapeHtml(tokens[idx + 1].content);
  var droppedLast = content.replace(lastWorldRegExp, '');
  return "<a href=\"".concat(href, "\"").concat(title).concat(externals, ">").concat(droppedLast ? '<span>' : '');
};
var linkClose = function linkClose(tokens, idx) {
  var href = escapeHtml(tokens[idx - 2].href); // eslint-disable-line no-magic-numbers, comment: приходят все токены, а href лежит в два токена слева: <a> и текст

  if (!isExternalUrl(href)) {
    return '</span></a>';
  }

  var content = escapeHtml(tokens[idx - 1].content);
  var droppedLast = content.replace(lastWorldRegExp, '');
  var lastWord = content.match(lastWorldRegExp)[0];
  return "".concat(droppedLast ? '</span>' : '', "<span>").concat(lastWord).concat(externalIcon, "</span></a>");
};
var text = function text(tokens, idx) {
  var _tokens;

  var content = escapeHtml(tokens[idx].content);
  var href = escapeHtml((_tokens = tokens[idx - 1]) === null || _tokens === void 0 ? void 0 : _tokens.href);

  if (!isExternalUrl(href)) {
    return content;
  }

  return content.replace(lastWorldRegExp, '');
};
var replaceNbsp = function replaceNbsp(stateCore) {
  var _stateCore$src;

  stateCore.src = (_stateCore$src = stateCore.src) === null || _stateCore$src === void 0 ? void 0 : _stateCore$src.replace(nbspRegExp, nbspHtmlEntity);
};
var inlineDisable = ['backticks', 'del', 'ins', 'mark', 'footnote_inline', 'footnote_ref'];
var blockDisable = ['blockquote', 'code', 'fences'];
var blockDisableAdditional = ['deflist', 'table'];

var configMdCommon = function configMdCommon() {
  var markdown = new Remarkable('full', options);
  markdown.core.ruler.before('block', 'nbspReplacer', replaceNbsp);
  markdown.inline.ruler.disable(inlineDisable);
  markdown.renderer.rules.link_open = linkOpen;
  markdown.renderer.rules.link_close = linkClose;
  markdown.renderer.rules.em_open = emOpen;
  markdown.renderer.rules.em_close = emClose;
  markdown.renderer.rules.text = text;
  return markdown;
};

var configMdFull = function configMdFull() {
  var markdownFull = configMdCommon();
  markdownFull.block.ruler.disable(blockDisable);
  return markdownFull;
};

var configMdShort = function configMdShort() {
  var markdownShort = configMdCommon();
  markdownShort.block.ruler.disable(blockDisable.concat(blockDisableAdditional)); // ignores images completely

  markdownShort.renderer.rules.image = _.stubString;
  return markdownShort;
};

var markdownFull = configMdFull();
var markdownShort = configMdShort();

export { emClose, emOpen, isExternalUrl, linkClose, linkOpen, markdownFull, markdownShort, replaceNbsp, text };
//# sourceMappingURL=utils.js.map
