import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { Icon } from '../icon'

import { Description } from './description'
import { Actions } from './actions'
import defaultTheme from './style.css'

const iconMap = {
    success: 'icon:core/common/system-alert-success',
    info: 'icon:core/common/system-alert-info',
    error: 'icon:core/common/system-alert-error'
}

const iconTheme = { self: classnames(Icon.theme.self, defaultTheme.icon) }

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca761ce7afbd0be3d4613c0)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class SystemAlert extends React.PureComponent {
    titleId = _.uniqueId('alert-process-title-')
    descriptionId = _.uniqueId('alert-process-description-')

    render () {
        const { title, mode, children, a11y } = this.props

        const extend = {
            className: classnames(defaultTheme.alert, defaultTheme[mode], !children && defaultTheme.onlyTitle),
            'data-unit': `process:alert:${mode}`,
            role: 'alert',
            'aria-describedby': this.descriptionId
        }

        if (title) {
            extend['aria-labelledby'] = this.titleId
        } else {
            extend['aria-label'] = a11y.title
        }

        const passedProps = _(this.props)
            .omit(this.props, [
                'title',
                'mode',
                'children',
                'a11y',
                'size'
            ])
            .extend(extend)
            .value()

        return (
            <div {...passedProps}>
                <Icon theme={iconTheme} name={iconMap[mode]} size="self" />
                {title &&
                <h3
                    data-unit="process:alert:title"
                    className={defaultTheme.title}
                    id={this.titleId}
                >
                    {title}
                </h3>
                }
                {React.Children.map(children, (child) => {
                    if (_.get(child, 'type.displayName') === Description.displayName) {
                        return React.cloneElement(child, _.extend({}, child.props, { id: this.descriptionId }))
                    }

                    return child
                })}
            </div>
        )
    }
}

SystemAlert.propTypes = {
    mode: PropTypes.oneOf([
        'success',
        'info',
        'error'
    ]).isRequired,
    title: PropTypes.string,
    children: PropTypes.node,
    a11y: PropTypes.shape({
        /**
         * Текст, который должен описывать Alert.System на тот случай, если title у компонента отсутствует. Не передавать, если props.title есть
         */
        title: PropTypes.string
    }).isRequired
}

SystemAlert.defaultProps = {
    title: void 0,
    children: void 0
}

SystemAlert.theme = defaultTheme
SystemAlert.Description = Description
SystemAlert.Actions = Actions
SystemAlert.displayName = 'Alert.System'
