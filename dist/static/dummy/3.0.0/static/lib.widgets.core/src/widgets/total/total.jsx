import React from 'react'
import PropTypes from 'prop-types'
import { Currency, Labeled, Input } from '@sbol/lib.ui'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import _ from 'lodash'
import { selectors, DefaultWidgetWrapper } from '@sbol/lib.workflow'

import { fetchData, formatNumber, isValuesChanged, getDataPost } from './utils'
import style from './total.css'

const { getName, getReferenceByReferenceId } = selectors
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

export class Total extends React.PureComponent {
    static displayName = 'CoreTotal'

    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        properties: PropTypes.shape({
            measureUnit: PropTypes.string,
            referenceId: PropTypes.string,
            recalcErrorMsg: PropTypes.string,
            recalcProgressMsg: PropTypes.string,
            asideTitle: PropTypes.string,
            noCommissionAsideTitle: PropTypes.string,
            remoteLookupFieldIds: PropTypes.array,
            localLookupFieldId: PropTypes.string,
        }).isRequired,
        reference: PropTypes.shape({
            items: PropTypes.array,
            properties: PropTypes.shape({
                url: PropTypes.string,
                debounce: PropTypes.number
            })
        }),
        values: PropTypes.objectOf(PropTypes.string)
    }

    static defaultProps = {
        title: void 0,
        description: void 0,
        properties: {
            measureUnit: 'RUB',
            referenceId: void 0,
            recalcErrorMsg: void 0,
            recalcProgressMsg: void 0,
            asideTitle: void 0,
            noCommissionAsideTitle: void 0,
            remoteLookupFieldIds: [],
            localLookupFieldId: void 0
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
        const { properties: { remoteLookupFieldIds, localLookupFieldId }, values, reference } = this.props

        if (remoteLookupFieldIds) {
            this.getAmountFromServer(reference, remoteLookupFieldIds, values, false)
        } else {
            this.getAmountFromReference(values[localLookupFieldId], reference.items)
        }
    }

    componentWillReceiveProps (nextProps) {
        const { properties: { remoteLookupFieldIds = [], localLookupFieldId }, values, reference } = nextProps

        if (isValuesChanged(this.props.values, values, remoteLookupFieldIds)) {
            this.getAmountFromServer(reference, remoteLookupFieldIds, values, true)
        } else if (_.isEmpty(remoteLookupFieldIds) && isValuesChanged(this.props.values, values, [localLookupFieldId])) {
            this.getAmountFromReference(values[localLookupFieldId], reference.items)
        }
    }

    getAmountFromServer (reference, remoteLookupFieldIds, values, withDebounce) {
        if (_.isEmpty(reference)) {
            this.setError()
        } else {
            this.setLoading()
            this.dataPost = getDataPost(remoteLookupFieldIds, values)

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
                if (_.isUndefined(responseData.amount)) {
                    throw new TypeError('no data')
                }

                this.setItem(responseData.amount, responseData.commission)
            }
        } catch (error) {
            this.setError()
        }
    }

    getAmountFromReference (searchValue, referenceItems = []) {
        const item = searchValue || searchValue === '' ? _.find(referenceItems, { value: searchValue }) : referenceItems[0]

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
                    id={this.props.properties.referenceId}
                >
                    <div className={style.total}>
                        <Input.Money
                            value={String(this.state.amount)}
                            currency={this.props.properties.measureUnit}
                            id={this.props.properties.referenceId}
                            allowDecimal
                            readOnly
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
        } else if (commission === '0' && this.props.properties.noCommissionAsideTitle) {
            return this.props.properties.noCommissionAsideTitle
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
    values: getFormValues(getName(state))(state),
    reference: getReferenceByReferenceId(state, props.properties.referenceId)
})

export default connect(mapStateToProps)(Total)
