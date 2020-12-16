import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { Dropdown } from '../../../dropdown'
import { omittere } from '../../../utils'
import { CalendarItem } from '../calendar-item/calendar-item'
import { SingleInput } from '../../date-picker/single-input'
import style from '../../style.css'

const KEY_ENTER = 13

export const dropdownCombiner = (Input = SingleInput, Calendar = CalendarItem, contentsStyle = style.contentsView) => {
    const InputHOCed = omittere(['forceOpened', 'initialTime', 'type'])(Input)

    return class Wrapped extends React.Component {
        static displayName = 'dropdownCombinerHOC'

        static propTypes = {
            value: PropTypes.string,
            showDate: PropTypes.string,
            initialValue: PropTypes.string,
            mode: PropTypes.string,
            restriction: PropTypes.func,
            onChange: PropTypes.func,
            onFocus: PropTypes.func,
            onBlur: PropTypes.func,
            error: PropTypes.string,
            disabled: PropTypes.bool,
            translations: PropTypes.object,
            startingYear: PropTypes.string
        }

        static defaultProps = {
            value: '',
            showDate: '',
            mode: 'default',
            initialValue: '',
            restriction: _.stubTrue,
            onChange: _.noop,
            onFocus: _.noop,
            onBlur: _.noop,
            error: void 0,
            disabled: false,
            translations: void 0,
            startingYear: void 0
        }

        state = {
            enter: false,
            isOpened: false,
        }

        handleKeyDown = (e) => {
            if (e.keyCode === KEY_ENTER) {
                this.setState({
                    enter: true
                })
            }
        }

        handleFocus = () => {
            this.setState({
                enter: false
            })
        }

        handleToggle = () => this.setState((state) => ({ isOpened: !state.isOpened }))

        render () {
            const {
                value,
                restriction,
                translations,
                initialValue,
                onChange,
                disabled,
                mode,
                showDate,
                startingYear,
                ...props
            } = this.props

            const inputPassedProps = {
                disabled,
                value,
                onChange,
                ...props
            }
            if (disabled) {
                return (<InputHOCed {...inputPassedProps} />)
            }

            return (
                <Dropdown
                    data-unit="calendar"
                    mode="focus"
                    onKeyDown={this.handleKeyDown}
                    onFocus={this.handleFocus}
                    onOpen={this.handleToggle}
                    onClose={this.handleToggle}
                >
                    <InputHOCed {...inputPassedProps} />
                    <Dropdown.Contents
                        theme={{
                            ...Dropdown.theme,
                            contents: classnames(Dropdown.theme.contents, style.contents, this.state.enter && style.hidden),
                            contentsView: classnames(Dropdown.theme.contentsView, contentsStyle)
                        }}
                        aria-hidden="true"
                        align={Dropdown.utils.autoLeftCheckByWindow}
                    >
                        <Calendar
                            isOpened={this.state.isOpened}
                            value={value}
                            mode={mode}
                            to={showDate}
                            restriction={restriction}
                            translations={translations}
                            initialValue={initialValue}
                            onChange={onChange}
                            startingYear={startingYear}
                        />
                    </Dropdown.Contents>
                </Dropdown>
            )
        }
    }
}
