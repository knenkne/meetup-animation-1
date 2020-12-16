import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import i18next from 'i18next'

import logo from '../../logo.svg'
import ru from '../../../locales/ru.json'
import { isDemoInterface } from '../../utils'

import style from './style.css'

const innerLogo = { __html: logo }

i18next.init({
    lng: 'ru',
    keySeparator: '/',
    resources: { ru: { 'lib.widgets.web': ru } }
})

const StyleGuideRenderer = ({ toc, hasSidebar, children, homepageUrl }) => (
    <div className={classnames(style.root, style.wrapper, hasSidebar && style.hasSidebar)}>
        {hasSidebar && isDemoInterface() &&
        <div className={style.sidebar}>
            <div className={style.fixedBlock}>
                <div className={style.logo}>
                    <div
                        dangerouslySetInnerHTML={innerLogo} // eslint-disable-line react/no-danger
                    />
                    <div className={style.version}>
                        <a
                            href="https://sbtatlas.sigma.sbrf.ru/stash/projects/PLSBOL-LIBS/repos/lib.widgets.web"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {process.env.PKG_ID}
                        </a>
                        {process.env.VERSION}
                    </div>
                </div>
                <div className={style.toc}>{toc}</div>
            </div>
        </div>
        }
        <main className={style.content}>
            <div className={style.components}>
                {children}
                {isDemoInterface() &&
                <footer className={style.footer}>
                    {'Generated with '}
                    <a
                        className={style.link}
                        href={homepageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'React Styleguidist'}
                    </a>
                </footer>
                }
            </div>
        </main>
    </div>
)

StyleGuideRenderer.propTypes = {
    toc: PropTypes.node.isRequired,
    hasSidebar: PropTypes.bool,
    children: PropTypes.node.isRequired,
    homepageUrl: PropTypes.string
}

StyleGuideRenderer.defaultProps = {
    hasSidebar: false,
    homepageUrl: 'https://github.com/styleguidist/react-styleguidist'
}

export default StyleGuideRenderer
