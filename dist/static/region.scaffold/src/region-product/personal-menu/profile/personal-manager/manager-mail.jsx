import React from 'react'
import PropTypes from 'prop-types'

import { ManagerContactStyled } from './personal-manager.styles'

const MAX_WIDTH_SYMBOLS = 30

export const ManagerMail = ({ mail }) => {

    let formattedMail = mail

    if (mail.length > MAX_WIDTH_SYMBOLS) {
        formattedMail = mail
            .replace('@', '\n@')
    }

    return (
        <ManagerContactStyled title={mail} href={`mailto:${mail}`}>{formattedMail}</ManagerContactStyled>
    )
}

ManagerMail.defaultProps = {
    mail: ''
}

ManagerMail.propTypes = {
    mail: PropTypes.string
}
