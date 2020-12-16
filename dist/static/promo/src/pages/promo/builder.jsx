import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import i18next from 'i18next'
import _ from 'lodash'
import { Markdown, FullWidth, Link } from '@sbol/lib.ui'
import { getConfigValue } from '@sbol/lib.app'

import appstore from './appstore.svg'
import playstore from './playstore.svg'
import style from './builder.css'

const mdTheme = { container: classnames(Markdown.theme.container, style.markdown) }

const getQrTitle = _.memoize((id) => ({
    'qr-google-play': playstore,
    'qr-app-store': appstore
}[id]))

export const Builder = ({
    role,
    actionType,
    text,
    style: {
        id = 'primitive'
    } = {},
    components = [],
    url,
    linkQr,
    link,
    external,
    multipleQr
}) => {
    switch (role) {
        case 'button': {
            if (actionType === 'qrCode' && linkQr) {
                if (getConfigValue('isSbolPro')) {
                    return (
                        <div
                            className={classnames(style[id], style.qr, multipleQr && style.multiple)}
                            title={i18next.t('download.link')}
                        >
                            {multipleQr &&
                            <div className={style.qrTitle}>
                                <span dangerouslySetInnerHTML={{ __html: getQrTitle(id) }} />
                            </div>
                            }
                            <img src={linkQr} alt="" role="presentation" />
                        </div>
                    )
                }

                return (
                    <a
                        className={classnames(style[id], style.qr, multipleQr && style.multiple)}
                        href={link}
                        title={i18next.t('download.link')}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {multipleQr &&
                        <div className={style.qrTitle}>
                            <span dangerouslySetInnerHTML={{ __html: getQrTitle(id) }} />
                        </div>
                        }
                        <img src={linkQr} alt="" role="presentation" />
                    </a>
                )
            }

            if (id === 'button-transparent' && link) {
                return (
                    <div className={style[id]}>
                        <Link colorScheme="button-secondary" href={link} external={external}>
                            {text}
                        </Link>
                    </div>
                )
            }

            return null
        }
        case 'image': {
            return (
                <div className={style[id]}>
                    <img src={url} alt="" role="presentation" />
                </div>
            )
        }
        case 'text': {
            return (
                <div className={style[id]}>
                    <Markdown.Short
                        content={text}
                        theme={mdTheme}
                    />
                </div>
            )
        }
        case 'container': {
            if (id === 'promo-app-links') {
                return (
                    <FullWidth className={style.container}>
                        <FullWidth.Inner className={style[id]}>
                            {components.map((component) => (
                                <Builder
                                    {...component}
                                    key={component.id}
                                />
                            ))}
                        </FullWidth.Inner>
                    </FullWidth>
                )
            }

            return (
                <div className={classnames(style.container, style[id])}>
                    {components.map((component) => (
                        <Builder
                            {...component}
                            key={component.id}
                        />
                    ))}
                </div>
            )
        }
        default: {
            return null
        }
    }
}

Builder.propTypes = {
    role: PropTypes.string.isRequired,
    actionType: PropTypes.oneOf(['default', 'qrCode']),
    text: PropTypes.string,
    style: PropTypes.shape({ id: PropTypes.string }),
    components: PropTypes.arrayOf(PropTypes.object),
    url: PropTypes.string,
    link: PropTypes.string,
    linkQr: PropTypes.string
}

Builder.defaultProps = {
    actionType: 'default',
    text: '',
    style: {},
    components: [],
    url: void '',
    link: void '',
    linkQr: void ''
}
