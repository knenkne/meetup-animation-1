import { j as _objectWithoutProperties, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../icon/style.css';
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import defaultTheme from './style.css';

var iconTheme = {
  icon: classnames(Icon.theme.icon, defaultTheme.checkMark)
};
/**
 * Компонент для вывода шага подпроцесса.
 *
 * @param {Object} props - Свойства компонента.
 * @return {JSX} - Компонент.
 */

var Step = function Step(_ref) {
  var title = _ref.title,
      mode = _ref.mode,
      value = _ref.value,
      translations = _ref.translations,
      avaLink = _ref.avaLink,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["title", "mode", "value", "translations", "avaLink", "theme"]);

  return /*#__PURE__*/React.createElement("li", _extends({}, props, {
    className: classnames(theme.step, mode && theme.current)
  }), mode && /*#__PURE__*/React.createElement("div", {
    className: classnames(theme.tooltip, avaLink && theme.hasAvatar)
  }, avaLink && /*#__PURE__*/React.createElement("img", {
    className: theme.avatar,
    src: avaLink,
    alt: "avatar"
  }), translations.tooltip), /*#__PURE__*/React.createElement("div", {
    className: theme.marker
  }, /*#__PURE__*/React.createElement(Icon, {
    theme: iconTheme,
    name: "icon:core/common/checkMark",
    size: "xs"
  }), /*#__PURE__*/React.createElement("span", {
    className: theme.markerIndex
  }, value)), /*#__PURE__*/React.createElement("div", {
    className: theme.title
  }, title));
};
Step.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['progress', '']),

  /**
   * Содержит переводы для компонента.
   * Автоматически пробрасывается компонентом Stages.
   */
  translations: PropTypes.shape({
    tooltip: PropTypes.string
  }).isRequired,

  /**
   * Автоматически пробрасывается компонентом Stages.
   */
  value: PropTypes.number,

  /**
   * Ссылка на аватарку пользователя.
   */
  avaLink: PropTypes.string,
  theme: PropTypes.object
};
Step.defaultProps = {
  mode: void 0,
  tooltip: void 0,
  value: void 0,
  avaLink: void 0,
  translations: {},
  theme: defaultTheme
};
Step.displayName = 'Stages.Step';

export { Step };
//# sourceMappingURL=step.js.map
