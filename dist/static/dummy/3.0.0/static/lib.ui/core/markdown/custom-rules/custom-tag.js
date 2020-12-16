import { f as _defineProperty } from '../../_rollupPluginBabelHelpers-687385f0.js';
import _ from 'lodash';
import { escapeHtml } from 'remarkable/lib/common/utils';

/**
 * @param {Object} md - markdown instance
 * @param {Object} options
 * @param {String} options.templateName
 * @param {String} options.tag
 * @param {Function} options.render
 *
 * Подключение к инстансу Remarkable
 * равному md:
 * md.use(customTag, {
 *   templateName: 'wow',
 *   tag: 'wow',
 *   render: (content) => `<span style="color: blue">${content}</span>`
 *  })
 *
 * Пример использования:
 * <wow>Wow!</wow> => <span style="color: blue">Wow!</span>
 */

var customTag = function customTag(md, _ref) {
  var templateName = _ref.templateName,
      tag = _ref.tag,
      render = _ref.render;
  Object.assign(md.renderer.rules, _defineProperty({}, templateName, function (tokens, idx) {
    return render("".concat(escapeHtml(tokens[idx].content)));
  }));
  md.core.ruler.push(templateName, function (_ref2) {
    var tokens = _ref2.tokens;
    return tokens.forEach(function (token) {
      return _.each(token.children, function (child) {
        if (child.type !== 'text') {
          return;
        }

        var exp = new RegExp("<".concat(tag, ">(.*)</").concat(tag, ">"), 'i');
        var contentMatch = child.content.match(exp);

        if (contentMatch) {
          Object.assign(child, {
            type: templateName,
            content: contentMatch[1]
          });
        }
      });
    });
  });
};

export { customTag };
//# sourceMappingURL=custom-tag.js.map
