import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { Input } from '../input'
import { Icon } from '../../icon'
import { handleStopPropagation, memoizeFuncWithArgs, omittere } from '../../utils'

import { iconTheme, inputTheme } from './themes'
import style from './style.css'

const omitSuggestInput = [
    'active',
    'asyncValidating',
    'autofilled',
    'dirty',
    'dispatch',
    'fallbackIcon',
    'forceOpened',
    'hasServerError',
    'icon',
    'iconFromCode',
    'initialOptions',
    'initialQuery',
    'initialValue',
    'inputComponent',
    'invalid',
    'isLoading',
    'isSearch',
    'keyboardTimeout',
    'masked',
    'mode',
    'onChangeInput',
    'onChangeOption',
    'onDataRequest',
    'onRetry',
    'options',
    'pristine',
    'query',
    'requestTimeout',
    'submitFailed',
    'submitting',
    'touched',
    'translations',
    'valid',
    'visited',
    'warning',
    'withOptions'
]

const getIconName = (mode, iconName) => mode ? `icon:core/common/${mode}` : iconName

export class TargetInput extends React.Component {
    handleChange = (...args) => {
        this.props.onChange(...args)
        if (this.context.dropdown) {
            this.context.dropdown.handleOpen()
        }
    }

    render () {
        const {
            icon, fallbackIcon, value, disabled, onChange,
            forceOpened, mode, withOptions, inputComponent: Component
        } = this.props

        const iconName = mode || icon

        return (
            <div className={classnames(style.input, style[mode], { [style.inputWithIcon]: iconName, [style.opened]: forceOpened && withOptions })}>
                {iconName &&
                <span className={classnames(style.inputIcon, { [style.itemIconFallback]: fallbackIcon })}>
                    {this.renderIcon(iconName)}
                </span>
                }
                <Component autoComplete="none" {...this.props} theme={inputTheme} onChange={this.handleChange} />
                {value && !disabled &&
                <button
                    className={style.close}
                    type="button"
                    onClick={memoizeFuncWithArgs(onChange, '')}
                    aria-hidden
                    tabIndex={-1}
                    onFocus={handleStopPropagation}
                >
                    <Icon name="icon:core/common/close" />
                </button>
                }
            </div>
        )
    }

    renderIcon (iconName) {
        const { icon, iconFromCode, fallbackIcon, mode } = this.props

        if (mode || (icon && iconFromCode)) {
            return (
                <Icon
                    name={getIconName(mode, iconName)}
                    theme={iconTheme}
                    data-text={fallbackIcon}
                    mode={fallbackIcon ? 'fallback' : void 0}
                />
            )
        } else if (icon) {
            return <img className={style.img} alt={fallbackIcon || ''} src={icon} />
        }

        return void 0
    }
}

TargetInput.propTypes = {
    icon: PropTypes.string,
    fallbackIcon: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    iconFromCode: PropTypes.bool,
    disabled: PropTypes.bool,
    forceOpened: PropTypes.bool,
    mode: PropTypes.oneOf(['search', void 0]),
    inputComponent: PropTypes.func,
    withOptions: PropTypes.bool
}

TargetInput.contextTypes = {
    dropdown: PropTypes.shape({
        onOpen: PropTypes.func
    })
}

TargetInput.defaultProps = {
    icon: void 0,
    fallbackIcon: void 0,
    value: '',
    onChange: _.noop,
    iconFromCode: false,
    disabled: false,
    forceOpened: false,
    mode: void 0,
    inputComponent: omittere(omitSuggestInput)(Input),
    withOptions: false
}

TargetInput.displayName = 'Input.Suggest.TargetInput'
