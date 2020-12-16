import '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import '../utils/handlers.js';
import '../utils/pluralize.js';
import '../utils/scroll-to.js';
import '../utils/format-phone-number.js';
import '../utils/memoize-func-with-args.js';
import '../utils/auto-top-check-by-window.js';
import '../utils/merge-theme.js';
import '../utils/styles/media.config.css';
import '../utils/adaptive.js';
import '../utils/pseudo/pseudo-button.js';
import '../utils/get-card-icon.js';
import '../utils/get-ivestments-icon.js';
import '../utils/get-metal-icon.js';
import '../utils/get-target-icon.js';
import '../icon/style.css';
import '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import '../typography/index.js';
import defaultTheme from './style.css';
import { Header } from './header.js';
import { Block } from './block.js';
import { Row } from './row.js';
import { Title } from './title.js';

var Table = function Table(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: defaultTheme.table
  }, children);
};
Table.propTypes = {
  children: PropTypes.node
};
Table.defaultProps = {
  children: void 0
};
Table.displayName = 'Table';
Table.theme = defaultTheme;
Table.Header = Header;
Table.Title = Title;
Table.Block = Block;
Table.Row = Row;

export { Table };
//# sourceMappingURL=table.js.map
