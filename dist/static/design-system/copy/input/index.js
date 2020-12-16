import _ from 'lodash'
import { conformToMask } from 'text-mask-core/dist/textMaskCore'

import WrappedInput from './input'
import { Counter } from './counter/counter'
import WrappedText from './text/text'
import { Masked } from './masked/masked'
import { Money } from './money/money'
import { Password } from './password'
import { Numeric } from './numeric/numeric'
import { Currency } from './currency/currency'
import { CurrencySelect } from './currency-select/currency-select'
import { CurrencySelectOption } from './currency-select/currency-select-option'
import { Suggest } from './suggest'
import { LocalPhone } from './phone'
import { KeepCharPositionsTypeahead } from './hoc/keep-char-positions-typeahead'
// HOCs
import { autoSizeFactory } from './hoc/auto-size'
import { tooltipedFactory } from './hoc/tooltiped'
import { labeledFactory } from './hoc/labeled'
import { typeaheadFactory } from './hoc/typeahead'
// utils
import { formatNumberValue, getInputDiff } from './utils'

const createMaskedTypeahead = typeaheadFactory(
    (props) => _(props).omit('placeholder').extend({ guide: false }).value(),
    (props) => _.extend({}, props, { guide: true }),
    'Input.Masked.Typeahead'
)

const Input = WrappedInput
Input.Text = WrappedText
Input.Masked = Masked
Input.Masked.Typeahead = createMaskedTypeahead(Masked)
Input.Masked.Typeahead.displayName = 'Input.Masked.Typeahead'
Input.Masked.Typeahead.KeepCharPositions = KeepCharPositionsTypeahead
Input.Masked.Typeahead.KeepCharPositions.displayName = 'Input.Masked.Typeahead.KeepCharPositions'
Input.Numeric = Numeric
Input.Money = Money
Input.Numeric.Currency = Currency
Input.CurrencySelect = CurrencySelect
Input.CurrencySelect.Option = CurrencySelectOption
Input.Counter = Counter
Input.Password = Password
Input.Suggest = Suggest
Input.LocalPhone = LocalPhone

Input.tooltipedFactory = tooltipedFactory
Input.labeledFactory = labeledFactory
Input.labelledFactory = labeledFactory
Input.autoSizeFactory = autoSizeFactory
Input.typeaheadFactory = typeaheadFactory

Input.inputErrorHandler = labeledFactory()

Input.formatNumberValue = formatNumberValue
Input.conformToMask = conformToMask
Input.getInputDiff = getInputDiff

export { Input }
