import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import { getConfigValue, Link } from '@sbol/lib.app'

import { joinUrl } from '../../../utils/join-url'
import { VisualRatingBlock } from '../visual-rating-block'
import { ComponentWrapper } from '../../utils/component-wrapper'
import { VisualRatingContext } from '../full-profile/visual-rating.context'
import { checkFeature } from '../../../../utils/check-feature'
import { toggleProductRegion } from '../../utils/toggle-product-region'
import { Initials } from '../initials'

import { AvatarStyled, AvatarImgStyled } from './avatar.styles'

export const Avatar = ({ initials, href, img, size, isEmployee, isClientManager, className }) => {
    const showVisualRating = isEmployee && size === 'big' && checkFeature('AccessVisualRatingCodes')

    /* eslint-disable react/forbid-component-props, comment: TODO: перенести в styled */
    return (
        <VisualRatingContext.Consumer>
            {
                ({ handleToggleVisualRatingBlock, isVisualRatingOpened }) => (
                    <ComponentWrapper
                        as={showVisualRating ? VisualRatingBlock : 'self'}
                        isVisualRatingOpened={isVisualRatingOpened}
                        handleToggleVisualRatingBlock={handleToggleVisualRatingBlock}
                    >
                        <AvatarStyled
                            as={href ? Link : 'span'}
                            disabled={!href}
                            main={size === 'big' ? 1 : 0}
                            isVisualRatingOpened={isVisualRatingOpened}
                            className={className}
                            href={href}
                            onClick={href ? toggleProductRegion : void ''}
                            title={i18next.t('region.scaffold:link.profile.title')}
                            aria-label={i18next.t('region.scaffold:link.profile.title')}
                        >

                            {!img
                                ? (<Initials initials={initials} size={size} isEmployee={isEmployee} isClientManager={isClientManager} />)
                                : (<React.Fragment>
                                    <AvatarImgStyled
                                        style={{
                                            backgroundImage: `url(${joinUrl(
                                                getConfigValue('avatar.url.small', 'https://avatar.online.sberbank.ru/AVATAR/SMALL'),
                                                img
                                            )})`
                                        }}
                                    />
                                    <AvatarImgStyled
                                        style={{
                                            backgroundImage: `url(${joinUrl(
                                                getConfigValue('erib.url'),
                                                '/PhizIC/user/images/SMALL',
                                                img
                                            )})`
                                        }}
                                    />
                                </React.Fragment>)
                            }
                        </AvatarStyled>
                    </ComponentWrapper>
                )
            }
        </VisualRatingContext.Consumer>
    )
}

Avatar.propTypes = {
    href: PropTypes.string,
    initials: PropTypes.string,
    img: PropTypes.string,
    size: PropTypes.oneOf(['small', 'big']),
    isEmployee: PropTypes.bool,
    className: PropTypes.string,
    isClientManager: PropTypes.bool

}

Avatar.defaultProps = {
    href: '',
    name: '',
    icon: '',
    img: '',
    title: '',
    initials: '',
    size: 'small',
    isEmployee: false,
    handleToggleVisualRatingBlock: () => {},
    className: '',
    isClientManager: false
}
