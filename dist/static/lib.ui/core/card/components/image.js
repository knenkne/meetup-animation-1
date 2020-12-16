import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from '../style.css';

var Image = function Image(_ref) {
  var imageSrc = _ref.imageSrc,
      srcSet = _ref.srcSet,
      mobileSrcSet = _ref.mobileSrcSet,
      title = _ref.title,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement("div", {
    className: theme.imageContainer
  }, /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement("source", {
    media: "(max-width: 731px)",
    srcSet: mobileSrcSet
  }), /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    srcSet: srcSet,
    alt: title,
    className: theme.image
  })));
};
Image.propTypes = {
  imageSrc: PropTypes.string,
  srcSet: PropTypes.string,
  mobileSrcSet: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.object
};
Image.defaultProps = {
  imageSrc: '',
  srcSet: '',
  mobileSrcSet: '',
  title: '',
  theme: defaultTheme
};
Image.displayName = 'Card.Image';

export { Image };
//# sourceMappingURL=image.js.map
