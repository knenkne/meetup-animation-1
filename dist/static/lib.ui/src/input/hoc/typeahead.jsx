import React from 'react'
import _ from 'lodash'
import classnames from 'classnames'

import { getDisplayName } from '../../utils/get-display-name'
import { getExpectedWidth } from '../utils'

import style from './typeahead.css'

const omitFakeProps = ['id', 'name', 'icon', 'onBlur', 'onChange', 'onFocus']
const extendFakeProps = {
    tabIndex: -1,
    disabled: true,
    'aria-hidden': true
}

const extendNoValueFakeProps = {
    value: '',
    placeholder: void 0
}

const moveSelection = (element, value) => {
    // Фикс IE для сдвига курсора у фейкового поля (IE, игнорируя значения, оставляет курсор в нуле у полей, которые никогда не получали фокуса)
    if (element) {
        element.disabled = false // eslint-disable-line no-param-reassign, comment: для IE при сдвиге курсора надо выключать disabled
        element.setSelectionRange(value.length, value.length)
        element.disabled = true // eslint-disable-line no-param-reassign, comment: а потом снова включать его
    }
}

const isOverflow = (element) => element && (parseFloat(getExpectedWidth(element, 1)) > element.clientWidth)

export const typeaheadFactory = (propsMaker = _.identity, fakePropsMaker = _.identity) => (Component) => {
    class Typeahead extends React.Component {
        static propTypes = Component.propTypes
        static defaultProps = Component.defaultProps
        static displayName = getDisplayName(Component, 'TypeaheadComponent')
        static WrappedComponent = Component

        getWrapper = (c) => {
            this.input = c
            this.props.refWrapper(c, this.inputFake)
        }

        getWrapperFake = (c) => {
            this.inputFake = c
            moveSelection(this.inputFake, this.props.value)
        }

        render () {
            const passedProps = propsMaker(this.props)
            const passedFakeProps = _(fakePropsMaker(this.props))
                .omit(omitFakeProps)
                .extend(extendFakeProps, isOverflow(this.input) ? extendNoValueFakeProps : {})
                .value()

            return (
                <div
                    className={classnames(
                        style.wrapper,
                        this.props.disabled && style.disabled,
                        this.props.error && style.error,
                        this.props.active && style.focus
                    )}
                >
                    <Component {...passedFakeProps} refWrapper={this.getWrapperFake} />
                    <Component {...passedProps} refWrapper={this.getWrapper} />
                </div>
            )
        }
    }

    return Typeahead
}
