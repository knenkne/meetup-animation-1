import '../../_rollupPluginBabelHelpers-687385f0.js';
import 'react';
import 'prop-types';
import _ from 'lodash';
import 'classnames';
import '../../utils/get-display-name.js';
import '../../utils/hoc/style.css';
import '../../utils/hoc/deprecate.js';
import '../../utils/hoc/experimental.js';
import '../../utils/hoc/error-adapter.js';
import '../../utils/hoc/omittere.js';
import '../../utils/hoc/accessibility-relocation.js';
import '../../utils/handlers.js';
import '../../utils/pluralize.js';
import '../../utils/scroll-to.js';
import '../../utils/format-phone-number.js';
import '../../utils/memoize-func-with-args.js';
import '../../utils/auto-top-check-by-window.js';
import '../../utils/merge-theme.js';
import '../../utils/styles/media.config.css';
import '../../utils/adaptive.js';
import '../../utils/pseudo/pseudo-button.js';
import '../../utils/get-card-icon.js';
import '../../utils/get-ivestments-icon.js';
import '../../utils/get-metal-icon.js';
import '../../utils/get-target-icon.js';
import '../../icon/style.css';
import '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import '../../utils/set-project-id.js';
import '../../utils/make-direction.js';
import '../../utils/show-error.js';
import 'bignumber.js';
import 'text-mask-core/dist/textMaskCore';
import 'text-mask-addons/dist/createNumberMask';
import '../utils.js';
import '../input.css';
import '../input.js';
import '../masked/masked-format.js';
import { Masked } from '../masked/masked.js';
import './typeahead.css';
import { typeaheadFactory } from './typeahead.js';

var underScoreWidthSpace = "\u2007";
var underScoreWidthSpaceRegExpGlobal = new RegExp(underScoreWidthSpace, 'g');
var createMaskedTypeahead = typeaheadFactory(function (props) {
  return _(props).omit('placeholder').extend({
    guide: true,
    placeholderChar: underScoreWidthSpace,
    keepCharPositions: true
  }).value();
}, function (props) {
  return _.extend({}, props, {
    guide: true,
    placeholderChar: '_',
    keepCharPositions: true,
    value: props.value.replace(underScoreWidthSpaceRegExpGlobal, '_')
  });
}, 'KeepCharPositionsTypeahead');
var KeepCharPositionsTypeahead = createMaskedTypeahead(Masked);

export { KeepCharPositionsTypeahead };
//# sourceMappingURL=keep-char-positions-typeahead.js.map
