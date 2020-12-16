import React from 'react'
import PropTypes from 'prop-types'
import { Currency, Labeled, Input } from '@sbol/lib.ui'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import _ from 'lodash'
import { selectors, DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

import { fetchData, formatNumber, isValuesChanged, getDataPost } from './utils'
import style from './total.css'

const referenceDebouncePath = ['properties', 'debounce']
const referenceUrlPath = ['properties', 'url']

const loadingState = {
    isLoading: true,
    isError: false
}

const errorState = {
    isLoading: false,
    isError: true
}

export class WebTotal extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        properties: PropTypes.shape({
            measureUnit: PropTypes.string,
            referenceId: PropTypes.string,
            recalcErrorMsg: PropTypes.string,
            recalcProgressMsg: PropTypes.string,
            asideTitle: PropTypes.string,
            noCommissionMsg: PropTypes.string,
            lookupFieldIds: PropTypes.array,
            lookupFieldId: PropTypes.string,
        }).isRequired,
        reference: WorkflowPropTypes.Reference,
        values: PropTypes.object
    }

    static defaultProps = {
        title: 'Будет списано',
        description: void '',
        properties: {
            measureUnit: 'RUB',
            referenceId: '',
            recalcErrorMsg: 'Не удалось рассчитать комиссию, комиссия будет рассчитана позже',
            recalcProgressMsg: 'Идет расчет комиссии...',
            asideTitle: 'Включая комиссию',
            noCommissionMsg: 'Комиссия не взимается',
            lookupFieldIds: [],
            lookupFieldId: ''
        },
        reference: {},
        values: {}
    }

    state = {
        amount: 0,
        commission: 0,
        isError: false,
        isLoading: false
    }

    componentWillMount () {
        if (process.env.NODE_ENV !== 'production' && !process.env.TESTING) {
            console.warn('Данный виджет WebTotal переносится в Core с правками по API. Подробнее тут: https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=140413283') // eslint-disable-line no-console, comment: deprecation warning
        }

        const { properties: { lookupFieldIds, lookupFieldId }, values, reference } = this.props

        if (lookupFieldIds) {
            this.getAmountFromServer(reference, lookupFieldIds, values, false)
        } else {
            this.getAmountFromReference(values[lookupFieldId], reference.items)
        }
    }

    componentWillReceiveProps (nextProps) {
        const { properties: { lookupFieldIds = [], lookupFieldId }, values, reference } = nextProps

        if (isValuesChanged(this.props.values, values, lookupFieldIds)) {
            this.getAmountFromServer(reference, lookupFieldIds, values, true)
        } else if (_.isEmpty(lookupFieldIds) && isValuesChanged(this.props.values, values, [lookupFieldId])) {
            this.getAmountFromReference(values[lookupFieldId], reference.items)
        }
    }

    getAmountFromServer (reference, lookupFieldIds, values, withDebounce) {
        if (_.isEmpty(reference)) {
            this.setError()
        } else {
            this.setLoading()
            this.dataPost = getDataPost(lookupFieldIds, values)

            if (withDebounce) {
                this.getResponseWithDebounce(reference, this.dataPost)
            } else {
                this.getResponse(reference, this.dataPost)
            }
        }
    }

    async getResponse (reference, dataPost) {
        try {
            const response = await fetchData(_.get(reference, referenceUrlPath), dataPost)
            const responseData = _.get(response, 'data', null)

            if (this.dataPost === dataPost) {
                this.setItem(responseData.amount, responseData.commission)
            }
        } catch (error) {
            this.setError()

            throw new Error(error)
        }
    }

    getAmountFromReference (searchValue, referenceItems = []) {
        const item = searchValue ? _.find(referenceItems, { value: searchValue }) : referenceItems[0]

        if (item) {
            this.setItem(item.title, item.properties.commissionAmount)
        } else {
            this.setError()
        }
    }

    setLoading = () => {
        this.setState(loadingState)
    }

    setError = () => {
        this.setState(errorState)
    }

    setItem = (amount, commission) => {
        this.setState({
            isLoading: false,
            isError: false,
            amount,
            commission
        })
    }

    getResponseWithDebounce = _.throttle(this.getResponse, _.get(this.props.reference, referenceDebouncePath))

    render () {
        return (
            <DefaultWidgetWrapper>
                <Labeled
                    touched
                    title={this.props.title}
                    description={this.props.description}
                    error={this.state.isError ? this.props.properties.recalcErrorMsg : ''}
                    value={String(this.state.amount)}
                >
                    <div className={style.total}>
                        <Input.Money
                            value={String(this.state.amount)}
                            readonly
                            currency={this.props.properties.measureUnit}
                        />
                        {!this.state.isError &&
                        <div className={style.commission}>
                            {this.renderMessage()}
                        </div>
                        }
                    </div>
                </Labeled>
            </DefaultWidgetWrapper>
        )
    }

    renderMessage () {
        const commission = formatNumber(this.state.commission)

        if (this.state.isLoading) {
            return this.props.properties.recalcProgressMsg
        } else if (commission === '0' && this.props.properties.noCommissionMsg) {
            return this.props.properties.noCommissionMsg
        }

        return (
            <React.Fragment>
                {this.props.properties.asideTitle}
                &nbsp;
                {commission}
                &nbsp;
                <Currency title={this.props.properties.measureUnit} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    values: getFormValues(selectors.getName(state))(state),
    reference: selectors.getReferenceByReferenceId(state, props.properties.referenceId)
})

const totalConnector = connect(mapStateToProps)

export default totalConnector(WebTotal)
