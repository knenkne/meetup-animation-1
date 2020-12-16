import React, { useCallback } from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { Collapse } from '../../collapse'
import { StatusRegion } from '../../status-region'
import { isStatusError, isStatusLoading } from '../../utils/helpers'
import { LoaderDots } from '../../loader'
import { ContentRow } from '../../partials/content-row'
import { isPremier } from '../../../__data__/selectors/profile/manager'

import { PersonalManagerError } from './manager-error'
import { ManagerMail } from './manager-mail'
import { ManagerPhone } from './manager-phone'
import {
    ManagerContactsBlockStyled,
    PersonalManagerCardStyled,
    ManageHeaderInnerStyled,
    ManagerContainerStyled,
    ManagerHeaderStyled,
    ManagerStyled
} from './personal-manager.styles'

export const PersonalManagerCard = ({ count, manager, managerStatus, managerType, isOpened, handleActiveIdChange }) => {
    // todo: add [count]
    const handleClick = useCallback(() => {
        handleActiveIdChange(count)
    })

    const {
        phone,
        managerPosition,
        name,
        email
    } = manager

    return (
        <PersonalManagerCardStyled key={phone} isClosed={!isOpened}>
            <ManagerHeaderStyled
                isClosed={!isOpened}
            >
                <ManageHeaderInnerStyled
                    onClick={handleClick}
                >
                    {i18next.t(managerPosition || 'personal.manager.title')}
                </ManageHeaderInnerStyled>
            </ManagerHeaderStyled>
            <Collapse
                isOpened={isOpened}
            >
                <ManagerContainerStyled>
                    <StatusRegion
                        error={isStatusError(managerStatus)}
                        loading={isStatusLoading(managerStatus)}
                        loaderComponent={LoaderDots}
                        errorComponent={PersonalManagerError}
                    >
                        <ManagerStyled>
                            <ContentRow main>
                                {name}
                            </ContentRow>
                        </ManagerStyled>
                        <ManagerContactsBlockStyled>
                            <ManagerPhone phone={phone} premier={isPremier(managerType)} />
                            <ManagerMail mail={email} />
                        </ManagerContactsBlockStyled>
                    </StatusRegion>
                </ManagerContainerStyled>
            </Collapse>
        </PersonalManagerCardStyled>
    )
}

PersonalManagerCard.defaultProps = {
    count: 0,
    manager: {},
    managerStatus: '',
    managerType: '',
    isOpened: false,
    handleActiveIdChange: () => {},
    phone: '',
    managerPosition: '',
    name: '',
    email: ''
}

PersonalManagerCard.propTypes = {
    count: PropTypes.number,
    manager: PropTypes.object,
    managerStatus: PropTypes.string,
    managerType: PropTypes.string,
    isOpened: PropTypes.bool,
    handleActiveIdChange: PropTypes.func,
    phone: PropTypes.string,
    managerPosition: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string
}
