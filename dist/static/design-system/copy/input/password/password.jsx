import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import InputWrapper from '../input'

import { Eye } from './eye'
import style from './input-style.css'

const defaultTheme = {
    ...InputWrapper.theme,
    ...style,
    input: classnames(InputWrapper.theme.input, style.input)
}

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5c8a5f5f9663d725192e86cf)
 * Поле ввода пароля
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Password extends React.PureComponent {
    state = { showPassword: false }

    getInputRef = (element) => {
        this.props.refInput(element)
        this.input = element
    }

    handleOpenEye = () => {
        this.setState({ showPassword: true })
    }

    handleCloseEye = () => {
        if (this.input) {
            this.input.focus()
        }
        this.setState({ showPassword: false })
    }

    render () {
        const { mode, theme, ...passedProps } = this.props

        const showEye = !this.props.disabled && (mode !== 'hideOnEmpty' || this.props.value) && mode !== 'noEye'

        return (
            <div className={classnames(theme.passwordBlock, !this.state.showPassword ? theme.showPassword : '')}>
                <InputWrapper
                    {..._.omit(passedProps, 'refInput')}
                    type={this.state.showPassword ? 'text' : 'password'}
                    refWrapper={this.getInputRef}
                    theme={theme}
                />
                {showEye &&
                    <div className={theme.eye}>
                        <Eye
                            onOpen={this.handleOpenEye}
                            onClose={this.handleCloseEye}
                            isOpen={this.state.showPassword}
                        />
                    </div>
                }
            </div>
        )
    }
}

Password.propTypes = {
    refInput: PropTypes.func,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    mode: PropTypes.oneOf(['hideOnEmpty', 'noEye', 'showOnEmpty']),
    direction: PropTypes.string,
    translations: PropTypes.shape({
        showPassword: PropTypes.string
    }),
    theme: PropTypes.shape({
        input: PropTypes.string,
        passwordBlock: PropTypes.string,
        eye: PropTypes.string,
        block: PropTypes.string,
        disabled: PropTypes.string,
        error: PropTypes.string,
        icon: PropTypes.string,
        inputIcon: PropTypes.string,
        showPassword: PropTypes.string
    })
}

Password.defaultProps = {
    refInput: _.noop,
    disabled: false,
    value: void 0,
    direction: 'topLeft',
    mode: 'hideOnEmpty',
    translations: {
        showPassword: void 0
    },
    theme: defaultTheme,
}

Password.theme = defaultTheme
Password.displayName = 'Input.Password'
