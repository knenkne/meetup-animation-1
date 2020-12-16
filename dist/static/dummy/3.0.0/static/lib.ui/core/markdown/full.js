import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../external-969f6c5f.js';
import 'remarkable';
import 'remarkable/lib/common/utils';
import { markdownFull } from './utils.js';
import defaultTheme from './style.css';

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Markdown)
 * Формат markdown для текстовых переменных
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Full = function Full(props) {
  var passedProps = _.omit(props, ['theme', 'content', 'children', 'size']); // In this special case we explicitly dangerously set inner HTML,
  // because it is the whole point of this component


  return /*#__PURE__*/React.createElement("div", _extends({
    "data-unit": "markdown:full"
  }, passedProps, {
    className: classnames(props.theme.container, props.theme[props.size]),
    dangerouslySetInnerHTML: {
      __html: markdownFull.render(props.content)
    } // eslint-disable-line react/no-danger, comment: Markdown - один из немногих случаев, когда позволяется делать danger

  }));
};
Full.propTypes = {
  /**
   * Markdown code
   */
  content: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    container: PropTypes.string
  }),
  size: PropTypes.oneOf(['sm', 'lg'])
};
Full.defaultProps = {
  theme: defaultTheme,
  size: 'sm'
};
Full.displayName = 'Markdown.Full';

export { Full };
//# sourceMappingURL=full.js.map
