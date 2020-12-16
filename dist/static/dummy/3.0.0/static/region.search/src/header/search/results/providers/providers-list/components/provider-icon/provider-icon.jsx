import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import _ from 'lodash'

import operationIcons from '../../../../../../assets/operation-icons'

import style from './provider-icon.css'

export class ProviderIcon extends PureComponent {
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


    baseLogoUrl = _.startsWith(this.props.icon.external, '/') ? 'https://stat.online.sberbank.ru/PhizIC-res/33.0' : ''

    render () {
        const iconURL = this.props.icon.external ? `${this.baseLogoUrl}${this.props.icon.external}` : ''
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
