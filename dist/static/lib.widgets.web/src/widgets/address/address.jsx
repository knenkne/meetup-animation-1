import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field } from '@sbol/lib.app'
import { Labeled } from '@sbol/lib.ui'
import { getFormValues } from 'redux-form'
import {
    DefaultWidgetWrapper,
    selectors
} from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

import { connectValidatorsWithCheckbox } from '../utils'

import { AddressCheckbox } from './address-checkbox'
import AddressRow from './address-row'
import {
    createQuery,
    getItems,
    getPropertiesOfCountry,
    getInitialQuery,
    isDisabledRegion,
    isDisabledDistrict,
    isDisabledSettlement,
    isDisabledStreet,
    isDisabledStreetCheckbox,
    isDisabledBuilding,
    isDisabledBuildingCheckbox,
    isDisabledQuarters,
    isDisabledQuartersCheckbox
} from './utils'
import style from './style.css'

export const getIcon = (option) => {
    if (option) {
        return `icon:core/countries/${option.value.toLowerCase()}`
    }

    return ''
}
/* eslint-disable complexity, comment: в виджете много повторяющейся логики */
export const WebAddress = (props) => {
    const {
        fields: [
            country,
            region,
            district,
            settlement,
            street,
            streetCheckbox,
            building,
            buildingCheckbox,
            quarters,
            quartersCheckbox
        ],
        properties: { suggest = [], suggestMessage },
        references,
        pid,
        values,
        title,
        description
    } = props

    const fields = {
        country,
        region,
        district,
        settlement,
        street,
        streetCheckbox,
        building,
        buildingCheckbox,
        quarters,
        quartersCheckbox
    }

    const [
        countryMode = 'on',
        regionMode = 'on',
        districtMode = 'on',
        settlementMode = 'on',
        streetMode = 'on',
        buildingMode = 'on',
        quartersMode = 'on'
    ] = suggest

    const properties = getPropertiesOfCountry(
        references,
        country.referenceId,
        values[country.id]
    )
    const suggestUrl = _.get(properties, 'suggestUrl')
    const suggestMethod = _.get(properties, 'suggestMethod')

    const debounce = _.get(properties, 'debounce')
    const timeout = _.get(properties, 'timeout')
    const limit = _.get(properties, 'limit')

    return (
        <DefaultWidgetWrapper title={title} description={description}>
            {!country.readonly && (
                <AddressRow
                    {...country}
                    data-node="country:input"
                    suggestMode={countryMode}
                    suggestMessage={suggestMessage}
                    initialQuery={getInitialQuery(references, country)}
                    fields={fields}
                    context={{ items: getItems(references, country.referenceId) }}
                    itemImgType="code"
                    filterKeys="aliases"
                />
            )}
            {!region.readonly && (
                <AddressRow
                    {...region}
                    suggestMode={regionMode}
                    suggestMessage={suggestMessage}
                    data-node="region:input"
                    initialQuery={getInitialQuery(references, region)}
                    fields={fields}
                    context={{ url: suggestUrl, method: suggestMethod }}
                    query={createQuery(
                        'region',
                        values,
                        fields,
                        pid,
                        limit
                    )}
                    disabled={isDisabledRegion(values, fields)}
                    debounce={debounce}
                    timeout={timeout}
                />
            )}
            {!district.readonly && (
                <AddressRow
                    {...district}
                    suggestMode={districtMode}
                    suggestMessage={suggestMessage}
                    data-node="district:input"
                    fields={fields}
                    initialQuery={getInitialQuery(references, district)}
                    context={{ url: suggestUrl, method: suggestMethod }}
                    query={createQuery(
                        'district',
                        values,
                        fields,
                        pid,
                        limit
                    )}
                    disabled={isDisabledDistrict(values, fields)}
                    debounce={debounce}
                    timeout={timeout}
                />
            )}
            {!settlement.readonly && (
                <AddressRow
                    {...settlement}
                    suggestMode={settlementMode}
                    suggestMessage={suggestMessage}
                    data-node="settlement:input"
                    fields={fields}
                    initialQuery={getInitialQuery(
                        references,
                        settlement
                    )}
                    context={{ url: suggestUrl, method: suggestMethod }}
                    query={createQuery(
                        'settlement',
                        values,
                        fields,
                        pid,
                        limit
                    )}
                    disabled={isDisabledSettlement(values, fields)}
                    debounce={debounce}
                    timeout={timeout}
                />
            )}
            {!street.readonly && (
                <Labeled>
                    <AddressRow
                        {...street}
                        suggestMode={streetMode}
                        suggestMessage={suggestMessage}
                        data-node="street:input"
                        fields={fields}
                        initialQuery={getInitialQuery(references, street)}
                        context={{ url: suggestUrl, method: suggestMethod }}
                        query={createQuery(
                            'street',
                            values,
                            fields,
                            pid,
                            limit
                        )}
                        disabled={isDisabledStreet(values, fields)}
                        debounce={debounce}
                        timeout={timeout}
                        validators={connectValidatorsWithCheckbox(
                            street.validators,
                            streetCheckbox.id
                        )}
                    >
                        {!streetCheckbox.readonly && (
                            <div className={style.checkbox}>
                                <Field
                                    id={streetCheckbox.id}
                                    name={streetCheckbox.id}
                                    component={AddressCheckbox}
                                    validate={streetCheckbox.validators}
                                    disabled={isDisabledStreetCheckbox(
                                        values,
                                        fields
                                    )}
                                    data-node="street:checkbox"
                                    context="street"
                                    fields={fields}
                                    type="checkbox"
                                >
                                    {streetCheckbox.title}
                                </Field>
                            </div>
                        )}
                    </AddressRow>
                </Labeled>
            )}
            <Labeled>
                <div className={style.row}>
                    <div className={style.halfWidth}>
                        {!building.readonly && (
                            <AddressRow
                                {...building}
                                suggestMode={buildingMode}
                                suggestMessage={suggestMessage}
                                data-node="building:input"
                                fields={fields}
                                initialQuery={getInitialQuery(references, building)}
                                size="sm"
                                context={{ url: suggestUrl, method: suggestMethod }}
                                query={createQuery(
                                    'building',
                                    values,
                                    fields,
                                    pid,
                                    limit
                                )}
                                disabled={isDisabledBuilding(values, fields)}
                                debounce={debounce}
                                timeout={timeout}
                                validators={connectValidatorsWithCheckbox(
                                    building.validators,
                                    buildingCheckbox.id
                                )}
                            >
                                {!buildingCheckbox.readonly && (
                                    <div className={style.checkbox}>
                                        <Field
                                            id={buildingCheckbox.id}
                                            name={buildingCheckbox.id}
                                            component={AddressCheckbox}
                                            validate={buildingCheckbox.validators}
                                            disabled={isDisabledBuildingCheckbox(
                                                values,
                                                fields
                                            )}
                                            data-node="building:checkbox"
                                            context="building"
                                            fields={fields}
                                            type="checkbox"
                                        >
                                            {buildingCheckbox.title}
                                        </Field>
                                    </div>
                                )}
                            </AddressRow>
                        )}
                    </div>
                    <div className={style.halfWidth}>
                        {!quarters.readonly && (
                            <AddressRow
                                {...quarters}
                                suggestMode={quartersMode}
                                suggestMessage={suggestMessage}
                                data-node="quarters:input"
                                fields={fields}
                                initialQuery={getInitialQuery(references, quarters)}
                                size="sm"
                                context={{ url: suggestUrl, method: suggestMethod }}
                                query={createQuery(
                                    'quarters',
                                    values,
                                    fields,
                                    pid,
                                    limit
                                )}
                                disabled={isDisabledQuarters(values, fields)}
                                debounce={debounce}
                                timeout={timeout}
                                validators={connectValidatorsWithCheckbox(
                                    quarters.validators,
                                    quartersCheckbox.id
                                )}
                            >
                                {!quartersCheckbox.readonly && (
                                    <div className={style.checkbox}>
                                        <Field
                                            id={quartersCheckbox.id}
                                            name={quartersCheckbox.id}
                                            component={AddressCheckbox}
                                            validate={quartersCheckbox.validators}
                                            disabled={isDisabledQuartersCheckbox(
                                                values,
                                                fields
                                            )}
                                            data-node="quarters:checkbox"
                                            context="quarters"
                                            fields={fields}
                                            type="checkbox"
                                        >
                                            {quartersCheckbox.title}
                                        </Field>
                                    </div>
                                )}
                            </AddressRow>
                        )}
                    </div>
                </div>
            </Labeled>
        </DefaultWidgetWrapper>
    )
}

WebAddress.propTypes = {
    fields: WorkflowPropTypes.Fields.isRequired,
    properties: PropTypes.shape({
        suggest: PropTypes.array,
        suggestMessage: PropTypes.string
    }),
    loadIcons: PropTypes.func,
    references: WorkflowPropTypes.References.isRequired,
    values: PropTypes.object,
    pid: PropTypes.string.isRequired
}

WebAddress.defaultProps = {
    values: {},
    properties: {},
    loadIcons: _.noop,
}

const mapStateToProps = (state) => ({
    pid: selectors.getPid(state),
    values: getFormValues(selectors.getName(state))(state)
})

const ConnectedAddress = connect(mapStateToProps)(WebAddress)

export default ConnectedAddress
