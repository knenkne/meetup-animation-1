import { j as _objectWithoutProperties, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import style from './style.css';

var markText = function markText(text, searchString, markedClass) {
  if (!searchString) {
    return text;
  }

  var caseInsensitiveString = text.toLowerCase();
  var caseInsensitiveSearchString = searchString.toLowerCase();
  var searchLength = searchString.length;
  var stringPosition = 0;
  return _.flatMap(_.split(caseInsensitiveString, caseInsensitiveSearchString), function (substring, index) {
    var originalSearch = text.substr(stringPosition, searchLength);

    if (index !== 0) {
      stringPosition += searchLength;
    }

    var originalSubstring = text.substr(stringPosition, substring.length);
    stringPosition += substring.length;

    if (index !== 0) {
      return [/*#__PURE__*/React.createElement("span", {
        className: markedClass,
        key: index
      }, originalSearch), originalSubstring];
    }

    return originalSubstring;
  });
};
/**
 * Компонент для маркировки подстроки в строке
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */


var MarkedText = function MarkedText(_ref) {
  var title = _ref.title,
      value = _ref.value,
      theme = _ref.theme,
      passedProps = _objectWithoutProperties(_ref, ["title", "value", "theme"]);

  if (!title) {
    return null;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, passedProps, {
    className: theme.text
  }), markText(title, value, theme.marked));
};
MarkedText.displayName = 'MarkedText';
MarkedText.theme = style;
MarkedText.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.shape({
    text: PropTypes.string,
    marked: PropTypes.string
  })
};
MarkedText.defaultProps = {
  title: '',
  value: '',
  theme: style
};

export default MarkedText;
export { MarkedText };
//# sourceMappingURL=marked-text.js.map
