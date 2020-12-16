import React from 'react';
import _ from 'lodash';
import { getDisplayName } from '../get-display-name.js';

/**
 * @desc Блокировщик props. Полезно для запрета theme, свойств redux-form в тех случаях, когда используется ...spread свойств
 * omittere - Latin omit
 * @param {Array} omitArray - массив свойств, которые должны быть забыты компонентом
 * @param {String} fallbackName - имя, присваиваемое безымянному компоненту
 * @return {function(*=)} - HOC, запрещающий проброс свойств из omitArray
 * */

var omittere = function omittere(omitArray) {
  var fallbackName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'OmittedComponent';
  return function (Component) {
    var OmittedComponent = function OmittedComponent(props) {
      return /*#__PURE__*/React.createElement(Component, _.omit(props, omitArray));
    };

    _.forEach(Component, function (prop, key) {
      if (key !== 'childContextTypes') {
        OmittedComponent[key] = prop;
      }
    });

    OmittedComponent.displayName = getDisplayName(Component, fallbackName);
    OmittedComponent.propTypes = _.omit(Component.propTypes, omitArray);
    OmittedComponent.WrappedComponent = Component;
    OmittedComponent.omitArray = omitArray;
    return OmittedComponent;
  };
};
/**
 * @desc тема? Какая тема?
 * @param {Function} Component - компонент, который должен забыть про prop theme. У таких компонентов должна быть заранее задана тема в дефолтных свойствах
 * @return {function(*=)} - компонент, без возможности использовать тему
 * */

var themeKiller = omittere(['theme'], 'UnthemableComponent');
var inputMetaOmitter = omittere(['input', 'meta']);
var metaOmitter = omittere(['active', 'asyncValidating', 'autofilled', 'dirty', 'dispatch', 'hasServerError', 'initialValue', 'invalid', 'pristine', 'submitFailed', 'submitting', 'touched', 'valid', 'visited', 'warning']);

export { inputMetaOmitter, metaOmitter, omittere, themeKiller };
//# sourceMappingURL=omittere.js.map
