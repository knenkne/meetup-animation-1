import { f as _defineProperty } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './select.css';

var Item = function Item(props) {
  return /*#__PURE__*/React.createElement("div", {
    title: props.title,
    className: classnames(styles.item, _defineProperty({}, styles.itemReadOnly, props.readOnly))
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.itemTitle
  }, props.title), /*#__PURE__*/React.createElement("span", {
    className: styles.itemDescription
  }, props.description), /*#__PURE__*/React.createElement("span", {
    className: classnames(styles.itemAside, _defineProperty({}, styles.touched, props.touched))
  }, props.additional));
};
Item.propTypes = {
  title: PropTypes.string,
  readOnly: PropTypes.bool,
  description: PropTypes.string,
  additional: PropTypes.string,
  touched: PropTypes.bool
};
Item.defaultProps = {
  title: '',
  readOnly: false,
  additional: void 0,
  description: void 0,
  touched: false
};

export { Item };
//# sourceMappingURL=item.js.map
