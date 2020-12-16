import React from 'react'
import _ from 'lodash'
import i18next from 'i18next'
import PropTypes from 'prop-types'
import { LocalPhone } from '@sbol/lib.ui/core/input/phone'
import { getFeatureOption } from '@sbol/lib.app'

import { ManagerContactStyled } from './personal-manager.styles'

export const ManagerPhone = ({ phone, premier }) => {

    const formatPhone = _.memoize((number) => {
        let phoneNumber = number
        if (typeof number !== 'string') {
            phoneNumber = `+${number}`
        }
        return LocalPhone.getFormattedValue(phoneNumber)
    })

    if (premier && getFeatureOption('ShowClientManagerInfo', 'premierPhone')) {
        return (
            <ManagerContactStyled href={`tel:${getFeatureOption('ShowClientManagerInfo', 'premierPhone')}`}>
                {`${i18next.t('personal.manager.short.phone.caption')} ${getFeatureOption('ShowClientManagerInfo', 'premierPhone')}`}
            </ManagerContactStyled>
        )
    }

    return (
        <ManagerContactStyled href={`tel:${phone}`}>{formatPhone(phone)}</ManagerContactStyled>
    )
}

ManagerPhone.defaultProps = {
    phone: '',
    premier: ''
}

ManagerPhone.propTypes = {
    phone: PropTypes.string,
    premier: PropTypes.string
}
