import React, { useCallback } from 'react'
import { getConfigValue } from '@sbol/lib.app'
import i18next from 'i18next'

import { onDeclineThisPerfectDesign } from '../../../../analytics'

import { BannerStyled, BannerInnerStyled, BannerInfoStyled, BannerIconWrapperStyled, BannerIconStyled } from './switch-design-button.styles'

export const SwitchDesignButton = () => (
    <BannerStyled>
        <BannerInnerStyled
            href={`${getConfigValue('erib.url', '')}/PhizIC/private/switchDesignTo.do?design=1`}
            title={i18next.t('switch.design.title')}
            onClick={useCallback((e) => {
                onDeclineThisPerfectDesign()
                e.stopPropagation()
            })}
        >
            <BannerIconWrapperStyled>
                <BannerIconStyled name="icon:products/common/ic36ArrowUturnLeft" />
            </BannerIconWrapperStyled>
            <BannerInfoStyled>{i18next.t('switch.design.title')}</BannerInfoStyled>
        </BannerInnerStyled>
    </BannerStyled>
)
