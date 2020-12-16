import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import defaultTheme from './style.css'
import styles from './select/select.css'

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=dropdown)
 * Стандартизированная верская опции + коннект с Dropdown
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Option extends React.Component {
    static displayName = 'Dropdown.Option'

    static propTypes = {
        theme: PropTypes.object,
        children: PropTypes.node,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        onClick: PropTypes.func,
        value: PropTypes.string.isRequired,
        translations: PropTypes.shape({
            /**
             * Стандартный атрибут title. Необходим для выбора валюты. Также применим, если опция шире контента.
             */
            title: PropTypes.string
        }),
        altSymbol: PropTypes.string,
        additional: PropTypes.string
    }

    static contextTypes = {
        dropdown: PropTypes.object
    }

    static defaultProps = {
        theme: defaultTheme,
        onClick: _.noop,
        children: void 0,
        description: void 0,
        translations: {},
        altSymbol: void 0,
        additional: void 0
    }

    componentDidMount () {
        this.context.dropdown.registerOption(this)
    }

    componentWillUnmount () {
        this.context.dropdown.unregisterOption(this.props.value)
    }

    getPassedProps = () => {
        const { theme, value, translations } = this.props
        const { getValue, getSelectedValue, getOpened } = this.context.dropdown

        return _(this.props)
            .omit([
                'theme',
                'children',
                'title',
                'translations',
                'description',
                'selected',
                'altSymbol'
            ])
            .extend({
                disabled: !getOpened(),
                'data-unit': 'dropdown:option',
                className: classnames(theme.item, {
                    [theme.checked]: value === getValue(),
                    [theme.selected]: value === getSelectedValue()
                }),
                onMouseDown: this.handleClick, /* Для возможности закрыть dropdown по выбору с мышки */
                onClick: this.handleClick, /* Для обработки touch-событий */
                role: 'option',
                'aria-checked': value === getValue(),
                'aria-selected': value === getSelectedValue(),
                ref: this.setRefOption,
                title: translations.title
            })
            .value()
    }

    setRefOption = (component) => {
        this.option = component
    }

    handleClick = () => {
        const { onChange, handleClose } = this.context.dropdown
        const { value, onClick } = this.props

        onChange(value)
        onClick(value)
        handleClose()
    }

    render () {
        const { theme, children, title, description, additional } = this.props

        return (
            <div {...this.getPassedProps()}>
                {children && <span className={theme.itemIcon}>{children}</span>}
                <span className={theme.itemTitle} data-unit="dropdown:option:title">{title}</span>
                {description && <span className={theme.itemDescription}>{description}</span>
                }
                {additional && <span className={styles.itemAside}>{additional}</span> }
            </div>
        )
    }
}
