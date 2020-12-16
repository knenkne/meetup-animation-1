import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import { Field } from '@sbol/lib.app'
import { Labeled, Input } from '@sbol/lib.ui'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

import { isValidAccount } from './utils/is-valid-account'
import { isValidBik } from './utils/is-valid-bik'
import style from './account.css'

const MaskedComponent = (props) => (
    <Labeled {...props}>
        <Input.Masked inputMode="numeric" {...props} error={props.touched ? props.error : ''} />
    </Labeled>
)

const bikmask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
const accountmask = [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
const accountmasklength = 20

export class CoreAccount extends React.PureComponent {
    static propTypes = {
        fields: WorkflowPropTypes.Fields
    }

    static defaultProps = {
        fields: []
    }

    validateBik = (value) => {
        if (value.length < bikmask.length) {
            return i18next.t('lib.widgets.core:bik.error.length')
        }

        if (!isValidBik(value)) {
            return i18next.t('lib.widgets.core:bik.error.checksum')
        }

        return null
    }

    validateAccount = (value, values) => {
        const account = value.replace(/ /g, '')
        const bik = values[this.props.fields[0].id]

        if (account.length < accountmasklength) {
            return i18next.t('lib.widgets.core:account.error.length')
        }

        if (!isValidAccount(account, bik)) {
            return i18next.t('lib.widgets.core:account.error.checksum')
        }

        return null
    }

    render () {
        const { fields: [bik, account], title, description } = this.props

        return (
            <DefaultWidgetWrapper title={title} description={description}>
                <div className={style.row}>
                    <div className={style.bik}>
                        <Field
                            {...bik}
                            name={bik.id}
                            component={MaskedComponent}
                            mask={bikmask}
                            validate={this.validateBik}
                        />
                    </div>
                    <div className={style.account}>
                        <Field
                            {...account}
                            name={account.id}
                            component={MaskedComponent}
                            mask={accountmask}
                            validate={this.validateAccount}
                        />
                    </div>
                </div>
            </DefaultWidgetWrapper>
        )
    }
}


MaskedComponent.propTypes = {
    readOnly: PropTypes.bool
}

MaskedComponent.defaultProps = {
    readOnly: false,
}

MaskedComponent.displayName = 'CoreAccount'

export default CoreAccount
