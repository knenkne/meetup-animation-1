import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { Markdown, Icon } from '@sbol/lib.ui'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

import { SummaryTitle } from '../../components/summary-title'

import { SummaryItem } from './summary-item'
import { getProductReferences } from './selectors'
import { getValue } from './utils'
import style from './style.css'

const descriptionTheme = {
    ...Markdown.theme,
    container: classnames(Markdown.theme.container, style.markdown)
}

export class ProductDescription extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        properties: PropTypes.shape({
            productImgType: PropTypes.string,
            productImgSrc: PropTypes.string,
            productCode: PropTypes.string,
            /* Дополнительная кастомизация */
            productImgRoot: PropTypes.string,
            divider: PropTypes.bool,
            collapsed: PropTypes.bool,
            imageFocus: PropTypes.bool
        }),
        productReferences: WorkflowPropTypes.Reference,
        getValue: PropTypes.func,
        colorScheme: PropTypes.string
    }
    static defaultProps = {
        title: '',
        description: '',
        properties: {
            productImgType: void '',
            productImgSrc: void '',
            productImgRoot: void '',
            productCode: void '',

            divider: false,
            collapsed: void '',
            imageFocus: false
        },
        productReferences: {},
        colorScheme: 'plate-self',
        getValue
    }
    static displayName = 'WebProductDescription'
    static theme = style

    state = {
        collapsed: this.props.properties.collapsed
    }

    handleToggleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }


    render () {
        const {
            props: {
                title,
                colorScheme,
                description,
                getValue,
                properties: {
                    productImgType,
                    productImgSrc,
                    productImgRoot = '',
                    productCode = '',

                    divider,
                    collapsed,
                    imageFocus
                },
                productReferences
            }
        } = this

        const img = productImgType && (
            <div className={style.imageWrapper}>
                {productImgType === 'code' ? (
                    <Icon
                        name={productImgSrc}
                        theme={{ icon: classnames(Icon.theme.icon, style.icon) }}
                    />
                ) : (
                    <img className={style.image} src={`${productImgRoot}${productImgSrc}`} alt={productCode} role="presentation" />
                )}
            </div>
        )

        const collapsable = !imageFocus && !_.isUndefined(collapsed)

        return (
            <DefaultWidgetWrapper colorScheme={colorScheme}>
                <div
                    className={classnames(
                        style.widget,
                        imageFocus ? style.column : style.row,
                        !imageFocus && divider && style.withDivider,
                        Boolean(description) && style.withDescription
                    )}
                >
                    <div className={style.head}>
                        <div className={style.headline}>
                            <div className={style.title}>
                                {!imageFocus && img}
                                <SummaryTitle
                                    title={title}
                                    collapsed={this.state.collapsed}
                                    onToggleCollapse={this.handleToggleCollapse}
                                    collapsable={collapsable}
                                />
                            </div>
                            {!this.state.collapsed && !_.isEmpty(productReferences) && !imageFocus && divider &&
                            <div className={style.divider} />
                            }
                            {!this.state.collapsed && description &&
                            <div className={style.description}>
                                <Markdown.Short
                                    theme={descriptionTheme}
                                    content={description}
                                    size="lg"
                                />
                            </div>
                            }
                        </div>
                        {imageFocus && img}
                    </div>
                    {!this.state.collapsed && !_.isEmpty(productReferences) &&
                    <React.Fragment>
                        {productReferences.items.length &&
                        <div className={style.references}>
                            {productReferences.items.map((item) => (
                                <SummaryItem
                                    key={item.value}
                                    item={item}
                                    getValue={getValue}
                                />
                            ))}
                        </div>
                        }
                    </React.Fragment>
                    }
                </div>
            </DefaultWidgetWrapper>
        )
    }
}

const mapStateToProps = (state, props) => ({
    productReferences: getProductReferences(state, props.properties.productFeaturesReferenceId)
})
export default connect(mapStateToProps)(ProductDescription)
