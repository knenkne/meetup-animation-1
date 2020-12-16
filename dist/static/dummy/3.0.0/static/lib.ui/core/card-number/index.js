import { j as _objectWithoutProperties, _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import { compact } from 'lodash';
import classnames from 'classnames';
import style from './style.css';

var MAX_CARD_NUMBER_LENGTH = 18;
var MAX_CARD_NUMBER_LENGTH_GROUPS_COUNT = 5;
var COMMON_CARD_NUMBER_LENGTH_GROUPS_COUNT = 4;
var MAX_CARD_NUMBER_LENGTH_GROUP_LENGTH = 2;
var COMMON_CARD_NUMBER_LENGTH_GROUP_LENGTH = 4;
var splitNumber = function splitNumber(value) {
  var draftValue = String(value).replace(/ /g, '').replace(/\*/g, '•');
  var numbers = draftValue.split('').reverse();
  var groups = [];
  var groupsCount = draftValue.length === MAX_CARD_NUMBER_LENGTH ? MAX_CARD_NUMBER_LENGTH_GROUPS_COUNT : COMMON_CARD_NUMBER_LENGTH_GROUPS_COUNT;
  var nextNumberPosition = 0;

  for (var groupIndex = 0; groupIndex < groupsCount; groupIndex += 1) {
    var groupLength = draftValue.length === MAX_CARD_NUMBER_LENGTH && groupIndex === 0 ? MAX_CARD_NUMBER_LENGTH_GROUP_LENGTH : COMMON_CARD_NUMBER_LENGTH_GROUP_LENGTH;

    for (var numberIndex = 0; numberIndex < groupLength; numberIndex += 1) {
      groups[groupIndex] = groups[groupIndex] || '';
      groups[groupIndex] = (numbers[nextNumberPosition] || '') + groups[groupIndex];
      nextNumberPosition += 1;
    }
  }

  return compact(groups.reverse());
};
var CardNumber = function CardNumber(_ref) {
  var value = _ref.value,
      props = _objectWithoutProperties(_ref, ["value"]);

  var groups = splitNumber(value);
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: classnames(style.cardNumber, props.className)
  }), groups.map(function (group, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: group + index
    }, Boolean(index) && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xA0"), group);
  }));
};
CardNumber.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string
};
CardNumber.defaultProps = {
  className: void ''
};

export default CardNumber;
export { CardNumber, splitNumber };
//# sourceMappingURL=index.js.map
