import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'

import operationIcons from '../../../../../../assets/operation-icons'

import style from './merchant-icon.css'

export class MerchantIcon extends PureComponent {
    static propTypes = {
        icon: PropTypes.shape({
            default: PropTypes.string,
            external: PropTypes.string
        }).isRequired
    }

    static defaultProps = {
        icon: void 0
    }

    state = { loadFromStaticResource: Boolean(this.props.icon.external) }

    handleErrorLoadImg = () => {
        this.setState({ loadFromStaticResource: false })
    }

    render () {
        const iconURL = this.props.icon.external ? this.props.icon.external : ''
        const defaultIcon = operationIcons[this.props.icon.default] || operationIcons.sbol
        return (
            <div className={style.icon}>
                {this.state.loadFromStaticResource ?
                    <img
                        src={iconURL}
                        className={style.merchantImage}
                        alt={i18next.t('operations.merchants.logos.caption')}
                        onError={this.handleErrorLoadImg}
                    /> :
                    <span className={style.merchantIcon} dangerouslySetInnerHTML={{ __html: defaultIcon }} />
                }
            </div>
        )
    }
}
