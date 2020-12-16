import React from 'react'
import i18next from 'i18next'
import { Link } from '@sbol/lib.app'
import { Link as UILink } from '@sbol/lib.ui/core/link'

export default () => Link.createUrl('payments.tariffs') ? (
    <React.Fragment>
        <p className="scaffold__region-footer-help-links">
            <span className="scaffold__region-footer-help-link-wrapper">
                <UILink
                    as={Link}
                    href={Link.createUrl('payments.tariffs')}
                    external={false}
                >
                    {i18next.t('region.scaffold:tariffs')}
                </UILink>
            </span>
        </p>
    </React.Fragment>
) : null
