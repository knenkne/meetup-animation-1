import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'
import { Link } from '@sbol/lib.app'

import { isEmployeeProfile, isTrue } from '../../utils/helpers'
import { toggleProductRegion } from '../../utils/toggle-product-region'
import { PersonalManager } from '../personal-manager'
import { checkFeature } from '../../../../utils/check-feature'
import { ProfileStyled, ProfileInfoStyled, ProfileDescriptionStyled, ProfileHeaderStyled, ProfileRoleStyled } from '../profile.styles'
import { ProfileName } from '../profile-name'

import { SbolProProfile } from './sbol-pro-profile'
import { ClientProfile } from './client-profile'
import { VisualRatingContext } from './visual-rating.context'

export class FullProfile extends Component {

    state = {
        isVisualRatingOpened: false
    }
    handleToggleVisualRatingBlock = () => this.setState({ isVisualRatingOpened: !this.state.isVisualRatingOpened })

    render () {
        const {
            links: { settings, user, employee, notifications },
            role,
            href,
            description,
            name,
            type,
            hasClientManager,
            isSbolPro
        } = this.props

        const {
            isVisualRatingOpened
        } = this.state

        return (
            <ProfileStyled isVisualRatingOpened={isVisualRatingOpened}>
                <ProfileHeaderStyled>
                    {isSbolPro && isEmployeeProfile(type)
                        ? (
                            <VisualRatingContext.Provider
                                value={{
                                    handleToggleVisualRatingBlock: this.handleToggleVisualRatingBlock,
                                    isVisualRatingOpened
                                }}
                            >
                                <SbolProProfile
                                    user={user}
                                    employee={employee}
                                    notifications={notifications}
                                />
                            </VisualRatingContext.Provider>
                        ) : (
                            <ClientProfile
                                user={user}
                                settings={settings}
                                notifications={notifications}
                            />
                        )}
                </ProfileHeaderStyled>
                <ProfileInfoStyled>
                    {role && (
                        <ProfileRoleStyled>
                            {i18next.t(role)}
                        </ProfileRoleStyled>
                    )}
                    <ProfileName href={href} name={name} />
                    <ProfileDescriptionStyled
                        href={href}
                        disabled={!href}
                        as={href ? Link : 'div'}
                        onClick={href ? toggleProductRegion : void ''}
                    >
                        {i18next.t(description)}
                    </ProfileDescriptionStyled>
                </ProfileInfoStyled>
                {
                    checkFeature('ShowClientManagerInfo') && !isSbolPro && isTrue(hasClientManager) &&
                        <PersonalManager />
                }
            </ProfileStyled>
        )
    }
}

FullProfile.defaultProps = {
    description: i18next.t('region.scaffold:profile.description'),
    role: null,
    isSbolPro: false,
    hasClientManager: false
}

FullProfile.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    role: PropTypes.string,
    href: PropTypes.string.isRequired,
    links: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    isSbolPro: PropTypes.bool,
    hasClientManager: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}
