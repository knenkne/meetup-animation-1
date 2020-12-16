import _ from 'lodash'

import { Masked } from '../masked/masked'

import { typeaheadFactory } from './typeahead'

const underScoreWidthSpace = '\u2007'
const underScoreWidthSpaceRegExpGlobal = new RegExp(underScoreWidthSpace, 'g')

const createMaskedTypeahead = typeaheadFactory(
    (props) => _(props)
        .omit('placeholder')
        .extend({
            guide: true,
            placeholderChar: underScoreWidthSpace,
            keepCharPositions: true
        })
        .value(),
    (props) => _.extend(
        {},
        props,
        {
            guide: true,
            placeholderChar: '_',
            keepCharPositions: true,
            value: props.value.replace(underScoreWidthSpaceRegExpGlobal, '_')
        }),
    'KeepCharPositionsTypeahead'
)

export const KeepCharPositionsTypeahead = createMaskedTypeahead(Masked)
