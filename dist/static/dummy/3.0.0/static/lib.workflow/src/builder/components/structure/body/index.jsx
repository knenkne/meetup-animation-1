/* eslint-disable complexity */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { Markdown, Icon, Typography, mergeTheme } from '@sbol/lib.ui'

import WidgetList from '../widget-list'
import { Fader } from '../../fader'
import { STRUCTURE_POSITION } from '../const'

import styles from './styles.css'

const iconTheme = { icon: classnames(Icon.theme.icon, styles.expandIcon) }
const markdownDescriptionTheme = mergeTheme(Markdown.theme, {
    container: styles.description
})

export const Body = ({ screens, isLoading }) => {
    const [activeScreen, setActiveScreen] = React.useState()

    const handleFocusIn = React.useCallback((event) => {
        const index = event.currentTarget.getAttribute('data-index')
        setActiveScreen(index)
    }, [])

    return (
        <section className={styles.body}>
            {screens.map(({ widgets, title, description }, index) => (
                <div
                    key={title || description || index}
                    data-index={index}
                    className={classnames(
                        styles.screen,
                        !title && styles.noTitle,
                        Number(activeScreen) === Number(index) && styles.active
                    )}
                    onFocusCapture={handleFocusIn}
                >
                    <section>
                        {(title || description) && (
                            <div className={styles.heading}>
                                {title && (
                                    <React.Fragment>
                                        <h4
                                            className={classnames(
                                                Typography.theme.h4,
                                                styles.title
                                            )}
                                        >
                                            {title}
                                        </h4>
                                        {index === 0 && (
                                            <div className={styles.icons}>
                                                <div className={styles.alertSuccessWrapper}>
                                                    <Icon
                                                        name="icon:core/common/alert-success"
                                                        size="lg"
                                                    />
                                                </div>
                                                <div className={styles.expand}>
                                                    <Icon
                                                        name="icon:core/common/down-arrow"
                                                        theme={iconTheme}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                )}

                                {description && (
                                    <Markdown.Short
                                        content={description}
                                        size="lg"
                                        theme={markdownDescriptionTheme}
                                    />
                                )}
                            </div>
                        )}

                        {!_.isEmpty(widgets) && (
                            <WidgetList list={widgets} structurePosition={STRUCTURE_POSITION.body} />
                        )}
                    </section>
                    {isLoading && <Fader />}
                </div>
            ))}
        </section>
    )
}

Body.propTypes = {
    screens: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool
}

Body.defaultProps = {
    screens: [],
    isLoading: false
}

Body.displayName = 'Body'

export default Body
