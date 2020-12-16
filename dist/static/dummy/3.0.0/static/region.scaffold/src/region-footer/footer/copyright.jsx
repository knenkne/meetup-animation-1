import React from 'react'
import cx from 'classnames'
import i18next from 'i18next'

const TEXT_SELECTOR = 'scaffold__region-footer-text'

export default () => (
    <React.Fragment>
        <p className={cx(TEXT_SELECTOR, 'scaffold__region-footer-margin')}>
            {i18next.t('region.scaffold:address')}
        </p>
        <p className={TEXT_SELECTOR}>
            {i18next.t('region.scaffold:license')}
        </p>
        <p className={TEXT_SELECTOR}>
            {i18next.t('region.scaffold:register')}
        </p>
        <p className={cx(TEXT_SELECTOR, 'scaffold__region-footer-margin-copyright')}>
            {i18next.t('region.scaffold:copyright')}
            <a
                href={i18next.t('region.scaffold:copyright.link')}
                rel="noopener noreferrer"
                target="_blank"
                className="scaffold__region-footer-copyright-link"
            >
                {i18next.t('region.scaffold:copyright.link.text')}
            </a>
        </p>
    </React.Fragment>
)
