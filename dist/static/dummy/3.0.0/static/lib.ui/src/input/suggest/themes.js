import classnames from 'classnames'

import { Dropdown } from '../../dropdown'
import { Icon } from '../../icon'
import { Input } from '../input'
import { Loader } from '../../loader'
import { MarkedText } from '../../marked-text'

import style from './style.css'

export const dropdownTheme = {
    ...Dropdown.theme,
    dropdown: classnames(Dropdown.theme.dropdown, style.dropdown)
}

export const contentsTheme = {
    ...Dropdown.theme,
    contents: classnames(Dropdown.theme.contents, style.contents),
    contentsView: classnames(Dropdown.theme.contentsView, style.contentsView)
}

export const optionTheme = {
    ...Dropdown.theme,
    item: classnames(Dropdown.theme.item, style.item),
    itemIcon: classnames(Dropdown.theme.itemIcon, style.itemIcon),
    itemIconFallback: style.itemIconFallback,
    itemTitle: classnames(Dropdown.theme.itemTitle, style.itemTitle),
    itemDescription: classnames(Dropdown.theme.itemDescription, style.itemDescription),
    checked: classnames(Dropdown.theme.checked, style.itemChecked)
}

export const optionThemeWithIcon = {
    ...optionTheme,
    item: classnames(Dropdown.theme.item, style.item, style.itemWithIcon)
}

export const iconTheme = {
    icon: classnames(Icon.theme.icon, style.itemIconElement)
}

export const inputTheme = {
    ...Input.theme,
    input: classnames(Input.theme.input, style.inputField)
}

export const loaderTheme = {
    ...Loader.theme,
    loader: style.loader,
    loaderPoint: style.loaderPoint
}

export const markedTextTheme = {
    text: classnames(MarkedText.theme.text, style.text),
    marked: classnames(MarkedText.theme.marked, style.marked)
}
