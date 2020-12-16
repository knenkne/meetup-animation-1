import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getConfigValue } from '@sbol/lib.app'
import { selectors as workflowSelectors, DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { Card, Markdown, mergeTheme } from '@sbol/lib.ui'
import { WorkflowPropTypes } from '@sbol/utils'

import { BannerAction } from './components'
import theme from './style.css'

const PATH = `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/banners/`
const cardTheme = mergeTheme(Card.theme, {
    container: theme.bannerContainer
})
const descriptionTheme = mergeTheme(Markdown.theme, {
    container: Card.theme.description
})

const actions = {}

/**
 * [Zeplin](https://app.zeplin.io/project/5d385a888b7034775ab1a026/screen/5ecbc419487aa129233e2d6e0)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Banner = (props) => {
    const {
        title,
        description,
        properties,
        actionsReference,
        eventsActions,
        structurePosition
    } = props
    const { level, imagePath, imageName, mobileImageName } = properties
    const { items = [] } = actionsReference
    const isBody = structurePosition === 'body'

    const [src, srcSet, mobileSrcSet] = useMemo(() => {
        const path = imagePath || PATH
        const imageSrc = `${path}${imageName}.png`
        const regularSet = `${path}${imageName}_2x.png 2x`
        const mobileSet =
            mobileImageName &&
            `${path}${mobileImageName}.png 1x, ${path}${mobileImageName}_2x.png 2x`

        return [imageSrc, regularSet, mobileSet]
    }, [imagePath, imageName, mobileImageName])

    return (
        <DefaultWidgetWrapper colorScheme={isBody ? 'common' : 'plate-self'}>
            <Card
                theme={cardTheme}
                mode="banner"
                colorScheme={level}
                title={title}
                a11y={{ title }}
                imageSrc={src}
                srcSet={srcSet}
                mobileSrcSet={mobileSrcSet}
            >
                {description && (
                    <Markdown.Short content={description} theme={descriptionTheme} size="lg" />
                )}

                {items[0] && (
                    <BannerAction
                        {...items[0]}
                        actions={actions}
                        eventsActions={eventsActions}
                        level={level}
                    />
                )}
            </Card>
        </DefaultWidgetWrapper>
    )
}

Banner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    properties: PropTypes.shape({
        level: PropTypes.string,
        imagePath: PropTypes.string,
        imageName: PropTypes.string,
        mobileImageName: PropTypes.string,
    }),
    actionsReference: WorkflowPropTypes.Reference,
    eventsActions: PropTypes.objectOf(PropTypes.func),
    structurePosition: PropTypes.oneOf(['header', 'body', 'footer', ''])
}

Banner.defaultProps = {
    title: void 0,
    description: void 0,
    properties: {
        level: void 0,
        imagePath: void 0,
        imageName: void 0,
        mobileImageName: void 0,
    },
    actionsReference: {},
    eventsActions: {},
    structurePosition: '',
}

Banner.displayName = 'WebBanner'

const mapStateToProps = (state, props) => ({
    actionsReference: workflowSelectors.getReferenceByReferenceId(
        state,
        props.properties.actionsReferenceId
    )
})

Banner.actions = actions
Banner.extend = (customActions) => Object.assign(actions, customActions)

export default connect(mapStateToProps)(Banner)
