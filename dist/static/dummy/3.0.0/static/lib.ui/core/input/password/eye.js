import '../../_rollupPluginBabelHelpers-687385f0.js';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import 'classnames';
import '../../icon/style.css';
import { Icon } from '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import style from './eye-style.css';

var Eye = function Eye(props) {
  var onOpen = props.onOpen,
      onClose = props.onClose,
      isOpen = props.isOpen;
  var handleClose = useCallback(function (e) {
    if (isOpen) {
      onClose(e);
    }
  }, [isOpen]);
  var handleOpen = useCallback(function (e) {
    if (!e || !e.key || e.key !== 'Tab') {
      onOpen(e);
    }
  }, []);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: style.eye,
    onMouseDown: handleOpen,
    onMouseUp: handleClose,
    onMouseLeave: handleClose,
    onTouchStart: handleOpen,
    onTouchEnd: handleClose,
    onKeyDown: handleOpen,
    onKeyUp: handleClose,
    onBlur: handleClose,
    "data-unit": "input:password:eye",
    "aria-label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: isOpen ? 'icon:core/common/eyeOpened' : 'icon:core/common/eyeClosed',
    theme: style
  }));
};

Eye.propTypes = {
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
};
Eye.defaultProps = {
  onOpen: _.noop,
  onClose: _.noop,
  isOpen: false
};

export { Eye };
//# sourceMappingURL=eye.js.map
