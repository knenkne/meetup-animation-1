import { h as _extends } from '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/font-sizes.config.style.js';
import { HeadlineStyled } from './headline.style.js';

var Headline1 = function Headline1(props) {
  return /*#__PURE__*/React.createElement(HeadlineStyled, _extends({
    variant: "h1",
    as: "h1"
  }, props));
};
var Headline2 = function Headline2(props) {
  return /*#__PURE__*/React.createElement(HeadlineStyled, _extends({
    variant: "h2",
    as: "h2"
  }, props));
};
var Headline3 = function Headline3(props) {
  return /*#__PURE__*/React.createElement(HeadlineStyled, _extends({
    variant: "h3",
    as: "h3"
  }, props));
};
var Headline4 = function Headline4(props) {
  return /*#__PURE__*/React.createElement(HeadlineStyled, _extends({
    variant: "h4",
    as: "h4"
  }, props));
};
var Headline5 = function Headline5(props) {
  return /*#__PURE__*/React.createElement(HeadlineStyled, _extends({
    variant: "h5",
    as: "h5"
  }, props));
};
var propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['semibold', 'regular', 'bold']),
  indent: PropTypes.oneOf(['openspace', 'innerspace'])
};
var defaultProps = {
  mode: 'regular',
  indent: 'openspace'
};
Headline1.propTypes = propTypes;
Headline1.defaultProps = defaultProps;
Headline1.displayName = 'Headline';
Headline2.propTypes = propTypes;
Headline2.defaultProps = defaultProps;
Headline3.propTypes = propTypes;
Headline3.defaultProps = defaultProps;
Headline4.propTypes = propTypes;
Headline4.defaultProps = defaultProps;
Headline5.propTypes = propTypes;
Headline5.defaultProps = defaultProps;

export { Headline1, Headline2, Headline3, Headline4, Headline5 };
//# sourceMappingURL=headline.js.map
