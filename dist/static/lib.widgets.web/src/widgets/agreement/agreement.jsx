import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Tabs, Selection, Button, Input, memoizeFuncWithArgs } from '@sbol/lib.ui'
import { Field } from '@sbol/lib.app'
import { DefaultWidgetWrapper, selectors } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

import { generateUrl, fetchData } from './utils'
import { Document } from './document'
import style from './style.css'

const NEW_PAGE = 'Открыть в новой вкладке'
const NEW_PDF = 'Скачать PDF'
const NOT_ALL = 'Вы не просмотрели все дополнительные соглашения'
export const BROKEN_ERROR = 'Данные некорректны'

const ErrorHandledCheckbox = Input.inputErrorHandler(Selection.Checkbox)

export class WebAgreement extends React.PureComponent {
    static propTypes = {
        fields: WorkflowPropTypes.Fields.isRequired,
        references: WorkflowPropTypes.References.isRequired,
        // async
        fetchData: PropTypes.func,
        openNewDocument: PropTypes.func,
        pid: PropTypes.string,
        documentId: PropTypes.string
    }

    static defaultProps = {
        fetchData,
        openNewDocument: window.open,
        fields: [],
        references: null,
        pid: void 0,
        documentId: void 0
    }

    constructor (props) {
        super(props)

        const initialAgreement = _.first(this.getAgreementsList())

        this.state = { openedAgreement: initialAgreement.value }
    }

    componentWillMount () {
        const initialAgreement = _.first(this.getAgreementsList())
        this.handleLoadTab(initialAgreement.title)
    }
    getReferenceId = () => _.get(this.props.fields, ['0', 'referenceId'], '')
    getAgreementsList = () => {
        const agreements = _.get(this.props.references, [this.getReferenceId(), 'items'], [])
        if (_.isEmpty(agreements)) {
            throw new Error(BROKEN_ERROR)
        }

        return agreements
    }
    getAgreementByValue = (value) => _.find(this.getAgreementsList(), { value })
    getAgreementByTitle = (title) => _.find(this.getAgreementsList(), { title })
    getAgreementState = (agreementId) => _.get(this.state, agreementId, {})
    getUpdateReferencesSrc = (agreementId) => _.get(this.getAgreementByValue(agreementId), ['properties', 'src'])
    getUpdateReferencesFormat = (agreementId) => _.get(this.getAgreementByValue(agreementId), ['properties', 'format'])

    getAgreementValidator = (validators) => {
        if (!this.isEveryMustBeLoaded()) {
            return validators
        }

        return _.concat(this.additionalValidator, validators)
    }

    handleLoadTab = (agreementName) => {
        const agreementId = this.getAgreementByTitle(agreementName).value
        const stateForUpdate = { openedAgreement: agreementId }

        const currentAgreement = this.getAgreementState(agreementId)
        const currentFormat = this.getUpdateReferencesFormat(agreementId)

        if (currentFormat === 'pdf' && _.isEmpty(currentAgreement)) {
            stateForUpdate[agreementId] = { loading: false }
        } else if (currentFormat !== 'pdf' && !currentAgreement.agreement && !currentAgreement.loading) {
            stateForUpdate[agreementId] = { loading: true }
            this.makeRequest(agreementId)
        }
        this.setState(stateForUpdate)
    }

    async makeRequest (agreementId) {
        try {
            const response = await this.props.fetchData(this.getUpdateReferencesSrc(agreementId), { agreementId })
            this.setState({ [agreementId]: { loading: false, agreement: _.get(response, 'data.agreement', null) } })
        } catch (error) {
            this.setState({ [agreementId]: { loading: false } })
            throw new Error(error)
        }
    }

    additionalValidator = () => {
        if (this.getAgreementsList().length >= _.keys(this.state).length) {
            return NOT_ALL
        }

        return ''
    }

    isEveryMustBeLoaded = () => _.get(this.props.references, `${this.getReferenceId()}.properties.requireVisitAll`, true)

    render () {
        const { fields: [agreement], pid, documentId, title, description } = this.props
        const { openedAgreement: agreementId } = this.state

        const docs = this.getAgreementsList()
        const format = this.getUpdateReferencesFormat(agreementId)
        const src = this.getUpdateReferencesSrc(agreementId)
        const urlForView = generateUrl(src, { agreementId, pid, documentId })
        const urlForDownload = generateUrl(src, { agreementId, pid, documentId, dl: '1' })
        const currentAgreement = this.getAgreementState(agreementId)

        return (
            <DefaultWidgetWrapper title={title} description={description}>
                {docs.length > 1 ?
                    <Tabs initialValue={docs[0].title} onChange={this.handleLoadTab}>
                        {_.map(docs, (doc) => (
                            <Tabs.Tab title={doc.title} key={doc.value}>
                                <Document
                                    loading={currentAgreement.loading}
                                    document={currentAgreement.agreement}
                                    url={urlForView}
                                />
                            </Tabs.Tab>
                        ))}
                    </Tabs> :
                    <Document
                        loading={currentAgreement.loading}
                        document={currentAgreement.agreement}
                        url={urlForView}
                    />
                }
                {format === 'pdf' &&
                <div className={style.buttons}>
                    <div className={style.buttonsOpen}>
                        <Button
                            type="button"
                            onClick={memoizeFuncWithArgs(this.props.openNewDocument, urlForView)}
                            title={NEW_PAGE}
                            data-node="agreement:open"
                            icon="open"
                            colorScheme="secondary"
                        />
                    </div>
                    <div className={style.buttonsDownload}>
                        <Button
                            type="button"
                            onClick={memoizeFuncWithArgs(this.props.openNewDocument, urlForDownload)}
                            title={NEW_PDF}
                            data-node="agreement:download"
                            icon="download"
                            colorScheme="secondary"
                        />
                    </div>
                </div>
                }
                <div className={style.checkboxWrapper}>
                    <Field
                        id={agreement.id}
                        name={agreement.id}
                        component={ErrorHandledCheckbox}
                        type="checkbox"
                        validate={this.getAgreementValidator(agreement.validators)}
                        disabled={agreement.readonly}
                        data-node="agreement:checkbox"
                    >
                        {agreement.title}
                    </Field>
                </div>
            </DefaultWidgetWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    pid: selectors.getPid(state),
    documentId: selectors.getDocumentId(state)
})

export default connect(mapStateToProps)(WebAgreement)
