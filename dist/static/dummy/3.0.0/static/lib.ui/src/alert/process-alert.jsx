import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { Icon } from '../icon'

import { Description } from './description'
import { Actions } from './actions'
import defaultTheme from './process-style.css'

const iconMap = {
    success: 'icon:core/common/alert-success',
    info: 'icon:core/common/alert-info',
    error: 'icon:core/common/alert-error',
    draft: 'icon:core/common/alert-draft',
    warning: 'icon:core/common/alert-draft'
}

const iconTheme = { self: classnames(Icon.theme.self, defaultTheme.icon) }

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca761ce7afbd0be3d4613c0)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class ProcessAlert extends React.PureComponent {
    titleId = _.uniqueId('alert-process-title-')
    descriptionId = _.uniqueId('alert-process-description-')

    render () {
        const { title, mode, children, a11y } = this.props

        const hasChildren = React.Children.toArray(children).some(Boolean)
        const extend = {
            className: classnames(defaultTheme.alert, defaultTheme[mode]),
            'data-unit': `process:alert:${mode}`,
            role: _.get(a11y, 'role', 'alert'),
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
            <div className={defaultTheme.wrapper}>
                <div {...passedProps}>
                    <Icon theme={iconTheme} name={iconMap[mode]} size="self" />
                    {title &&
                    <h3
                        data-unit="process:alert:title"
                        className={classnames(defaultTheme.title, !hasChildren && defaultTheme.offset)}
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
            </div>
        )
    }
}

ProcessAlert.propTypes = {
    mode: PropTypes.oneOf([
        'success',
        'info',
        'error',
        'draft',
        'warning'
    ]).isRequired,
    title: PropTypes.string,
    children: PropTypes.node,
    a11y: PropTypes.shape({
        /**
         * Текст, который должен описывать Alert.Process на тот случай, если title у компонента отсутствует. Не передавать, если props.title есть
         */
        title: PropTypes.string,
        /**
         * Роль алерта под замену
         */
        role: PropTypes.string
    }).isRequired
}

ProcessAlert.defaultProps = {
    title: void 0,
    children: void 0
}

ProcessAlert.theme = defaultTheme
ProcessAlert.Description = Description
ProcessAlert.Actions = Actions
ProcessAlert.displayName = 'Alert.Process'
