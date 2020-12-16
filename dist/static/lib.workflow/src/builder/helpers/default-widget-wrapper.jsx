import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Markdown, Typography, mergeTheme } from '@sbol/lib.ui'
import _ from 'lodash'
import classnames from 'classnames'

import { selectors } from '../../adapter'

import style from './default-widget-wrapper.css'

const markdownDescriptionTheme = mergeTheme(Markdown.theme, {
    container: style.description
})

const DefaultWidgetWrapperComponent = ({
    colorScheme,
    title,
    description,
    hasStatus,
    children,
    theme,
    events,
    offsetClass
}) => {
    const separatedWidget = title?.length || !_.isEmpty(events)
    return (
        <div
            className={classnames(
                colorScheme && theme.wrapper,
                theme[colorScheme],
                /* TODO вынести расчет отступов в селектор https://sbtatlas.sigma.sbrf.ru/jira/browse/DBSBOLUI-3132 */
                !title && theme.singleControl,
                separatedWidget && theme.separated,
                offsetClass && theme[offsetClass],
                hasStatus && theme.status
            )}
            data-widget-scheme={colorScheme}
        >
            {title && (
                <Typography.Headline
                    mode="h5"
                    theme={mergeTheme(Typography.theme, {
                        headline: classnames(style.title, !description && theme.titleOnly)
                    })}
                >
                    {title}
                </Typography.Headline>
            )}

            {description && (
                <Markdown.Short
                    content={description}
                    theme={markdownDescriptionTheme}
                />
            )}

            {children}
        </div>
    )
}


DefaultWidgetWrapperComponent.propTypes = {
    colorScheme: PropTypes.oneOf([
        'common',
        'inset',
        'plate',
        'border',
        'plate-self'
    ]),
    title: PropTypes.string,
    description: PropTypes.string,
    hasStatus: PropTypes.bool,
    children: PropTypes.node,
    theme: PropTypes.object,
    events: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        cmd: PropTypes.string,
        uri: PropTypes.string
    })),
    offsetClass: PropTypes.string
}

DefaultWidgetWrapperComponent.defaultProps = {
    colorScheme: 'common',
    title: void '',
    description: void '',
    hasStatus: false,
    children: void 0,
    theme: style,
    events: [],
    offsetClass: ''
}

DefaultWidgetWrapperComponent.theme = style

const mapStateToProps = (state, props) => ({
    hasStatus: !!selectors.getStatusLevel(state),
    offsetClass: selectors.getDwwOffset(state, props)
})

export const DefaultWidgetWrapper = connect(mapStateToProps)(
    DefaultWidgetWrapperComponent
)

export const defaultWidgetWrapper = ({
    colorScheme,
    theme
} = {}) => (Component) => {
    const WrappedComponent = (props) => (
        <DefaultWidgetWrapper
            {...props}
            colorScheme={colorScheme}
            theme={theme}
        >
            <Component {...props} />
        </DefaultWidgetWrapper>
    )

    WrappedComponent.propTypes = {
        title: PropTypes.string,
        description: PropTypes.string
    }

    WrappedComponent.defaultProps = {
        title: void 0,
        description: void 0
    }

    WrappedComponent.WrappedComponent = Component

    return WrappedComponent
}

defaultWidgetWrapper.theme = style
