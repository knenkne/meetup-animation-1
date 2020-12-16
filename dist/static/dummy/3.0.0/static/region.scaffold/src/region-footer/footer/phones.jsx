import React from 'react'
import cx from 'classnames'
import i18next from 'i18next'
import { Grid } from '@sbol/lib.ui/core/grid'

export default () => (
    <Grid>
        <Grid.Cell lg={6} md={9} sm={20}>
            <a
                className="scaffold__region-footer-phone"
                href={`tel:${i18next.t('region.scaffold:phone.link')}`}
            >
                {i18next.t('region.scaffold:phone')}
            </a>
            <p className="scaffold__region-footer-description">{i18next.t('region.scaffold:phone.description')}</p>
        </Grid.Cell>
        <Grid.Cell offsetLg={4} offsetMd={1} lg={7} md={9} sm={20}>
            <a
                className={cx('scaffold__region-footer-phone', 'scaffold__region-footer-phone-free')}
                href={`tel:${i18next.t('region.scaffold:mobile.phone')}`}
            >
                {i18next.t('region.scaffold:mobile.phone')}
            </a>
            <p className="scaffold__region-footer-description">{i18next.t('region.scaffold:mobile.phone.description')}</p>
        </Grid.Cell>
    </Grid>
)
