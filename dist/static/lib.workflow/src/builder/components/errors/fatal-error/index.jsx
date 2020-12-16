import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { TechnicalError, Link, Grid, Markdown, Button } from '@sbol/lib.ui'
import { Link as AppLink, getConfigValue, NetworkError } from '@sbol/lib.app'
import { connect } from 'react-redux'
import i18next from 'i18next'

import { selectors } from '../../../../adapter'

import styles from './styles.css'

const descriptionTheme = {
    ...Markdown.theme,
    container: classnames(Markdown.theme.container, styles.markdown)
}

const reload = () => window.location.reload()

const getImageNameSuffix = () => {
    const ratio = window.devicePixelRatio
    if (ratio >= 2 && ratio < 3) {
        return '@2x'
    }
    return ratio >= 3 ? '@3x' : ''
}

const FatalError = ({ title, text }) => {
    const errorImageUrl = `${
        getConfigValue('res.url')
    }/common/${
        getConfigValue('common.version')
    }/img/errors/error${
        getImageNameSuffix()
    }.png`

    if (!window.navigator.onLine) {
        return (
            <Grid>
                <Grid.Cell lg={29} md={19} sm={23}>
                    <NetworkError />
                </Grid.Cell>
            </Grid>
        )
    }

    return (
        <Grid>
            <Grid.Cell lg={29} md={19} sm={23}>
                <TechnicalError
                    title={title || i18next.t('lib.workflow:error')}
                    imageSrc={errorImageUrl}
                >
                    <div className={styles.notification}>
                        <Markdown.Short
                            theme={descriptionTheme}
                            content={text}
                            size="lg"
                        />
                        <div className={styles.backward}>
                            <Link
                                as={AppLink}
                                external={false}
                                href={AppLink.createUrl('index')}
                                colorScheme="button"
                            >
                                <span className={styles.link}>{i18next.t('lib.workflow:backward')}</span>
                            </Link>
                        </div>
                    </div>
                </TechnicalError>
            </Grid.Cell>
        </Grid>
    )
}

FatalError.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

const mapStateToProps = (state) => selectors.getError(state)

export default connect(mapStateToProps)(FatalError)
