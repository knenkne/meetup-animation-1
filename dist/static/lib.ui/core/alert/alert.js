import '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import 'prop-types';
import 'lodash';
import 'classnames';
import '../icon/style.css';
import '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import defaultTheme from './style.css';
import { Actions } from './actions.js';
import { Description } from './description.js';
import './process-style.css';
import { ProcessAlert } from './process-alert.js';
import { SystemAlert } from './system-alert.js';

var Alert = function Alert(props) {
  return /*#__PURE__*/React.createElement(ProcessAlert, props);
};
Alert.displayName = 'Alert';
Alert.propTypes = ProcessAlert.propTypes;
Alert.defaultProps = ProcessAlert.defaultProps;
Alert.Process = ProcessAlert;
Alert.System = SystemAlert;
Alert.Description = Description;
Alert.Actions = Actions;
Alert.theme = defaultTheme;

export default Alert;
export { Alert };
//# sourceMappingURL=alert.js.map
