/* eslint-disable quote-props, comment: удобно поддерживать строковое единообразие ключей объекта */
import * as exports from '..'

import { exportCheck } from './export-check'
import { interfaceCheck } from './interface-check'
import { themeCheck } from './theme-check'
import { displayNameCheck } from './display-name-check'

const exportsExclusions = [
    'Link.navigation'
]

const {
    exclusions: {
        accordionOptions,
        labeledOptions,
        linkOptions,
        inputRestrictOptions,
        directionOptions,
        calendarOptions,
        rangeOptions,
        currencyOptions,
        dropdownOptions,
        selectOptions,
        stagesOptions,
        stagesStepOptions,
        gridOptions,
        inputOptions,
        maskOptions,
        numberOptions,
        suggestOptions,
        sliderOptions,
        tabsOptions,
        tabOptions,
        markdownOptions,
        timeoutOptions,
        typographyOptions,
        inputSuggestDynamicOptions,
        inputSuggestOptions,
        inputSuggestOptionOptions,
        inputSuggestInputOptions,
        events,
        horizontalScroll,
        localPhone,
    }
} = interfaceCheck

const componentsWithInterfaceExclusions = {
    'Accordion': accordionOptions,
    'Accordion.Item': accordionOptions,
    'Link': linkOptions,
    'Link.Auto': linkOptions,
    'Button': linkOptions,
    'Button.Info': directionOptions,
    'Button.Command': directionOptions,
    'Calendar': [...inputRestrictOptions, ...linkOptions, ...calendarOptions],
    'Calendar.Year': [...inputRestrictOptions, ...calendarOptions],
    'Calendar.MonthYear': [...inputRestrictOptions, ...calendarOptions],
    'Calendar.Quarter': inputRestrictOptions,
    'Calendar.Range': [...inputRestrictOptions, ...rangeOptions],
    'Currency': currencyOptions,
    'Dropdown.Contents': dropdownOptions,
    'Dropdown.Option': dropdownOptions,
    'Dropdown.Select': selectOptions,
    'Dropdown.Link': linkOptions,
    'Grid.Cell': gridOptions,
    'Input': inputOptions,
    'Input.General': inputOptions,
    'Input.Counter': numberOptions,
    'Input.Masked': maskOptions,
    'Input.Masked.Typeahead': maskOptions,
    'Input.Masked.Typeahead.KeepCharPositions': maskOptions,
    'Input.Number': numberOptions,
    'Input.Number.Currency': numberOptions,
    'Input.Numeric': numberOptions,
    'Input.Numeric.Currency': numberOptions,
    'Input.Money': numberOptions,
    'Input.LocalPhone': [...suggestOptions, ...localPhone],
    'Input.Password': [...inputOptions, ...directionOptions],
    'FastActions.FastAction': linkOptions,
    'FastActions.TimerAction': [...linkOptions, 'timerTitle'],
    'FullWidth': ['className'],
    'FullWidth.Inner': ['className'],
    'CardNumber': ['className'],
    'Amount': ['className', 'code'],
    'Labeled': labeledOptions,
    'Menu': selectOptions,
    'Slider': [...sliderOptions, ...numberOptions],
    'Stages': [...stagesOptions],
    'Stages.Step': [...stagesStepOptions],
    'Listbox': selectOptions,
    'Tabs': tabsOptions,
    'Tabs.Tab': tabOptions,
    'Tooltip.Tip': directionOptions,
    'Typography.Headline': typographyOptions,
    'Typography.Title': typographyOptions,
    'Markdown.Short': markdownOptions,
    'Markdown.Full': markdownOptions,
    'PseudoButton': events,
    'Status.Hatching': directionOptions,
    'Input.Suggest': inputSuggestOptions,
    'Combobox': [...timeoutOptions, ...dropdownOptions, ...inputSuggestOptions, ...inputSuggestDynamicOptions],
    'ComboboxWrapped': [...inputSuggestOptions, ...inputSuggestDynamicOptions],
    'Combobox.WithRequest': [...timeoutOptions, ...dropdownOptions, ...inputSuggestOptions, ...inputSuggestDynamicOptions],
    'Combobox.View': [...timeoutOptions, ...dropdownOptions, ...inputSuggestOptions, ...inputSuggestDynamicOptions],
    'Input.Suggest.Option': [...inputSuggestOptionOptions, ...dropdownOptions],
    'Input.Suggest.TargetInput': inputSuggestInputOptions,
    'Input.Suggest.Dynamic': [...timeoutOptions, ...inputSuggestDynamicOptions],
    'Icon': ['onError'],
    'HorizontalScroll': horizontalScroll
}

describe('Открытое API библиотеки', () => {
    it('все экспортируемые компоненты и функции должны быть объявлены', () => {
        exportCheck(exports, exportsExclusions)
    })
    it('все компоненты должны обладать корректным интерфейсом с зарегистрированными исключениями, если таковые есть', () => {
        interfaceCheck(exports, componentsWithInterfaceExclusions)
    })
    it('все компоненты композиции должны обладать хотя бы одним объектом темы', () => {
        themeCheck(exports)
    })
    it('все displayName компонентов должны отражать их семантическое назначение', () => {
        displayNameCheck(exports)
    })
})
