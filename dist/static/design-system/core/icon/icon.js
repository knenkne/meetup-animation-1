import '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import React, { useMemo } from 'react';
import 'prop-types';
import '../colors.config.style-69a09a5b.js';
import _ from 'lodash';
import { IconWrapperStyled } from './icon.style.js';

var iconOmit = ['name'];
/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5f3698dc6a8521646c468cff)
 * Компонент для вывода svg-иконок
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Icon = function Icon(props) {
  /**
   * Метод для фиксирования префикса (process.env.PKG_ID) для генерации уникальных id в svg иконках
   * @param projectId
   */
  var name = props.name,
      namespace = props.namespace,
      icon = props.icon;

  var addUniqueId = function addUniqueId(icon, namespace, name) {
    return useMemo(function () {
      var formattedIcon = icon;
      var newIdBase = "".concat(Icon.iconProjectId, "::").concat(namespace, "/").concat(name, "::");
      var refIds = icon === null || icon === void 0 ? void 0 : icon.match(/(id="([^\s"])+")/g);

      if (refIds) {
        refIds.forEach(function (refId) {
          var refIdForm = refId.substring(4, refId.length - 1);

          var newId = newIdBase + _.uniqueId();

          formattedIcon = _.replace(formattedIcon, new RegExp("#".concat(refIdForm), 'g'), "#".concat(newId));
          formattedIcon = _.replace(formattedIcon, new RegExp("id=\"".concat(refIdForm, "\""), 'g'), "id=\"".concat(newId, "\""));
        });
      }

      return formattedIcon;
    }, [icon, namespace, name]);
  };

  var formattedIcon = addUniqueId(icon, namespace, name);

  var passedProps = _(props).omit(iconOmit).extend({
    dangerouslySetInnerHTML: {
      __html: formattedIcon
    }
  }).value();

  return /*#__PURE__*/React.createElement(IconWrapperStyled, passedProps);
};
Icon.iconProjectId = '';

Icon.setProject = function (projectId) {
  Icon.iconProjectId = projectId;
};

export { Icon };
//# sourceMappingURL=icon.js.map
