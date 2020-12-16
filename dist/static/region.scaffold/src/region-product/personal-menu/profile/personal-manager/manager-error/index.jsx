import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Icon } from '@sbol/lib.ui/core/icon'
import i18next from 'i18next'

import { fetchManager } from '../../../../__data__/actions/init/profile'

import { RefetchTextStyled, RefetchStyled, ErrorStyled, ErrorTextStyled } from './manager-error.styles'


export const PersonalManagerErrorComponent = ({ refetchManager }) => (
    <Fragment>
        <ErrorStyled>
            <ErrorTextStyled>
                {i18next.t('personal.manager.error')}
            </ErrorTextStyled>
            <Icon name="icon:core/common/alertError" size="self" />
        </ErrorStyled>
        <RefetchStyled onClick={refetchManager}>
            <Icon name="icon:core/product-status/repeat" size="self" />
            <RefetchTextStyled>
                {i18next.t('personal.manager.refetch.text')}
            </RefetchTextStyled>
        </RefetchStyled>
    </Fragment>
)

const mapDispatchToProps = (dispatch) => ({
    refetchManager: () => {
        dispatch(fetchManager())
    }
})

PersonalManagerErrorComponent.defaultProps = {
    refetchManager: () => {}
}

PersonalManagerErrorComponent.propTypes = {
    refetchManager: PropTypes.func
}

export const PersonalManagerError = connect(null, mapDispatchToProps)(PersonalManagerErrorComponent)
