/* eslint-disable react/no-danger, comment: Иконка для шапки */
import React, { useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import { Link, getConfigValue, getBroker, Region } from '@sbol/lib.app'
import { Grid } from '@sbol/lib.ui/core/grid'
import classnames from 'classnames'
import _ from 'lodash'

import { plUrl } from '../utils'
import { useErib } from '../utils/custom-hooks'
import { getLogoutApiUrl } from '../../utils/logout'

import { Menu } from './menu'
import { Notifications } from './notifications'
import logoIcon from './assets/logo.svg'
import exitIcon from './assets/exit.svg'
import rightMenuIcon from './assets/right-menu.svg'
import searchIcon from './assets/search.svg'

const baseClientUrl = getConfigValue('base.client.url', '/sbtsbol/private')
const calcPlUrl = (path) => {
    if (plUrl) {
        return `${plUrl}${baseClientUrl}${path}`
    }

    return path
}

const broker = getBroker()
const openRegionProduct = () => broker.publish('REGION.PRODUCT:V1:MOBILE.OPEN')
const searchFocus = () => document.getElementById('global-search')?.focus()

const THROTTLE_TIMEOUT = 100
const ERIB_MARGIN_LEFT = 560

// TODO: переделать иконки на IconLoader

export const Header = ({ skeleton }) => {
    const isErib = useErib()
    const headerBlock = useRef(null)

    useEffect(() => {
        // Центрируем верхнее меню для mobile
        const changeHeader = _.throttle(() => {
            if (isErib && headerBlock.current) {
                const { clientWidth, scrollWidth } = document.documentElement
                const { pageXOffset } = window
                const blockStyle = headerBlock.current.style

                blockStyle.left = `${pageXOffset + ERIB_MARGIN_LEFT}px`
                blockStyle.right = `${scrollWidth - pageXOffset - clientWidth}px`
            }
        }, THROTTLE_TIMEOUT)

        changeHeader()
        window.addEventListener('scroll', changeHeader, false)
        window.addEventListener('resize', changeHeader, false)

        return () => {
            window.removeEventListener('scroll', changeHeader, false)
            window.removeEventListener('resize', changeHeader, false)
        }
    })

    const setLoader = useCallback(() => <div dangerouslySetInnerHTML={{ __html: skeleton }} />)

    return (
        <div className="scaffold__region-header-header-wrapper">
            <Grid>
                <Grid.Cell lg={29} md={19} sm={23}>
                    <div
                        ref={headerBlock}
                        className={classnames(
                            'scaffold__region-header-background-block',
                            isErib && 'scaffold__region-header-erib-background-block'
                        )}
                    >
                        <div
                            className={classnames(
                                'scaffold__region-header-header',
                                isErib && 'scaffold__region-header-erib-header'
                            )}
                        >
                            <Link
                                href={Link.createUrl('index') || calcPlUrl('/main')}
                                title={i18next.t('region.scaffold:logo.title')}
                                aria-label={i18next.t('region.scaffold:logo.title')}
                                className="scaffold__region-header-logo"
                                dangerouslySetInnerHTML={{ __html: logoIcon }}
                            />
                            <Menu />
                            <a
                                className="scaffold__region-header-login"
                                href={getLogoutApiUrl()}
                                title={i18next.t('region.scaffold:exit')}
                                aria-label={i18next.t('region.scaffold:exit')}
                                dangerouslySetInnerHTML={{ __html: exitIcon }}
                            />
                            <button
                                title={i18next.t('region.scaffold:topmenu')}
                                onClick={openRegionProduct}
                                className="scaffold__region-header-right-side-opener"
                                dangerouslySetInnerHTML={{ __html: rightMenuIcon }}
                            />
                            <button
                                onClick={searchFocus}
                                className="scaffold__region-header-search"
                                aria-label={i18next.t('region.scaffold:search.placeholder')}
                                dangerouslySetInnerHTML={{ __html: searchIcon }}
                            />
                        </div>
                    </div>
                    <Region
                        name="region.search"
                        loader={setLoader}
                    />
                    <Notifications />
                </Grid.Cell>
            </Grid>
        </div>
    )
}

Header.propTypes = {
    skeleton: PropTypes.string.isRequired
}
