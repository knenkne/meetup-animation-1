import React from 'react';
import PropTypes from 'prop-types';

var ROOT_SELECTOR = '#application';
var a11yRelocation = function a11yRelocation(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    destinationSelector: 'body',
    rootSelector: ROOT_SELECTOR
  };

  var WrappedComponent = function WrappedComponent(props) {
    if (document && document.querySelector !== void 0) {
      var rootAppElement = document.querySelector(options.rootSelector);

      if (rootAppElement) {
        var scrollToElement = document.querySelector(options.destinationSelector);
        rootAppElement.setAttribute('aria-label', props.route.title || props.a11y.title);
        rootAppElement.focus();

        if (scrollToElement) {
          scrollToElement.scrollIntoView();
        }
      }
    }

    return /*#__PURE__*/React.createElement(Component, props);
  };

  WrappedComponent.WrappedComponent = Component;
  WrappedComponent.propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string
    }),
    a11y: PropTypes.shape({
      title: PropTypes.string
    }).isRequired,
    children: PropTypes.node.isRequired
  };
  WrappedComponent.defaultProps = {
    route: {}
  };
  return WrappedComponent;
};

export { a11yRelocation };
//# sourceMappingURL=accessibility-relocation.js.map
