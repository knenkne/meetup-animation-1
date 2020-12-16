import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { Icon } from '../../icon'
import { Dropdown } from '../../dropdown'
import { MarkedText } from '../../marked-text'

import { markedTextTheme, iconTheme } from './themes'

const omitFromOption = [
    'searchString',
    'iconFromCode',
    'fallbackIcon'
]

export class Option extends Dropdown.Option {
    static displayName = 'Input.Suggest.Option'

    render () {
        const { theme, title, description, value, searchString, icon, iconFromCode, fallbackIcon } = this.props

        return (
            <div {..._.omit(this.getPassedProps(), omitFromOption)}>
                {icon &&
                <span className={classnames(theme.itemIcon, { [theme.itemIconFallback]: fallbackIcon })}>
                    {iconFromCode ? (
                        <Icon
                            name={icon}
                            theme={iconTheme}
                            data-text={fallbackIcon}
                            mode={fallbackIcon ? 'fallback' : void 0}
                        />
                    ) : (
                        <img className={theme.img} alt={value} src={icon} />
                    )}
                </span>
                }
                <span className={theme.itemTitle}>
                    <MarkedText title={title} value={searchString} theme={markedTextTheme} />
                </span>
                {!_.isUndefined(description) &&
                <span className={theme.itemDescription}>
                    <MarkedText title={description} value={searchString} theme={markedTextTheme} />
                </span>
                }
            </div>
        )
    }
}

Option.propTypes = {
    ...Dropdown.Option.propTypes,
    searchString: PropTypes.string,
    icon: PropTypes.string,
    iconFromCode: PropTypes.bool,
    fallbackIcon: PropTypes.string
}
Option.defaultProps = {
    ...Dropdown.Option.defaultProps,
    searchString: void 0,
    icon: void 0,
    iconFromCode: false,
    fallbackIcon: void 0
}
