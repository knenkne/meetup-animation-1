import React from 'react'
import { Grid } from '@sbol/lib.ui/core/grid'
import cx from 'classnames'

import Phones from './phones'
import Help from './help'
import Copyright from './copyright'
import Socials from './socials'
import styles from './style.css'

Grid.defaultProps.mode = 'strict'
Grid.Cell.defaultProps.mode = 'strict'

export const Footer = () => (
    <div className={cx('scaffold__region-footer-footer', styles.footer)}>
        <Grid>
            <Grid.Cell lg={17} md={19} sm={23}>
                <Phones />
            </Grid.Cell>
            <Grid.Cell offsetLg={4} lg={8} md={7} sm={23}>
                <Socials />
                <Help />
            </Grid.Cell>
            <Grid.Cell lg={23} md={19} sm={23}>
                <Copyright />
            </Grid.Cell>
        </Grid>
    </div>
)
