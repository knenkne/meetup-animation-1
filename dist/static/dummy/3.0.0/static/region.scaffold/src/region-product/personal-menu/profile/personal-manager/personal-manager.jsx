import React, { useState, useCallback } from 'react'
import { PropTypes } from 'prop-types'

import { isStatusError } from '../../utils/helpers'
import { setToStorage, getFromStorage } from '../../utils/storage'

import {
    ManagerWrapperStyled
} from './personal-manager.styles'
import { PersonalManagerCard } from './personal-manager-card'

const NOT_SELECTED = -1

export const PersonalManagerComponent = ({ managerStatus, managerList, managerType }) => {

    const [activeId, setActiveId] = useState(getFromStorage('manageActiveId', 0))

    const handleActiveIdChange = useCallback((count) => {
        const resId = count === activeId ? NOT_SELECTED : count
        setToStorage('manageActiveId', resId)
        return setActiveId(resId)
    })

    // todo: После раскатки sb1 откатить как было
    if (isStatusError(managerStatus)) {
        return null
    }

    return (
        <ManagerWrapperStyled>
            {
                managerList.map((manager, i) => (
                    <PersonalManagerCard
                        key={manager.phone}
                        count={i}
                        isOpened={i === Number(activeId)}
                        manager={manager}
                        managerStatus={managerStatus}
                        managerType={managerType}
                        handleActiveIdChange={handleActiveIdChange}
                    />
                ))
            }
        </ManagerWrapperStyled>
    )
}

PersonalManagerComponent.defaultProps = {
    managerStatus: '',
    managerList: [],
    managerType: ''
}

PersonalManagerComponent.propTypes = {
    managerStatus: PropTypes.string,
    managerList: PropTypes.array,
    managerType: PropTypes.string
}
