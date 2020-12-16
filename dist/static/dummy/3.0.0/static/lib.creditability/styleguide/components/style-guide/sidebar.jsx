import React from 'react'
import PropTypes from 'prop-types'

import logo from '../../logo.svg'
import logoZpl from '../../zeplin.svg'
import logoBitbucket from '../../bitbucket-icon-approved.svg'

import { Version } from './version'
import style from './style.css'

export const Sidebar = ({ toc }) => (
    <div className={style.sidebar} role="navigation">
        <div className={style.fixedBlock}>
            <div className={style.fixedBlockContent}>
                <div className={style.info}>
                    <div
                        dangerouslySetInnerHTML={{ __html: logo }} // eslint-disable-line react/no-danger, comment: размещаем лого в свг
                    />
                    <Version
                        logoUrl={logoBitbucket}
                        version={process.env.VERSION}
                        name={process.env.PKG_ID}
                        link="https://sbtatlas.sigma.sbrf.ru/stash/projects/PLSBOL-APPS/repos/lib.creditability"
                    />
                    <Version
                        logoUrl={logoZpl}
                        version="3.0"
                        name="Zeplin Кредитный потенциал"
                        link="https://app.zeplin.io/project/5da992778eec204ebd9e9ef2/dashboard"
                    />
                </div>
                <div className={style.toc}>{toc}</div>
            </div>
        </div>
    </div>
)

Sidebar.propTypes = {
    toc: PropTypes.node.isRequired
}
