import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { stopPropagationHandler } from '../utils'

import { autoTopCheckByWindow, autoLeftCheckByParent, autoScroll } from './utils'
import defaultTheme from './style.css'

const safeCall = (func, ...args) => _.isFunction(func) ? func(...args) : func

const omitProps = [
    'theme',
    'verticalAlign',
    'align',
    'onSwitch',
    'children',
    'target',
    'mode',
    'nodeTarget',
    'forceOpened',
    'nodeSelectedOption',
    'refContents',
    'id',
    'name'
]

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=dropdown)
 * Технический компонент, указатель на непосредственно выпадающий список
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Contents extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node,
        theme: PropTypes.object,
        /**
         * Горизонтальное выравнивание Contents относительно Target
         */
        align: PropTypes.oneOfType([ // eslint-disable-line react/no-unused-prop-types, comment: вообще используется как newProps
            PropTypes.func,
            PropTypes.oneOf(['left', 'right'])
        ]),
        /**
         * Вертикальное выравнивание Contents относительно Target
         */
        verticalAlign: PropTypes.oneOfType([ // eslint-disable-line react/no-unused-prop-types, comment: вообще используется как newProps
            PropTypes.func,
            PropTypes.oneOf(['top', 'bottom'])
        ]),
        onClick: PropTypes.func,
        mode: PropTypes.oneOf(['focus', 'click', 'none']),
        /**
         * Dropdown передает самостоятельно
         */
        nodeTarget: PropTypes.object, // eslint-disable-line react/no-unused-prop-types, comment: вообще используется как newProps
        /**
         * Dropdown передает самостоятельно
         */
        nodeSelectedOption: PropTypes.object,
        forceOpened: PropTypes.bool,
        refContents: PropTypes.func,
        /**
         * Параметры для native dropdown
         */
        id: PropTypes.string,
        name: PropTypes.string,
        onChange: PropTypes.func,
        value: PropTypes.string
    }

    static defaultProps = {
        children: void 0,
        theme: defaultTheme,
        align: autoLeftCheckByParent,
        verticalAlign: autoTopCheckByWindow,
        onClick: _.noop,
        mode: 'click',
        nodeTarget: void 0,
        nodeSelectedOption: void 0,
        forceOpened: false,
        refContents: _.noop,

        id: void 0,
        name: void 0,
        onChange: _.noop,
        value: void 0
    }

    // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method
    UNSAFE_componentWillReceiveProps (nextProps) {
        if (!this.props.forceOpened && nextProps.forceOpened) {
            const savedDisplay = _.get(this.contents, 'parentNode.style.display')
            this.setDisplay('block')
            this.verticalAlign = safeCall(nextProps.verticalAlign, this.contents, nextProps.nodeTarget)
            this.align = safeCall(nextProps.align, this.contents, nextProps.nodeTarget)
            this.setDisplay(savedDisplay)
        }

        if (nextProps.nodeSelectedOption && this.props.nodeSelectedOption !== nextProps.nodeSelectedOption) {
            autoScroll(nextProps.nodeSelectedOption, this.contentsView)
        }
    }

    setRefContents = (component) => {
        this.contents = component
    }

    setRefContentsView = (component) => {
        this.contentsView = component
        this.props.refContents(component)
    }

    setDisplay = (value) => {
        if (this.contents) {
            this.contents.parentNode.style.display = value
        }
    }

    verticalAlign = 'bottom'
    align = 'left'

    render () {
        const { theme, children, onClick, forceOpened, mode } = this.props

        const passedProps = _(this.props)
            .omit(omitProps)
            .extend({
                className: classnames(theme.contents, theme[this.verticalAlign], theme[this.align], forceOpened && theme.opened),
                'data-unit': 'dropdown:bubble',
                onClick: stopPropagationHandler(onClick),
                role: mode ? 'listbox' : void 0
            })
            .value()


        return (
            <div {...passedProps}>
                <div
                    className={theme.contentsWrapper}
                    ref={this.setRefContents}
                    data-unit="dropdown:contents"
                >
                    <div ref={this.setRefContentsView} className={theme.contentsView}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

Contents.displayName = 'Dropdown.Contents'
