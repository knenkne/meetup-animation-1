import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { Typography } from '../typography'
import { Icon } from '../icon'
import { Grid } from '../grid'
import { deprecate } from '../utils/hoc'

import { Content } from './content'
import { Additional } from './additional'
import { Actions } from './actions'
import { Info } from './info'
import { Hatching } from './hatching'
import defaultTheme from './style.css'


const iconTheme = _.extend({}, Icon.theme, { icon: classnames(Icon.theme.icon, defaultTheme.statusIcon) })

const statusIcons = {
    done: 'icon:core/common/status-done',
    draft: 'icon:core/common/status-draft',
    error: 'icon:core/common/status-error',
    waiting: 'icon:core/common/status-waiting',
}

const omitStatus = [
    'mode',
    'title',
    'description',
    'children',
    'size',
]

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=ST%20Blocks%20Status)
 * Блок статуса процесса по услуге
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Status = (props) => {
    const { title, description, mode, size } = props
    const passedProps = _.omit(props, omitStatus)
    const children = React.Children.toArray(props.children)
    const info = _.remove(children, (el) => _.get(el, 'type.displayName') === 'Status.Info')

    return (
        <Grid mode="strict">
            <Grid.Cell mode="strict" lg={15} md={15} sm={15} offsetLg={1} offsetMd={1} offsetSm={1}>
                <article {...passedProps} className={classnames(defaultTheme.status, defaultTheme[size])} data-unit={`status:${mode}`}>
                    <Hatching mode={mode} />
                    <div className={defaultTheme.iconWrap} data-unit={`icon:${mode}`}>
                        <Icon theme={iconTheme} name={statusIcons[mode]} />
                    </div>

                    <div className={defaultTheme.body} data-unit="status:body">
                        <div className={defaultTheme.main} data-unit="status:main">
                            <div className={defaultTheme.description} data-unit="status:description">
                                {description}
                            </div>
                            <Typography.Subheader data-unit="status:title">
                                {title}
                            </Typography.Subheader>
                            {children}
                        </div>
                        {info}
                    </div>
                </article>
            </Grid.Cell>
        </Grid>
    )
}

Status.propTypes = {
    mode: PropTypes.oneOf([
        'draft',
        'waiting',
        'done',
        'error'
    ]).isRequired,
    size: PropTypes.oneOf(['sm', 'lg']),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.node
}

Status.defaultProps = {
    children: void 0,
    size: 'sm',
}

Status.theme = defaultTheme
Status.Content = Content
Status.Additional = Additional
Status.Actions = Actions
Status.Info = Info
Status.Hatching = Hatching
Status.displayName = 'Status'

export default deprecate('4.0.0', 'Status')(Status)
